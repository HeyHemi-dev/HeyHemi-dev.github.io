function checkForFiles(directoryPath, fileType) {
  //directoryPath is relative to this JS file
  //fileType should not include the '.'

  //Get a readout of everything in the directoryPath
  const fs = require('fs')
  let filesAll = fs.readdirSync(directoryPath)
  //console.log(filesAll)

  //Make sure file names are all lower-case for consistency
  filesAll = filesAll.map((file) => file.toLowerCase())

  //Filter only the files that match the file type
  const regex = new RegExp(`\\.${fileType}$`)
  let filesOfType = filesAll.filter((file) => regex.test(file))
  //console.log(filesOfType)

  //Replace the file extension to get a clean file name
  filesOfType = filesOfType.map((file) => file.replace(regex, ''))

  //console.log(filesOfType)
  return filesOfType
}

function compareDraftToPublish() {
  // Get list of .html files in /blog (name, lowercase, no extension)
  // Get list of .md files in /drafts (name, lowercase, no extension)
  let postsDraft = checkForFiles('../drafts', 'md')
  let postsPublished = checkForFiles('../blog', 'html')

  console.log(postsDraft)
  console.log(postsPublished)
  // For each md file, loop over .html files to see if there is one with the same name
  postsDraft.forEach(function (post) {
    if (postsPublished.includes(post)) {
      console.log(postsPublished.includes(post))
    } else {
      console.log(postsPublished.includes(post))
      // If not;
      // Create a new html file in /blog
      // - Add html page struture
      // - Add html section structure
      // - Format post: markdown as html (needs variables)
      // - Add html post inside section
      // Add link to homepage
      // - Add steps here...
    }
  })
}
// Create trigger for function
compareDraftToPublish()
