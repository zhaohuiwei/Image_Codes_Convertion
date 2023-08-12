document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("image-input");
  const outputCode = document.getElementById("output-code");

  imageInput.addEventListener("change", (event) => {
    const selectedImage = event.target.files[0];
    const formData = new FormData();
    formData.append("image", selectedImage);

    fetch("/generate_code", {
      method: "POST",
      body: formData,
    })
    .then(response => response.text())
    .then(data => {
      outputCode.value = data;
    })
    .catch(error => {
      console.error("Error uploading image:", error);
    });
  });
});
