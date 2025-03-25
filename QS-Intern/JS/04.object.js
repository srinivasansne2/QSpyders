//Object
let obj ={
    name:"Sri",
    age:21,
    phone:3322114455
}
console.log(obj);
console.log(obj.phone); //to access the value
obj.phone=1234567890;  //to update the value
console.log(obj);
obj.location="blr"    // Inserting Key & Value
console.log(obj);
delete obj.phone     // Deleting The Key & Value
console.log(obj);

// Nested Object
let nest ={
    name:"Sri",
    age:21,
    phone:{
        Mobile:1236547890,
        Tele:043282244335
    }
}
console.log(nest);

//Function Inside Object

let nestf ={
    movie1:"Kgf",
    movie2:"OG",
    Tickets:function () {
        console.log("Tickets Confirmed");
        
    }
}
nestf.Tickets()