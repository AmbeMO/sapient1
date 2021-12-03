import {Pipe, PipeTransform} from "@angular/core";
import {Organization} from "./interfaces";

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform{
  transform(lstOrgs: Organization[], search=""): Organization[]{
    if(search.trim()){
      return lstOrgs
    }
    return lstOrgs.filter(org=> {
      return org.name.toLowerCase().includes(search.toLowerCase())
    })
  }
}
