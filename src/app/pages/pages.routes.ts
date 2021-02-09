import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesAlbumComponent } from './component/pages-album/pages-album.component';
import { NotasComponent } from './component/notas/notas.component';
import { NotasCompleta1Component } from './component/notas-completa1/notas-completa1.component';
import { NotasCompleta2Component } from './component/notas-completa2/notas-completa2.component';

const pagesRoutes: Routes = [    
    {
        path: '',
        component: PagesComponent        
    },{
        path: 'Album/:id',
        component: PagesAlbumComponent       
    },{
        path: 'Notas',
        component: NotasComponent       
    },{
        path: 'NotasCompleta1',
        component: NotasCompleta1Component       
    }
    ,{
        path: 'NotasCompleta2',
        component: NotasCompleta2Component       
    }
    //,{ path: '**', component: PagesComponent }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
