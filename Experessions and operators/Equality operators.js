// comparison withh no type conversion example 1
console.log(1 == 1);
console.log("hello" == "hello");
console.log("1" == 1);
console.log(0 == false);

// comparison with type conversion  example 2
"1" == 1;
1 == "1";
0 == false;
0 == null;
0 == undefined;
0 == !!null;
0 == !!undefined;
null == undefined;
span;
span;

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;
number1 == number2;

// comparison of objects example 3
const object1 = { key: "value" };
const object2 = { key: "value" };

object == object2;
object == object2;

// comapring strings and string objects example 5

const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2);
console.log(string1 == string3);
console.log(string2 == string3);
console.log(string3 == string4);
console.log(string4 == string2);

//comaplrison dates and string example 5

const d = new Date('December 17, 1995 03:24:00');
const s = d.toString();
console.log(d==s);

//comparison arrays and string example 6
const a = [1,2,3];
const b ="1,2,3";
a == b;

const c = [true,0.5,"hey"];
const e = c.toString();
c == e;

