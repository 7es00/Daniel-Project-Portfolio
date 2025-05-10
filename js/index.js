window.addEventListener("scroll", function () {
    const hero = document.getElementById("heroSection");
    const nav = document.getElementById("navvbar");
    const heroHeight = hero.offsetHeight;

    if (window.scrollY >= heroHeight - 50) {
      // بعد ما نعدي الهيرو
      document.documentElement.style.setProperty('--text-color-header', 'black');
      nav.classList.add("navbar-scrolled");
    } else {
      // فوق الهيرو
      document.documentElement.style.setProperty('--text-color-header', 'white');
      nav.classList.remove("navbar-scrolled");
    }
  });






  const counters = document.querySelectorAll('.counter');
  let started = false;

  const startCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 100;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        startCounters();
        started = true;
      }
    });
  }, { threshold: 0.5 }); // يظهر 50% من السكشن

  const statsSection = document.getElementById('completion');
  observer.observe(statsSection);