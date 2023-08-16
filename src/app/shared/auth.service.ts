import { Injectable } from '@angular/core';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //Metodo de Login  
  login(email: string, password : string) {
      this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
        localStorage.setItem('token','true');
        this.router.navigate(['/dashbord']);

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //Metodo de Registro
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registrado com Sucesso')
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  //Sair
  logout(){
    this.fireauth.signOut().then(()=> {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err=> {
      alert(err.message);
    })
  }
}
