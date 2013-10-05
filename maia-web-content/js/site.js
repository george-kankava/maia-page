function hideContent() {
	$('#main-desk').empty();
	$('#painting').hide();
	$('#video').hide();
}

function showContent(id) {
	$('#background-image').show();
	hideContent();
	var clone = $(id).clone();
	clone.click(function() {
		hideContent();
	});
	$('#main-desk').append(clone);
	$(clone).show();
}

function showVideo() {
	$('#background-image').hide();
	$('#painting').hide();
	$('#main-desk').empty();
	$('#video').show();
}

$(document).ready(function() {
	var currYear = new Date().getFullYear();
	$('#yearTag').html('&copy; ' + currYear);
	$(".fancybox").fancybox();
	$("a#inline").fancybox({
		'hideOnContentClick' : true,
		'autoScale' : true
	});
	$(".fancybox-button").fancybox({
		prevEffect : 'none',
		nextEffect : 'none',
		closeBtn : false,
		helpers : {
			title : {
				type : 'inside'
			},
			buttons : {}
		}
	});
	$("#paintings").click(function() {
		$.fancybox.open([ {
			href : 'images/naxatebi/naxati-1.png',
		}, {
			href : 'images/naxatebi/naxati-2.png',
		}, {
			href : 'images/naxatebi/naxati-3.png'
		}, {
			href : 'images/naxatebi/naxati-4.png'
		}, {
			href : 'images/naxatebi/naxati-5.png'
		}, {
			href : 'images/naxatebi/naxati-7.png'
		}, {
			href : 'images/naxatebi/naxati-8.png'
		}, {
			href : 'images/naxatebi/naxati-9.png'
		}, {
			href : 'images/naxatebi/naxati-10.png'
		}, {
			href : 'images/naxatebi/naxati-11.png'
		}, {
			href : 'images/naxatebi/naxati-12.png'
		}, {
			href : 'images/naxatebi/naxati-13.png'
		}, {
			href : 'images/naxatebi/naxati-14.png'
		}, {
			href : 'images/naxatebi/naxati-15.png'
		}, {
			href : 'images/naxatebi/naxati-16.png'
		}, {
			href : 'images/naxatebi/naxati-17.png'
		}, {
			href : 'images/naxatebi/naxati-18.png'
		}, {
			href : 'images/naxatebi/naxati-19.png'
		}, {
			href : 'images/naxatebi/naxati-20.png'
		}, {
			href : 'images/naxatebi/naxati-21.png'
		}, {
			href : 'images/naxatebi/naxati-22.png'
		}, {
			href : 'images/naxatebi/naxati-23.png'
		}, {
			href : 'images/naxatebi/naxati-24.png'
		}, {
			href : 'images/naxatebi/naxati-25.png'
		}, {
			href : 'images/naxatebi/naxati-26.png'
		}, {
			href : 'images/naxatebi/naxati-27.png'
		}, {
			href : 'images/naxatebi/naxati-28.png'
		}, {
			href : 'images/naxatebi/naxati-29.png'
		}, {
			href : 'images/naxatebi/naxati-30.png'
		}, {
			href : 'images/naxatebi/naxati-31.png'
		}, {
			href : 'images/naxatebi/naxati-32.png'
		}, {
			href : 'images/naxatebi/naxati-33.png'
		} ], {
			helpers : {
				thumbs : {
					width : 75,
					height : 50
				}
			}
		});
	});
});

$(window).load(function() {
	$("#bio").mCustomScrollbar({
		theme : "dark"
	});
});
