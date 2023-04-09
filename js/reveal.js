
window.sr = ScrollReveal({ reset: true });
// slides
let slide_up = {
  duration: 2000,
  origin: "bottom",
  distance: "120%",
  easing: "ease-out"
};
let slide_down = {
  duration: 2000,
  origin: "top",
  distance: "120%",
  easing: "ease-out"
};
let slide_left = {
  duration: 2000,
  origin: "right",
  distance: "120%",
  easing: "ease-out"
};
let slide_right = {
  duration: 2000,
  origin: "left",
  distance: "120%",
  easing: "ease-out"
};


// rotate
let spin_right = {
  duration: 1000,
  origin: "left",
  distance: "120%",
  easing: "ease-in",
  rotate: {
    z: -200
  }
};
let spin_left = {
  duration: 1000,
  origin: "right",
  distance: "120%",
  easing: "ease-in",
  rotate: {
    z: -200
  }
};

let flip_up = {
  duration: 2000,
  easing: "ease-in",
  rotate: {
    x: 200
  }
};
let flip_side = {
  duration: 2000,
  delay: 1500,
  easing: "ease-in",
  rotate: {
    y: 200
  }
};
let show_late = {
  delay:1000,
  duration: 2000
}

sr.reveal(".con1",spin_right);
sr.reveal(".con3",slide_left);
sr.reveal(".con2",slide_right)
sr.reveal(".topic",slide_right);

sr.reveal(".large_pic",slide_right)
sr.reveal(".small_pic",show_late)

sr.reveal(".name_of_service",slide_left);