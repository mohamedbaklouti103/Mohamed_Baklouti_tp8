//ex1
let age = 25;
let name = "alice" ; 
let isStudent = true;

console.log("l'age de "+name +" est "+age);
console.log(isStudent);

//ex2
let x=10;
let y=5;
a=x+y;
s=x-y;
m=x*y;
d=x/y;
console.log("addition : "+a);
console.log("soustraction : "+s);
console.log("multiplication : "+m);
console.log("division : "+d);

if (a>s) {
    console.log("superieur");
}
else if (a<s)
{
    console.log("inferieur");
}
else if (a==s) {
    console.log("egale");
}
else if (a===s) {
    console.log("egale");
}
else if (a>=s) {
    console.log("superieur ou egale");
}

//ex3

if (age>=18){
    console.log("majeur");
}
else {
    console.log("mineur");
}

for(j=1;j<11;j++){
    console.log(j);
}

let fruits = ["pomme", "banane", "orange"];
let i = 0;

while (i<fruits.length){
    console.log(fruits[i]);
    i++;
}

//ex4
function Addition(a,b){
    return a+b;
}
console.log(Addition(2,8));


let multiply = (a, b) => a * b;

console.log(multiply(2,3));

//Manipulation de DOM

// EX1



