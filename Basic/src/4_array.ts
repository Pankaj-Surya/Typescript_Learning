//Array

// 1.
// Declare and  initialize
const names: string[] =[]
const nums : Array<number> =[]


// custom type 
type User ={
    name : string,
    isActive : boolean
}

//2. Custom type Array
const allUser : User[]= []

//3. 2D array
const MLModels : number[][] = [
    [255,255,255]
]

names.push("spiderman")
nums.push(2)
allUser.push({name: "", isActive: true})


export {}