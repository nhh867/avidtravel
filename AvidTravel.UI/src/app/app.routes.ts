import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { DestinationComponent } from './features/destination/destination.component';
import { PromotionComponent } from './features/promotion/promotion.component';
import { SearchComponent } from './features/search/search.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'destination', component: DestinationComponent},
  { path: 'promotion', component: PromotionComponent},
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // fallback for unknown routes
];


