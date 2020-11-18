import {gsap} from "gsap";
// import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
// import {MorphSVGPlugin} from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(MorphSVGPlugin);

var RBSpeed = .8;

var tl = gsap.timeline({ease: "power2.out"});


// const tl = gsap.timeline();


export function IntroAnimation() {
        
        tl.from(".Logo", {
            duration: RBSpeed,
            x: 250
        }, "play");
        
        tl.to("#B-1", {
            duration: .4,
            scaleX:1.1
        }, "play");
        
        tl.to("#B-2", {
            duration: .4,
            scaleX:1.2
        }, "play");
        
        tl.to("#B-1", {
            duration: .4,
            scaleX:1
        }, "play2");
        
        tl.to("#B-2", {
            duration: .4,
            scaleX:1
        }, "play2");
        
        tl.to("#back-Bs", {
            transformOrigin: "center", 
            duration: 1.25,
            scaleX:0,
            scaleY:0
        }, "play3");

        // tl.to("#R",{duration:1, morphSVG:"#door"},"play3")

        tl.to("#Republic-Bank", {
            duration: 1.5,
            opacity:1
        }, "play4");
        
        tl.to("#tagline", {
            duration: 1.5,
            opacity:1
        }, "play4");
        
        tl.from("#tagline", {
            duration: 1.5,
            x: 100
        }, "play4");
        
        tl.to("#R", {
            duration: 1.5,
            fill: "rgb(239, 85, 86)"
        }, "play4");

    return tl;
}