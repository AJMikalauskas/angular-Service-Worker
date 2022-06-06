import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { filter, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';


  //Swupdate is part of service worker and contains observables that we can use to notify regarding update process of app
  constructor(private updates:SwUpdate, private snackBar: MatSnackBar) {}
    //OnInit is an interface that expects the ngOnit function, so when implemented, a ngOnit is neccessary
    ngOnInit(): void {
      //The swupdate contains the available observable property that we can use to get notified 
        // when a new version of our application is available, normally subscribe to observables 
          // but in this instance subscribe to pipe()?
      this.updates.available.pipe(
        // Called when new version of app available, uses open method of snackbar property to show a snackbar 
          //with action btn and subscribe to its afterDismissed observable.afterDismissed observable emits
            // when snackbar is close by clicking on action btn or using programming an API method
        switchMap(() => this.snackBar.open("A new version is available!", "Update now").afterDismissed()),
        // Called when snack bar is dismissed using action btn
        filter(result => result.dismissedByAction),
        // Calls activateUpdate method of the updates property to apply new version of app, once app updated, reloads window
        map(() => this.updates.activateUpdate().then(() => location.reload()))
      ).subscribe();
    }


}
