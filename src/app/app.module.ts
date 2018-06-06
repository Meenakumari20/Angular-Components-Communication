import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { PtocChildComponent } from './parent-to-child/ptoc-child/ptoc-child.component';

const routes: Routes = [
  { path: 'parent-to-child', component: ParentToChildComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ParentToChildComponent,
    PtocChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
