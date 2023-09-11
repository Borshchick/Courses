function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
  function animateValue(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();
  
    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * range + start);
  
      element.textContent = formatNumberWithCommas(value);
  
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }
  
    requestAnimationFrame(updateNumber);
  }
  
  const counterElement = document.querySelectorAll(".counter");
  
  counterElement.forEach((elem) => {
    const endValue = elem.getAttribute("data-end");
    const duration = 2000;
  
    animateValue(elem, 0, +endValue, duration);
  });