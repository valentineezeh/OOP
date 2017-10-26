import Vehicle from "./vehicle.js";

let vehicleInstance = new Vehicle();

class Motorcycle extends Vehicle {
	constructor (numofseats, numofdoors, numofwheels){
		super(numofseats, numofdoors);
		this.numofwheels = 2;
	}
    getVehiclePapers(){
		return "Your vehicle has " + this.numofwheels + " wheels and as a result, you get a class A license"
	}

}

export default Motorcycle;
