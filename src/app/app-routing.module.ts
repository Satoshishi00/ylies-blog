import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MacadamComponent } from './macadam/macadam.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'macadam', component: MacadamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
