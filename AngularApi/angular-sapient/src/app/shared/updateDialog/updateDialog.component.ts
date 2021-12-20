import {CommonModule} from "@angular/common";
import {Component} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog',
  templateUrl: './updateDialog.component.html',
  // styleUrls: ['./link-bar.component.scss']
})
export class UpdateDialogComponent {

  constructor(private snackBar: MatSnackBar) { }


  openUdateSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000
      })

  }

}
