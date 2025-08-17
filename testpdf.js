const PDFMerger = require("pdf-merger-js").default;
const path = require("path");


async function merge(unique_id,files_obj) {
const merger = new PDFMerger();//note you have to use const NOT var

  for (let i = 0; i < files_obj.length; i++) {
    await merger.add(files_obj[i].path);
  }

  // Set metadata
  await merger.setMetadata({
    producer: "pdf-merger-js based script",
    author: "John Doe",
    creator: "John Doe",
    title: "Merged PDF by user"
  });

  const outputFilePath = path.join(__dirname, 'mergedFiles', `merged-${unique_id}.pdf`);

  await merger.save(outputFilePath); //save under given name and reset the internal document

  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};
module.exports = merge;