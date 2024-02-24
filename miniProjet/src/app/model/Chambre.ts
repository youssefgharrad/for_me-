import { Bloc } from "src/app/model/Bloc";

export class Chambre{
  idChambre!: number ;
  numeroChambre!:number ;
  totale_cap:number;
  typeC!:TypeChambre;
  bloc!:Bloc;

}
export enum TypeChambre{
  SIMPLE,
  DOUBLE,
  TRIPLE
}
