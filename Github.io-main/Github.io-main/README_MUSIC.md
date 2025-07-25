# 🎵 Музыкальный плеер для сайта Великодушные #VLKD

## Как добавить музыку на сайт

### 1. Подготовка файлов
- Поместите ваши музыкальные файлы в папку `music/`
- Поддерживаемые форматы: `.mp3`, `.wav`, `.ogg`
- Рекомендуемый размер файла: до 10MB

### 2. Обновление плейлиста
Откройте файл `music.js` и обновите массив `MUSIC_PLAYLIST`:

```javascript
const MUSIC_PLAYLIST = [
    {
        title: "Название трека",
        artist: "Исполнитель",
        url: "music/ваш-файл.mp3",
        duration: "3:45",
        genre: "Epic"
    },
    // Добавьте больше треков...
];
```

### 3. Рекомендуемые жанры для сайта
- Epic Battle Music (эпическая боевая музыка)
- Dark Ambient (темная атмосферная)
- Medieval Fantasy (средневековая фэнтези)
- Gothic Rock (готический рок)
- Heavy Metal (хэви метал)
- Orchestral (оркестровая)
- Choral Music (хоровая)

### 4. Бесплатные источники музыки
- [Free Music Archive](https://freemusicarchive.org/)
- [Incompetech](https://incompetech.com/)
- [Pixabay Music](https://pixabay.com/music/)
- [Bensound](https://www.bensound.com/)

### 5. Структура файлов
```
Github.io-main/
├── music/
│   ├── epic-battle.mp3
│   ├── dark-ambient.mp3
│   └── warrior-call.mp3
├── music.js
├── Script.js
└── style.css
```

### 6. Функции плеера
- ✅ Воспроизведение/пауза
- ✅ Следующий/предыдущий трек
- ✅ Регулировка громкости
- ✅ Прогресс-бар
- ✅ Плейлист
- ✅ Автоматическое переключение
- ✅ Современный дизайн

### 7. Настройка для разных страниц
Если хотите добавить музыку на другие страницы сайта, добавьте в их HTML:

```html
<script src="Script.js"></script>
<script src="music.js"></script>
```

### 8. Примеры треков для клана
- "Epic Battle Theme" - для главной страницы
- "Dark Ambient" - для страницы устава
- "Warrior's Call" - для страницы членов
- "Blood Moon" - для страницы правил
- "Victory March" - для страницы достижений

### 9. Технические требования
- Современный браузер с поддержкой HTML5 Audio
- JavaScript включен
- Стабильное интернет-соединение для загрузки файлов

### 10. Устранение неполадок
- Если музыка не воспроизводится, проверьте путь к файлу
- Убедитесь, что файл не поврежден
- Проверьте консоль браузера на наличие ошибок

---

**Примечание:** Убедитесь, что у вас есть права на использование музыки или используйте бесплатные треки с соответствующими лицензиями. 