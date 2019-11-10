// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(props) {
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }

class CubeMaker extends CuboidMaker {
    constructor(props) {
        super(props); 
    }

    cubeVolume() {
        return this.length ** 3;
    }
    cubeSurfaceArea() {
        return 6 * (this.length ** 2);
    }
}
  
const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5
});

const newCube = new CubeMaker ({
    length: 4,
    width: 5,
    height: 5
})

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(newCube.cubeVolume());
console.log(newCube.cubeSurfaceArea());


// Test your volume and surfaceArea methods by uncommenting the logs below:

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.



 