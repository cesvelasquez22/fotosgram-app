import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '@fotosgram/services';
import { AvatarSlide, SignInForm, SignUpForm } from '@fotosgram/types';
import { NavController, ToastController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import Swiper from 'swiper';

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

  mainSlideOpts = {
    allowTouchMove: false,
  };

  avatarSlideOpts = {
    slidesPerView: 3.5,
  };

  // Auth forms
  signInForm = new FormGroup<SignInForm>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  signUpForm = new FormGroup<SignUpForm>({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    avatar: new FormControl('av-1.png'),
  });

  private mainSlides: Swiper;

  constructor(
    private usersService: UsersService,
    private navController: NavController,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  setSwiperInstance(swiper: Swiper) {
    this.mainSlides = swiper;
  }

  selectAvatar(avatar: AvatarSlide) {
    this.avatars.forEach((av) => (av.selected = false));
    avatar.selected = true;
    this.signUpForm.get('avatar').setValue(avatar.img);
  }

  onSignIn() {
    this.usersService.signIn(this.signInForm.getRawValue()).subscribe(
      () => {
        console.log('Signed in!');
        this.navController.navigateRoot('/tabs/tab1', { animated: true });
      },
      (err) => {
        this.toastService.presentToast(
          err.error.message,
          'close-circle-outline',
          'error',
        );
      }
    );
  }

  onSignUp() {
    console.log(this.signUpForm.getRawValue());
    this.usersService.signUp(this.signUpForm.getRawValue()).subscribe(
      () => {
        console.log('Signed up!');
        this.navController.navigateRoot('/tabs/tab1', { animated: true });
      },
      (err) => {
        this.toastService.presentToast(
          err.error.message,
          'close-circle-outline',
          'error',
        );
      }
    );
  }

  onSlideNext() {
    this.mainSlides.slideNext();
  }

  onSlidePrev() {
    this.mainSlides.slidePrev();
  }
}
