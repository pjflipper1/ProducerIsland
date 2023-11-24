let ProducerNames = ["CaptainSuj", "LinXX"];

class Beat {
    constructor(title, BPM, Tags, producerIndex, Key, beatFile) {
        this.title = title;
        this.Bpm = this.Bpm;
        this.Tags = Tags;
        this.producer = ProducerNames[producerIndex];
        this.Key = Key;
        this.beatFile = beatFile;
    }
}

    // Example data (replace this with your actual data)
    const beatsData = [
        new Beat("From Me To You", 128, ["Quadeca", "From Me To You", "Dreamy"], 0, "Am", 'pjflipper1/ProducerIsland/Beat MP3 Files /(FREE FOR PROFIT) Quadeca From Me To You Type Beat.mp3'),
        new Beat("In The Room", 128, ["Travis Scott", "JACKBOYS", "Highest In The Room"], 1, "Am", 'pjflipper1/ProducerIsland/Beat MP3 Files /hardest in the room.mp3')
    ];

    // Function to generate table rows based on data
    function generateTableRows(data) {
        const tableBody = document.getElementById('tableBody');

        data.forEach(beat => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><h2>${beat.title}</h2></td>
                <td><h2>${beat.Bpm}</h2></td>
                <td><h2>${beat.Tags}</h2></td>
                <td><h2>${beat.producer}</h2></td>
                <td><h2>${beat.Key}</h2></td>
                <td><button onclick="downloadBeat('${beat.beatFile}')">Download</button></td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Call the function with your data to generate table rows
    generateTableRows(beatsData);

    // Function to handle beat download
    function downloadBeat(FileLocation) {
        // Create an invisible anchor element
        var anchor = document.createElement('a');
        anchor.style.display = 'none';
    
        // Set the href and download attributes to trigger the download
        anchor.href = FileLocation;
        anchor.download = 'downloaded_file.mp3';
    
        // Append the anchor to the body
        document.body.appendChild(anchor);
    
        // Trigger a click on the anchor
        anchor.click();
    
        // Remove the anchor from the body
        document.body.removeChild(anchor);
      }
    