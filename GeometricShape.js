
let GeometricShape = class {
    constructor(name, type, numberOfSides, firstSide, secondSide) {
        this.name = name;
        this.type = type;
        this.numberOfSides = numberOfSides;
        this.firstSide = firstSide;
        this.secondSide = secondSide;
    }

    calculatePerimeter(){
        let perimeter = 0;
        perimeter = (this.firstSide + this.secondSide) * 2; 
        return perimeter;
    }


    calculateAreas(){
        let area =0;
        area = this.firstSide * this.secondSide;
        return area ;
    }

    getName() {
        return this.name
    }

    getType() {
        return this.type
    }

    getNumberOfSides() {
        return this.numberOfSides
    }

    getFirstSide() {
        return this.firstSide
    }

    getSecondSide() {
        return this.secondSide
    }

    rawShape(){
        let side1= "-";
        
        console.log(side1.repeat(this.firstSide));
        for (let i=0; i< (this.secondSide-2);i++){
            console.log(side1.repeat(this.firstSide));
        }
        console.log(side1.repeat(this.firstSide));
    }

    compareShapes(S1,S2){
        if (S1.calculateAreas() > S2.calculateAreas()) {
            return true
            
        } else {
            return false
        }
    }
}

module.exports = GeometricShape;