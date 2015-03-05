// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
var main = function (){
	"use strict";
	
	var $newHeader;

	var displayRes = function(index){

		$("body").append(" " + index + " ");
	};

	var fizzBuzz = function(index){

		//check which category the number belongs to
			if(index%15 === 0){
				//if multiple of 3 and 5 print fizzbuzz
				displayRes("fizzbuzz");
			}else if (index%3 === 0){
				//if multiple of 3 print fizz
				displayRes("fizz");
			}else if (index%5 === 0){
				//if multiple of 5 print buzz
				displayRes("buzz");
			}else{
				displayRes(index);
			}
			
		
	};

	//function that feeds 1-100 numbers to the fizzbuzz function
	var fizzBuzz_1 = function(){
		$newHeader = $("<h1>").text("fizzBuzz_1");

		$("body").append($newHeader);
		var start = 1;
		var end = 100;
		var index;
		for (index = start; index <= end; index++){
		fizzBuzz(index);
		}
	};
	
	//fizzbuzz function that takes starting and ending number
	//of parameters
	var fizzBuzz_2 = function(start,end){
		$newHeader = $("<h1>").text("fizzBuzz_2");

		$("body").append($newHeader);
		//displayRes("fizzBuzz_1");
		var index;
		for (index = start; index <= end; index++){
		fizzBuzz(index);
		}
	};

	//function fizzbuzz that takes an array of numbers to use
	//instead of counting by itself.
	var fizzBuzz_3 = function(arr){
		
		$newHeader = $("<h1>").text("fizzBuzz_3");

		$("body").append($newHeader);
		arr.forEach(function(element){
			fizzBuzz(element);
		});
		
	};

	//function fizzbuzz that takes an object specificying words
	//to be printed instead of Fizz and Buzz
	var fizzBuzz_4 = function(obj){
		$newHeader = $("<h1>").text("fizzBuzz_4");

		$("body").append($newHeader);

		var div3 = obj.divisibleByThree;
		var div5 = obj.divisibleByFive;
		var index = 1;
		for(; index <= 100; index++){
			if(index%15 === 0){
				displayRes(div3+div5);
			}else if (index%3 === 0){
				displayRes(div3);
			}else if (index%5 === 0){
				displayRes(div5);
			}else{
				displayRes(index);
			}
		}
	};

	//the function that combines fizzbuzz_3 and fizzbuzz_4
	var fizzBuzz_5 = function(arr, obj){
		$newHeader = $("<h1>").text("fizzBuzz_5");

		$("body").append($newHeader);

		var div3 = obj.divisibleByThree;
		var div5 = obj.divisibleByFive;

		arr.forEach(function (element){
			if(element%15 === 0){
				displayRes(div3+div5);
			}else if (element%3 === 0){
				displayRes(div3);
			}else if (element%5 === 0){
				displayRes(div5);
			}else{
				displayRes(element);
			}
		});
	};

	fizzBuzz_1();
	fizzBuzz_2(200,300);
	fizzBuzz_3([101,102,103,104,105,106,107,108,109,110,111,112,113,114,115]);
	fizzBuzz_4({divisibleByThree: "foo",divisibleByFive: "bar"});
	fizzBuzz_5([101,102,103,104,105,106,107,108,109,110,111,112,113,114,115],{divisibleByThree: "foo",divisibleByFive: "bar"});
};
$(document).ready(main);