/*Es 2
Scrivere una classe GeometricShape e un main per testarla che contenga:
- le proprieta':name (gianni), type (square), numberOfSides(4), firstSide(3), secondSide(3)
-i metodi: calculatePerimeter(), calculateAreas() getter e stetter per ogni campo 
BONUSd rawShape() -> (su terminale un quadrato con i trattini corrispondenti)
compareShapes(S1,S2) -> ritorna true se s1 e' maggiore di s2*/

const GeometricShape = require("./GeometricShape");

let quadrato = new GeometricShape("gianni", "square", 4, 3, 3);
let rettangolo = new GeometricShape("pino", "rectangle", 4, 4, 5);
console.log(quadrato.calculateAreas());
console.log(quadrato.calculatePerimeter());
quadrato.rawShape();

console.log(rettangolo.calculateAreas());
console.log(rettangolo.calculatePerimeter());
rettangolo.rawShape();

quadrato.compareShapes(quadrato,rettangolo);
