import {assert} from 'chai';



import Vehicle from '../src/vehicle.js';
let vehicleInstance = new Vehicle();

import Motorcycle from '../src/motorcycle.js';
let motorcycleInstance = new Motorcycle();

import Truck from '../src/truck.js';
let truckInstance = new Truck();

import Car from '../src/vehicle.js';
let carInstance = new Car();



describe("Vehicle", () => {
	describe ("numofseats", () => {
		// let vehicleInstance;
		beforeEach(() =>{
			vehicleInstance = new Vehicle (6, 4);
		});
		it ("returns the number of seats", () => {
			assert.equal(vehicleInstance.numofseats, 6);


		});
		it ("can be changed", () => {
			vehicleInstance.numofseats = 10;
			assert.equal(vehicleInstance.numofseats, 10);
		});


    });

	describe ("numofdoors", () => {

		beforeEach(() =>{
			vehicleInstance = new Vehicle (6, 2);
		});
		it ("returns the number of doors", () => {
			assert.equal(vehicleInstance.numofdoors, 2);
		});
		it ("can be changed", () => {
			vehicleInstance.numofdoors = 4 ;
			assert.equal(vehicleInstance.numofdoors, 4);
		});

    });


});
