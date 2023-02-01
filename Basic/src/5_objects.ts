//Objects

// const User ={
//     name: "pankaj",
//     email: "pankaj@gmail.com",
//     isActive: false,
// }



//2.passed as param 
function createUser({}){}

let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

createUser(newUser)


//3.return
function createCourse():{name:string, isActive:boolean}{
     return {name: "p",isActive:false}
}

//4. custom type 

type Us ={
    name: string,
    email: string,
    isActive: boolean,
}

function createUS(user: Us):Us{
    return {name: "sss", email: "ssss", isActive: true}
}

export {}

//5.readonly
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser : User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.email = "h@gmail.com"
//myUser._id = "asa"
