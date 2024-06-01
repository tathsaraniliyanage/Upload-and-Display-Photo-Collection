document.getElementById('upload-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const photoCollection = document.getElementById('photo-collection');

    // Check if a file was selected
    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        // Set up the FileReader to read the file as a data URL
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded Photo';

            // Create a div to hold the photo
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.appendChild(img);

            // Append the photo item to the photo collection
            photoCollection.appendChild(photoItem);
        };

        // Read the image file
        reader.readAsDataURL(file);
    } else {
        alert('Please select a photo to upload.');
    }
});

document.getElementById('screenshot-btn').addEventListener('click', function() {
    const photoCollection = document.getElementById('photo-collection');
    
    html2canvas(photoCollection).then(canvas => {
        // Convert the canvas to a data URL
        const imgData = canvas.toDataURL('image/png');

        // Create a link element
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'photo-collection.png'; // Specify the filename

        // Append the link to the body
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    });
});
