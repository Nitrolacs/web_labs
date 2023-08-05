'use strict';
// Несколько способов создания объектов
let student = {
	age: 19,
	name: "Никита",
	surname: "Терентьев",
	group: "КИ21-16/1б",
	printInfo: function() {
		console.log(`Студент: ${this.surname} ${this.name}, возраст: ${this.age} лет, группа: ${this.group}`);
	}
}

student.printInfo()

function Student(age, name, surname, group) {
	this.age = age;
	this.name = name;
	this.surname = surname;
	this.group = group;
}

Student.prototype.printInfo = function() {
	console.log(`Студент: ${this.surname} ${this.name}, возраст: ${this.age} лет, группа: ${this.group}`);
}

let newStudent = new Student(20, "Иван", "Иванов", "КИ21-17/1б");
newStudent.printInfo()

student.age = 20;
let newStudentSurname = newStudent.surname;
console.log(`Доступ на чтение: ${newStudentSurname}, доступ на запись: ${student.age} (было 19)`);

// Создание конструктора для собственного объекта
function Circle(x, y, radius) {
	this._centerX = x;
	this._centerY = y;
	this._radius = radius;

	this.circumference = function() {
		return 2 * Math.PI * radius;
	}
	this.areaOfCircle = function() {
		return Math.PI * Math.pow(radius, 2);
	}
}

Object.defineProperty(Circle.prototype, 'centerX', {
	get: function() {
		 return this._centerX;
	},
	set: function (newX) {
		this._centerX = newX;
	}
})

Object.defineProperty(Circle.prototype, 'centerY', {
	get: function() {
		 return this._centerY;
	},
	set: function (newY) {
		this._centerY = newY;
	}
})

Object.defineProperty(Circle.prototype, 'radius', {
	get: function() {
		 return this._radius;
	},
	set: function (newRadius) {
		this._radius = newRadius;
	}
})

Object.defineProperty(Circle.prototype, 'diameter', {
	get: function() {
		 return this._radius * 2;
	}
})

let circle = new Circle(3, 4, 5);

console.log(circle.circumference());
console.log(circle.areaOfCircle());

console.log(circle.centerX);
console.log(circle.centerY);
console.log(circle.radius);
console.log(circle.diameter);

circle.radius = 7;
console.log(circle.radius);
console.log(circle.diameter);

// Расширение встроенного типа
Array.prototype.average = function() {
	let sum = 0;
	for (let index = 0; index < this.length; index++) {
		sum += this[index];
	}

	return sum / this.length;
}

let testArr = [10, 3, 1, 6, 2, 5, 4, 7, 8, 9]
let testAverage = testArr.average();
console.log(`Среднее арифметическое для массива: ${testAverage}`);