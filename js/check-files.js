// Define function:
// Get list of .html files in /blog (name, lowercase, no extension)
// Get list of .md files in /drafts (name, lowercase, no extension)
// For each md file, loop over .html files to see if there is one with the same name
// If not;
// Create a new html file in /blog
// - Add html page struture
// - Add html section structure
// - Format post: markdown as html (needs variables)
// - Add html post inside section
// Add link to homepage
// - Add steps here...
// Create trigger for function

function checkForFiles(filePath) {
  let fs = require('fs')
  let blogFiles = fs.readdirSync(filePath)
  console.log(blogFiles)
}

checkForFiles('/blog')
