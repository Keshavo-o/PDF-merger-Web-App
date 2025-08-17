# 📑 PDF-merger-Web-App
## HomePage:
<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/4728cda5-39ae-4b8a-b104-9284ab82b762" />
### A simple Node.js application to merge multiple PDF files into a single file using pdf-merger-js and Multer for file uploads.

## 🚀 Features

### Upload multiple PDF files through a form.

### Merge them into a single PDF.

### Download the merged PDF file.

## 🛠️ Tech Stack

### Node.js + Express.js

### Multer → handles file uploads (multipart/form-data)

### pdf-merger-js → third party package that merges PDF files

### Path → helps with absolute paths

## 📦 Installation
### Clone this repository
git clone <your-repo-link>

### Install dependencies
npm install

## ▶️ Usage
#### 1.Start the server
npm start(using node)
npm run dev(using nodemon)

#### 2.Visit http://localhost:3000/

#### 3.Upload PDF files

#### 4.Get your merged PDF 🎉

## 📘 Notes

res.sendFile() is used to send the merged PDF back to the client, not an EJS or other SSR method.

This project is not Server-Side Rendering (SSR). It just serves static files and merged PDFs.

pdf-merger-js is written in ESM with export default, so when using require, you must access it with .default:

ie : const PDFMerger = require("pdf-merger-js").default;

## ⚠️ Warning

Do not use Multer as a global middleware. Only apply it to routes that handle file uploads to prevent unwanted/malicious file uploads.
