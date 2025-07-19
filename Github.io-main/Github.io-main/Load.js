function animateCards() {
  // Настройки
  const cards = document.querySelectorAll('.clan-card');
  const baseDelay = 300; // Задержка между карточками
  
  cards.forEach((card, cardIndex) => {
    // Анимация заголовка
    const title = card.querySelector('h2');
    setTimeout(() => {
      title.style.animation = 'typewriter 1.5s steps(30) forwards';
      title.classList.remove('hidden-text');
    }, cardIndex * baseDelay);
    
    // Анимация пунктов списка
    const items = card.querySelectorAll('li');
    items.forEach((item, itemIndex) => {
      setTimeout(() => {
        item.style.transitionDelay = `${itemIndex * 0.2}s`;
        item.classList.remove('hidden-text');
      }, cardIndex * baseDelay + 800);
    });
    
    // Параллакс-эффект
    card.style.transitionDelay = `${cardIndex * 0.1}s`;
    card.classList.add('visible-card');
  });
}

// Запуск при загрузке
window.addEventListener('load', () => {
  setTimeout(animateCards, 500); // Задержка для прелоадера
});

// Дополнительно: эффект при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-card');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.clan-card').forEach(card => {
  observer.observe(card);
});