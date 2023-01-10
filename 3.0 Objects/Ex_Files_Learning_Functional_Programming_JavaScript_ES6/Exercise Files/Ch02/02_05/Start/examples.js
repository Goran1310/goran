
const createPrinter = () => () => {
    console.log('Hello')
}

const createPrinter1 = function () {
    return function () {
        console.log('Hello')
    }
}
const createMultiplier = y => x => x * y;

const double = createMultiplier(2)
const triple = createMultiplier(3)
const quadruple = createMultiplier(4)

double(3)