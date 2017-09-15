var i, isOpen, links = document.getElementsByClassName('linked');
document.getElementById("mySidenav").addEventListener("transitionend", myFunction);

function openNav() {
	    document.getElementById("mySidenav").style.width = "100%";
	    isOpen = true;
	}

function closeNav() {
	isOpen = false;
	for(i=0;i<links.length;i++){
		links[i].style.color="black";
	}
    document.getElementById("mySidenav").style.width = "0";
}

function myFunction() {
	if(!isOpen) return;

	for(i=0;i<links.length;i++){
		links[i].style.color="white";
	}
};