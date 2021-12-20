let person = "Gohar"
let person2 = "Random homeless man on street" //both are male
let firstPP = 2 //in inches
let secondPP = 9 
let place = "Sex Hotel"
let room = "Room 69"
let position = ("not defined yet")
let time = ("14:00") //2 pm
let date = ("20th December 2021")

var prompt = require("prompt");
prompt.start();
console.log("I will now ask you for your name.");
prompt.get(["name"], function(err, res){
console.log("Hello ".concat(res.name, ". How are you"));
});