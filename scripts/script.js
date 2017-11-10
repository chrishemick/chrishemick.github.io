// JavaScript Document


console.log("I'm linked");
const mainWrapper = document.querySelector('#mainWrapper');
const introSection = document.querySelector('#intro');
const enterButton = document.querySelector('#enterLink');
const footer = document.getElementById('footer');
const sections = document.querySelector('#subWrap');
const aboutContent = document.getElementById('aboutContent');
const codingContent = document.getElementById('codingContent');
const projectsContent = document.getElementById('projectsContent');
const featuredProjects = document.getElementById('featuredProjectLayout');
const contactContent = document.getElementById('contactContent');
const codingTitle = document.getElementById('codingTitleWrapper');
const titleWrapper = document.querySelectorAll('.titleWrapper')[0];
const exitButton = document.querySelectorAll(".exit-button-wrapper");
const contentNavButtons = document.querySelectorAll('.contentNavButtons');


enterButton.addEventListener("click", function() {
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


sections.addEventListener("click", (e) => {
      const section = e.target.id;
	  console.log("clicked");
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


for (var i=0; i < exitButton.length; i++) {
  const parent = exitButton[i].parentNode;
  exitButton[i].addEventListener("click", (e) => {
    parent.className = "hidden";
	  if (parent.id === "projectsContent") {
		  projectsContent.style.display = "none";
	  }
  })
};


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

