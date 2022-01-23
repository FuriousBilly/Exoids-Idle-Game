//Exoid's Challenger Climb v1.0
//Created by FuriousBilly Discord#7925
//Copyright 2022, FuriousBilly#7925, All rights reserved.

let exoid = {
	money: 0,
	energy: 100,
	lolRank: "Bronze IV",
	mmr: 1,
	clearTime: 30,
	mental: 1,
	judment: 1,
	photographers: 0,
	photoSkills: 0,
	editors: 0,
}

let store = {
	photoClasses: 5,
	hirePhoto: 50,
	editorCost: 100,
	hireSocialMedia: 800,
	lingerie: 50,
	cosplay: 100
}

let vegan = {
	TofuChips: 100,
	ShepherdPie: 200,
	BlackPudding: 300,
	KidneyPie: 400,
	Haggis: 500
}

function printLogs(){
	console.log(exoid);
	console.log(store);
}

function addMoney(){
	exoid.money += 10000
	document.getElementById("money").innerHTML = exoid.money + "£ in the Bank"
}

function photoShoot(){
	exoid.money += 1 + exoid.photoSkills
	document.getElementById("money").innerHTML = exoid.money + "£ in the Bank"
}

function studyPhoto(){
	if(exoid.money >= store.photoClasses){
		exoid.money -= store.photoClasses
		exoid.photoSkills += 1
		store.photoClasses *= 2
		document.getElementById("money").innerHTML = exoid.money + "£ in the Bank"
		document.getElementById("photoClasses").innerHTML = "Take Photography Class £" + store.photoClasses
	}
}

function hirePhotographer(){
	if(exoid.money >= store.hirePhoto){
		exoid.money -= store.hirePhoto
		store.hirePhoto *= 2
		exoid.photographers += 1
		document.getElementById("money").innerHTML = exoid.money + "£ in the bank"
		document.getElementById("hirePhotographer").innerHTML = "Hire Photographer £" + store.hirePhoto + " (Photographer Count = " + exoid.photographers +")"
	}
}

function bank(){
  exoid.money += (exoid.photographers + (exoid.editors * 3))
  document.getElementById("money").innerHTML = exoid.money + "£ in the bank"
}

function hireEditor(){
	if(exoid.money >= store.editorCost){
		exoid.money -= store.editorCost
		store.editorCost *= 2
		exoid.editors += 1
		document.getElementById("money").innerHTML = exoid.money + "£ in the bank"
		document.getElementById("hireEditor").innerHTML = "Hire Editor £" + store.editorCost + " (Editor Count = " + exoid.editors +")"
	}
}

function TofuChips(){
	if(exoid.money >= vegan.TofuChips)
		exoid.money -= vegan.TofuChips
		exoid.energy += 10
		document.getElementById("money").innerHTML = exoid.money + "£ in the bank"
		document.getElementById("energy").innerHTML = exoid.energy + " Vegan Power"
}

function ShepherdPie(){
	if(exoid.money >= vegan.ShepherdPie)
		exoid.money -= vegan.ShepherdPie
		exoid.energy += 20
		document.getElementById("money").innerHTML = exoid.money + "£ in the bank"
		document.getElementById("energy").innerHTML = exoid.energy + " Vegan Power"
}

function BlackPudding(){
	if(exoid.money >= vegan.BlackPudding)
		exoid.money -= vegan.BlackPudding
		exoid.energy += 30
		document.getElementById("money").innerHTML = exoid.money + "£ in the bank"
		document.getElementById("energy").innerHTML = exoid.energy + " Vegan Power"
}

function KidneyPie(){
	if(exoid.money >= vegan.KidneyPie)
		exoid.money -= vegan.KidneyPie
		exoid.energy += 40
		document.getElementById("money").innerHTML = exoid.money + "£ in the bank"
		document.getElementById("energy").innerHTML = exoid.energy + " Vegan Power"
}

function Haggis(){
	if(exoid.money >= vegan.Haggis)
		exoid.money -= vegan.Haggis
		exoid.energy += 50
		document.getElementById("money").innerHTML = exoid.money + "£ in the bank"
		document.getElementById("energy").innerHTML = exoid.energy + " Vegan Power"
}

