// Template of all the data that each beat c
let ProducerNames = ["CaptainSuj", "LinXX"];

class Beat {
    constructor() {
        this.BeatTitle = ["From Me To You", "In The Room"];
        this.Producer = [0, 0];
        this.BeatFile = [
            'pjflipper1/ProducerIsland/Beat MP3 Files /(FREE FOR PROFIT) Quadeca From Me To You Type Beat.mp3',
            'pjflipper1/ProducerIsland/Beat MP3 Files /hardest in the room.mp3'
        ];
    }
}

// Functions that will be called at the start of the program
function DisplayBeat() {
    // Create an instance of the Beat class
    const myBeat = new Beat();

    // Access the BeatTitle property using the instance
    var Title = document.getElementById("hello");
    Title.textContent = myBeat.BeatTitle[0];
}

// Call the DisplayBeat function
DisplayBeat();
