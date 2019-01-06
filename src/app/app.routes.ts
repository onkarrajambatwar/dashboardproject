import {HomeComponent} from './pages/home/home.component';
import { AppRegistrationComponent } from './components/app-registration/app-registration.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'app-registration',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
      path: 'app-registration',
      component: AppRegistrationComponent
  },
    {
        path: 'others',
        loadChildren: './pages/others/others.module#OthersModule',
    },
];
