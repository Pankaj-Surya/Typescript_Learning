"use strict";
//Interface
exports.__esModule = true;
var transaction1 = {
    payerAccountNumber: 12344,
    payeeAccountNumber: 1245
};
var transaction2 = {
    payerAccountNumber: 12344,
    payeeAccountNumber: 12456
};
var bankAccount = {
    accountNumber: 12344,
    accountHolder: "pankaj",
    balance: 10000,
    isActive: true,
    transactions: [transaction1, transaction2]
};
