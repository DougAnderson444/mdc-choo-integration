const html = require('choo/html')

module.exports = 

function  (state) {
  return html`
          <!-- Snackbar -->
          <section class="component-section snackbar-section">
            <div class="section-header">
              <a href="https://material.io/design/components/snackbars.html" class="mdc-typography--button" target="_blank">
                Snackbar
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper">
              <div class="mdc-snackbar mdc-snackbar--open">
                <div class="mdc-snackbar__surface">
                  <div class="mdc-snackbar__label"
                    role="status"
                    aria-live="polite">
                    Marked as favorite.
                  </div>
                </div>
              </div>
            </div>
          </section>
  
  `
}