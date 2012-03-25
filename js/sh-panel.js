function buttonPress(buttonId)
{
	//alert("#"+buttonId);
	// Fade the buttons
	$("#"+buttonId).fadeOut("slow");
	$("#"+buttonId).fadeIn("slow");

	// Make a call to the automation service
	$("#serviceResponse").load("/service/?buttonId="+buttonId);
	//$("#serviceResponse").fadeOut("slow");
}
