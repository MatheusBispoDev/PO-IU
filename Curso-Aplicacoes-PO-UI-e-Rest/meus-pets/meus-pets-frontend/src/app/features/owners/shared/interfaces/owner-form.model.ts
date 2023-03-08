import { FormControl } from '@angular/forms';

export interface OwnerForm {
    id: FormControl<String>;
    name: FormControl<String>;
    rg: FormControl<String>;
    cpf: FormControl<String>;
    email: FormControl<String>;
    tel1: FormControl<String>;
    tel2: FormControl<String>;
}
