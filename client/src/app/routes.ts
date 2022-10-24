import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClientComponent } from './client/client.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { LivreurComponent } from './livreur/livreur.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PlatComponent } from './client/plat/plat.component';
import { CommandeRespComponent } from './responsable/commande-resp/commande-resp.component';
import { GestionRespComponent } from './responsable/gestion-resp/gestion-resp.component';
import { SituationRespComponent } from './responsable/situation-resp/situation-resp.component';
import { CommandeRestauComponent } from './restaurant/commande-restau/commande-restau.component';
import { PlatRestauComponent } from './restaurant/plat-restau/plat-restau.component';
import { SituationRestauComponent } from './restaurant/situation-restau/situation-restau.component';
import { CommandeLivreurComponent } from './livreur/commande-livreur/commande-livreur.component';
import { DetailCommandeComponent } from './restaurant/commande-restau/detail-commande/detail-commande.component';
import { AuthGuard } from './auth/auth.guard';
import { AddPlatComponent } from './restaurant/add-plat/add-plat.component';

export const appRoutes: Routes = [
  {
    path: 'signup',
    component: UserComponent,
    children: [{ path: '', component: SignUpComponent }],
  },
  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }],
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'client/plat',
    component: ClientComponent,
    children: [{ path: '', component: PlatComponent }],
  },
  {
    path: 'responsable/commande',
    component: ResponsableComponent,
    children: [{ path: '', component: CommandeRespComponent }],
  },
  {
    path: 'responsable/gestion',
    component: ResponsableComponent,
    children: [{ path: '', component: GestionRespComponent }],
  },
  {
    path: 'responsable/situation',
    component: ResponsableComponent,
    children: [{ path: '', component: SituationRespComponent }],
  },
  {
    path: 'livreur/commande',
    component: LivreurComponent,
    children: [{ path: '', component: CommandeLivreurComponent }],
  },
  {
    path: 'restaurant/commande',
    component: RestaurantComponent,
    children: [{ path: '', component: CommandeRestauComponent }],
  },
  {
    path: 'commande/details',
    component: DetailCommandeComponent,
  },
  {
    path: 'restaurant/plat',
    component: RestaurantComponent,
    children: [{ path: '', component: PlatRestauComponent }],
  },
  {
    path: 'restaurant/add-plat',
    component: RestaurantComponent,
    children: [{ path: '', component: AddPlatComponent }],
  },
  {
    path: 'restaurant/situation',
    component: RestaurantComponent,
    children: [{ path: '', component: SituationRestauComponent }],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
