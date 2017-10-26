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
      		throw ReferenceError ("numofseats must be an integer");
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
		return "This vehicle has " + this.numofseats + " seats and " + this.numofdoors + " doors ";
	}
	accelerate(){
		return "vroom vroom";
	}
	getVehiclePapers(){
		return "Here are your car papers";
	}
}

export default Vehicle;