function playLoL(){
	let skill = (((exoid.clearTime - 30) * -1) + exoid.judment + exoid.mental)
	let result = (Math.random(100) * (100 - 1) + 1);
	console.log(skill, result);
	if(exoid.energy >= 25){
		exoid.energy -= 25
		if(skill >= result){
			exoid.mmr += 1
			document.getElementById("lolMMR").innerHTML = exoid.mmr + " MMR"
			document.getElementById("result").innerHTML = "+1 MMR"
			if(exoid.mmr > 10)
				document.getElementById("lolRank").innerHTML = "League Rank = Bronze"
			if(exoid.mmr > 20)
				document.getElementById("lolRank").innerHTML = "League Rank = Silver"
			if(exoid.mmr > 30)
				document.getElementById("lolRank").innerHTML = "League Rank = Gold"
			if(exoid.mmr > 40)
				document.getElementById("lolRank").innerHTML = "League Rank = Platinum"
			if(exoid.mmr > 50)
				document.getElementById("lolRank").innerHTML = "League Rank = Diamond"
			if(exoid.mmr > 60)
				document.getElementById("lolRank").innerHTML = "League Rank = Master"
			if(exoid.mmr > 70)
				document.getElementById("lolRank").innerHTML = "League Rank = GrandMaster"
			if(exoid.mmr > 80)
				document.getElementById("lolRank").innerHTML = "League Rank = Challenger"
				
		}
		else{
			if(exoid.mmr > 1){
				exoid.mmr -= 1
			}
			document.getElementById("lolMMR").innerHTML = exoid.mmr + " MMR"
			document.getElementById("result").innerHTML = "-1 MMR"
		}
		document.getElementById("energy").innerHTML = exoid.energy + " Vegan Power"
	}
	else
		document.getElementById("result").innerHTML = "You don't have enough VEGAN POWERS to play"
}

function watch(){
	if((exoid.energy >= 25) && (exoid.judment < 30)){
		exoid.judment += 1
		exoid.energy -= 25
		document.getElementById("Watch2").innerHTML = "Cost 25 Vegan Powers"
		document.getElementById("energy").innerHTML = exoid.energy + " Vegan Power"
		document.getElementById("Judgment").innerHTML = "Judgment Level " + exoid.judment + "/30"
	}
	else if(exoid.energy >= 25 && exoid.judment >= 30){
		document.getElementById("Watch2").innerHTML = "You Are at Max Judgement"
	}
		
	else{
		document.getElementById("Watch2").innerHTML = "You Don't Have Enough Vegan Power Stupid! It Cost 25 Vegan Power"
	}
	
}

function debate(){
	if((exoid.energy >= 25) && (exoid.mental < 30)){
		exoid.mental += 1
		exoid.energy -= 25
		document.getElementById("Mental2").innerHTML = "Cost 25 Vegan Powers"
		document.getElementById("energy").innerHTML = exoid.energy + " Vegan Power"
		document.getElementById("Mental").innerHTML = "Mental Strength Level " + exoid.mental + "/30"
	}
	else if(exoid.energy >= 25 && exoid.mental >= 30){
		document.getElementById("Mental2").innerHTML = "You Are at Max Confidence"
	}
		
	else{
		document.getElementById("Mental2").innerHTML = "You Don't Have Enough Vegan Power Stupid! It Cost 25 Vegan Power"
	}
}

function practice(){
	if((exoid.energy >= 25) && (exoid.clearTime > 1)){
		exoid.clearTime -= 1
		exoid.energy -= 25
		document.getElementById("Practice2").innerHTML = "Cost 25 Vegan Powers"
		document.getElementById("energy").innerHTML = exoid.energy + " Vegan Power"
		document.getElementById("Clear").innerHTML = "First clear takes " + exoid.clearTime + " minutes"
	}
	else if(exoid.energy >= 25 && exoid.clearTime == 1){
		document.getElementById("Practice2").innerHTML = "Your clear time can't get any faster UwU"
	}
		
	else{
		document.getElementById("Practice2").innerHTML = "You Don't Have Enough Vegan Power Stupid! It Cost 25 Vegan Power"
	}
}

var mainGameLoop = window.setInterval(function(){
  bank()
  //console.log(exoid);
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("ExoidsChallengeSave", JSON.stringify(exoid))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("ExoidsChallengeSave"))
if (savegame !== null) {
  exoid = savegame
}