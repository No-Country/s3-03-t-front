import { Component, OnInit } from '@angular/core';
import { RoommateInterface } from 'src/app/interfaces/roommate-interface';
import { UserService } from 'src/app/services/online/user.service';

@Component({
  selector: 'app-roommate-catalog',
  templateUrl: './roommate-catalog.component.html',
  styleUrls: ['./roommate-catalog.component.scss']
})
export class RoommateCatalogComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  rawUsers!: RoommateInterface[];
  users: RoommateInterface[] = [];
  img: any;

  ngOnInit(): void {

    this.userService.getAllUsers()
      .subscribe((res) => {
        this.rawUsers = res;

        // for (let i = 0; i < this.users.length; i++) {
        //   if (this.users[i].image.length !== 0) {
        //     this.img[i] = this.users[i].imgList[0].fileUrl;
        //   }
        // }

        for (let i = 0; i < this.rawUsers.length; i++) {
          if (this.rawUsers[i].image !== null) {
            this.users.push(this.rawUsers[i]);
          }
        }

      }
      )
  }

}
