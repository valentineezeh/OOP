
import Vehicle from "./vehicle.js";
let vehicleInstance = new Vehicle();

class Car extends Vehicle {
	constructor (numofseats, numofdoors, numofwheels){
		super(numofseats, numofdoors);
		this._engineTechnologySecrets = "V8";
		this.numofwheels = 4;
	}
	getVehiclePapers(){
		console.log("Your vehicle has " + this.numofwheels + " wheels and as a result, you get a class B license")
	}
}


export default Car;
