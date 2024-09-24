//your JS code here. If required.
//your JS code here. If required.
let s_circles = document.querySelectorAll(".circle");
let s_lines = document.querySelectorAll(".line");
let s_next = document.getElementById("next")
let s_prev = document.getElementById("prev")

let current_activ = 0;
s_circles[current_activ].classList.add("active");
// s_lines[current_activ].classList.add("active");
let activ_line = 0
s_prev.disabled = true;

s_next.addEventListener("click", () => {
    if (current_activ>=0 && current_activ < s_circles.length) {
        s_lines[current_activ].classList.add("active");
        
    }
    current_activ++;
    s_circles[current_activ].classList.add("active");

    if (current_activ === s_circles.length - 1) {
        s_next.disabled = true
    }
    s_prev.disabled = false;
})

s_prev.addEventListener("click", () => {
    s_lines[current_activ-1].classList.remove("active");
    
    s_circles[current_activ].classList.remove('active');
    current_activ--;
    s_circles[current_activ].classList.add("active");

    if (current_activ === 0) {
        s_prev.disabled = true
    }
    s_next.disabled = false;
})