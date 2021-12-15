import {Pipe, PipeTransform} from "@angular/core";
import {Organization} from "./interfaces";

@Pipe({
  name: 'searchName'
})
export class SearchPipe implements PipeTransform {
  transform(lstOrgs: Organization[], search = ""): Organization[] {
    if (!search.trim()) {
      console.log('trim')
      return lstOrgs;
    }
    return lstOrgs.filter(org => org['name'].toLowerCase().includes(search.toLowerCase()))
  }
}
