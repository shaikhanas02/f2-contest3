let arr = [] ;

let i = 1 ;
function create_tr() {
let table_body = document.getElementById("table_body") ;
 let row = document.createElement("tr");
row.innerHTML = `  <td id="ID">${i}</td>
<td><input type="text" id="name${i}" ></td>
<td><input type="number" id="roll${i}"></td>
<td><input type="text" id="subject${i}" ></td>
<td><input type="number" id="marks${i}"></td>
<td><input type="email" id="markedby${i}"></td>
<td><button id="but" onclick="save_tr()">Save</button></td>      
`
i++ ;
table_body.appendChild(row);
}

let j = 1 ;
         function save_tr(){
        
         let name = document.getElementById(`name${j}`).value ;
         let roll = document.getElementById(`roll${j}`).value ;
         let subject = document.getElementById(`subject${j}`).value ;
         let marks = document.getElementById(`marks${j}`).value ;
         let markedby = document.getElementById(`markedby${j}`).value ;
         if(name && roll && subject && marks && markedby){
            let obj ={
                name : name ,
                roll: roll ,
                subject : subject ,
                marks: marks ,
                markedby : markedby
             } 
    arr.push(obj) ;
    console.log(arr) ;
    j++ ;

         }
         else{
            alert("pls fill required fields") ;
         }
         
        }







