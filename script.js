function previewImage(event) {
    const input = event.target;
    const preview = document.getElementById("input-image-preview");
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function() {
            preview.innerHTML = `<img src="${reader.result}" alt="Preview Image">`;
        };

        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '<p>Drop an image or select a file</p>';
    }
}

function uploadImage() {
    const input = document.getElementById("image-input");
    const formData = new FormData();

    if (input.files.length > 0) {
        formData.append("image", input.files[0]);

        fetch("/generate_code", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            const outputCode = document.getElementById("output-code");
            outputCode.value = data;

            const outputImagePreview = document.getElementById("output-image-preview");
            outputImagePreview.innerHTML = `<img src="${data}" alt="Processed Image">`;
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
}
