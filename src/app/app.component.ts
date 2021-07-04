import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HelpComponent } from './components/help/help.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-legalizimet';

  constructor(
    public dialog: MatDialog,
    private router: Router
  ){}
  openHome() {
    this.router.navigate(["/"]);
  }

  openForm(){
    this.router.navigate(["/form"]);
  }

  openHistory(){
    this.router.navigate(["/history"]);
  }

  openHelp(): void {
    const dialogRef = this.dialog.open(HelpComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
