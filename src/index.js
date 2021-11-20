import './styles/index.scss';
import $ from "jquery";
//import './../node_modules/@fortawesome/fontawesome-free/scss/_variables.scss'
import './slick/slick';
import './slick/slick-theme.scss';
import './slick/slick.scss';

$(document).ready(function(){
   $('.burger-menu').click(function (event) {
       $('.burger-menu, .header__menu').toggleClass('active');
   });

});

$(".regular").slick({
   dots: true,
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   autoplay: true,
   autoplaySpeed: 1000
 });