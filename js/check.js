// JavaScript Document


/*primary_focus page*/
/*beyondper(): percentage check as the sum of four % should be not more than 100%*/
/*coding by xin li, 15/4/2016, 22.44*/

var total;

function getTotalSumFunction() {

    var oper_val = $('#primary_focus_oper_rtbar').val();
    var pre1 = oper_val.indexOf('%');
    var oper_val_num = parseInt(oper_val.substring(0,pre1));
    
    var cons_val = $('#primary_focus_cons_rtbar').val();
    var pre2 = cons_val.indexOf('%');
    var cons_val_num = parseInt(cons_val.substring(0,pre2));

    var teamlead_val = $('#primary_focus_teamlead_rtbar').val();
    var pre3 = teamlead_val.indexOf('%');
    var teamlead_val_num = parseInt(teamlead_val.substring(0,pre3));
    
    var strat_val = $('#primary_focus_strat_rtbar').val();
    var pre4 = strat_val.indexOf('%');
    var strat_val_num = parseInt(strat_val.substring(0,pre4));
    
    //total up the sum
    var sumfour = oper_val_num + cons_val_num +teamlead_val_num +strat_val_num;
    total = sumfour;
    //show the total sum on text
    $("#total_of_four_rating_bar").html("Total: " + sumfour + "%");

    if(sumfour > 100)
    {
        //alert(oper_val_num +"-"+cons_val_num+"-"+teamlead_val_num+"-"+strat_val_num+"-"+sumfour);
        alert('please notice that the sum between those four percentage of focus should be 100%.'); 
        $('#total_of_four_rating_bar').css("backgroundColor","#FF0000");

    }
    else
    {
        $('#total_of_four_rating_bar').css("backgroundColor","transparent");
    }


    var ctx = $("#mycanvas").get(0).getContext("2d");

        //pie chart data
        //sum of values should be 100%
        var data = [{
                value: oper_val_num,
                color: "cornflowerblue",
                highlight: "lightskyblue",
                label: "Operational"
            }, {
                value: cons_val_num,
                color: "lightgreen",
                highlight: "yellowgreen",
                label: "Consultative"
            }, {
                value: teamlead_val_num,
                color: "#e67e22",
                highlight: "orange",
                label: "Project M"
            }, {
                value: strat_val_num,
                color: "#DD4B39",
                highlight: "red",
                label: "Strategic"
            }

        ];
        //draw
         if(sumfour <= 100){
            var piechart = new Chart(ctx).Pie(data);
        } else{
            return false;
        }
        
}

function savebtn(){
    console.log(total);
    if(total == 100){
        location.href="Organisational_Level.html";
    }else{
        alert("Total percentage should be 100%!");
        return false;
    }
}