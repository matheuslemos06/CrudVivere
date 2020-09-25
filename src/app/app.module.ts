import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina01Component } from './pagina01/pagina01.component';
import { Pagina02Component } from './pagina02/pagina02.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from "./users/create-user/create-user.component";
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './users/update/update.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina01Component,
    Pagina02Component,
    UsersComponent,
    CreateUserComponent,
    UpdateComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
