document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("image-input");
  const outputCode = document.getElementById("output-code");

  imageInput.addEventListener("change", (event) => {
    const selectedImage = event.target.files[0];
    const formData = new FormData();
    formData.append("image", selectedImage);

    const backendUrl = "http://http://127.0.0.1:5000"; // 您的后端 IP 地址和端口号
    const generateCodeEndpoint = "/generate_code"; // 后端的生成代码端点

    fetch(`${backendUrl}${generateCodeEndpoint}`, {
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
