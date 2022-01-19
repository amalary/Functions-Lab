function printGreeting(name){

    return `Hello there, ${name}`; 
}

console.log(printGreeting('Grace')); 

function reverseWordOrder(string){
    let text = string.split(' ')
    return text.reverse()
}; 

console.log(reverseWordOrder('Anthony me call'))

function calculate(num1,num2,operation){

    if(operation.toLowerCase() === 'add'){

        return num1 + num2
    }
    else if(operation === 'multiply'){

        return num1 * num2
    }
    else if (operation.toLowerCase() === 'subtract'){

        return num1 - num2 
    }
    else if (operation.toLowerCase() ==='division'){

        return num1/num2
    }
    else if (operation.toLowerCase() === 'exponent'){

        return num1 ** num2
    }
}

console.log(calculate(12,3,'Division')); 


// Pandigital 
// Get help 




if(2){
    console.log('true'); 
}
else {
    console.log('false'); 
};

console.log(numStr1.length);
console.log(numStr1.length); 
console.log(numStr2.length);

// Anything greater than 0 is == true 

// memoization  


const numString1 = '53657687691428890'; 
const numString2 = '0123323454'; 

function panDigital(numString){
    let array = ['0','1','2','3','4','5','6','7','8','9'];

    for(let i = 0; i <numString.length; i++){
        if(!array.includes(numString[i])){
            continue;
        };
        array.splice(array.indexOf(numString[i],1));
        
    };
    return !array.length;
}

console.log(panDigital(numString1));



const userInput = prompt("Please enter some input");


function printGreeting2(name){

    return alert(`Hello there, ${name}`); 
}

console.log(printGreeting('Grace')); 


function calculate2(num1,num2,operation ='string'){

    if(operation.toLowerCase() === 'add'){

        return num1 + num2
    }
    else if(operation === 'multiply'){

        return num1 * num2
    }
    else if (operation.toLowerCase() === 'subtract'){

        return num1 - num2 
    }
    else if (operation.toLowerCase() ==='division'){

        return num1/num2
    }
    else if (operation.toLowerCase() === 'exponent'){

        return num1 ** num2

    }else if ( typeof operation === 'string' && typeof num2 === 'sqrt'){
    }
        return Math.sqrt(num1)
}

console.log(calculate2(144,'sqrt')); 



