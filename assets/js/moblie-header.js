var headerList = document.querySelector('.header-list');
var header = document.querySelector('#header');
var h = header.offsetHeight;

headerList.onclick = function() {
    if (header.offsetHeight == h) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}


var navLis = document.querySelectorAll("#nav li a[href*='#']");
for (var i = 0; i < navLis.length; i++) {
    navLis[i].onclick = function(even) {
        var isParentMenu = this.nextElementSibling;
        if (!isParentMenu) {
            header.style.height = null;
        } else {
            even.preventDefault();
        }
    }
}