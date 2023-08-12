document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("image-input");
  const outputCode = document.getElementById("output-code");

  imageInput.addEventListener("change", (event) => {
    const selectedImage = event.target.files[0];
    const formData = new FormData();
    formData.append("image", selectedImage);

    const backendUrl = "http://172.28.211.45:5000"; // 您的后端 IP 地址和端口号
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
