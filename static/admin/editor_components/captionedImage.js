CMS.registerEditorComponent({
  // Internal id of the component
  id: 'caption-image',
  // Visible label
  label: 'Captioned Image',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { label: 'Image', name: 'image', widget: 'image', allow_multiple: false },
    { label: 'Alt Text', name: 'alt', widget: 'string' },
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Caption', name: 'caption', widget: 'string' }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<div.*captioned-image.*src="([^"]+)"\salt="([^"]+)"\stitle="([^"]+)".*>[^>]+>(.*)<\/div><\/div>$/,
  // Function to extract data elements from the regexp match
  fromBlock: match =>
    match && {
      image: match[1],
      alt: match[2],
      title: match[3],
      caption: match[4]
    },
  // Function to create a text block from an instance of this component
  toBlock: function({ title, image, alt, caption }) {
    return `<div class="captioned-image"><img src="${image}" alt="${alt}" title="${title}" /><div class="image-caption">${caption}</div></div>`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function({ title, image, alt, caption }) {
    return `<div class="captioned-image"><img src="${image}" alt="${alt}" title="${title}" data-reactroot="" /><div class="image-caption">${caption}</div></div>`
  }
})
