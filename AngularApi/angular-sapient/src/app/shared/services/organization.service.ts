import {Injectable} from "@angular/core";
import {Organization} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  addOrganization(organization: Organization) {
    let storageOrganizations = localStorage.getItem('Organizations')
    let organizations = storageOrganizations ? [organization, ...JSON.parse(<string>storageOrganizations)] : [organization]
    localStorage.setItem('Organizations', JSON.stringify(organizations))
  }
  getOrganizations() {
    return JSON.parse(<string>localStorage.getItem('Organizations'))
  }
  currentOrganization(organization : Organization, id: any){
    let storageOrganizations = localStorage.getItem('Organizations')
    let currentOrganization = storageOrganizations ? JSON.parse(storageOrganizations) : [organization]
    return currentOrganization.find((item: any) => {
     return item.id = id
   })
  }
  updateOrganization(organization : Organization, id: any){
    let orgList = this.getOrganizations()
    if (orgList) {
      orgList.splice(orgList.findIndex((a: any) => a.id == organization.id), 1)
      orgList.push(organization)
      localStorage.setItem('Organizations', JSON.stringify(orgList))
    }
  }
  deleteOrganization(id: any){
  let orgList = this.getOrganizations()
    if(orgList){
      orgList.splice(orgList.findIndex((a: any) => a.id == id), 1)
      localStorage.setItem('Organizations', JSON.stringify(orgList))
    }
  }
}
