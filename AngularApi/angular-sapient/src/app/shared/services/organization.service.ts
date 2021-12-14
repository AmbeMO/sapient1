import {Injectable} from "@angular/core";
import {Organization} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  addOrganization(organization: Organization) {
    let storageOrganizations = localStorage.getItem('Organizations')
    let organizations = storageOrganizations ? [organization, ...JSON.parse(<string>storageOrganizations)] : [organization]
    localStorage.setItem('Organizations', JSON.stringify(organizations))

  }
}
