// let image1=document.getElementById("image1")
// let image2=document.getElementById("image2")
// let image3=document.getElementById("image3")
// let paragraph1=document.querySelectorAll("#disp1")
// let paragraph2=document.querySelectorAll("#disp2")
// let paragraph3=document.querySelectorAll("#disp3")



// image1.addEventListener("click",(e)=>{
//     for(var i=0;i<paragraph1.length;i++){
//         paragraph1[i].style.display="block";
//     }
// })
// image2.addEventListener("click",()=>{
//     for(var i=0;i<paragraph2.length;i++){
//         paragraph2[i].style.display="block";
//     }
// })
// image3.addEventListener("click",()=>{
//     for(var i=0;i<paragraph3.length;i++){
//         paragraph3[i].style.display="block";
//     }
// })


// image2.addEventListener("select",()=>{
//     for(var i=0;i<paragraph2.length;i++){
//         paragraph2[i].style.display="none";
//     }
// })
// image3.addEventListener("select",()=>{
//     for(var i=0;i<paragraph3.length;i++){
//         paragraph3[i].style.display="none";
//     }
// })

// image.addEventListener("click",()=>{
//     for(var i=0;i<paragraph.length;i++){
//         paragraph[i].style.display="block";
//     }
// })


const navbar = document.querySelector('#nav');
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('fixed')
  } else {
    navbar.classList.remove('fixed');
  }
};

window.onscroll = navbarScroll;

let home =document.getElementById("home")
let menu1=document.getElementById("menu1")  
let menu2=document.getElementById("menu2")

let mike=document.getElementById("mike")
let chandler=document.getElementById("chandler")
let peter=document.getElementById("peter")

mike.addEventListener("click",()=>{
    home.style.display="block";
    menu1.style.display="none";
    menu2.style.display="none";



})
chandler.addEventListener("click",()=>{
    menu1.style.display="block";
    menu2.style.display="none";
    home.style.display="none";


})
peter.addEventListener("click",()=>{
    menu2.style.display="block";
    menu1.style.display="none";
    home.style.display="none";


})



