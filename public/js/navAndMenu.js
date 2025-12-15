var menuButton = document.querySelector("nav div")
var clossButton = document.querySelector("#menu i")
var navBar = document.querySelector("nav")  


var time22 = gsap.timeline()

time22.to(navBar, {
    transform: "translateY(-100%)"
})

if(document.querySelector(".first")){
    time22.to(".first",{
        height: "100vh",
    })

}


time22.to("#menu", {
    right: 0,
    duration: 0.5,
})

time22.from(("#menu h4"),{
    x: 150,
    duration: 0.4,
    stagger: 0.1,
    opacity: 0,
})
time22.from("#menu i", {
    opacity: 0,
    rotate: "180deg"
})

menuButton.addEventListener("click", ()=> {
    time22.play()

})

clossButton.addEventListener("click", ()=> {
    time22.reverse()
})

time22.pause()


var menuItems = document.querySelectorAll("#menu h4")

menuItems.forEach((item) =>{
    item.addEventListener("pointermove",() =>{
        gsap.to(item,{
            borderBottom: "2px solid black",
            duration: 0,
    
            
        })
    })
    item.addEventListener("mouseleave", ()=>{
        gsap.to(item,{
            borderBottom: 0,
            duration: 0
        })
    })

})

const resturantStatus = document.getElementById("open-status")

function logRestaurantStatus() {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();
    const minute = now.getMinutes();
  
    const currentTime = hour * 60 + minute;
  
    let openTime, closeTime;
  
    if (day >= 1 && day <= 5) {
      openTime = 10 * 60;        
      closeTime = 22 * 60;     

    } else {
      openTime = 10 * 60;        
      closeTime = 12 * 60; 

    }
  
    if (currentTime >= openTime && currentTime < closeTime) {
        resturantStatus.innerHTML = "OPEN"
    } else {
        resturantStatus.innerHTML = "CLOSE"
    }
  }
  
  logRestaurantStatus();
  