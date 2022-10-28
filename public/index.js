// Slide 
const slideImg = $("#slideImg");
let imageNo = 2; 

setInterval(() => {
    slideImg.attr("src", `image/slide${imageNo}.png`);
    imageNo++;
    if(imageNo > 4) imageNo = 1;

}, 10000);


// Testimonial Slide
const slideContainer = $("#slideContainer");
const slides = $(".slides").toArray();
let i = 0;

setInterval(() => {
    slideContainer.html(slides[i].innerHTML);
   
  i++;
  if(i > 2){
    i = 0;
  }
}, 5000);

// MenuBar
  const menuDiv = $("#downMenu");
  menuDiv.append($("#navList").html());

  $("#menu").click(function(){

     menuDiv.css("top", 0)
     $("#cross").removeClass("hidden")
  });

  $(".up").click(()=>{
    menuDiv.css("top", "-80vh");
    $("#cross").addClass("hidden")
  })

  // About
  setInterval(() => {
    let myElement = document.getElementById('about');
    let bounding = myElement.getBoundingClientRect();
    let img = document.getElementById("slideImg");
    let imgp = document.querySelector("#aboutSlide img+p");
     
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
           img.style.animation = "imageAnim .5s ease-in 0s 1 normal forwards";
            imgp.style.animation = "imageAnim .5s ease-in 0s 1 normal forwards";
        }
    }
  , 100);
 







