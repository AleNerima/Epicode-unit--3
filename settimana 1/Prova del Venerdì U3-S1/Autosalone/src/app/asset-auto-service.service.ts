import { Injectable } from '@angular/core';
import { iVeicolo } from './Models/veicolo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private veicoliUrl = '../assets/file db/db.json';
  private veicoli: iVeicolo[] = [];

  constructor() { }

  async caricaVeicoli(): Promise<void> {
    try {
      const response = await fetch(this.veicoliUrl);
      const data = await response.json();
      this.veicoli = data as iVeicolo[];
    } catch (error) {
      console.error('Errore durante il caricamento dei veicoli:', error);
    }
  }

  async getVeicoliByMarca(marca: string): Promise<iVeicolo[]> {
    await this.caricaVeicoli();
    return this.veicoli.filter(veicolo => veicolo.brand === marca);
  }

  async getVeicoliCasuali(numero: number): Promise<iVeicolo[]> {
    await this.caricaVeicoli();
    const veicoliCasuali: iVeicolo[] = [];
    for (let i = 0; i < numero; i++) {
      const indiceCasuale = Math.floor(Math.random() * this.veicoli.length);
      veicoliCasuali.push(this.veicoli[indiceCasuale]);
    }
    return veicoliCasuali;
  }

  async verificaDisponibilita(idVeicolo: number): Promise<boolean> {
    await this.caricaVeicoli();
    const veicolo = this.veicoli.find(veicolo => veicolo.id === idVeicolo);
    return veicolo ? veicolo.available : false;
  }
}
