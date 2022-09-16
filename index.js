$(document).ready(function () {

  $('.service-single').on('click', function (event) {
    event.preventDefault();

    var active = $(this).hasClass('active');

    var parent = $(this).parents('.service-wrap');

    if (!active) {
      var activeBlock = parent.find('.service-single.active');

      var currentPos = $(this).attr('data-position');

      var newPos = activeBlock.attr('data-position');

      activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(
        currentPos);
      activeBlock.attr('data-position', currentPos);

      $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(
        newPos);
      $(this).attr('data-position', newPos);

    }
  });

}(jQuery));

// customize theme

$('.customize-theme').on('click', function(e) {
  if (e.target !== this)
    return;
  
  let customdata = document.getElementsByClassName("customize-theme");
  customdata[0].classList.remove("disp-block")
  // alert( 'clicked the foobar' );
});


document.getElementById('theme-btn').addEventListener("click", function () {
  let customdata = document.getElementsByClassName("customize-theme");
  console.log(customdata);
  console.log(customdata[0].classList);
  // customdata[0].classList.remove("disp-block")
  console.log(customdata[0].classList.contains("disp-block"));
  if (customdata[0].classList.contains("disp-block")) {
    customdata[0].classList.remove("disp-block")
  } else {
    customdata[0].classList.add("disp-block")
  }

})

const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
//remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}
fontSizes.forEach(size => {
  size.addEventListener('click', () => {

    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1'))
    {
      fontSize = '12px';
    }
    else if(size.classList.contains('font-size-2'))
    {
      fontSize = '14px';
    }
    else if(size.classList.contains('font-size-3'))
    {
      fontSize = '16px';
    }
    else if(size.classList.contains('font-size-4'))
    {
      fontSize = '18px';
    }
    // change font size of the root html element 
    document.querySelector('html').style.fontSize = fontSize;

  })
})

/*===== PRIMARY COLORS =====*/

// remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();

    if(color.classList.contains('color-1'))
    {
      primaryHue = 252;
    }
    else if(color.classList.contains('color-2'))
    {
      primaryHue = 52;
    }
    else if(color.classList.contains('color-3'))
    {
      primaryHue = 352;
    }
    else if(color.classList.contains('color-4'))
    {
      primaryHue = 152;
    }
    else if(color.classList.contains('color-5'))
    {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})

/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {
  // add active class
  Bg1.classList.add('active');
  // remove active class from the others
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  // remove customized changes from local storage
  window.location.reload();
})
Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  // add active class
  Bg2.classList.add('active');
  // remove active class from the others
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
})
Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  // add active class
  Bg3.classList.add('active');
  // remove active class from the others
  Bg2.classList.remove('active');
  Bg1.classList.remove('active');
  changeBG();
})