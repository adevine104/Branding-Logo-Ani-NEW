
// import * as Demo from './demo.js';

// console.log(Demo);
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {introAnimation} from "./intro.js";
import {part2Animation} from "./intro.js";

gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();
mainTl.add(introAnimation());
mainTl.add(part2Animation());

GSDevTools.create();