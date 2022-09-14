import {Logement} from "../models/logement";
import LogementsData from "../../src/logements.json"
import LogementInterface from "../interfaces/LogementInterface";


export function getLogements():LogementInterface[] {
   return LogementsData.map((data) => new Logement(data) )
}

export function getLogementsById(id: string, navigate: any):LogementInterface | null {
   const logement = getLogements().find(logement => logement.id === id);
   if(!logement) {
      navigate('*')
   }
   return logement || null
}
