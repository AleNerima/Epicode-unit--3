import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import modulo Router
import { iVeicolo } from '../../Models/veicolo';
import { DataService } from '../../asset-auto-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  veicoli: iVeicolo[] = []; // dichiaro e inizializzo variabili veicoli

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.caricaVeicoli();
  }

  async caricaVeicoli(): Promise<void> {
    this.veicoli = await this.dataService.getVeicoliCasuali(2);
  }

  visualizzaBrandVeicolo(veicolo: iVeicolo): void {
    const brand = veicolo.brand.toLowerCase(); // controllo del brand in tolowercase
    this.router.navigate([`/${brand}`]);
  }
}
