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

  ngOnInit(): void {
  }

  disconnect() {
    this.logout.disconnect();
  }

}
