var namearr = [];
var phonearr =[];
var streetarr =[];
var namearrvo = [];
var phonearrvo =[];
var streetarrvo =[];
var name;
var phone;
var street;
var namevo;
var phonevo;
var streetvo;

var victims = prompt('How many disaster victims do you wish to enter?');

victims = Number(victims);


for (var i = 1; i < (victims + 1); i++) {
	name = prompt('Please enter the name of Victim ' + i + '.'); 
    namearr.push(name);
	phone = prompt('Please enter the phone number of Victim ' + i + '.');
    phonearr.push(phone);
	street = prompt('Please enter the street address of Victim ' + i + '.');
	streetarr.push(street);
	}

var volunteers = prompt('How many disaster volunteers do you wish to enter?');	

volunteers = Number(volunteers);

for (var j=1; j< (volunteers + 1); j++) {
	namevo = prompt('Please enter the name of Volunteer ' + j + '.');
    namearrvo.push(namevo);
	phonevo = prompt('Please enter the phone number of Volunteer ' + j + '.');
    phonearrvo.push(phonevo);
	streetvo = prompt('Please enter the street address of Volunteer ' + j + '.');
	streetarrvo.push(streetvo);
	}

var victimstring = "There are " + victims + " victim(s).\n";

	for (var k = 0; k < (victims); k++) {
          victimstring +=  "Victim " + (k + 1) + " Name: " + namearr[k] +"\n" + 
          "Victim " + (k + 1) + " Phone: " + phonearr[k] +"\n" + 
          "Victim " + (k + 1) + " Address: " + streetarr[k] +"\n" + "------------------------------" + "\n";   
          }

var volunteerstring = "There are " + volunteers + " volunteer(s).\n";

	for (var m = 0; m < (volunteers); m++) {
          volunteerstring +=  "Volunteer " + (m + 1) + " Name: " + namearrvo[m] +"\n" + 
          "Volunteer " + (m + 1) + " Phone: " + phonearrvo[m] +"\n" + 
          "Volunteer " + (m + 1) + " Address: " + streetarrvo[m] +"\n" + "------------------------------" + "\n";   
          }



alert(victimstring + volunteerstring);


