// import {gsap} from "gsap";
// // import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
// // import {MorphSVGPlugin} from "gsap/DrawSVGPlugin";

// // gsap.registerPlugin(MorphSVGPlugin);

// // var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});


// // const tl = gsap.timeline();


// // export function IntroAnimation() {
        
// //         tl.from(".Logo", {
// //             duration: RBSpeed,
// //             x: 250
// //         }, "play");
        
// //         tl.to("#B-1", {
// //             duration: .4,
// //             scaleX:1.1
// //         }, "play");
        
// //         tl.to("#B-2", {
// //             duration: .4,
// //             scaleX:1.2
// //         }, "play");
        
// //         tl.to("#B-1", {
// //             duration: .4,
// //             scaleX:1
// //         }, "play2");
        
// //         tl.to("#B-2", {
// //             duration: .4,
// //             scaleX:1
// //         }, "play2");
        
// //         tl.to("#back-Bs", {
// //             transformOrigin: "center", 
// //             duration: 1.25,
// //             scaleX:0,
// //             scaleY:0
// //         }, "play3");

// //         tl.to("#RB", {
// //             transformOrigin: "center", 
// //             duration: 1.25,
// //             scale:21
// //         }, "play3-1");

// //         tl.to("#days", {
// //             transformOrigin: "center", 
// //             duration: .25,
// //             x:-30
// //         }, "play3");

// //         tl.to("#days", {
// //             transformOrigin: "center", 
// //             duration: 3.25,
// //             opacity: 1
// //         }, "play3-1");

// //         tl.to("#days", {
// //             transformOrigin: "center", 
// //             duration: 1.25,
// //             scale:0,
// //             opacity: 0
// //         }, "play3-2");

// //         tl.to("#RB", {
// //             transformOrigin: "center", 
// //             duration: 1.25,
// //             scale:1
// //         }, "play3-2");

// //         // tl.to("#R",{duration:1, morphSVG:"#door"},"play3")

// //         tl.to("#Republic-Bank", {
// //             duration: .5,
// //             y:100
// //         }, "play3-1");

// //         tl.to("#Republic-Bank", {
// //             duration: 2.5,
// //             opacity:1
// //         }, "play3-2");
        
// //         tl.to("#tagline", {
// //             duration: .5,
// //             y:128
// //         }, "play3-1");
        
// //         tl.to("#tagline", {
// //             duration: 2.5,
// //             opacity:1
// //         }, "play3-2");
        
// //         tl.to("#R", {
// //             duration: 2.5,
// //             fill: "rgb(239, 85, 86)"
// //         }, "play3-2");

// //     return tl;
// // }



// export function IntroAnimation() {
        
    
//     tl.to("#back-Bs", {
//         transformOrigin: "center", 
//         duration: .1,
//         opacity:0
//     }, "play3");

//     tl.to("#RB", {
//         transformOrigin: "center", 
//         duration: .25,
//         rotate:5
//     }, "play3");

//     tl.to("#RB", {
//         transformOrigin: "center", 
//         duration: .25,
//         rotate:-5
//     }, "play3-0");

//     tl.to("#RB", {
//         transformOrigin: "center", 
//         duration: .25,
//         rotate:5
//     }, "play3-01");

//     tl.to("#RB", {
//         transformOrigin: "center", 
//         duration: .25,
//         rotate:-5
//     }, "play3-02");

//     tl.to("#RB", {
//         transformOrigin: "center", 
//         duration: .25,
//         rotate:5
//     }, "play3-03");

//     tl.to("#RB", {
//         transformOrigin: "center", 
//         duration: .25,
//         rotate:-5
//     }, "play3-04");

//     tl.to("#RB", {
//         transformOrigin: "center", 
//         duration: .25,
//         rotate:0
//     }, "play3-05");

//     tl.to("#RB", {
//         transformOrigin: "center", 
//         duration: 1.25,
//         scale:35
//     }, "play3-1");

//     tl.to("#days", {
//         transformOrigin: "center", 
//         duration: .25,
//         x:20,
//         y:100
//     }, "play3");

//     tl.from("#O", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90});
//     tl.from("#P", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#E-1", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#N", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#seven", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#D", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#A-1", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#Y", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#S", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#A-2", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#W", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#E-2", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#E-3", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#K", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");
//     tl.from("#exc", {transformOrigin: "center", scale:0, rotate:-30, duration: .5, opacity: 0, y:90}, "-=.35");

//     tl.to("#days", {
//         transformOrigin: "center", 
//         duration: 1.25
//     }, "play3-120");
    
//     tl.to("#days", {
//         transformOrigin: "center", 
//         duration: 1.25,
//         scale:0,
//         opacity: 0
//     }, "play3-2");

//     tl.to("#RB", {
//         transformOrigin: "center", 
//         duration: 1.25,
//         scale:1
//     }, "play3-2");

    

//     tl.to("#Republic-Bank", {
//         duration: .5,
//         y:100
//     }, "play3-1");

//     tl.to("#Republic-Bank", {
//         duration: 2.5,
//         opacity:1
//     }, "play3-2");
    
//     tl.to("#tagline", {
//         duration: .5,
//         y:128
//     }, "play3-1");
    
//     tl.to("#tagline", {
//         duration: 2.5,
//         opacity:1
//     }, "play3-2");
    
//     tl.to("#R", {
//         duration: 2.5,
//         fill: "rgb(239, 85, 86)"
//     }, "play3-2");

// return tl;
// }