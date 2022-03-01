var btnBuys = document.querySelectorAll('.js-buy-tickets');
var model = document.querySelector('.model');
var btnCloses = document.querySelectorAll('.js-btn-close');
var modelContent = document.querySelector('.model-content');

for (var i = 0; i < btnBuys.length; i++) {
    var btnBuy = btnBuys[i];
    btnBuy.onclick = function() {
        model.classList.add('open');
    }
}

for (var i = 0; i < btnCloses.length; i++) {
    var btnClose = btnCloses[i];
    btnClose.onclick = function() {
        model.classList.remove('open');
    }
}
model.onclick = function() {
    model.classList.remove('open');
}
modelContent.onclick = function(event) {
    event.stopPropagation();
}