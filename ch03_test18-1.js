function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.walk = function(speed) {
  console.log(speed + "km 속도로 걸어갑니다.");
}

Person.prototype.eat = function(food) {
  console.log(food + "를 맛있게 먹습니다.");
}

Person.prototype.sing = function(song) {
  console.log(song + "를 역동적으로 부릅니다.");
}

var person01 = new Person('3203 권혜수', 20);
var person02 = new Person('김감자', 22);
var person03 = new Person('박감자', 22);

console.log(person01.name + '객체의 walk(10)을 호출합니다.');
console.log(person02.name + '객체의 eat(pizza)을 호출합니다.');
console.log(person03.name + '객체의 sing(dynamite)을 호출합니다.');

person01.walk(10);
person02.eat('pizza');
person03.sing('dynamite');
