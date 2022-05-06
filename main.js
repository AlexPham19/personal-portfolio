function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})


function openNav() {
	document.getElementById("Sidebar").style.visibility = "visible";
	console.log("success?");
}
  
function closeNav() {
	document.getElementById("Sidebar").style.visibility = "none";
}

function shouldOpenOrClose(){
	if(document.getElementById("Sidebar").style.visibility == "none")
		openNav();
	else
		closeNav();
}