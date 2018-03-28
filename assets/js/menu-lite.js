function menuhasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}
function menuaddClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!menuhasClass(el, className)) el.className += " " + className
}

function menuremoveClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (menuhasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

document.getElementById("burger-menu").addEventListener("click", function(){menuMobile();});
function menuMobile() {
	el = document.getElementById("menuMobile");
	overlay = document.getElementById("menuOverlay");
	if(menuhasClass(el, 'menuMobileOpen')){
		menuremoveClass(el, 'menuMobileOpen');
		menuremoveClass(overlay, 'overlayOpen');
	}
	else{
		menuaddClass(el, 'menuMobileOpen');
		menuaddClass(overlay, 'overlayOpen');
	}
}
