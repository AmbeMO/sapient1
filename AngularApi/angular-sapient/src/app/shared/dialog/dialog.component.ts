import {CommonModule} from "@angular/common";
import {Component} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  // styleUrls: ['./link-bar.component.scss']
})
export class DialogComponent{

  constructor(private snackBar: MatSnackBar) { }


  openDeleteSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000
      })

  }
}
