var first = ['Hello']
var second = ['World']

var connected = [...first,...second]
document.write('zadanie1 :' + connected + '<br>')

function multiply(number1 = '1',number2 = '1') {
	let score = number1*number2
	document.write('zadanie2: '+ score + '<br>')
}

multiply()

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;
document.write('zadanie3i4: '+ avg + '<br>')

const array = [1, 4, 'Iwona', false, 'Nowak']
const [,,FirstName,,SecondName] = array
document.write('zadanie5 :'+ FirstName + SecondName)