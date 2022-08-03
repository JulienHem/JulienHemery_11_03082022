import {Logement} from "../models/logement";
import LogementsData from "../../src/logements.json"

export  function getLogements() {
   return LogementsData.map((data) => new Logement(data) )
}


