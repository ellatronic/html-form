$(document).ready(function() {
	$("#next").click(function(){
		$("#basicInfo").hide();
		$("#profile").show();
	});
	$("#reset").click(function(){
		$("#basicInfo").show();
		$("#profile").hide();
	});
});