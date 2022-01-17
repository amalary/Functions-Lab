function printGreeting(name){

    return `Hello there, ${name}`; 
}

console.log(printGreeting('Grace')); 

function reverseWordOrder(string){
    let text = string.split(' ')
    return text.reverse()
}; 




console.log(reverseWordOrder('Anthony me call'))