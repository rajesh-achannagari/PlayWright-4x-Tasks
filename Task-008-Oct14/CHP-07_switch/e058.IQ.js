let status = 0;
console.log(typeof status);
switch (status) { // // === Strict, value and data type both of them shoul be same.

    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}

