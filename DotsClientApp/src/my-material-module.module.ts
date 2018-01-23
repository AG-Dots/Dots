import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule],
})
export class MyMaterialModuleModule { }
