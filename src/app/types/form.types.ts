import { FormControl } from '@angular/forms';

export interface SignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface SignUpForm extends SignInForm {
  name: FormControl<string>;
  avatar: FormControl<string>;
}
