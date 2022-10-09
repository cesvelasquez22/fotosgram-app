import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async presentToast(
    message = 'Success',
    icon = 'checkmark-circle',
    type = 'success',
    duration = 2000
  ) {
    const toast = await this.toastController.create({
      icon,
      message,
      duration,
      cssClass: `toast-${type}`,
    });

    await toast.present();
  }
}
