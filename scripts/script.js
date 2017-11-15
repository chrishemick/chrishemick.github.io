// JavaScript Document


console.log("I'm linked");

/****
changed some elements to var to address issues in Safari with 
const variable name being same as html ID
****/
var mainWrapper = document.querySelector('#mainWrapper');
const introSection = document.querySelector('#intro');
const enterButton = document.querySelector('#enterLink');
var footer = document.getElementById('footer');
const sections = document.querySelector('#subWrap');
var aboutContent = document.getElementById('aboutContent');
var codingContent = document.getElementById('codingContent');
var projectsContent = document.getElementById('projectsContent');
const featuredProjects = document.getElementById('featuredProjectLayout');
var contactContent = document.getElementById('contactContent');
var codingTitle = document.getElementById('codingTitleWrapper');
var titleWrapper = document.querySelectorAll('.titleWrapper')[0];
const exitButton = document.querySelectorAll(".exit-button-wrapper");
const contentNavButtons = document.querySelectorAll('.contentNavButtons');
const formSubmitButton = document.getElementById('submitButton');
var form = document.querySelector('form');


//Hides welcome hero screen when Enter button is clicked
enterButton.addEventListener("click", () => {
	footer.scrollIntoView({behavior: "smooth"});
        const screen = window.screen.width;
        if (screen < 768) {
          setTimeout(() => {
            mainWrapper.style.gridTemplateAreas = "'sections' 'footer'";
	        mainWrapper.style.gridTemplateRows = "90vh auto";
	        introSection.style.display = "none";
	    }, 1000);
        } else {
          setTimeout(() => {
            mainWrapper.style.gridTemplateAreas = "'sections sections' 'footer footer'";
            mainWrapper.style.gridTemplateColumns = "repeat(2, 1fr)";
	        mainWrapper.style.gridTemplateRows = "93vh minmax(55px, 7vh)";
	        introSection.style.display = "none";
	      }, 1000);  
        }
});


//Event listener to control visibility of content sections
sections.addEventListener("click", (e) => {
      const section = e.target.id;
	  if(section === "aboutTitleWrapper" || section === "aboutTitle") {
	    aboutContent.className = "showContent";
	  } else if (section === "codingTitleWrapper" || section === "codingTitle") {
	    codingContent.className = "showContent";
	  } else if (section === "projectsTitleWrapper" || section === "projectsTitle") {
	    projectsContent.className = "showContent";
		projectsContent.style.display = "flex";
		projectsContent.style.flexDirection = "column";
	  } else if (section === "contactTitleWrapper" || section === "contactTitle") {
	    contactContent.className = "showContent";
	  }
});


//Event Listener for exit buttons on overlay sections
for (var i=0; i < exitButton.length; i++) {
     const parent = exitButton[i].parentNode;
     exitButton[i].addEventListener("click", (e) => {
       parent.className = "hidden";
	   if (parent.id === "projectsContent") {
		  projectsContent.style.display = "none";
	   }
     })
};


//Event listener for content navigation buttons
for (var i=0; i < contentNavButtons.length; i++) {
     contentNavButtons[i].addEventListener("click", (e) => {
       const button = e.target.id;
       const screen = window.screen.width;
       if(button === "codingNavButton") {
         console.log("button clicked");
    	 aboutContent.className = "hidden";
	     codingContent.className = "showContent";
       } else if(button === "projectsNavButton") {
       if (screen < 768) {
         codingContent.className = "hidden";
         projectsContent.className = "showContent";
         projectsContent.style.display = "flex";
         projectsContent.style.flexDirection = "column";
       } else {
         codingContent.className = "hidden";
         projectsContent.className = "showContent";
         projectsContent.style.display = "flex";
         projectsContent.style.flexDirection = "column";
         featuredProjects.style.display = "flex";
         featuredProjects.style.flexDirection = "row";
       }
      } 
    })
};


/*
//Displays thank you message once form is submitted
form.addEventListener("submit", function() {
	setTimeout(() => {
	  form.style.visibility = "hidden";
	  contactContent.innerHTML = "<p>Thanks for the shout! I'll get back to you soon.</p>";
	}, 2500);
});
*/