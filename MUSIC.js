* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    display: flex;
    gap: 30px;
    max-width: 1200px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
}

.music-player {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    width: 400px;
    max-width: 100%;
}

.album-art-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.album-art {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: rotate 20s linear infinite;
    animation-play-state: paused;
}

.album-art.playing {
    animation-play-state: running;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.album-art img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.song-info {
    text-align: center;
    margin-bottom: 25px;
}

.song-info h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 8px;
}

.song-info p {
    color: #666;
    font-size: 16px;
}

.progress-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
}

.time {
    color: #666;
    font-size: 14px;
    min-width: 40px;
}

.progress-bar {
    flex: 1;
    height: 6px;
    background: #e0e0e0;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.progress {
    height: 100%;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 3px;
    width: 0%;
    transition: width 0.1s linear;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 25px;
}

.control-btn {
    background: transparent;
    border: none;
    color: #667eea;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.control-btn:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: scale(1.1);
}

.play-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 28px;
    width: 70px;
    height: 70px;
}

.play-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.volume-container {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
}

.volume-container i {
    color: #667eea;
    font-size: 20px;
}

.volume-slider {
    width: 120px;
    height: 6px;
    border-radius: 3px;
    outline: none;
    -webkit-appearance: none;
    background: #e0e0e0;
}

.volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #667eea;
    cursor: pointer;
}

.volume-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #667eea;
    cursor: pointer;
    border: none;
}

.playlist {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    padding: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    width: 400px;
    max-width: 100%;
    max-height: 600px;
    overflow-y: auto;
}

.playlist h3 {
    color: #333;
    margin-bottom: 20px;
    font-size: 22px;
}

.playlist-tracks {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.track-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.track-item:hover {
    background: #e9ecef;
    transform: translateX(5px);
}

.track-item.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.track-number {
    font-weight: bold;
    min-width: 25px;
    color: #667eea;
}

.track-item.active .track-number {
    color: white;
}

.track-info {
    flex: 1;
}

.track-title {
    font-weight: 600;
    margin-bottom: 4px;
}

.track-artist {
    font-size: 14px;
    opacity: 0.8;
}

.track-duration {
    font-size: 14px;
    opacity: 0.7;
}

/* Scrollbar Styling */
.playlist::-webkit-scrollbar {
    width: 8px;
}

.playlist::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.playlist::-webkit-scrollbar-thumb {
    background: #667eea;
    border-radius: 10px;
}

.playlist::-webkit-scrollbar-thumb:hover {
    background: #764ba2;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .music-player,
    .playlist {
        width: 100%;
        max-width: 400px;
    }

    .album-art {
        width: 250px;
        height: 250px;
    }
}
