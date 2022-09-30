import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/online/logout.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/online/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private logout: LogoutService,
    private userService: UserService
  ) { }

  role: string = 'tenant';
  anfitrion!: boolean;
  inquilino: boolean = true;

  userId: any;
  userImg: any;
  userImgDefault!: boolean;
  userImgCustom!: boolean;

  //iconos
  faSignOutAlt = faSignOutAlt;

  ngOnInit(): void {
    this.role = localStorage.getItem('rol')!;
    this.userId = localStorage.getItem('userId');

    this.userService.getUser(this.userId)
      .subscribe((res:any) => {
        this.userImg = res.image.fileUrl;


        if (this.userImg == null) {
              this.userImgCustom = false;
              this.userImgDefault = true;
            } else {
              this.userImgCustom = true;
              this.userImgDefault = false;
            }

      });

    

    if (this.role === 'owner') {
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
