const images = document.querySelectorAll('.gallery-image');
const imagesLight = document.querySelector('.add-image')
const lightContent = document.querySelector('.image-light')
const menuIcon1 = document.querySelector(".menu-icon");


/*LightBox*/

images.forEach(image =>{
  image.addEventListener('click', () =>{
showImage(image.getAttribute('src'));
  })
})

lightContent.addEventListener('click', (e)=>{
if(e.target !== imagesLight){
lightContent.classList.toggle('show')
imagesLight.classList.toggle('showImage')
menuIcon1.style.opacity = '1'
}
})

const showImage = (image) =>{
imagesLight.src = image
lightContent.classList.toggle('show')
imagesLight.classList.toggle('showImage')
  menuIcon1.style.opacity = "0";
}
