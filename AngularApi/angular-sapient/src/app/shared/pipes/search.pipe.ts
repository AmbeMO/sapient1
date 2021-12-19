import {Pipe, PipeTransform} from "@angular/core";
import {Organization} from "../interfaces/interfaces";

@Pipe({
  name: 'searchName'
})
export class SearchPipe implements PipeTransform {
  transform(lstOrgs: Organization[], search = ""): Organization[] {
    if (!search.trim()) {
      return lstOrgs;
    }
    return lstOrgs.filter(org => org['name'].toLowerCase().includes(search.toLowerCase()))
  }
}
