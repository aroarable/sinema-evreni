const targetDate = new Date("2026-02-02T00:00:00").getTime();

let previousValues = {
  days: null,
  hours: null,
  minutes: null,
  seconds: null
};

function animateNumberChange(elementId, newValue, oldValue) {
  if (oldValue !== null && oldValue !== newValue) {
    const element = document.getElementById(elementId);
    element.classList.add('flash');
    setTimeout(() => {
      element.classList.remove('flash');
    }, 500);
  }
}

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Animasyonları tetikle
  animateNumberChange("days", days, previousValues.days);
  animateNumberChange("hours", hours, previousValues.hours);
  animateNumberChange("minutes", minutes, previousValues.minutes);
  animateNumberChange("seconds", seconds, previousValues.seconds);

  // Değerleri güncelle
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

  // Önceki değerleri kaydet
  previousValues = { days, hours, minutes, seconds };
}

// Logo tooltip kontrolü
const logo = document.getElementById('logo');
const tooltip = document.getElementById('logoTooltip');
let tooltipTimeout;
let isTooltipVisible = false;

function updateTooltipPosition() {
  if (!isTooltipVisible || !tooltip.classList.contains('show')) return;
  
  const rect = logo.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  
  // Logo'nun altına yerleştir
  let top = rect.bottom + 15;
  let left = rect.left;
  
  // Eğer sağa taşarsa sola kaydır
  if (left + tooltipRect.width > window.innerWidth) {
    left = window.innerWidth - tooltipRect.width - 20;
  }
  
  // Eğer sola taşarsa sağa kaydır
  if (left < 20) {
    left = 20;
  }
  
  // Eğer alta taşarsa yukarı al
  if (top + tooltipRect.height > window.innerHeight) {
    top = rect.top - tooltipRect.height - 15;
    if (top < 20) {
      top = 20;
    }
  }
  
  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
}

function showTooltip(event) {
  clearTimeout(tooltipTimeout);
  isTooltipVisible = true;
  tooltip.classList.add('show');
  
  // Kısa bir gecikme ile pozisyonu güncelle (render için)
  requestAnimationFrame(() => {
    updateTooltipPosition();
  });
}

function hideTooltip() {
  tooltipTimeout = setTimeout(() => {
    isTooltipVisible = false;
    tooltip.classList.remove('show');
  }, 100);
}

if (logo && tooltip) {
  logo.addEventListener('mouseenter', showTooltip);
  logo.addEventListener('mouseleave', hideTooltip);
  tooltip.addEventListener('mouseenter', () => {
    clearTimeout(tooltipTimeout);
    isTooltipVisible = true;
  });
  tooltip.addEventListener('mouseleave', hideTooltip);
  
  // Scroll ve resize'da pozisyonu güncelle
  window.addEventListener('scroll', updateTooltipPosition);
  window.addEventListener('resize', updateTooltipPosition);
}

// 3D Tilt efekti için - Sadece description için
function init3DTilt() {


  // Smooth animasyon için requestAnimationFrame
  function animate() {
    // Smooth interpolation
    tiltX += (targetTiltX - tiltX) * 0.1;
    tiltY += (targetTiltY - tiltY) * 0.1;

    if (Math.abs(targetTiltX - tiltX) > 0.01 || Math.abs(targetTiltY - tiltY) > 0.01) {
      descriptionElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      descriptionElement.classList.add('tilt-3d');
      requestAnimationFrame(animate);
    }
  }

  // Mouse move ile tilt
  descriptionElement.addEventListener('mousemove', (e) => {
    if (isDragging) return;
    
    const rect = descriptionElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    targetTiltX = ((y - centerY) / centerY) * -10;
    targetTiltY = ((x - centerX) / centerX) * 10;
    
    animate();
  });

  // Mouse leave ile reset
  descriptionElement.addEventListener('mouseleave', () => {
    if (!isDragging) {
      targetTiltX = 0;
      targetTiltY = 0;
      
      // Smooth geri dönüş
      function reset() {
        tiltX += (targetTiltX - tiltX) * 0.15;
        tiltY += (targetTiltY - tiltY) * 0.15;
        
        descriptionElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        if (Math.abs(tiltX) > 0.1 || Math.abs(tiltY) > 0.1) {
          requestAnimationFrame(reset);
        } else {
          descriptionElement.style.transform = '';
          descriptionElement.classList.remove('tilt-3d');
          tiltX = 0;
          tiltY = 0;
        }
      }
      reset();
    }
  });

  // Mouse down - drag başlat
  descriptionElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    descriptionElement.style.cursor = 'grabbing';
    e.preventDefault();
  });

  // Mouse move - drag sırasında
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    
    targetTiltY = currentX * 0.2;
    targetTiltX = -currentY * 0.2;
    
    descriptionElement.style.transform = `perspective(1000px) rotateX(${targetTiltX}deg) rotateY(${targetTiltY}deg) scale3d(1.03, 1.03, 1.03)`;
    descriptionElement.classList.add('tilt-3d');
  });

  // Mouse up - drag bitir
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      descriptionElement.style.cursor = 'pointer';
      
      // Smooth geri dönüş
      targetTiltX = 0;
      targetTiltY = 0;
      
      function reset() {
        tiltX += (targetTiltX - tiltX) * 0.15;
        tiltY += (targetTiltY - tiltY) * 0.15;
        
        descriptionElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        if (Math.abs(tiltX) > 0.1 || Math.abs(tiltY) > 0.1) {
          requestAnimationFrame(reset);
        } else {
          descriptionElement.style.transform = '';
          descriptionElement.classList.remove('tilt-3d');
          tiltX = 0;
          tiltY = 0;
        }
      }
      reset();
    }
  });
}

// Sayfa yüklendiğinde animasyonları başlat
window.addEventListener('load', () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  init3DTilt();
});

// ========== GÜVENLİK KORUMALARI ==========

// Sağ tık engelleme
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});





// Text seçimini engelle
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
  return false;
});

