import {gsap} from "gsap";
// import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

var RBSpeed = .8;

var tl = gsap.timeline({ease: "power2.out"});
var tl2 = gsap.timeline({ease: "power2.out"});


// const tl = gsap.timeline();


export function introAnimation() {
        
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

        tl.to("#R-1",{duration:1, morphSVG:"#door-1"},"play3")

        tl.to("#white-cover", {
            transformOrigin: "center", 
            duration: .1,
            opacity: 1
        }, "play3-1");

        tl.to("#days", {
            transformOrigin: "center", 
            duration: 1.5,
            x:381,
            opacity: 1
        }, "play3-2");

        tl.to("#days", {
            transformOrigin: "center", 
            duration: 1.25
        }, "play3-2-1");

    return tl;
}

export function part2Animation() {

    tl2.to("#days", {
        transformOrigin: "center", 
        duration: 1.5,
        x:0,
        opacity: 0
    }, "play3-3");

    tl2.to("#door-1, #R-1", {
        transformOrigin: "center", 
        duration: .01,
        opacity: 0
    }, "play3-4");

    tl2.to("#door-2", {
        transformOrigin: "center", 
        duration: .01,
        opacity: 1
    }, "play3-4");

    tl2.to("#door-2",{duration:1, morphSVG:"#R-2"},"play3-4")


    tl2.to("#Republic-Bank", {
        duration: 1.5,
        opacity:1
    }, "play5");
    
    tl2.from("#tagline", {
        duration: 1.5,
        opacity:0,
        x:280
    }, "play7");
    
    tl2.to("#door-2", {
        duration: 1.5,
        fill: "rgb(239, 85, 86)"
    }, "play7");

return tl2;
}
