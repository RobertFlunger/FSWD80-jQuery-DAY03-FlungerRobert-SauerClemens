$(document).ready(function() {
	$(document).on('mousemove', function(e) {
		let x = e.clientX;
		let y = e.clientY;
		let newPosX = x - 150;
		let newPosY = y - 175;
		$("#moveme").css("transform", "translate3D(" + newPosX + "px, " + newPosY + "px, 0px)");
	});

function moveDown() {
	$("#moveme").animate({top: '200'}, 'slow', 'linear', 
		function(){$("#moveme").fadeOut(2500).fadeIn(2500)}
		)};

	$("#moveme").on("click", moveDown);

var rotation;
	$(document).on("keypress", function (e) {
			var key = e.which;
			console.log(key);
			if (key == 114) {
				rotation = 90;
			}
			$("#moveme").css("transform", "rotate(" + rotation + "deg)")
			});
	
	
	

/*	$(document).keypress(function (e) {
		var key = e.which;
		if (key == 114) {
			$("#moveme").css("rotate", "50deg")
		}*/
	});





