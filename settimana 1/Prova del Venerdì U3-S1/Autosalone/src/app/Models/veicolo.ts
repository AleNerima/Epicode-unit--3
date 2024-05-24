export type ElencoVeicoli = iVeicolo[]

export interface iVeicolo {
  brand: string
  brandLogo: string
  model: string
  modelImage: string
  year: number
  price: number
  available: boolean
}
