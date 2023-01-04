import Cars from "./Cars";
import Korisnici from "./Korisnici";

const { Component } = require("react");

class App extends Component{
  state = {
    korisnici: [
        {
            ime: "Branko",
            prezime: "Brankovic",
            dob: 32,

        },
        {
            ime: "Janko",
            prezime: "Jankovic",
            dob: 42,
        },
        {
            ime: "Stanko",
            prezime: "Stankovic",
            dob: 52,
        },
       
    ],
    cars:"Audi"
};
render (){
  const {korisnici} = this.state;
  return(
    <div>
       <Korisnici korisnici = {korisnici} />
       <Cars>
        {this.state.cars}
       </Cars>

    </div>
  )
}
}
export default App;
