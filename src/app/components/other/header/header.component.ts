import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/online/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private logout: LogoutService
  ) { }

  role!: string;
  anfitrion!: boolean;
  inquilino!: boolean;

  ngOnInit(): void {
    this.role = localStorage.getItem('rol')!;
    if(this.role === 'owner') {
      this.anfitrion = true;
      this.inquilino = false;
    } else if (this.role === 'tenant') {
      this.inquilino = true;
      this.anfitrion = false;
    }
  }

  disconnect() {
    this.logout.disconnect();
  }

}
