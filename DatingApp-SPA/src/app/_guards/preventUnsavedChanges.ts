import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {MemberEditComponent} from '../members/member-edit/member-edit.component';
@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
   
   canDeactivate(component: MemberEditComponent)
   {
      if(component.editForm.dirty)
      {
          return confirm ('Are you sure want to Continue? Any unsaved Changes will be lost');
      }
      return true;
   }
}