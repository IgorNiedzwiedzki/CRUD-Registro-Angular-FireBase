import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email: string = '';
  password: string = '';

  constructor(private auth : AuthService) {}

  ngOnInit(): void{
  }

  register(){
    if (this.email==''){
      alert('Coloque seu Email');
      return;
    }

    if (this.password==''){
      alert('Coloque sua Senha');
      return;
    }

    this.auth.register(this.email,this.password);
    this.email = '';
    this.password = '';
}
}
