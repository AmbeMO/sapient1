import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{

  ngOnInit() {
  }

  @Output() isHide = new EventEmitter<boolean>();

  hides(bool: any){
    console.log(bool)
    return this.isHide.emit(bool)
  }

}
