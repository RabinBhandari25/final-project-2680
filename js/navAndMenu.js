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


// adding a border on hover for nav bar
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
