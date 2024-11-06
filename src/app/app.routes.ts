import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
