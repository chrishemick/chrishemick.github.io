
console.log("I'm linked!");

$(document).ready(function() {
	$('.hidden').hide();
	$("#jumbo-text").fadeIn(1500);
	/*$( ".nav-link" ).first().delay(800).fadeIn( "slow", function showNext() {
		$(this).next(".nav-link").fadeIn("slow", showNext);
	});*/
	$('#learnMoreBtn').delay(1000).slideDown("slow");

	$("a").on('click', function(event) {

    	// Make sure this.hash has a value before overriding default behavior
    	if (this.hash !== "") {
     	 // Prevent default anchor click behavior
      	 event.preventDefault();

      	// Store hash
      	var hash = this.hash;

      	// Using jQuery's animate() method to add smooth page scroll
      	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      	$('html, body').animate({
       	 scrollTop: $(hash).offset().top
     	}, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(function() {
	$(window).scroll( function(){
		$('.fadeInBlock').each( function(i){
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it */
			bottom_of_window = bottom_of_window + 500;

			if( bottom_of_window > bottom_of_object ){
				$(this).animate({'opacity':'1'},1000);
			}
		});
	});
});


$('#moreBioButton').click(() => {
  if ($('#moreBioButton').attr('value') === "Read More") {
    $('#moreBio').slideDown();
    $('#moreBioButton').attr('value',"See Less");
  } else {
    $('#moreBio').slideUp();
    $('#moreBioButton').attr('value',"Read More");
  }
});

$('#moreExpButton').click(() => {
  if ($('#moreExpButton').attr('value') === "Read More") {
    $('#moreExp').slideDown();
    $('#moreExpButton').attr('value',"See Less");
  } else {
    $('#moreExp').slideUp();
    $('#moreExpButton').attr('value',"Read More");
  }
});

$('#thBadgeButton').click(function() {
	$(this).attr("disabled", true).val("Getting badges...");
	const thURL = "https://teamtreehouse.com/chrishemick.json";
	function displayBadges(data) {
		const latestBadges = data.badges.slice(-5);
		console.log(latestBadges);
		let badgeHTML = '<div class="card-deck mx-auto">';
		$.each(latestBadges, function(i, badge) {
			let earnedDate = new Date(badge.earned_date).toDateString();

			badgeHTML += `
				<div class="card">
					<img class="card-img-top badges img-fluid p-1 mx-auto" src="${badge.icon_url}" alt="Badge Image">
						<div class="card-body">
							<h5 class="card-title text-center">${badge.name}</h5>
						</div>
				</div>`;
		});
		badgeHTML += '</div>';
		$('#treehouseInfo').html(badgeHTML);
		$('#thBadgeButton').hide();
	}
	$.getJSON(thURL, displayBadges);
});


let form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
	if (form.checkValidity() === false) {
	  e.preventDefault();
    e.stopPropagation();
  }
  form.classList.add('was-validated');
});

/*
REMOVED FROM TH BADGE RETRIEVAL
<div class="card-footer bg-light">
	<p class="card-text text-center"><small class="text-muted">Earned: ${earnedDate}</small></p>
</div>
*/
