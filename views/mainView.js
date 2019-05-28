const html = require('choo/html')

const drawer = require('./components/drawer.js')
// usage: ${drawer(state)}
const header = require('./components/header.js')
const topAppBar = require('./components/top-app-bar.js')
const addressForm = require('./components/addressForm.js')
const others = require('./components/others.js')

module.exports = mainView 

function mainView (state, emit) {
  
  return html`
    <body class="mdc-typography">
      ${drawer(state)}
      <div class="mdc-drawer-scrim"></div>
      <div class="mdc-drawer-app-content">
        ${header(state)}
        <main class="main-content mdc-top-app-bar--fixed-adjust">
          <div class="theme-builder-desc-banner mdc-typography--caption">
            Save your profile and contacts online.
          </div>
          <div class="column">
            <div class="component-wrapper">
              ${addressForm(state)}
            </div>
          </div>
        </main>
      </div>

    <!-- import the Material javascript file -->
    <script src="components.dll.js"></script>
    <script src="bundle.js"></script>

    </body>
    `
}