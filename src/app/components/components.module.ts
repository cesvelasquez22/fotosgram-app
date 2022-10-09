import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '@fotosgram/pipes';
import { SwiperModule } from 'swiper/angular';
import { AvatarSelectComponent } from './avatar-select/avatar-select.component';

@NgModule({
  declarations: [PostsComponent, PostComponent, AvatarSelectComponent],
  exports: [PostsComponent, PostComponent, AvatarSelectComponent],
  imports: [CommonModule, IonicModule, PipesModule, SwiperModule],
})
export class ComponentsModule {}
