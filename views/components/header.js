/*
const html = require('choo/html')

module.exports = 

function  (state) {
  return html`
  
  `
}
*/

const html = require('choo/html')

module.exports = header

function header (state) {
  return html`
          <header class="theme-builder-app-bar mdc-top-app-bar mdc-top-app-bar--fixed ">
            <div class="mdc-top-app-bar__row">
              <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <a class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
                <span class="mdc-top-app-bar__title">Choo Contact Book</span>
              </section>
              <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                <a class="material-icons mdc-top-app-bar__action-item" aria-label="Share" alt="Share">share</a>
                <a class="material-icons mdc-top-app-bar__action-item" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
                <a class="material-icons mdc-top-app-bar__action-item" aria-label="Search this page" alt="Search this page">search</a>
              </section>
            </div>
          </header>
`
}