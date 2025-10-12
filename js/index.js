const navbar = document.querySelector(".navbar");
console.log("Navbar height (px):", navbar.offsetHeight);


$("#slick1").slick({
    rows: 2,
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    focusOnSelect: true,
    nextArrow: $(".controlbutton--right"),
    prevArrow: $(".controlbutton--left"),
  });


  