import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';

const routes: Routes = [
  { path: 'parent-to-child', component: ParentToChildComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ParentToChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
