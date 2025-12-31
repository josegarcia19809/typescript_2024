interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

// Uso
console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(
    getRuntime({
        title: "Spongebob",
        numEpisodes: 80,
        episodeDuration: 30,
    })
);
