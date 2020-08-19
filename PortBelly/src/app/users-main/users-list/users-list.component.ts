import { Component, OnInit } from '@angular/core';
import { faListAlt, faEye, faPencilAlt,faUserPlus, faTrash,faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { User } from '../../Models/user';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  faListAlt = faListAlt;
  faUserPlus=faUserPlus;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash=faTrash;
  faPlus=faPlus;
 user:User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  list(): void{

    this.userService.list().subscribe(
      result=>{

        this.user=result;
        console.log(this.user);
      }
    )

   }
}
