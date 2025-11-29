
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
        x:  event.clientX,
        y: event.clientY,
        duration: 1.4,
        ease: "elastic.out(1,0.3)",
        zIndex: 99
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
            y: -40,
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
            y: 40,
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

gsap.to(".video-div", {
    scale: 0.8,
    opacity: 0.5,
    duration: 1,
    scrollTrigger: {
        trigger: ".video-div",
        start: " top top",
        scrub: true,
        
    }
})



var paraInSecond = document.querySelector(".second > div > div > p")
paraInSecond.innerHTML = splitToSpan_NOUPPERCASE(paraInSecond.innerHTML.split(""))


gsap.to(".second > div > div > p > span",{
    color: "black",
    // borderBottom: "2px solid gray",
    stagger: 0.1,
    scrollTrigger: {
        trigger:".second",
        start: "top top",
        end: "bottom 50%",
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
var video_element = document.querySelector("iframe")
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

var svg = document.querySelector(".second > div > svg")
var svgLength = svg.clientWidth
var svgPathString_initial = `M 7 50 Q ${svgLength / 2} 50 ${svgLength - 7 } 50`
var svgPathStringDynamic =``

var svgPath = document.querySelector(".second > div > svg> path")
svgPath.setAttribute("d", svgPathString_initial)

svg.addEventListener( "mousemove", (event) =>{
    svgPathStringDynamic = `M 7 50 Q ${event.clientX} ${event.clientY} ${svgLength - 7} 50`

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

//

document.fonts.ready.then( () => {
    gsap.utils.toArray(".work-item").forEach( item => {
        const img = item.querySelector(".work-item-img")
        // const nameH1 = item.querySelector(".work-item-name h1")

        // const split = SplitText.create(nameH1, {
        //     type: "chars",  
        //     mask: "chars",
        // })

        // gsap.set(split.chars , {
        //     y: "125%",
        // })

        // split.chars.forEach( (char, index) => {
        //     ScrollTrigger.create({
        //         trigger: item,
        //         start: `top+=${index * 25 - 250} top`,
        //         end: `top+=${index * 25 - 100} top`,
        //         scrub: 1,
        //         animation: gsap.fromTo(
        //             char, {
        //                 y: "125%"
        //             },
        //             {
        //                 y: "0%",
        //                 ease: "none",

        //             }
        //         )
        //     })
            
        // })

        ScrollTrigger.create({
            trigger: item,
            start: 'top bottom',
            end: 'top top',
            scrub: 0.5,
            animation: gsap.fromTo(
                img, {
                    clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "none",
                }
            )
        })  

        ScrollTrigger.create({
            trigger: item,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: 0.5,
            animation: gsap.fromTo(
                img,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
                    ease: "none"
                }   
            )
        })
    })
})



// animating the third div

const allh1InThird = document.querySelectorAll(".third h1")
const allPInThird = document.querySelectorAll(".third p")



allh1InThird.forEach( item =>{
    gsap.from(item, {
        y: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".third",
            start: "top 50%",
            end: "center 50%",
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
            start: "top 50%",
            end: "center 50%",
            scrub: true,

        }
    })
})


