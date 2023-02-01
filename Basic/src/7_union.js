//Unions
//1.primituve
var score = 33;
score = 44;
score = "dd";
//2.custom typee
var hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };
//3.function
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
