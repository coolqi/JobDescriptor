// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }

// function myCreateFunction() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow();
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     cell1.innerHTML = "new job position";
//     cell2.innerHTML = "";
//     cell3.innerHTML = "";
//     cell4.innerHTML = "";
// }
// 
$(function(){
    $(".deleteRow").click(function(){
        var $row=$(this).parents("tr");
        if(confirm("Are you sure you want to delete it??")){
            $row.remove();
        }
        return false;
    });
});