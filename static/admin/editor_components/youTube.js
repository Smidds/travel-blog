CMS.registerEditorComponent({
  // Internal id of the component
  id: 'youtube',
  // Visible label
  label: 'YouTube',
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: 'id', label: 'YouTube Video ID', widget: 'string' }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<div.*video-container.*>\n\s*<iframe.*src="https:\/\/www.youtube.com\/embed\/([^"]+)".*><\/iframe>\n\s*<\/div>$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function({ id }) {
    return `<div class="video-container">
      <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function({ id }) {
    return `<div class="video-container">
      <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`
  }
})
