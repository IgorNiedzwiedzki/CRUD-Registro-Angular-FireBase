import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  email: string = '';
  password: string = '';

  constructor(private auth : AuthService) {}

  ngOnInit(): void{
  }

  register(){
    this.auth.logout();
  }
}
