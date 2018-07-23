
let first = `Hello`;
let second = `World`;

document.write('zadanie1 :' +`${first} ${second}`+  '<br>');


const multiply = (x = 1,y = 1) => x * y;
document.write('zadanie2: '+ multiply(7) + '<br>')

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var total = 0;

function avarage() {
	for(var i = 0; i < grades.length; i++) {
    	total += grades[i];
	}
	return avg = total / grades.length;
	}

document.write('zadanie3i4: '+ avarage() + '<br>')


const array = [1, 4, 'Iwona', false, 'Nowak']
const [,,FirstName,,SecondName] = array
document.write('zadanie5 :'+ FirstName + SecondName)