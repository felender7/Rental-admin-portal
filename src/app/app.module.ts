import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProfileBadgeComponent } from './profile-badge/profile-badge.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { LoginComponent } from './login/login.component';
import { RecentRequestedBooksComponent } from './recent-requested-books/recent-requested-books.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import {MatCardModule} from '@angular/material/card';
import { BookListComponent } from './book-list/book-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewBookComponent } from './new-book/new-book.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { FooterComponent } from './footer/footer.component'





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolBarComponent,
    ProfileBadgeComponent,
    StatsCardComponent,
    LoginComponent,
    RecentRequestedBooksComponent,
    RequestedBooksComponent,
    BookListComponent,
    UserListComponent,
    NewBookComponent,
    WeatherCardComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
