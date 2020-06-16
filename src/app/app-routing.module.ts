import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ChatModule } from './chat/chat.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => HomeModule,
  },
  {
    path: 'chat',
    pathMatch: 'full',
    loadChildren: () => ChatModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
