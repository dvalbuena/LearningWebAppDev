var main = function (){
	"use strict";
	
	var $newHeader;

	var displayRes = function(index){

		$("body").append(" " + index + " ");
	};

	var fizzBuzz = function(index){
		var index;
		/*for loop that iterates to 100*/
		
			if(index%15 === 0){
				displayRes("fizzbuzz");
			}else if (index%3 === 0){
				displayRes("fizz");;
			}else if (index%5 === 0){
				displayRes("buzz");;
			}else{
				displayRes(index);
			}
			
		
	};

	var fizzBuzz_1 = function(){
		$newHeader = $("<h1>").text("fizzBuzz_1");

		$("body").append($newHeader);
		var start = 1;
		var end = 100;
		var index;
		for (index = start; index <= end; index++)
		fizzBuzz(index);
	};
	
	var fizzBuzz_2 = function(start,end){
		$newHeader = $("<h1>").text("fizzBuzz_2");

		$("body").append($newHeader);
		//displayRes("fizzBuzz_1");
		var index;
		for (index = start; index <= end; index++)
		fizzBuzz(index);
	};

	var fizzBuzz_3 = function(arr){
		
		$newHeader = $("<h1>").text("fizzBuzz_3");

		$("body").append($newHeader);
		var length = arr.length;
		//fizzBuzz(arr[0],arr[length - 1]);
		arr.forEach(function(element){
			fizzBuzz(element);
		});
		
	};

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
		};
	};

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