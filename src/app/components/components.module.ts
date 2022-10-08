import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '@fotosgram/pipes';

@NgModule({
  declarations: [PostsComponent, PostComponent],
  exports: [PostsComponent, PostComponent],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
