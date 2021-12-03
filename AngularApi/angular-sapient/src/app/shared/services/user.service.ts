import {Injectable} from "@angular/core";
import {Organization, User} from "../interfaces";

@Injectable({
  providedIn: 'root'
})

export class UserService{
  addUser(user: User) {
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(<string>localStorage.getItem('Users'));
      users = [user, ...users]
    }else{
      users = [user]
    }
    localStorage.setItem('Organizations', JSON.stringify(users))

  }
}
