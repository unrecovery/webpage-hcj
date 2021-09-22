const menuIcon = document.querySelector('.menu-icon');
const navigation = document.querySelector('.navigation')


menuIcon.addEventListener('click', () =>{
navigation.classList.toggle("spread");
})


window.addEventListener('click', e =>{

  if (
    navigation.classList.contains("spread") &&
    e.target != navigation &&
    e.target != menuIcon
  ) {
    navigation.classList.toggle("spread");
  }
})