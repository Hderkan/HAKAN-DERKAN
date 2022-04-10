let slideIndex = 0;
let allSlides = $(".slide").toArray();
let allDots = $(".dot").toArray();
console.log(allSlides);
$(".nextSlide").click(function () {
    if (allSlides.length == slideIndex + 1) {
        slideIndex = -1;
    }
    showSlide(++slideIndex);
})
$(".prevSlide").click(function () {
    if (slideIndex == 0) {
        slideIndex = allSlides.length;
    }
    showSlide(--slideIndex);
})
function showSlide(n) {

    for (let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
        allDots[i].classList.remove("active");
        //$(".slide").eq(i).hide("");
    }
    allSlides[n].style.display = "block";
    allDots[n].classList.add("active");
    //$(".slide").eq(n).fadeTo(2000,0.8);
    //ÖDEV:
    //Kayarak giden slider yapın.
}
$(".dot").click(function () {
    slideIndex = $(this).index();
    showSlide(slideIndex);
})
showSlide(slideIndex);

const buton1 = document.querySelector("#popup1");
const buton2 = document.querySelector("#popup2");
const buton3 = document.querySelector("#popup3");
const mainPopup1 = document.querySelector(".main-popup1");
const mainPopup2 = document.querySelector(".main-popup2");
const mainPopup3 = document.querySelector(".main-popup3");
const close = document.querySelector(".close-popup");
// var mainpopupx = $(".popup").toArray();
// var buton = $(".dropdown-content").toArray();
// for (let i = 0; i < buton.length; i++) {
    
//         buton[i].addEventListener("click", () => {
//             for (let i = 0; i < buton.length; i++){
//             console.log(mainpopupx[i].parentElement)
//           mainpopupx[i].parentElement.style.display = "block"
//             }


//     })



// }



// buton1.addEventListener("click",()=>{
//     mainPopup1.style.display="block";
//     $(".dropdown-content").css({
//         visibility:"hidden"
//     })
// })



// mainPopup1.addEventListener("click", e => {
//     //console.log(e.target);
//     if (e.target.className == "main-popup1") {
//         mainPopup1.style.display = "none";
//         $(".dropdown-content").css({
//             visibility: "visible"
//         })

//     }
// })

// buton2.addEventListener("click",()=>{
//     mainPopup2.style.display="block";
// })



// mainPopup2.addEventListener("click", e => {
//     //console.log(e.target);
//     if(e.target.className=="main-popup2")
//     {
//         mainPopup2.style.display="none";
//     } 
// })
buton1.addEventListener("click",()=>{
    mainPopup1.style.display="block";
})
mainPopup1.addEventListener("click", e => {
    //console.log(e.target);
    if(e.target.className=="main-popup1")
    {
        mainPopup1.style.display="none";
    } 
})
buton2.addEventListener("click",()=>{
    mainPopup2.style.display="block";
})
mainPopup2.addEventListener("click", e => {
    //console.log(e.target);
    if(e.target.className=="main-popup2")
    {
        mainPopup2.style.display="none";
    } 
})


 buton3.addEventListener("click",()=>{
     mainPopup3.style.display="block";
 })
 mainPopup3.addEventListener("click", e => {
     //console.log(e.target);
     if(e.target.className=="main-popup3")
     {
         mainPopup3.style.display="none";
     } 
 })