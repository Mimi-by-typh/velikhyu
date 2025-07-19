// Бесконечный кровавый дождь
function initInfiniteBloodRain() {
  // Создаем canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'bloodRain';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1'; // Под основным контентом
  document.body.prepend(canvas);
  
  const ctx = canvas.getContext('2d');
  
  // Установка размеров
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Настройки дождя
  const settings = {
    particleCount: 3000,
    colors: [
      'rgba(255, 0, 0, 0.7)',
      'rgba(200, 0, 0, 0.6)',
      'rgba(160, 0, 0, 0.5)'
    ],
    minSpeed: 5,
    maxSpeed: 12,
    minLength: 200,
    maxLength: 40
  };

  // Создание частиц
  const particles = [];
  for (let i = 0; i < settings.particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      length: settings.minLength + Math.random() * (settings.maxLength - settings.minLength),
      speed: settings.minSpeed + Math.random() * (settings.maxSpeed - settings.minSpeed),
      color: settings.colors[Math.floor(Math.random() * settings.colors.length)]
    });
  }

  // Функция анимации
  function animate() {
    // Очистка с легким затемнением для эффекта шлейфа
    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Отрисовка частиц
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(particle.x, particle.y + particle.length);
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Движение вниз
      particle.y += particle.speed;
      
      // Возврат в начало при выходе за границы
      if (particle.y > canvas.height) {
        particle.y = Math.random() * -100;
        particle.x = Math.random() * canvas.width;
      }
    });
    
    requestAnimationFrame(animate);
  }

  // Запуск анимации
  animate();
}

// Запускаем после полной загрузки
window.addEventListener('load', initInfiniteBloodRain);

// Дублирующий запуск для надежности
document.addEventListener('DOMContentLoaded', initInfiniteBloodRain);