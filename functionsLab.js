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

    if(operation === 'add'){

        return num1 + num2
    }
    else if(operation === 'multiply'){

        return num1 * num2
    }
    else if (operation === 'subtract'){

        return num1 - num2 
    }
    else if (operation ==='division'){

        return num1/num2
    }
    else if (operation === 'exponent'){

        return num1 ** num2
    }
}

console.log(calculate(12,3,'division')); 