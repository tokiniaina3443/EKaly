// built-in
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
// routes
import { appRoutes } from './routes';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { PlatService } from './shared/plat.service';
import { CommandeService } from './shared/commande.service';
import { InfocommandeService } from './shared/infocommande.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HomepageComponent } from './homepage/homepage.component';
import { ClientComponent } from './client/client.component';
import { LivreurComponent } from './livreur/livreur.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatComponent } from './client/plat/plat.component';
import { CommandeRestauComponent } from './restaurant/commande-restau/commande-restau.component';
import { PlatRestauComponent } from './restaurant/plat-restau/plat-restau.component';
import { SituationRestauComponent } from './restaurant/situation-restau/situation-restau.component';
import { CommandeRespComponent } from './responsable/commande-resp/commande-resp.component';
import { GestionRespComponent } from './responsable/gestion-resp/gestion-resp.component';
import { SituationRespComponent } from './responsable/situation-resp/situation-resp.component';
import { CommandeLivreurComponent } from './livreur/commande-livreur/commande-livreur.component';
import { DetailCommandeComponent } from './restaurant/commande-restau/detail-commande/detail-commande.component';
import { AddPlatComponent } from './restaurant/add-plat/add-plat.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HomepageComponent,
    ClientComponent,
    LivreurComponent,
    ResponsableComponent,
    RestaurantComponent,
    PlatComponent,
    CommandeRestauComponent,
    PlatRestauComponent,
    SituationRestauComponent,
    CommandeRespComponent,
    GestionRespComponent,
    SituationRespComponent,
    CommandeLivreurComponent,
    DetailCommandeComponent,
    AddPlatComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
    UserService,
    PlatService,
    CommandeService,
    InfocommandeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
