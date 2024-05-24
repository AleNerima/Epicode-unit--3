import { Component, OnInit } from '@angular/core';
import { iVeicolo } from '../../Models/veicolo';
import { DataService } from '../../asset-auto-service.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss']
})
export class FordComponent implements OnInit {
  veicoli: iVeicolo[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.caricaVeicoli();
  }

  async caricaVeicoli(): Promise<void> {
    this.veicoli = await this.dataService.getVeicoliByMarca('Ford');
  }
}
