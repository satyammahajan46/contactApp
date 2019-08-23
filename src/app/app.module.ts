import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SharedModule,
    CoreModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
