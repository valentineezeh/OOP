import Vehicle from "./vehicle.js";


let vehicleInstance = new Vehicle()


class Truck extends Vehicle {
	constructor (numofseats, numofdoors, numofwheels){
		super(numofseats, numofdoors);
		this.numofwheels = 8;
	}
	getVehiclePapers(){
		console.log("Your vehicle has " + this.numofwheels + " wheels and as a result, you get a class C license")
	}
}



export default Truck;
