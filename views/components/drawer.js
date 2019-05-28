const html = require('choo/html')

module.exports = drawer

function drawer (state) {
  return html`
    <aside class="theme-builder-drawer mdc-drawer">
                <div class="mdc-drawer__header">
                  <h3 class="mdc-drawer__title">Choo Contact Book</h3>
                  <h6 class="mdc-drawer__subtitle">Your Name</h6>
                </div>
                <hr class="mdc-list-divider">
                <div class="mdc-drawer__content">
                  <nav class="mdc-list" role="listbox">
                    <a class="mdc-list-item mdc-list-item--activated" aria-selected="true" >
                      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
                      <span class="mdc-list-item__text">My profile</span>
                    </a>
                    <a class="mdc-list-item">
                      <i class="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>
                      <span class="mdc-list-item__text">Contacts</span>
                    </a>
                  </nav>
                </div>
    </aside>
  `
}