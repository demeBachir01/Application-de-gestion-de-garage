import { Chauffeur } from './chauffeur.model';
import { Garage } from './garage.model';
export class Voiture {
  id !: number;
  typeDeVoiture !: string;
 garage !: Garage;
 chauffeur !:Chauffeur;

}
