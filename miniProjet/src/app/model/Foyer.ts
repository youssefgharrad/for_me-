import {Universite} from "./Universite";
import {Bloc} from "./Bloc";

export class Foyer{
  idFoyer: number;
  nomFoyer:String ;
  capaciteFoyer:number;
  universite:Universite;
  bloc:Bloc;



  static calculerMoyenneCapacite(foyers: Foyer[]): number {
    if (foyers.length === 0) {
      return 0;
    }

    const sommeCapacites = foyers.reduce((total, foyer) => total + foyer.capaciteFoyer, 0);
    return sommeCapacites / foyers.length;
  }

  static trouverFoyerCapaciteMaximale(foyers: Foyer[]): Foyer | null {
    if (foyers.length === 0) {
      return null;
    }

    return foyers.reduce((maxFoyer, foyer) => (foyer.capaciteFoyer > maxFoyer.capaciteFoyer ? foyer : maxFoyer), foyers[0]);
  }

}
