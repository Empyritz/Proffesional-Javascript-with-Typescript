// Boolean 
let muted: boolean = true

//Numbers 
let numerador: number = 42
let denominador: number = 6
let resultado = numerador / denominador;

//String 
let nombre: string = 'Richard'
let saludo = `Me llamo ${nombre}`

//Array
let people: string[] = [];
people = ['Isabel', 'Richard', 'Gary'];
// people.push("9000")
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Fabian')
peopleAndNumbers.push(9011)

//Enum 
enum Color {
  Rojo = 'Rojo', 
  Verde = 'Verde',
  Azul = 'Azul',
}
let colorFavorito: Color = Color.Azul
console.log(`Mi color fav es ${colorFavorito}`)

//Any 
let comodin: any = 'Joker';
comodin = { type: 'Wildcard'};

//Object
let someObject: object = { type: 'Wizard'}

//Functions
function add(a: number, b: number): number {
  return a + b
}
const sum = add(4, 6)

//---
function createAdder (a: number): (number) => number {
  return function (b: number) {
    return b + a
  }
}
const addFour = createAdder(4)
const fourPlusSix = addFour(6)

//---
function fullName(firstName?: string, lastaName: string = 'Nava' ): string {
  return `${firstName} ${lastaName}`
}
const fabian = fullName('Fabian')
console.log(fabian)

//Interface
interface Rectangulo {
  ancho: number,
  alto: number,
  color?: Color
}
let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Azul
}
function area(r: Rectangulo): number {
  return r.alto * r.ancho
}
const areaRect = area(rect)
console.log(areaRect)

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}
console.log(rect.toString())

