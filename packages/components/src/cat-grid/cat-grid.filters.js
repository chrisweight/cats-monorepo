export default urls => urls
  .map(url => `<img src="${url}" >`)
  .join('\n')
