import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({selector: 'app-register', templateUrl: 'register.component.html', styleUrls: ['register.component.scss']})
export class RegisterComponent {
  nome: any;
  cpf: any;
  email: any;
  dataNascimento: any;
  password: any;
  form = this.formBuilder.group({
    nome: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
    cpf: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    dataNascimento: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(10)],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  register() {

  }
}
