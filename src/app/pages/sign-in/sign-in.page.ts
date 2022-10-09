import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '@fotosgram/services';
import { SignInForm, SignUpForm } from '@fotosgram/types';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  mainSlideOpts = {
    allowTouchMove: false,
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

  selectAvatar(img: string) {
    this.signUpForm.get('avatar').setValue(img);
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
