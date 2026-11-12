import { Passager } from "./passager.model";
import { Voiture } from "./voiture.model";

export class Depart {
  dateDepart !: Date;
  heureDepart !: string;
  destination !: string;
  voiture !: Voiture;
  passager !:Passager;
}
