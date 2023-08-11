// 获取DOM元素
const imageInput = document.getElementById('image-input');
const inputImagePreview = document.getElementById('input-image-preview');

// 监听图片上传事件
imageInput.addEventListener('change', handleImageUpload);

// 处理图片上传
function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            inputImagePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
    } else {
        inputImagePreview.innerHTML = '<p>Drop an image or select a file</p>';
    }
}
