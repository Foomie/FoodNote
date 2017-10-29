import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { MenuComponent } from './menu/menu.component';

//インポートする
import { RouterModule } from '@angular/router';

import { CalenderComponent } from './calender/calender.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { FormsModule }   from '@angular/forms';

//パスと対応するコンポーネントを書く
export const AppRoutes = [
  {path: "", component: MenuComponent},
  {path: "input", component: InputComponent},
  {path: "calender", component: CalenderComponent},
  {path: "list", component: ListComponent},
  {path: "detail", component: DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    ListComponent,
    DetailComponent,
    InputComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
