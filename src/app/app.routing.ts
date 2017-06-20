import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';

const appRoutes:Routes = [

    {
        path:'',
        redirectTo:'index',
       pathMatch: 'full'
    },
    {
        path:'index',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'page3',
        component:Page3Component
    },
    {
        path:'page4',
        component:Page4Component
    },
     {
        path:'**',
        component:PageNotFoundComponent
    }
    
 
];

export const routing:ModuleWithProviders =RouterModule.forRoot(appRoutes);