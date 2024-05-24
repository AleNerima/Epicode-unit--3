import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHomePage: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Listener per l'evento di navigazione
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Nasconde la home page quando l'utente naviga verso altre pagine
        this.isHomePage = (event.url === '/');
      }
    });
  }
}
