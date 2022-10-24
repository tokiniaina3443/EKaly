const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlPlat = require('../controllers/plat.controller');
const ctrlCommande = require('../controllers/commande.controller');
const ctrlInfocommande = require('../controllers/infocommande.controller');

const jwtHelper = require('../config/jwtHelper');


module.exports = function(router) {
    router.post('/register', ctrlUser.register);
    router.post('/authenticate', ctrlUser.authenticate);
    router.get('/homeredirect',jwtHelper.verifyJwtToken, ctrlUser.infoget, ctrlUser.gotoprofil)
    router.get('/userlist',jwtHelper.verifyJwtToken, ctrlUser.userlist);
    router.get('/platlist',jwtHelper.verifyJwtToken, ctrlPlat.platlist);
    router.get('/platlistclient',jwtHelper.verifyJwtToken, ctrlPlat.platlistclient);
    router.post('/commandelistby',jwtHelper.verifyJwtToken, ctrlCommande.commandelist);
    router.post('/commandemerelist',jwtHelper.verifyJwtToken, ctrlCommande.commandemerelist);
    router.post('/commandemerelistr',jwtHelper.verifyJwtToken, ctrlCommande.commandemerelistr);
    router.get('/infocommandelist',jwtHelper.verifyJwtToken, ctrlInfocommande.infocommandelist);
    router.post('/infocommandelistbyplat',jwtHelper.verifyJwtToken, ctrlInfocommande.infocommandelistbyplat);
    router.post('/infocommandelistbyrestau',jwtHelper.verifyJwtToken, ctrlInfocommande.infocommandelistbyrestau);
    router.post('/addplat',jwtHelper.verifyJwtToken, ctrlPlat.addplat);
    router.post('/addcommande',jwtHelper.verifyJwtToken, ctrlCommande.addcommandes);
    router.post('/preparerCommande',jwtHelper.verifyJwtToken, ctrlCommande.preparerCommande);
    router.post('/livrerCommande',jwtHelper.verifyJwtToken, ctrlCommande.livrerCommande);
    router.post('/platvisible',jwtHelper.verifyJwtToken, ctrlPlat.visibilite);

    return router; // Return the router object to server
};
