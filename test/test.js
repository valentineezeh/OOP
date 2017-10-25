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
		//ReferenceError
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
describe("Motorcycle", () => {
	describe ("numofseats", () => {
		// let vehicleInstance;
		before(() =>{
		 motorcycleInstance = new Motorcycle (1, 0, 2);
		});
		it ("returns the number of doors", () => {
			assert.equal(motorcycleInstance.numofseats, 1);
		});

	//ReferenceError
      	it ("returns 'Your vehicle has 2 wheels and as a result, you get a class A license' for a method of getVehiclePapers", function () {
						assert.equal(motorcycleInstance.getVehiclePapers(), "Your vehicle has 2 wheels and as a result, you get a class A license");
      	});
    });


 });
 describe("Car", () => {
 	describe ("numofseats", () => {
 		// let vehicleInstance;
 		before(() =>{
 		 carInstance = new Car (4, 0, 2);
 		});
 		it ("returns the number of doors", () => {
 			assert.equal(carInstance.numofseats, 4);
 		});
 		it ("can be changed", () => {
 			carInstance.numofseats = 10;
 			assert.equal(carInstance.numofseats, 10);

 		});

 	//ReferenceError
       	it ("returns 'Your vehicle has 2 wheels and as a result, you get a class A license' for a method of getVehiclePapers", function () {
 						assert.equal(motorcycleInstance.getVehiclePapers(), "Your vehicle has 2 wheels and as a result, you get a class A license");
       	});
     });


  });
	describe("Truck", () => {
	 describe ("numofseats", () => {
		 // let vehicleInstance;
		 before(() =>{
			truckInstance = new Car (4, 0, 2);
		 });
		 it ("returns the number of doors", () => {
			 assert.equal(carInstance.numofseats, 10);
		 });
		 it ("can be changed", () => {
			 carInstance.numofseats = 10;
			 assert.equal(carInstance.numofseats, 10);

		 });

	 //ReferenceError
				 it ("returns 'Your vehicle has 2 wheels and as a result, you get a class A license' for a method of getVehiclePapers", function () {
						 assert.equal(motorcycleInstance.getVehiclePapers(), "Your vehicle has 2 wheels and as a result, you get a class A license");
				 });
			});


	 });
