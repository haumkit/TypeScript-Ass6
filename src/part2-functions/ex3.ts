function getValue(input:any):any{
    if(typeof(input) === "string"){
        return input.toUpperCase();
    }
    else if(typeof(input) === "number"){
        return input * 2;
    }
}

console.log(getValue("abc")); 
console.log(getValue(7))