import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './owners.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersFormComponent } from './owners-form/owners-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OwnersComponent, OwnersFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    OwnersRoutingModule,
    ReactiveFormsModule
  ]
})
export class OwnersModule { }
