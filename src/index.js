import "./reset.css";
import "./style.css";
import { renderHome, renderMenu, renderAbout } from "./modules/content";
import foodImg from "./asset/food.jpg";

let homeBtn = document.getElementById('home-btn');
let menuBtn = document.getElementById('menu-btn');
let aboutBtn = document.getElementById('about-btn');

renderHome("Fanciest food there is", 
    "A cozy, modern bistro blending rustic charm with contemporary flavors, offering wood-fired dishes and locally sourced ingredients.", 
    foodImg);

homeBtn.addEventListener('click', () => {
    renderHome("Fanciest food there is", 
        "A cozy, modern bistro blending rustic charm with contemporary flavors, offering wood-fired dishes and locally sourced ingredients.", 
        foodImg);
});

menuBtn.addEventListener('click', () => {
    renderMenu();
});

aboutBtn.addEventListener('click', () => {
    renderAbout();
});