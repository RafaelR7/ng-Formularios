import { Component, OnInit } from '@angular/core';
import { NgForm, FormControlName } from '@angular/forms';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.addUser(form)
      .subscribe(dados => {
        console.log(dados);
      });
  }

  onReset(form: NgForm) {
    form.reset();
  }

  verificaValidTouched(campo: FormControlName) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: FormControlName) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep: string, form: NgForm) {
     cep = cep.replace(/\D/g, '');

     if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.userService.getCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados, form));
      }
     }
  }

  populaDadosForm(dados: any, form: NgForm) {
    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

}
