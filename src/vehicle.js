class Vehicle {
	constructor (numofseats, numofdoors){
		this._numofseats = numofseats;
		this._numofdoors = numofdoors;
	}
	get numofseats() {
    	return this._numofseats;
    }
    set numofseats(value) {
    	if (typeof value !== "number") {
      		throw new ReferenceError ("numofseats must be an integer");
    	}

    	this._numofseats = value;
  	}

    get numofdoors() {
    	return this._numofdoors;
    }

  	set numofdoors(value) {
    	if (typeof value !== 'number' || value % 1 !== 0) {
      		throw new ReferenceError("numofdoors must be an integer");
    	}

    	this._numofdoors = value;

    }

	getDescription() {
		console.log ("This vehicle has " + this.numofseats + " seats and " + this.numofdoors + " doors ");
	}
	accelerate(){
		console.log("vroom vroom");
	}
	getVehiclePapers(){
		console.log("Here are your car papers");
	}
}

export default Vehicle;
