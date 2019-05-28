const html = require('choo/html')

module.exports = addressForm

function addressForm (state) {
  return html`
            <!-- Text field -->
            <div class="section-header">
                My Address
            </div>
            <!--Street Number-->
            <div class="component-wrapper text-field-component-wrapper text-field-component-wrapper-1">
              <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon">
                <input class="mdc-text-field__input">
                <div class="mdc-notched-outline">
                  <div class="mdc-notched-outline__leading"></div>
                  <div class="mdc-notched-outline__notch">
                    <label class="mdc-floating-label">Street Number</label>
                  </div>
                  <div class="mdc-notched-outline__trailing"></div>
                </div>
              </div>
              <div class="mdc-text-field-helper-line">
                <div class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">example: "357"</div>
              </div>
            </div>
            <!--Street Name-->
            <div class="component-wrapper text-field-component-wrapper text-field-component-wrapper-1">
              <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon">
                <input class="mdc-text-field__input">
                <div class="mdc-notched-outline">
                  <div class="mdc-notched-outline__leading"></div>
                  <div class="mdc-notched-outline__notch">
                    <label class="mdc-floating-label">Street</label>
                  </div>
                  <div class="mdc-notched-outline__trailing"></div>
                </div>
              </div>
              <div class="mdc-text-field-helper-line">
                <div class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">example <b>Sesame</b></div>
              </div>
            </div>
            <!--City-->
            <div class="component-wrapper text-field-component-wrapper text-field-component-wrapper-1">
              <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon">
                <input class="mdc-text-field__input">
                <div class="mdc-notched-outline">
                  <div class="mdc-notched-outline__leading"></div>
                  <div class="mdc-notched-outline__notch">
                    <label class="mdc-floating-label">City</label>
                  </div>
                  <div class="mdc-notched-outline__trailing"></div>
                </div>
              </div>
              <div class="mdc-text-field-helper-line">
                <div class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">example <b>Toronto</b></div>
              </div>
            </div>
                      
          <!-- Button -->
            <div class="component-wrapper button-component-wrapper">
              <button class="mdc-button mdc-button--raised">
                Done
              </button>
              <button class="mdc-button mdc-button--outlined">
                Clear
              </button>
            </div>

  `
}