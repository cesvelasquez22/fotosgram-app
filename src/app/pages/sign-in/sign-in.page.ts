import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AvatarSlide } from '@fotosgram/types';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  avatars: AvatarSlide[] = [
    {
      img: 'av-1.png',
      selected: true,
    },
    {
      img: 'av-2.png',
      selected: false,
    },
    {
      img: 'av-3.png',
      selected: false,
    },
    {
      img: 'av-4.png',
      selected: false,
    },
    {
      img: 'av-5.png',
      selected: false,
    },
    {
      img: 'av-6.png',
      selected: false,
    },
    {
      img: 'av-7.png',
      selected: false,
    },
    {
      img: 'av-8.png',
      selected: false,
    },
  ];

  avatarSlideOpts = {
    slidesPerView: 3.5,
  };

  constructor() {}

  ngOnInit() {}

  selectAvatar(avatar: AvatarSlide) {
    this.avatars.forEach((av) => (av.selected = false));
    avatar.selected = true;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  onRegister(form: NgForm) {}
}
