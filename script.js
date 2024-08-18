var typed = new Typed('#texttyping', {
    strings: ['Student', 'Designer','Learner','Developer','Freelancer'],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true
  });

  AOS.init();

// FOR NUMBER COUNTER 
 
  function animateCountUp(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function countStart() {
    const $counters = document.querySelectorAll(".js-count-up");
    $counters.forEach((item) => {
      const value = parseInt(item.dataset.value, 10);
      animateCountUp(item, 0, value, 2000);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countStart();
          observer.unobserve(entry.target); // To stop observing once the animation starts
        }
      });
    }, observerOptions);

    const target = document.querySelector('.level');
    if (target) {
      observer.observe(target);
    }
  });
// END OF NUMBER COUNTER 

// ==============PORTFOLIO=============== 

function showAll() {
  updateActiveButton('allbtn');
    var items = document.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
        item.style.display = 'block';
    });
}

function showApp() {
  updateActiveButton('appbtn')
    var items = document.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
        if (item.classList.contains('filter-app')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function showCard() {
  updateActiveButton('cardbtn')
    var items = document.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
        if (item.classList.contains('filter-card')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
function showWeb() {
  updateActiveButton('webbtn')
    var items = document.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
        if (item.classList.contains('filter-web')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function updateActiveButton(activeBtnId) {
  var buttons = document.querySelectorAll('#portfolio-filter button');
  buttons.forEach(function(button) {
      button.classList.remove('active');
  });
  document.getElementById(activeBtnId).classList.add('active');
}

// ==========owlcaruseol =============
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dotsEach: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});