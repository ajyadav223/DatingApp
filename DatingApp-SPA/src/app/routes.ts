import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MemberListComponent} from './members/member-list/member-list.component';
import {MessagesComponent} from './messages/messages.component';
import {ListsComponent} from './lists/lists.component';
import {AuthGuard} from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './resolver/member-Detail.Resolver';
import { MemberListResolver } from './resolver/member-List.Resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './resolver/member-Edit.Resolver';
import { PreventUnsavedChanges } from './_guards/preventUnsavedChanges';

export const appRoutes: Routes = [
{path :'', component: HomeComponent},
{
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
        {path :'members', component: MemberListComponent,resolve: {users:MemberListResolver}},
        {path :'members/:id', component: MemberDetailComponent ,resolve: {user:MemberDetailResolver}},
        {path:'member/edit',component:MemberEditComponent,resolve: {user:MemberEditResolver},canDeactivate :[PreventUnsavedChanges]},
        {path :'messages', component: MessagesComponent},
        {path :'lists', component: ListsComponent}
    ]
},
{path :'**', redirectTo: '', pathMatch:'full'}
];
