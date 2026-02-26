// Daily Challenge: Video Class

// 1) Create the video class

class Video {

    constructor(title, uploader, time) {
        // On initialise les propriétés de l'objet
        this.title = title;
        this.uploader = uploader;
        this.time = time; // durée en secondes

// 2) Create the watch() method
    }    watch() {
        // Méthode qui affiche un message personnalisé
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// 3) Instanciate first video 

const video1 = new Video("JavaScript Basics", "John", 300);

video1.watch();

// Output: John watched all 300 seconds of JavaScript Basics



// 4) Instanciate second video

// ==========================
// Second Video Instance
// ==========================

const video2 = new Video("OOP in JS", "Sarah", 450);

video2.watch();

// Output: Sarah watched all 450 seconds of OOP in JS


// 5) Bonus 1 : Store 5 videos in an array

const videosData = [
    { title: "HTML Tutorial", uploader: "Mike", time: 200 },
    { title: "CSS Flexbox", uploader: "Anna", time: 350 },
    { title: "React Intro", uploader: "David", time: 600 },
    { title: "Node.js Crash Course", uploader: "Emma", time: 500 },
    { title: "TypeScript Guide", uploader: "Chris", time: 400 }
];

/* Meilleure structure : un tableau d’objets
Pourquoi ? Parce qu’on peut facilement boucler dessus pour créer les instances
*/


// bonus 2 : Loop to instantiate instances

const videoInstances = [];

/*
On parcourt le tableau
Pour chaque objet, on crée une nouvelle instance video
*/

videosData.forEach(video => {

    const newVideo = new Video(video.title, video.uploader, video.time);

    videoInstances.push(newVideo);
});


// On teste les instances créées

videoInstances.forEach(instance => {
    instance.watch();
});

