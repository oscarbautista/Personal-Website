
// Hides and shows navbar depending on scroll position
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    var position = $("#about").position();

    if (scroll >= position.top - 50) {

        document.getElementById("navbar").classList.remove("hideNav");
    }
    else {
    	document.getElementById("navbar").classList.add("hideNav");
    }
});

function scrollToHome () {
	var position = $("#home").position();
	window.scrollTo({top: position.top - 50, behavior: "smooth"});
	hideMenu();
}

function scrollToAbout () {
	var position = $("#about").position();
	window.scrollTo({top: position.top - 50, behavior: "smooth"});
	hideMenu();
}

function scrollToProjects () {
	var position = $("#projectSectionTitle").position();
	window.scrollTo({top: position.top - 50, behavior: "smooth"});
	hideMenu();
}

function scrollToContact () {
	var position = $("#contact").position();
	window.scrollTo({top: position.top - 50, behavior: "smooth"});
	hideMenu();
}

function hideMenu () {
	document.getElementById("menu").classList.add("hideMenu");
	document.getElementById("menuDarken").classList.add("hideMenu");

	$("#menuDarken").fadeTo("slow", 0);
	$("#menu").animate({
        right: "-=300px" 
    });
}

function showMenu () {
	document.getElementById("menu").classList.remove("hideMenu");
	document.getElementById("menuDarken").classList.remove("hideMenu");

	$("#menuDarken").fadeTo("slow", .5);
	$("#menu").animate({
        right: "+=300px" 
    });
}
