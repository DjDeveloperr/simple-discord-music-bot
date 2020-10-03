module.exports = class SongConstruct {
    constructor() {
        this.connection = null;
        this.volume = 5;
        this.songs = [];
        this.playing = false;
    }

    addSong(song) {
        this.songs.push(song);
        return this;
    }

    resetSongs() {
        this.songs = [];
        return this;
    }

    skipSong() {
        this.songs.shift();
        return this;
    }

    async stop() {
        this.resetSongs();
        this.playing = false;
        await this.connection.disconnect();
        this.connection = null;
        return this;
    }
}