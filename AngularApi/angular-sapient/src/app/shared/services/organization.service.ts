import {Injectable} from "@angular/core";
import {Organization} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  addOrganization(organization: Organization) {
    let storageOrganizations = this.getOrganizations();
    let organizations = storageOrganizations ? [organization, ...(<string>storageOrganizations)] : [organization]
    localStorage.setItem('Organizations', JSON.stringify(organizations))
  }

  getOrganizations() {
    return JSON.parse(<string>localStorage.getItem('Organizations'))
  }

  setOrganizations (organizations: Organization[]) {
    localStorage.setItem('Organizations', JSON.stringify(organizations))
  }

  getCurrentOrganization(id: number | undefined){
    let storageOrganizations = this.getOrganizations();
    return storageOrganizations ? storageOrganizations.find((item: any) => item.id == id) : null
  }

  updateOrganization(organization : Organization){
    let orgList = this.getOrganizations()
    if (orgList) {
            orgList.splice(orgList.findIndex((a: any) => a.id == organization.id), 1)
            orgList.push(organization)
            this.setOrganizations(orgList)
          }
  }

  deleteOrganization(id: any){
  let orgList = this.getOrganizations()
    if(orgList){
      orgList.splice(orgList.findIndex((a: any) => a.id == id), 1)
      this.setOrganizations(orgList);
    }
  }
}
