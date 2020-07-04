import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'a',
    component: AComponent,
    children: [
      {path: 'b', component: BComponent, children: [
        {path: 'c', component: CComponent}
      ]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }