/*
Need to add corresponding JS to app.js
// Dialog
const dialogEl = mainEl.querySelector('.mdc-dialog');
new MDCDialog(dialogEl);
*/
const html = require('choo/html')

module.exports = 

function  (state) {
  return html`
  
          <!-- Dialog -->
          <section class="component-section dialog-component-section">
            <div class="section-header">
              <a href="https://material.io/design/components/dialogs.html" class="mdc-typography--button" target="_blank">
                Dialog
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper dialog-component-wrapper">
              <div class="mdc-dialog mdc-dialog--open"
                  role="alertdialog"
                  aria-modal="true"
                  aria-labelledby="my-dialog-title"
                  aria-describedby="my-dialog-content">
                <div class="mdc-dialog__container">
                  <div class="mdc-dialog__surface">
                    <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
                    <h2 class="mdc-dialog__title" id="my-dialog-title">Headline 6</h2>
                    <div class="mdc-dialog__content" id="my-dialog-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <footer class="mdc-dialog__actions">
                      <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">
                        <span class="mdc-button__label">Button</span>
                      </button>
                      <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">
                        <span class="mdc-button__label">Button</span>
                      </button>
                    </footer>
                  </div>
                </div>
                <!-- Note scrim element has been removed for this stickersheet -->
                <!-- <div class="mdc-dialog__scrim"></div> -->
              </div>
            </div>
          </section>

`}