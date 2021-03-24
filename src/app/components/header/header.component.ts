import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authService: any;

  constructor() { }

  ngOnInit(): void {
  }
  signOut(){
    this.authService.SignOut();
  }

}
