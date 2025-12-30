interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];

    add(el: T): void {
        this.queue.push(el);
    }
}

// Uso
const songs = new Playlist<Song>();
songs.add({title: "Imagine", artist: "John Lennon"});

const videos = new Playlist<Video>();
videos.add({
    title: "TypeScript Tutorial",
    creator: "Code Academy",
    resolution: "1080p",
});
