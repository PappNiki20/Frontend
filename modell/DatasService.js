class DataService {
    constructor() {}
    getData(url,callback) {
      axios
        .get(url)
        .then(function (response) {
          // handle success
          console.log("Valasz objektum", response);
          console.log("adatok", response.data);
          console.log("statusz", response.status);
          console.log("Statusz szoveg", response.statusText);
          console.log("Valasz fejlec", response.headers);
          console.log("Valasz config", response.config);
          callback(response.data)
        })
        .catch(function (error) {
          // handle error
       console.log(error);
         /* hibaCallback(error) */
        })
        .finally(function () {
          // always executed
          console.log("finally")
        });
 

 
    }
    postAxiosData(url,data){
        axios
            .post(url,data
                /* headers:{
                    "X-CSRF-TOKEN":response.headers["x-csrf-token"]
                } */
        )
            .then((response)=> {
                console.log("RESP",response)
            })
            .catch((error) => {
                console.log("hiba",error)
            })
    }
 
  }
 
export default DataService;