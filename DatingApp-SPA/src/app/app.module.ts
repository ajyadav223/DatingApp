import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import {RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { FileUploadModule } from 'ng2-file-upload';
//Added from Git to solve error of Uploader
//import { FileSelectDirective } from 'ng2-file-upload';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule } from 'ngx-bootstrap/tabs';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import {MemberEditComponent} from './members/member-edit/member-edit.component';
import { MessagesComponent } from './messages/messages.component';
import {appRoutes} from './routes';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberDetailResolver } from './resolver/member-Detail.Resolver';
import { MemberListResolver } from './resolver/member-List.Resolver';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MemberEditResolver } from './resolver/member-Edit.Resolver';
import {PreventUnsavedChanges} from './_guards/preventUnsavedChanges';
import {PhotoEditorComponent} from './members/photo-editor/photo-editor.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimeagoModule, TimeagoPipe } from 'ngx-timeago';

export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [						
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent
      //TimeagoPipe


      //added from Git
     // FileSelectDirective
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TimeagoModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: { 
          tokenGetter: tokenGetter,
          allowedDomains: ['localhost:7000'],
          disallowedRoutes:['localhost:7000/auth']
      }
    })
  ],
  providers: [ 
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChanges

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
