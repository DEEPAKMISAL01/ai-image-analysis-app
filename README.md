# 🤖 AI Image Analyzer on AWS

## 📘 Introduction
Welcome to this hands-on project where you'll build a complete AI-powered image analysis system using AWS. This solution leverages computer vision (**Amazon Rekognition**) and generative AI (**Amazon Bedrock**) in a fully **serverless architecture**, provisioned entirely with **Terraform**.

---

## 🔎 Project Overview
This system enables users to upload an image via a simple web interface. The image is analyzed using Amazon Rekognition to detect objects, scenes, and labels. These results are then passed to Amazon Bedrock (Titan model), which generates a human-readable summary.

---

## 🛠️ Tech Stack

- **Amazon Rekognition**: Detects objects, scenes, and concepts.
- **Amazon Bedrock (Titan)**: Generates AI-powered descriptive summaries.
- **AWS Lambda (Python)**: Orchestrates Rekognition and Bedrock.
- **Amazon API Gateway**: Provides RESTful API endpoints.
- **Amazon S3**: Hosts the static frontend.
- **Terraform**: Infrastructure as Code (IaC) to provision all resources.

---

## 📋 Prerequisites

- An active **AWS Account** with admin permissions.
- **AWS CLI** installed and configured.
- **Terraform** installed (`terraform --version`).
- **Node.js**, **npm**, and **Python** (optional for frontend expansion).
- **Bedrock Model Access**: Enable the Titan Image Generator G1 via Amazon Bedrock console.

---

## 📁 Project Structure

ai-image-anlysis-app/
├── terraform/
│ ├── main.tf
│ ├── variables.tf
│ └── outputs.tf
├── lambda/
│ └── image_analyzer.py
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── assets/
│ ├── homepage.png
│ └── output.png
└── README.md


---

## 🧠 Step 2 – Backend Development (Lambda)

Create `lambda/image_analyzer.py` to:

- Accept a base64 image from API Gateway.
- Decode the image.
- Call **Rekognition** to get labels.
- Craft a prompt and call **Bedrock**.
- Return detected labels and the AI-generated summary.

> Use `boto3` to interact with AWS services.

---

## 🏗️ Step 3 – Infrastructure as Code (Terraform)

- `variables.tf`: Define reusable variables (region, bucket name, etc.)
- `main.tf`: Define S3 bucket, Lambda, API Gateway, IAM roles, and permissions.
- `outputs.tf`: Outputs `api_gateway_invoke_url`, `s3_website_endpoint`.

### Terraform Commands:
```bash
cd ai-image-anlysis-app/terraform
terraform init
terraform plan
terraform apply

Copy the api_gateway_invoke_url from the output for frontend use.

💻 Step 4 – Frontend Development
index.html: Main image upload and display interface.

style.css: Styling for UI.

script.js: Handles image preview, base64 conversion, and API call.

🔧 In script.js, replace YOUR_API_GATEWAY_INVOKE_URL with the actual URL and add /analyze.

Homepage
"C:\Users\DELL\Desktop\ai-image-anlysis-app\assets\Homepage.png.png"

Output Page


☁️ Step 5 – Deployment and Testing
1. Backend Deployment
cd terraform
terraform apply

2. Frontend Deployment
Upload index.html, style.css, and script.js to the S3 bucket.

Bucket name should be similar to ai-image-analyzer-frontend-hosting.

Ensure public read access is enabled for all files.

3. Testing
Open the index.html from the S3 bucket using its Object URL.

Upload an image.

Click "Analyze Image".

See the AI-generated description and Rekognition label results.

🧹 Cleanup
To remove all AWS resources and stop billing:
cd terraform
terraform destroy

✅ Project Outcome
A fully serverless, AI-powered image analyzer that combines computer vision and generative AI. Built and deployed using modern AWS cloud-native tools with zero server management.

📂 Optional Enhancements
Add Amazon Cognito for authentication.
Store image data and analysis history in DynamoDB.
Distribute frontend globally using CloudFront.
Add monitoring and alerts with CloudWatch.

📄 License
This project is licensed under the MIT License.



Let me know if you also want me to:

Add live demo badges
Create a deploy.sh script
Write your image_analyzer.py or main.tf file

Just say the word!


