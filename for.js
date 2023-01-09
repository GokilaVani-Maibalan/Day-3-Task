var data = [{
    "id" : "Gokila", 
    "age" : "22",
    "mail" : "gokila@gmail.com"
},
{
    "id" : "Gokul", 
    "age" : "23",
    "mail": "gokul@gmail.com"
}];
//for loop
for(var i = 0; i < data.length; i++) {
    var result = data[i];

    console.log(result.id);
    console.log(result.age);
    console.log(result.mail);

}
//for Each
data.forEach(function(result) { console.log(result.age); });

//for In
for (var key in data) {
if (data.hasOwnProperty(key)) {
  console.log(data[key].id);
 
}
}
//for Of
let text = "";
for (let x of data[key].id) {
 text += x; 
}
 console.log(text);
