import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MacadamComponent } from './macadam/macadam.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'macadam', component: MacadamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
