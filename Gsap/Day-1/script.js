// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"white",
//     borderRadius: "50%",
//     rotate:360,
//     repeat:4,
//     yoyo:true
// })

// gsap.from("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     height: 300,
//     width:300,

// })

// gsap.from("h1",{
//     color:"white",
//     opacity:0, 
//     duration:2,
//     delay:1,
//     y:20,
//     stagger:0.3
// })


gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    duration:1,
    scrollTrigger:{
        tigger:"#pagr1 #box",
        scroller:"body"

    }
})

gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    duration:1,
    scrollTrigger:{
        tigger:"#pagr2 #box",
        scroller:"body"

    }
})
gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    duration:1,
    scrollTrigger:{
        tigger:"#pagr3 #box",
        scroller:"body"

    }
})