import {Injectable} from "@angular/core";
import {Organization} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor() {
  }
  addOrganization(organization: Organization) {
    let organizations = [];
    if(localStorage.getItem('Organizations')){
      organizations = JSON.parse(<string>localStorage.getItem('Organizations'));
      organizations = [organization, ...organizations]
    }else{
      organizations = [organization]
    }
    localStorage.setItem('Organizations', JSON.stringify(organizations))

  }
}
