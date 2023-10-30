// basic types
let i: number = 4;
let j: string = "ibrahim";
let k: boolean = true;
let m: any = "true";
let n: number[] = [1, 2, 3, 4, 5, 6, 7];
//tuple of typescript

let even: [number, number, number, number, number, number, string, number] = [
	2,
	4,
	6,
	8,
	10,
	12,
	"string",
	14,
];
let odd: [string, number][];
odd = [
	["1st ", 1],
	["2nd ", 2],
];

//typescript union  veritable

let union: string | number = "99";

//enum in type script

enum Direction {
	up = 1,
	down,
	right,
	left,
}

console.log(Direction);

//object
type obj = {
	id: number;
	name: string;
};

let obj: obj = {
	id: 1334,
	name: "jhon",
};

//  assertation   ,changing type

let cid: any = "dude";
let customerId = <number>cid;

//functon
function addNum(x: number, y: number): number {
	return x + y;
}
//no return type
function msg(): void {
	console.log("this is typscript function");
}
//two declaration typscript type,interface

console.log(typeof "peacook", "peacook");

//interfaces  typscript

interface objectExam {
	readonly cid: number; //seems like private method
	acid: number;
	name?: string;
	msg: () => void;
}

let MathExam: objectExam = {
	cid: 133,
	acid: 235,
	name: "jony",
	msg: () => console.log("hellow math student"),
};

type objectExams = {
  cid: number;
  name?: string;
  msg: () => void;
};

class Mathematics implements objectExams {
  readonly cid: number;
  acid: number;
  name: string;
  id!: number; // Definite assignment assertion for id

  constructor(cid: number, name: string, id: number) {
      this.cid = 134;
      this.acid = 2353;
      this.name = "random";
  }

  msg() {
      console.log("Hello math student");
  }

  randomSum(): number {
      return this.cid + this.acid;
  }
  randomMinus(cid:number,acid:number): number {
    return  acid - cid
  }
}

class mathematician extends Mathematics{
  profile : string;
 constructor(id:number,profile:string,acid:number ,name:string){
  super(cid,name,acid);
  this.name=name
  this.profile = profile;

 }
 msg ():void {

  console.log(`msg:${this.name} is high profile at ${this.profile}` );
  

}
}

const mathObject = new Mathematics(10,'lily',234);
const math = new mathematician(13,'Ms.c',13,"jasmine");
console.log(math.msg());

console.log(mathObject.cid); // Output: 134
console.log(mathObject.name); // Output: "random"
mathObject.msg(); // Output: "Hello math student"

mathObject.id = 10; // Assign a value to the id property
console.log(mathObject.randomSum()); // Output: 2363 (134 + 2353)
console.log(mathObject.randomMinus(23, 5)); 

// ----------------------------------------------
// Generics --------------------------------
function generate <T> (talker:T):T { 

	return talker;
}

let generate_name= generate('shally');
console.log(generate_name);
