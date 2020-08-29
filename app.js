
var table = document.createElement('table');
function generateTable(){
    var rows=Number(document.getElementById('rows').value)+1
    var columns= Number(document.getElementById('columns').value)+1
    $("#table").remove();
    var table = document.createElement('table');
    table.setAttribute("id", "table")
        for (var i = 1; i < rows; i++){
            var tr = document.createElement('tr');   

            for (var j = 1; j < columns; j++){ 
            var td1 = document.createElement('td');
            var text1 = document.createTextNode('empty');
            td1.appendChild(text1);    
            tr.appendChild(td1);

            }        
      

            table.appendChild(tr);
        }
        document.body.appendChild(table);

}


