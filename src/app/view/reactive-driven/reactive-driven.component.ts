import { ConsultaCepService } from './../../service/consulta-cep.service';
import { EstadosBr } from './../../models/estados-br';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormControlName
} from '@angular/forms';

import { UserService } from 'src/app/service/user.service';
import { DropdownService } from 'src/app/service/dropdown.service';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.scss']
})
export class ReactiveDrivenComponent implements OnInit {
  form: FormGroup;
  estados: EstadosBr[];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) {}

  ngOnInit() {
    // this.form = new FormGroup({
    //   name: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email])
    // });

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        rua: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      })
    });

    this.dropdownService.getEstadosBr().subscribe((estados: EstadosBr[]) => {
      this.estados = estados;
    });
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.userService.addUser(this.form).subscribe(
        (dados: any) => {
          console.log(dados);
          this.onCancel();
        },
        (error: any) => {
          alert('erro');
        }
      );
    } else {
      console.log('form invalido');
      this.verificaValidacoesForm(this.form);
    }
  }

  verificaValidacoesForm(fomrGroup: FormGroup) {
    Object.keys(fomrGroup.controls).forEach(campo => {
      const controle = fomrGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  onCancel() {
    this.form.reset();
  }

  verificaValidTouched(campo: string) {
    return !this.form.get(campo).valid && this.form.get(campo).touched;
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  consultaCEP() {
    const cep = this.form.get('endereco.cep').value;
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).subscribe(dados => {
        this.populaDadosForm(dados);
      });
    }
  }

  populaDadosForm(dados: any) {
    this.form.patchValue({
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
