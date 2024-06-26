// Define a simple function that does nothing.
// This let you use an html tag in front of your code so it gets formatted by Prettier
// While also making sure the tag itself doesn't interfere with the DOM
function html(strings, ...values) {
  return strings.raw[0]
}

function renderHeader(insertElement) {
  const headerHTML = html` <div class="site-header">
      <div class="site-brand">
        <a href="/" class="logo">HeyHemi</a>
      </div>
      <nav class="site-nav">
        <ul class="menu wrapper">
          <li class="menu-item"><a href="#">About</a></li>
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
  console.log('header loaded')
}

document.addEventListener('DOMContentLoaded', function () {
  renderHeader('header')
})
