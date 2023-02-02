//Interface


interface Transaction{
    payerAccountNumber : number;
    payeeAccountNumber : number 
}


interface BankAccount {
    accountNumber : number;
    accountHolder : string;
    balance : number;
    isActive : boolean;
    transactions : Transaction[];
}


const transaction1:Transaction={
    payerAccountNumber : 12344,
    payeeAccountNumber : 1245
}

const transaction2:Transaction={
    payerAccountNumber : 12344,
    payeeAccountNumber : 12456
}

const bankAccount : BankAccount = {
    accountNumber : 12344,
    accountHolder : "pankaj",
    balance : 10000,
    isActive : true,
    transactions : [transaction1,transaction2],
}


//2.  --> Extends
interface Book{
    name : string;
    price: number
}

interface EBook extends Book{
    // name: string;
    // price: number;
    fileSize : number;
    format : string
}

interface AudioBook extends EBook{
    // name: string;
    // price: number;
    // fileSize: number;
    // format: string;
    duration: number;
}

const audBook : AudioBook = {
    name : "Audio Book1",
    price : 100,
    fileSize:200,
    format:"mp3",
    duration:3
}


//3.Merge
interface Product {
    name: string;
    price: number;
}

interface Product {
    size: number;
}

const prod :  Product= {
    name: 'Atomic habits',
    price: 1200,
    size: 45,
};

//4. interface not used for primitive type
// type SanitizedString = string;
// type EvenNumber = number;

// interface SanitizedString extends string {

// }


export {}