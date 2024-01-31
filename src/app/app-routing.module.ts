import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: DashboardComponent },
  { path: "login", component: LoginComponent }, 
  {path: "requested-books", component: RequestedBooksComponent},
  {path:"books", component:BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
