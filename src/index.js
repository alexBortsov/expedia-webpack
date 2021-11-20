import './styles/index.scss';
import $ from "jquery";
import '../node_modules/slick-carousel/slick/slick';
import '../node_modules/slick-carousel/slick/slick-theme.scss';
import '../node_modules/slick-carousel/slick/slick.scss';


$(document).ready(function(){
   $('.burger-menu').click(function (event) {
       $('.burger-menu, .header__menu').toggleClass('active');
   }); 
});
$('.container-slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   autoplay: true,
   autoplaySpeed: 2000
});
const userStack = {
   language: 'JavaScript',
   framework: 'Angular'
}

const user = {
   name: 'Alex',
   age: '43',
   ...userStack
}
console.log(user)