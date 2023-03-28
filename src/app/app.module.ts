import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { PersonalComponent } from './categories/personal/personal.component';
import { WorkComponent } from './categories/work/work.component';
import { HealthComponent } from './categories/health/health.component';
import { TravelComponent } from './categories/travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomeComponent,
    AddTodoComponent,
    CategoriesComponent,
    PersonalComponent,
    WorkComponent,
    HealthComponent,
    TravelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
