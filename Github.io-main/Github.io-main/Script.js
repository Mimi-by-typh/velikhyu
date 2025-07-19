// Основной JavaScript файл для сайта Великодушные #VLKD

// Музыкальный плеер
class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentTrackIndex = 0;
        this.volume = 0.5;
        this.playlist = MUSIC_PLAYLIST || [
            {
                title: "Epic Battle Theme",
                url: "music/epic-battle.mp3",
                duration: "3:45"
            },
            {
                title: "Dark Ambient",
                url: "music/dark-ambient.mp3", 
                duration: "4:20"
            },
            {
                title: "Warrior's Call",
                url: "music/warrior-call.mp3",
                duration: "3:15"
            },
            {
                title: "Blood Moon",
                url: "music/blood-moon.mp3",
                duration: "5:10"
            },
            {
                title: "Victory March",
                url: "music/victory-march.mp3",
                duration: "4:05"
            }
        ];
        
        this.init();
    }

    init() {
        this.createPlayerUI();
        this.setupEventListeners();
        this.audio.volume = this.volume;
        this.updatePlaylist();
    }

    createPlayerUI() {
        const playerHTML = `
            <div class="music-player" id="musicPlayer">
                <h3>🎵 Музыкальный плеер</h3>
                <div class="player-controls">
                    <button id="prevBtn" title="Предыдущий">⏮</button>
                    <button id="playBtn" title="Воспроизвести/Пауза">▶</button>
                    <button id="nextBtn" title="Следующий">⏭</button>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" id="progressBar"></div>
                </div>
                <div class="time-display">
                    <span id="currentTime">0:00</span>
                    <span id="totalTime">0:00</span>
                </div>
                <div class="playlist" id="playlist"></div>
                <div class="volume-control">
                    <span>🔊</span>
                    <input type="range" id="volumeSlider" min="0" max="1" step="0.1" value="0.5">
                </div>
            </div>
            <button class="toggle-player" id="togglePlayer" title="Показать/Скрыть плеер">🎵</button>
        `;
        
        document.body.insertAdjacentHTML('beforeend', playerHTML);
    }

    setupEventListeners() {
        const playBtn = document.getElementById('playBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const volumeSlider = document.getElementById('volumeSlider');
        const progressContainer = document.querySelector('.progress-container');
        const toggleBtn = document.getElementById('togglePlayer');
        const player = document.getElementById('musicPlayer');

        playBtn.addEventListener('click', () => this.togglePlay());
        prevBtn.addEventListener('click', () => this.previousTrack());
        nextBtn.addEventListener('click', () => this.nextTrack());
        volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        progressContainer.addEventListener('click', (e) => this.seek(e));
        toggleBtn.addEventListener('click', () => this.togglePlayer());

        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.nextTrack());
        this.audio.addEventListener('loadedmetadata', () => this.updateTotalTime());
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.audio.src = this.playlist[this.currentTrackIndex].url;
        this.audio.play();
        this.isPlaying = true;
        document.getElementById('playBtn').textContent = '⏸';
        this.updateActivePlaylistItem();
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        document.getElementById('playBtn').textContent = '▶';
    }

    nextTrack() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        if (this.isPlaying) {
            this.play();
        }
        this.updateActivePlaylistItem();
    }

    previousTrack() {
        this.currentTrackIndex = this.currentTrackIndex === 0 ? this.playlist.length - 1 : this.currentTrackIndex - 1;
        if (this.isPlaying) {
            this.play();
        }
        this.updateActivePlaylistItem();
    }

    setVolume(value) {
        this.volume = value;
        this.audio.volume = value;
    }

    seek(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        this.audio.currentTime = percent * this.audio.duration;
    }

    updateProgress() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
        document.getElementById('currentTime').textContent = this.formatTime(this.audio.currentTime);
    }

    updateTotalTime() {
        document.getElementById('totalTime').textContent = this.formatTime(this.audio.duration);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    updatePlaylist() {
        const playlistContainer = document.getElementById('playlist');
        playlistContainer.innerHTML = '';
        
        this.playlist.forEach((track, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item';
            item.textContent = `${track.title} (${track.duration})`;
            item.addEventListener('click', () => {
                this.currentTrackIndex = index;
                this.play();
            });
            playlistContainer.appendChild(item);
        });
    }

    updateActivePlaylistItem() {
        const items = document.querySelectorAll('.playlist-item');
        items.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentTrackIndex);
        });
    }

    togglePlayer() {
        const player = document.getElementById('musicPlayer');
        player.classList.toggle('hidden');
    }
}

// Улучшенные визуальные эффекты
class VisualEffects {
    constructor() {
        this.init();
    }

    init() {
        this.createParticles();
        this.setupScrollEffects();
        this.setupHoverEffects();
        this.setupFireEffect();
    }

    createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(particle);

        // Удаляем частицу через некоторое время и создаем новую
        setTimeout(() => {
            particle.remove();
            this.createParticle();
        }, 5000);
    }

    setupScrollEffects() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 1s ease-out forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.clan-card').forEach(card => {
            observer.observe(card);
        });
    }

    setupHoverEffects() {
        document.querySelectorAll('.clan-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.createHoverParticles(card);
            });
        });
    }

    createHoverParticles(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.animation = 'float 2s ease-out forwards';
            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 2000);
        }
    }

    setupFireEffect() {
        const header = document.querySelector('h1');
        if (header) {
            const text = header.textContent;
            header.innerHTML = '';

            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                span.style.animation = `fire-flicker ${0.5 + Math.random() * 1.5}s infinite alternate`;
                span.style.animationDelay = `${i * 0.1}s`;
                header.appendChild(span);
            }
        }
    }
}

// Анимации для навигации
class NavigationEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupActiveLink();
        this.setupSmoothScrolling();
    }

    setupActiveLink() {
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('section, .container');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id') || '';
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}` || 
                    (current === '' && link.getAttribute('href') === '#home')) {
                    link.classList.add('active');
                }
            });
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Улучшенный эффект кровавого дождя
class BloodRainEffect {
    constructor() {
        this.init();
    }

    init() {
        this.createCanvas();
        this.setupAnimation();
    }

    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'bloodRain';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        canvas.style.opacity = '0';
        canvas.style.animation = 'rainFade 4s ease-out forwards';
        document.body.prepend(canvas);

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupAnimation() {
        const particles = [];
        const particleCount = 2000;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * -this.canvas.height,
                length: 50 + Math.random() * 150,
                speed: 3 + Math.random() * 8,
                color: `rgba(255, ${Math.random() * 50}, ${Math.random() * 50}, ${0.3 + Math.random() * 0.4})`,
                thickness: 0.5 + Math.random() * 2
            });
        }

        const animate = () => {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            particles.forEach(particle => {
                this.ctx.beginPath();
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(particle.x, particle.y + particle.length);
                this.ctx.strokeStyle = particle.color;
                this.ctx.lineWidth = particle.thickness;
                this.ctx.stroke();

                particle.y += particle.speed;

                if (particle.y > this.canvas.height) {
                    particle.y = Math.random() * -100;
                    particle.x = Math.random() * this.canvas.width;
                }
            });

            requestAnimationFrame(animate);
        };

        animate();
    }
}

// Инициализация всех эффектов
document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
    new VisualEffects();
    new NavigationEffects();
    new BloodRainEffect();
    
    // Добавляем Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
});

// Дополнительные эффекты при загрузке страницы
window.addEventListener('load', () => {
    // Анимация появления элементов
    const elements = document.querySelectorAll('.clan-card, nav a, header h1, .clan-tag');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});