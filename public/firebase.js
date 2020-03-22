var config = {
    "projectId": "this-is-test-2-6b5a1",
    "databaseURL": "https://this-is-test-2-6b5a1.firebaseio.com",
    "storageBucket": "this-is-test-2-6b5a1.appspot.com",
    "locationId": "asia-south1",
    "apiKey": "AIzaSyC_n232wt0PeViTeu2tra8QDqtHGHuatg4",
    "authDomain": "this-is-test-2-6b5a1.firebaseapp.com",
    "messagingSenderId": "206896620670"
  };
firebase.initializeApp(config);
var db = firebase.firestore();


function getData(){
    db.collection('todos').get().then(function(snap){
        render(snap.docs);
    })
}
function render(arr){
    var list=document.getElementById("todoList");
    var content=arr.map(function(item,i){
        var data = item.data();
        console.log(data);
        return "<li>" + data.content + '<button data-id="' + i + '">Delete</button>' + "</li>";
    });
    list.innerHTML=content.join("");
    console.log(content.join(""));
    
}



function addItem(){

    var input=document.getElementById("textinput");
    var newitem = {content: input.value};
    db.collection('todos').add(newitem).then(getData());

}

var addBtn=document.getElementById("add_btn");
// addBtn.onclick=addItem; 
addBtn.addEventListener("click",addItem);

getData();