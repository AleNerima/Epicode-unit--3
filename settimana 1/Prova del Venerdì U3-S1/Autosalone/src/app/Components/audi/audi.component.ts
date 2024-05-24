import { Component, OnInit } from '@angular/core';
import { iVeicolo } from '../../Models/veicolo';
import { DataService } from '../../asset-auto-service.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent implements OnInit {
  veicoli: iVeicolo[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.caricaVeicoli();
  }

  async caricaVeicoli(): Promise<void> {
    this.veicoli = await this.dataService.getVeicoliByMarca('Audi');
  }
}
