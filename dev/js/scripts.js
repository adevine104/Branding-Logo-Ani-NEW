
// import * as Demo from './demo.js';

// console.log(Demo);
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {IntroAnimation} from "./intro.js";

gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();
mainTl.add(IntroAnimation());

GSDevTools.create();