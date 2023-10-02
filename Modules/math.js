function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}
//1st method

// module.exports = {
//     Addition : add,
//     Multiplication : mul,
//     Subtraction : sub
// };

//2nd method

exports.add = (a,b) => a + b;
