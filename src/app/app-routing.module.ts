import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  // },
  // { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
