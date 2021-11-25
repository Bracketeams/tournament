import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [BasePageComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [BasePageComponent, FooterComponent, HeaderComponent]
})
export class PartialsModule { }
