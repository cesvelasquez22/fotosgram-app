import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AvatarSlide } from '@fotosgram/types';
import { avatarsMock } from './avatars';

@Component({
  selector: 'app-avatar-select',
  templateUrl: './avatar-select.component.html',
  styleUrls: ['./avatar-select.component.scss'],
})
export class AvatarSelectComponent {
  @Output() avatarSelected = new EventEmitter<string>();

  avatars = avatarsMock;
  avatarSlideOpts = {
    slidesPerView: 3.5,
  };

  constructor() {}

  onSelectAvatar(avatar: AvatarSlide) {
    this.avatars.forEach((av) => (av.selected = false));
    avatar.selected = true;
    this.avatarSelected.emit(avatar.img);
  }
}
