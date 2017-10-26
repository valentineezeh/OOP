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
		it ("returns the number of seats", () => {
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
 		// for vehicleInstance;
 		before(() =>{
 		 carInstance = new Car (4, 4, 4);
 		});
 		it ("returns the number of seats", () => {
 			assert.equal(carInstance.numofseats, 4);
 		});
 		it ("can be changed", () => {
 			carInstance.numofseats = 4;
 			assert.equal(carInstance.numofseats, 4);

 		});
		it ("returns 'vroom vroom' when vehicle accelerate", function () {
			 assert.equal(carInstance.accelerate(), "vroom vroom");
		});

 	//ReferenceError
       	it ("returns 'Here are your car papers' for a method of getVehiclePapers", function () {
 						assert.equal(carInstance.getVehiclePapers(), "Here are your car papers");
       	});
     });


  });
	describe("Truck", () => {
	 describe ("numofseats", () => {
		 // let vehicleInstance;
		 before(() =>{
			truckInstance = new Truck (4, 4, 8);
		 });
		 it ("returns the number of seats", () => {
			 assert.equal(truckInstance.numofseats, 4);
		 });
		 it ("can be changed", () => {
			 carInstance.numofseats = 10;

			 assert.equal(truckInstance.numofseats, 4);

		 });
		 it ("returns 'vroom vroom' when vehicle accelerate", function () {
		 		assert.equal(truckInstance.accelerate(), "vroom vroom");
		 });
	 //ReferenceError
				 it ("returns 'Your vehicle has 8 wheels and as a result, you get a class A license' for a method of getVehiclePapers", function () {
						 assert.equal(truckInstance.getVehiclePapers(), "Your vehicle has 8 wheels and as a result, you get a class C license");
				 });
			});


	 });
