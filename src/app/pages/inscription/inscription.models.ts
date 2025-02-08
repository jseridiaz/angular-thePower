import { FormControl } from '@angular/forms';

export type FormUser = {
  Course: FormControl<string>;
  Name: FormControl<string>;
  Surname: FormControl<string>;
  Email: FormControl<string>;
  Number: FormControl<string>;
  Street: FormControl<string>;
  Conditions: FormControl<boolean>;
};
