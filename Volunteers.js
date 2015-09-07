var name;
var phone;
var street;

var victims = prompt('How many disaster victims do you wish to enter?');

for (var i=1; i<victims + 1; i++) {
	var name = prompt('Please enter the name of Victim ' + i + '.');

	var phone = prompt('Please enter the phone number of Victim ' + i + '.');

	var street = prompt('Please enter the street address of Victim ' + i + '.');
	name.push(name);
	phone.push(phone);
	street.push(street); }

var volunteers = prompt('How many disaster volunteers do you wish to enter?');	

for (var i=1; i<volunteers + 1; i++) {
	var name = prompt('Please enter the name of Volunteer ' + i + '.');

	var phone = prompt('Please enter the phone number of Volunteer ' + i + '.');

	var street = prompt('Please enter the street address of Volunteer ' + i + '.');
	name.push(name);
	phone.push(phone);
	street.push(street); }


