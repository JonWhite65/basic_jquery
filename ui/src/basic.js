import $ from 'jquery'

import './basic.css'

var colorSet = ["red","green","blue"]
var colorSet1 = ["lime","fuchsia","aqua"]
var currentColor=[0,1,2]
var code=[1,1,3,1,2,3]
var currentCode=0
var runLights= false

$(document).ready(function(){

$("#button1").click(function(){
	if(currentColor[0]===2){
		$(".number1").css("background-color",colorSet[0])
		currentColor[0]=0
	}
	else{
		$(".number1").css("background-color",colorSet[currentColor[0]+1])
		currentColor[0]+=1
	}
//	if(code[currentCode]===1){
//		currentCode+=1
//		if(currentCode===6){
//			currentCode=0
//			runLights=!runLights
//			party()
//		}
//	}
//	else{
//		currentCode=0
//	}


})
$("#button2").click(function(){
	if(currentColor[1]===2){
		$(".number2").css("background-color",colorSet[0])
		currentColor[1]=0
	}
	else{
		$(".number2").css("background-color",colorSet[currentColor[1]+1])
		currentColor[1]+=1
	}
//	if(code[currentCode]===2){
//		currentCode+=1
//		if(currentCode===6){
//			currentCode=0
//			runLights=!runLights
//			party()
//		}
//	}
//	else{
//		currentCode=0
//	}

})
$("#button3").click(function(){
	if(currentColor[2]===2){
		$(".number3").css("background-color",colorSet[0])
		currentColor[2]=0
	}
	else{
		$(".number3").css("background-color",colorSet[currentColor[2]+1])
		currentColor[2]+=1
	}
//	if(code[currentCode]===3){
//		currentCode+=1
//		if(currentCode===6){
//			currentCode=0
//			runLights=!runLights
//			party()
//		}
//	}
//	else{
//		currentCode=0
//	}

})
$("#buttonReset").click(function(){
	currentColor=[0,1,2]
	$(".number1").css("background-color",colorSet[0])
	$(".number2").css("background-color",colorSet[1])
	$(".number3").css("background-color",colorSet[2])
	})
//party(){
//	while(runLights){
//		x=getRandomInt(0,3)
//		$("#button1").css("background-color",colorSet1[x])
//		$("#button2").css("background-color",colorSet1[x])
//		$("#button3").css("background-color",colorSet1[x])
//
//
//	}
//	$("#button1").css("background-color",])
//	$("#button2").css("background-color",)
//	$("#button3").css("background-color",)
//
//
//}
//function getRandomInt(min, max) {
//	  min = Math.ceil(min);
//	  max = Math.floor(max);
//	  return Math.floor(Math.random() * (max - min)) + min;
//	}

})
