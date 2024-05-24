import { Component, OnInit } from '@angular/core';
import { DataService } from '../../asset-auto-service.service';
import { iVeicolo } from '../../Models/veicolo';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent implements OnInit {
  veicoliFiat: iVeicolo[] = [];

  constructor(private dataService: DataService) {}

  async ngOnInit(): Promise<void> {
    this.veicoliFiat = await this.dataService.getVeicoliByMarca('Fiat');
  }

  visualizzaBrandVeicolo(idVeicolo: number): void {
    console.log(`Visualizza dettagli per veicolo con ID: ${idVeicolo}`);
  }
}
