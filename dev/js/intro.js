import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});


const introTL = gsap.timeline();


export function IntroAnimation() {
    introTL.from("#spikey-shape-big", {duration: 1.5, scale: 0, transformOrigin: "center"}, "play")

    return introTL;
}