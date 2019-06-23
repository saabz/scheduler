import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

// services
import { NotificationService } from './services/notification.service';
import { StatusService } from './services/status.service';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    NotificationService,
    StatusService
  ]
})
export class SharedModule { }
