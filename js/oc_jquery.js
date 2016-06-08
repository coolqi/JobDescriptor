$(document).ready(function(){
	$("#org_select").change(function(){

		if($("#org_select").val() == 'ABC Corp')
		{
			$("#org_description_textarea").val($("#org_description").text());

			jQuery("#bu_select").get(0).options.length = 0;
		
			jQuery("#bu_select").get(0).options.add(new Option('','empty'));
			jQuery("#bu_select").get(0).options.add(new Option('Finance','Finance'));
			jQuery("#bu_select").get(0).options.add(new Option('Information Technology','Information Technology'));
		
		}
		else
		{
			jQuery("#bu_select").get(0).options.length = 0;
			jQuery("#team_select").get(0).options.length = 0;
			
			$("#org_description_textarea").val("");
			$("#bu_description_textarea").val("");
			$("#team_description_textarea").val("");
		}
		
	});
  
 	$("#bu_select").change(function(){
		if($("#bu_select").val() == 'Finance')
		{
  			$("#bu_description_textarea").val($("#bu_description1").text());
			
			jQuery("#team_select").get(0).options.length = 0;
	
			jQuery("#team_select").get(0).options.add(new Option('','empty'));
			jQuery("#team_select").get(0).options.add(new Option('Financial Control','Financial Control'));
			jQuery("#team_select").get(0).options.add(new Option('Financial Analytics','Financial Analytics'));
			
			$("#team_description_textarea").val("");
		}
		else if($("#bu_select").val() == 'Information Technology')
		{
			$("#bu_description_textarea").val($("#bu_description2").text());
			
			jQuery("#team_select").get(0).options.length = 0;
			
			jQuery("#team_select").get(0).options.add(new Option('','empty'));
			jQuery("#team_select").get(0).options.add(new Option('Data','Data'));
			jQuery("#team_select").get(0).options.add(new Option('Business Solutions','Business Solutions'));
			
			$("#team_description_textarea").val("");
		}
		else
		{
			jQuery("#team_select").get(0).options.length = 0;
			
			$("#bu_description_textarea").val("");
			$("#team_description_textarea").val("");
		}
 	});
  
	$("#team_select").change(function(){
		if($("#team_select").val() == 'Financial Control')
		{
			$("#team_description_textarea").val($("#team_description1").text());
		}
		else if($("#team_select").val() == 'Financial Analytics')
		{
			$("#team_description_textarea").val($("#team_description2").text());
		}
		else if($("#team_select").val() == 'Data')
		{
			$("#team_description_textarea").val($("#team_description3").text());
		}
		else if($("#team_select").val() == 'Business Solutions')
		{
			$("#team_description_textarea").val($("#team_description4").text());
		}
		else
		{
			$("#team_description_textarea").val("");
		}
 	});
	
	
	$("#org_description_textarea").blur(function(){
		$("#org_description").text($("#org_description_textarea").val());
	});
	
	$("#bu_description_textarea").blur(function(){
		if($("#bu_select").val() == 'Finance')
		{
			$("#bu_description1").text($("#bu_description_textarea").val());
		}
		else if($("#bu_select").val() == 'Information Technology')
		{
			$("#bu_description2").text($("#bu_description_textarea").val());
		}
		else
		{
			
		}
	});
	
	$("#team_description_textarea").blur(function(){
		if($("#team_select").val() == 'Financial Control')
		{
			$("#team_description1").text($("#team_description_textarea").val());
		}
		else if($("#team_select").val() == 'Financial Analytics')
		{
			$("#team_description2").text($("#team_description_textarea").val());
		}
		else if($("#team_select").val() == 'Data')
		{
			$("#team_description3").text($("#team_description_textarea").val());
		}
		else if($("#team_select").val() == 'Business Solutions')
		{
			$("#team_description4").text($("#team_description_textarea").val());
		}
		else
		{
			
		}
	});
});