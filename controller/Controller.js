//import Model from "../Model/Model.js"
//import View from "../View/View.js"
import DataService from "../modell/DatasService.js"
class Controller{
    constructor(){
       
        console.log("Constr")
        this.dataService = new DataService()
      
        this.dataService.getData("http://localhost:8000/writers", this.adatMegj)

        this.dataservice.postAxiosData("http://localhost:8000/writers",{
            "nev" : "Valaki",
            "szul":1589,
        })
    
    }
    adatMegj(lista){
        console.log(lista)
       
    }
  
    }
    export default Controller