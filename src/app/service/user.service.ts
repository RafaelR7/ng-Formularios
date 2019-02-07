import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getCEP(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/?callback`);
  }

  addUser(form: NgForm) {
    return this.http.post('https://httpbin.org/post', form.value);
  }
}
