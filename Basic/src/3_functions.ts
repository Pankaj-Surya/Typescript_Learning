// function

//1.function with void return type
function addTwoV(a: number, b: number):void{
    console.log(a+b);
}

 addTwoV(1,2);


//2.function with specific return type -> number
function addTwo(a: number, b: number):number{
    return a+b;
}

let add : number = addTwo(1,2);


//3.Arrow function 
let login = (us:string, ps:string):string=>{
     return `login successfully with ${us} and ${ps}`;    
}

login("p@gmail.com","123454")

//4 HigherOrder function -> map
const heros =["pankaj","balaji","ram","sham"]


heros.map((hero):string=>{
    return `hero is ${hero}`
})


//5 Error
function handleError(errMsg:string):never{
    throw new Error(errMsg);
}


export {}


