var sliders = [{
        path: 'assets/img/slider/slider1.jpg',
        header: 'Los Angeles',
        description: 'We had the best time playing at Venice Beach!'
    },
    {
        path: 'assets/img/slider/slider2.jpg',
        header: 'New York',
        description: 'The atmosphere in New York is lorem ipsum.'
    }, {
        path: 'assets/img/slider/slider3.jpg',
        header: 'Chicago',
        description: "Thank you, Chicago - A night we won't forget."
    }
];

var sliderImg = document.querySelector('#slider .slider-img');
var textHeader = document.querySelector('#slider .text-header');
var textDescription = document.querySelector('#slider .text-description');

var index = 1;
changeSlider = function() {
    index++;
    if (index == 3) index = 0;
    sliderImg.src = sliders[index].path;
    textHeader.innerHTML = sliders[index].header;
    textDescription.innerHTML = sliders[index].description;
}
setInterval(changeSlider, 3000);