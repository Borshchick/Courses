
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
  function animateValue(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();
  
    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = progress * range + start;
  
      element.textContent = formatNumberWithCommas(value.toFixed(1));
  
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }
  
    requestAnimationFrame(updateNumber);
  }
  
  const counterElements = document.querySelectorAll(".counter");
  
  counterElements.forEach((elem) => {
    const endValue = parseFloat(elem.getAttribute("data-end"));
    const duration = 2000;
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(elem); 
          animateValue(elem, 0, endValue, duration);
        }
      });
    });
    observer.observe(elem);
  });
  