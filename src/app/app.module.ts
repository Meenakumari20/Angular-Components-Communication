import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { PtocChildComponent } from './parent-to-child/ptoc-child/ptoc-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { CtopChildComponent } from './child-to-parent/ctop-child/ctop-child.component';
import { HomeComponent } from './home/home.component';
import { SiblingsComponent } from './siblings/siblings.component';

const routes: Routes = [
  { path: 'parent-to-child', component: ParentToChildComponent },
  { path: 'child-to-parent', component: ChildToParentComponent },
  { path: 'siblings', component: SiblingsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ParentToChildComponent,
    PtocChildComponent,
    ChildToParentComponent,
    CtopChildComponent,
    HomeComponent,
    SiblingsComponent
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
