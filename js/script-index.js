
/**
 * first animating the nav bar and the text at first div
 * 
 * puting all three inside a tiimeline
 */
var time1 = gsap.timeline()

var first_h1 = document.querySelector(".first > h1")
var text_h1 = first_h1.innerHTML.split("")
var followUph1 = document.querySelector(".first h1 + h1")
var followup_h1_text = followUph1.innerHTML.split("")

function splitToSpan(element){
    var temp_string = ""
    element.forEach ( item => {
        if(item == " "){
            item = "&nbsp"
        }else{
            item = item.toUpperCase()
        }
        temp_string += `<span> ${item} </span>`
    })
    return temp_string
}

time1.from("nav",{
    y: -200,
    duration: 1,


})

first_h1.innerHTML = splitToSpan(text_h1)

time1.from(".first h1 span", {
    y: 200,
    color: "white",
    duration: .3,
    stagger: 0.05,
})

followUph1.innerHTML = splitToSpan(followup_h1_text)
time1.from(".first h1 + h1 span", {
    y: 200,
    color: "black",
    duration: .3,
    stagger: 0.05,
})




//cursor

document.addEventListener("mousemove", (event) => {
    gsap.to("#cursor", {
        x:  event.pageX,
        y: event.pageY,
        duration: 1.4,
        ease: "elastic.out(1,0.3)",
        zIndex: 99
    })
})


//menu
var menuButton = document.querySelector("nav div")
var clossButton = document.querySelector("#menu i")
var navBar = document.querySelector("nav")


var time22 = gsap.timeline()

time22.to(navBar, {
    transform: "translateY(-100%)"
})

time22.to(".first",{
    height: "100vh",
})

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
        item.a
        gsap.to(item,{
            borderBottom: "2px solid white",
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

// slider
window.addEventListener("wheel" , (event) => {


    if(event.deltaY<0){

        gsap.to("#move > div",{
            transform: 'translate(-200%)',
            duration: 4,
            repeat: -1,
            ease: "none",
        } )
        gsap.to("#move > div > i", {
            rotate: 180
        })
        gsap.to("#move", {
            rotate: 1.5,
            y: -55,
            duration: 1,
        })

    }else{
        gsap.to("#move > div",{
            transform: 'translate(0%)',
            duration: 4,
            repeat: -1,
            ease: "none"
        } )
        gsap.to("#move > div > i", {
            rotate: 0
        })
        gsap.to("#move", {
            rotate: -1.5,
            y: 55,
            duration: 1,
        })
    }
})

function splitToSpan_NOUPPERCASE(element){
    var temp_string = ""
    element.forEach ( item => {
        if(item == " "){
            item = "&nbsp"
        }else{
            item = item
        }
        temp_string += `<span> ${item} </span>`
    })
    return temp_string
}

var pSecond = document.querySelector(".wrapper-for-second p")
pSecond.innerHTML = splitToSpan_NOUPPERCASE(pSecond.innerHTML.split(""))



gsap.to(".wrapper-for-second p span",{
    color: "yellow",
    // borderBottom: "2px solid gray",
    stagger: 0.1,
    scrollTrigger: {
        trigger:".second",
        start: "top top",
        end: "bottom 0%",
        scrub: true,
    },

})

ScrollTrigger.create({
    trigger: ".second",
    start: "top 0%",
    end: "bottom 0%", 
    pin: true,
    pinSpacing: true,
    scrub: true,

  });

// animating cursor over video

var cursor = document.querySelector("#cursor")
var video_element = document.querySelector("video")
video_element.addEventListener("mouseenter", ()=>{

    cursor.innerHTML ="MENU"
    gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: "red",
    })
})
video_element.addEventListener("mouseleave", () =>{
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(255, 255, 0, 0.5)",
    })
})

var svg = document.querySelector(".second svg")
var svgLength = svg.clientWidth
var svgPathString_initial = `M 7 75 Q ${svgLength/2} 75 ${svgLength -7} 75`
var svgPathStringDynamic =``

var svgPath = document.querySelector(".second svg path")
svgPath.setAttribute("d", svgPathString_initial)

svg.addEventListener( "mousemove", (event) =>{
    svgPathStringDynamic = `M 7 75 Q ${event.clientX} ${event.clientY} ${svgLength -7} 75`

    gsap.to(svgPath, {
        attr: {d: svgPathStringDynamic}

    })

})

svg.addEventListener("mouseleave", ()=> {
    gsap.to(svgPath, {
        attr: {d: svgPathString_initial},
        ease: "elastic.out(1.75,0.3)",
        duration: 1.5

    }) 
})



// photo slide with conatine pin to the screen
const cards =  document.querySelectorAll(".card")
const images = document.querySelectorAll(".card img")
const totalCards = cards.length

gsap.set( cards[0], { y: "0%", scale: 1, rotation: 0})
gsap.set( images[0], { scale: 1})

    for(let i = 1; i < totalCards; i++ ){
        gsap.set( cards[i], { y: "100%", scale: 1, rotation: 0})
        gsap.set( images[i], { scale: 1})
     }

const scroll = gsap.timeline({
    scrollTrigger: {
        trigger: ".sticky-cards",
        start: "top top",
        end: () => `+=${ window.innerHeight * ( totalCards - 1 )}`,
        pin: true,
        // stagger: true,
        scrub: 0.5,
    }
})

for(let i = 0; i < totalCards - 1; i++){


    const currentCard = cards[i]
    const currentImg = images[i]
    const nextCard = cards[i + 1]
    const position = i


    scroll.to(
        currentCard, {
        scale: 0.5,
        rotation: 10,
        duration: 1,
        ease: "none"

    }, position)


    scroll.to( 
        currentImg, {
        scale: 1.5,
        duration: 1,
        ease: "none"
    }, position )

    scroll.to(
        nextCard,{
            y: "0%",
            duration: 1, 
            ease: "none"


        }, position)
}



/// side text

const hopefullyLastTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".sticky-cards",
        start: "top top",
        end: () => `+=${ window.innerHeight * ( totalCards - 1)}`,
        scrub: true,
    }
})

const textsThird = document.querySelectorAll(".sticky-text div")

    textsThird.forEach( items => {
        hopefullyLastTimeline.from(items, {
            x: "-100%",
            // duration: 1,
        })
    })


// animating the third div

const allh1InThird = document.querySelectorAll(".third h1")
const allPInThird = document.querySelectorAll(".third P")



allh1InThird.forEach( item =>{
    gsap.from(item, {
        y: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".third",
            start: "top 30%",
            end: "center 40%",
            scrub: true,

        }
    })
})
allPInThird.forEach( item =>{
    gsap.from(item, {
        y: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".third",
            start: "top 30%",
            end: "bottom 90%",
            scrub: true,

        }
    })
})

