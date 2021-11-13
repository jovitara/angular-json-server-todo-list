import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  public user: User ={
    name: "",
    email: "",
    completed: false,
  };

  @Output() newItemEvent = new EventEmitter();

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }
  userCreate(){
    console.log("form submit works");
    console.log(this.user);
    this._userService.createUser(this.user)
    .subscribe((data: any) =>{
      alert("task succesfully added!");
      console.log(data);
      this.newItemEvent.emit(data);
    })
  }

}
