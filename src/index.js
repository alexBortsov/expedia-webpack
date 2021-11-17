import './styles/index.scss';
//import $ from "jquery";

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