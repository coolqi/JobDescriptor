// Accountabilities

//coding by XIN LI 
//20/4/2016 22.03

//Modified bt Qi Zhang
//
function display_plan()
{
	var first_select = $('#acc_plan_select1').val();
	var sec_select = $('#acc_plan_select2').val().toLowerCase();
	var thr_select = $('#acc_plan_select3').val().toLowerCase();
	var fou_select = $('#acc_plan_select4').val().toLowerCase();
	
	var total = first_select +' '+sec_select+' '+thr_select+' '+fou_select;

	$('#acc_edt_ctt_dft_ttarea').val(total);

}

function display_com()
{
	var first_select = $('#acc_com_select1').val();
	var sec_select = $('#acc_com_select2').val().toLowerCase();
	var thr_select = $('#acc_com_select3').val().toLowerCase();
	var fou_select = $('#acc_com_select4').val().toLowerCase();
	
	var total = first_select +' '+sec_select+' '+thr_select+' '+fou_select;
	
	$('#acc_edt_ctt_dft_ttarea').val(total);
	//alert(what_select);	
}

function display_sup()
{
	var first_select = $('#acc_sup_select1').val();
	var sec_select = $('#acc_sup_select2').val().toLowerCase();
	var thr_select = $('#acc_sup_select3').val().toLowerCase();
	var total = first_select +' '+sec_select+' '+thr_select;
	
	$('#acc_edt_ctt_dft_ttarea').val(total);
	//alert(what_select);	
}


function display_rpt()
{
	var first_select = $('#acc_rpt_select1').val();
	var sec_select = $('#acc_rpt_select2').val().toLowerCase();
	var thr_select = $('#acc_rpt_select3').val().toLowerCase();
	var fou_select = $('#acc_rpt_select4').val().toLowerCase();
	
	var total = first_select +' '+sec_select+' '+thr_select+' '+fou_select;
	
	$('#acc_edt_ctt_dft_ttarea').val(total);
	//alert(what_select);
}

$(document).ready(function(){
$('.acc_rcd_out_div').tagEditor({
	placeholder: "Maximum 8 sentences, maximum 100 letters per sentence..",
	maxTags: 8,
	delimiter: ',.',
	maxLength: 100,
	forceLowercase: false,
	beforeTagDelete: function(field, eidtor, tags, val){
		var q = confirm('Are you sure to remove it?');
		return q;
	}
});
	$("#add-btn").click(function(){

	var content = $("#acc_edt_ctt_dft_ttarea").val();
	// $("#add-list").prepend("<li>"+content+"</li>");
	// $('#add-list').tagEditor();
	// $(".acc_rcd_out_div").val(content);
	$(".acc_rcd_out_div").tagEditor('addTag',content);
});
});


////////////////////////////////////////////
//coding by xinli 
//2016.4.22
//save function
///////////////////////////////////////////

// i = 5;

// function save_plan() {

// 	document.getElementById('acc_rcd_sentence'+i).value = document.getElementById('acc_edt_ctt_dft_ttarea').value;
// 	i=i-1;
			
// }

// function save_com() {
// 		document.getElementById('acc_rcd_sentence'+i).value = document.getElementById('acc_edt_ctt_dft_ttarea').value;
// 	i=i-1;
// }

// function save_sup() {
// 		document.getElementById('acc_rcd_sentence'+i).value = document.getElementById('acc_edt_ctt_dft_ttarea').value;
// 	i=i-1;
// }

// function save_rpt() {
// 		document.getElementById('acc_rcd_sentence'+i).value = document.getElementById('acc_edt_ctt_dft_ttarea').value;
// 	i=i-1;
// }







// function edit()	{
// 	var currobj = window.event.srcElement.id;
// 	document.getElementById(currobj).style.height = '50px';
// }

// function shrink() {
// 	var currobj = window.event.srcElement.id;
// 	document.getElementById(currobj).style.height = '20px';
// }