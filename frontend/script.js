document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('imageUpload');
    const uploadLabel = document.getElementById('uploadLabel');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const imagePreview = document.getElementById('imagePreview');
    const previewContainer = document.getElementById('preview');
    const resultsContainer = document.getElementById('results');
    const loader = document.getElementById('loader');
    const resultContent = document.getElementById('resultContent');
    const descriptionEl = document.getElementById('description');
    const labelsEl = document.getElementById('labels');

    // ✅ Fixed API Endpoint (use /analyze path if that’s what your Lambda handles)
    const API_ENDPOINT = "https://ra21h6z9u8.execute-api.us-east-1.amazonaws.com/v1/analyze";

    let base64Image = null;

    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            // Display image preview
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
                uploadLabel.querySelector('span').textContent = file
