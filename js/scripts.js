

function SubmitQuote() {
	var email = $("#email").val();
	var moreInfo = $("#more_info").val();
	console.log("Email: "+email);
	console.log("Info: "+moreInfo);

	window.open('mailto:'+email+'?subject=Thank you!&body=Thank you for contacting Jones Construction!s');

};

$(document).ready();
