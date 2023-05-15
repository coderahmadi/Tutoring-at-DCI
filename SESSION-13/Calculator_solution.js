
class Calculator {
    constructor() {
        //properties
        this.PI = Math.PI;
        this.E = Math.E;
    }

    //getter
    get pi() {
        return `PI (${this.PI})`;
    }

    get e() {
        return `Euler's number (${this.E})`;;
    }


    //methods

    ratio(x, y, width) {
        let heightRatio = (width / x) * 7;
        return `Height is ${heightRatio} on ratio ${x}:${y}`
    }

    percentage(x, y) {
        if (y !== 0) {
            return `${(x * 100) / y}%`
        } else {
            return `Error: Divisor cannot be zero`
        }
    }

    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return (y - x);
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y !== 0) {
            return x / y;
        } else {
            return `Error: Divisor cannot be zero`
        }
    }

    modulate(x, y) {
        if (y !== 0) {
            return x % y;
        } else {
            return `Error: Divisor cannot be zero`;
        }
    }

    elevate(x, y) {
        return Math.pow(x, y);
    }

    sqrt(x) {
        if (!(x < 0)) {
            return Math.sqrt(x);
        } else {
            return `Error: Cannot calculate the square root of a negative number'`;
        }
    }
}

const calc = new Calculator();
console.log(calc.pi);
console.log(calc.ratio(5, 7, 300)); // Height is 420 on ratio 5:7
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // 2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.modulate(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5