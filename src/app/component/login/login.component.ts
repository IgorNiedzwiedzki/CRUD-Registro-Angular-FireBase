import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private auth : AuthService) {}

  ngOnInit(): void{
  }

  login(){
    if (this.email==''){
      alert('Coloque seu Email');
      return;
    }

    if (this.password==''){
      alert('Coloque sua Senha');
      return;
    }

    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';

  }
}
