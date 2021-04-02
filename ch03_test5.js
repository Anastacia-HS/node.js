var Person = {};

Person['age'] = 19;
Person['name'] = '3203 권혜수';
Person.add = function(a, b) {
  return a + b;
};

console.log('3203 권혜수 더하기 : %d', Person.add(10, 10));