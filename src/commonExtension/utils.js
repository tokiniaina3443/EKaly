const jwt = require('jsonwebtoken');

function AuthenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    next();
  });
}

function GetTokenId(req, res){
    var authorization = req.headers.authorization.split(' ')[1], decoded;
    decoded = jwt.verify(authorization, process.env.TOKEN_SECRET);
    return decoded.id;
}

module.exports = { AuthenticateToken, GetTokenId };