// Музыкальные треки для сайта Великодушные #VLKD

const MUSIC_PLAYLIST = [
    {
        title: "Спиннер #VLKD",
        artist: "Великодушный",
        url: "music/spiner.mp3",
        duration: "3:45",
        genre: "Epic"
    }
];

// Альтернативные источники музыки (бесплатные)
const FREE_MUSIC_SOURCES = [
    "https://freemusicarchive.org/",
    "https://incompetech.com/",
    "https://pixabay.com/music/",
    "https://www.bensound.com/"
];

// Рекомендуемые жанры для сайта
const RECOMMENDED_GENRES = [
    "Epic Battle Music",
    "Dark Ambient",
    "Medieval Fantasy",
    "Gothic Rock",
    "Heavy Metal",
    "Orchestral",
    "Choral Music"
];

// Функция для загрузки музыки из локальных файлов
function loadLocalMusic() {
    const localMusic = [
        {
            title: "Спиннер #VLKD",
            file: "music/spiner.mp3",
            duration: "3:45"
        }
    ];
    
    return localMusic;
}

// Функция для создания плейлиста из YouTube (если нужно)
function createYouTubePlaylist() {
    const youtubePlaylist = [
        {
            title: "Спиннер #VLKD",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            duration: "3:45"
        }
    ];
    
    return youtubePlaylist;
}

// Экспорт для использования в основном файле
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MUSIC_PLAYLIST, FREE_MUSIC_SOURCES, RECOMMENDED_GENRES };
} 