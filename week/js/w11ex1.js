console.log("Hello")

// Create objects - using literal notation
// curly bracets- arrays or object?

// declare the objet?
let person1 = {
    firstName : "Tahia", //firstName is the key or property, must be unique, string 
    // edit 1
    lastName : "Hossain", //(Here if you name the key "last Name"- it won't work in the "." notation bc key cannot be multiple words)
    "your country": "Bangladesh", // But you can access this in the array notation
    // edit 2
    age: 19,
    lastAccess: new Date(),
    // edit 3
    address : {streetNumber: 18, streetName:"abab", city: "Oshawa"}, // This is a new object inside an object, address is a
    // property of person1, and this nested object has its own separate properties
    // edit 4
    print: function(){console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`)}
};

// to access the properties of the object
// The notation of the object is "person1" so you call that and then you call the name of the property- (object.property)
console.log(person1.firstName)
 // To use the array index, here firstName is the name of the element you wish to call from the object array)
console.log(person1["firstName"])
// edit 1
console.log(person1.lastName) // Would not work if u put person.your Country (must be one word)
console.log(person1["your country"]) // Will work for your Country and lastName both (don't need to be one word keys)
// edit 2
console.log(person1.age); //19
person1.age = 49;
console.log(person1.age); //49
console.log(person1.lastAccess); // ask someone

// edit 3
console.log(person1.address.city) // Oshawa, calling a property inside an object inside another object

// edit 4
person1.print();

person1.height = "176 cm"; //?
console.log(person1.height);

// ------------------------------------------------------------------------------------------------------------------------------------

// edit 5
// Create objects - using function constructor

function PersonV2(first = "XXX", last = "YYY", age = 18){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.lastAccess = new Date();
    this.height = "166 cm"; // Default height
    this.print = function(){console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`)};
};

// edit 6
let p1 = new PersonV2('Sam', 'Tom', 34); // Creating a new object with the declared properties above
let p2 = new PersonV2('Tah', 'Did', 12);

// edit 7
let p3 = new PersonV2();

// edit 6
console.log(p1.firstName); // Sam
p1.print(); // does not work, why?? console.log wasnt included in the this.print part of code
p2.print(); // does not work, why?

// edit 8
console.log(p1.height);// 166cm
console.log(p2.height);// 166 cm
console.log(p3.height);// 166 cm

p2.height ="222 cm";

console.log(p1.height);// 166cm
console.log(p2.height);// 222 cm
console.log(p3.height);// 166 cm

// --------------------------------------------------------------------------------------------------------------------------------------

// edit 9
// Create object using classes

class PersonV3 {
    firstName;
    lastName;
    age;
    constructor(first, last, age){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    print(){
        console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`);
    }
}

// edit 10

let p4 = new PersonV3("Max", "Medok", 19);

p4.print();

// --------------------------------------------------------------------------------------------------------------------------------------------

// edit 11
// Inheritance

class Student extends PersonV3{
    grade;
    constructor(first, last, age, g) {
        super(first, last,age); // super class??
        this.grade = g;
    }
}

let s1 = new Student("DD", "MM", 23, 88);
s1.print();
console.log(s1.grade);