// JavaScript Document

const projectNavDropdown = document.querySelector(".dropbtn");
const projectNavDropdownContent = document.querySelector(".dropdown-content");


projectNavDropdown.addEventListener('touchstart', ()=> {
	if (projectNavDropdownContent.style.display === 'none') {
	  projectNavDropdownContent.style.display = "flex";
      projectNavDropdownContent.style.flexDirection = "column";
	} else {
	  projectNavDropdownContent.style.display = "none";
	}
});