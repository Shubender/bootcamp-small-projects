//Regular func syntax

function sum(a,b) {
    return a+b;
}

//Anonymous func saved to a var

const sum = (a,b) => {
    return a+b;
}

// OR (different syntax)

const sum = function (a,b) {
    return a + b;
}

//Anonymous func as callback func

setTimeout(() => {
    console.log('delayed log');
}, 1000);



