/* global particlesJS */

var particleSettings = {
  "particles": {
    "number": {
      "value": 90,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {
      "value": "#27ae60"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#27ae60"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#8e8e8e",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 10,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

var colors = {
  'green': '#27ae60',
  'pink': '#d32542',
  'orange': '#ff7f19',
  'yellow': '#ffc500',
  'amethyst': '#9b59b6'
};

var randomColor = colors[Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]];
particleSettings.particles.color.value = randomColor;
particlesJS("particles-js", particleSettings);

document.addEventListener("DOMContentLoaded", function() {
   var elements = document.querySelectorAll('a');
   [].forEach.call(elements, function(value){
     value.style.color = randomColor;
   });
});
