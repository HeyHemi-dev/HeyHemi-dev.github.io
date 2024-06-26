// Define a simple function that does nothing.
// This let you use an html tag in front of your code so it gets formatted by Prettier
// While also making sure the tag itself doesn't interfere with the DOM
function html(strings, ...values) {
  return strings.raw[0]
}

function appendHead() {
  const styleMain = `<link href="/styles/main.css" rel="stylesheet" type="text/css">`
  const fontsGoogle = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@0,100..900;1,100..900&amp;family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&amp;display=swap" rel="stylesheet">
    `

  document.head.insertAdjacentHTML('beforeend', styleMain + fontsGoogle)
  console.log('head appended')
}

function renderHeader(insertElement) {
  const headerHTML = html` <div class="site-header">
      <div class="site-brand">
        <a href="/" class="logo">HeyHemi</a>
      </div>
      <nav class="site-nav">
        <ul class="menu wrapper">
          <li class="menu-item"><a href="/about">About</a></li>
          <li class="menu-item"><a href="/#featured-work">Work</a></li>
          <li class="menu-item"><a href="/#recent-journal">Journal</a></li>
        </ul>
      </nav>
      <div class="site-cta">
        <a href="/contact" class="site-cta-button">Say Hi</a>
      </div>
    </div>
    <div class="header-blur">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>`
  document.querySelector(insertElement).innerHTML = headerHTML
  console.log('site header loaded')
}

function renderFooter(insertElement) {
  const footerHTML = html`<div class="site-footer"></div>`
  document.querySelector(insertElement).innerHTML = footerHTML
  console.log('site footer loaded')
}

document.addEventListener('DOMContentLoaded', function () {
  appendHead()
  renderHeader('header')
  renderFooter('footer')
})
