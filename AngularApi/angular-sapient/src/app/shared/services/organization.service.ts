import {Injectable} from "@angular/core";
import {Organization} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  organizations: any = []
  constructor() {
  }
  addOrganization(organization: Organization) {
    if(localStorage.getItem('Organizations')){
      this.organizations = JSON.parse(<string>localStorage.getItem('Organizations'));
      this.organizations = [organization, ...this.organizations]
    }else{
      this.organizations = [organization]
    }
    localStorage.setItem('Organizations', JSON.stringify(this.organizations))

  }
}
