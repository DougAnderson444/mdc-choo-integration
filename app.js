import {
  MDCCheckbox,
  MDCChipSet,
  MDCDialog,
  MDCDrawer,
  MDCFormField,
  MDCIconButtonToggle,
  MDCLinearProgress,
  MDCList,
  MDCMenu,
  MDCRadio,
  MDCRipple,
  MDCSelect,
  MDCSlider,
  MDCSnackbar,
  MDCSwitch,
  MDCTabBar,
  MDCTextField,
  MDCTextFieldHelperText,
  MDCTopAppBar
} from './components';

// Import my theme variables
import themeName from './my-theme';

// Import choo logic
import './choo/main.js';

//
// Instantiate all components in the main content
//

const mainEl = document.querySelector('.main-content');

// Button
const buttonEls = Array.from(mainEl.querySelectorAll('.mdc-button'));
buttonEls.forEach((el) => new MDCRipple(el));

// Text field
const textFieldEls = Array.from(mainEl.querySelectorAll('.mdc-text-field'));
textFieldEls.forEach((el) => {
  let textField = new MDCTextField(el);
  if (el.classList.contains('text-field-with-input')) {
    textField.value = 'Input text';
  }
});
const helperTextEls = Array.from(mainEl.querySelectorAll('.mdc-text-field-helper-text'));
helperTextEls.forEach((el) => new MDCTextFieldHelperText(el));

// Top app bar
const topAppBarEls = Array.from(mainEl.querySelectorAll('.mdc-top-app-bar'));
topAppBarEls.forEach((el) => new MDCTopAppBar(el));



// Menu
/*
const menuEl = mainEl.querySelector('.mdc-menu');
const menu = new MDCMenu(menuEl);
menu.open = true;
// Override MDCMenuSurfaceFoundation so the menu never closes
menu.menuSurface_.foundation_.close = () => {};
// Focus first component when menu is done opening
menuEl.addEventListener('MDCMenuSurface:opened', () => document.querySelector('.mdc-button').focus());
*/

//
// Theme Builder drawer contents
//

const themeBuilderDrawerEl = document.querySelector('.theme-builder-drawer');

// Theme name
//themeBuilderDrawerEl.querySelector('.theme-name').textContent = themeName;

// Theme Builder drawer tabs
/*
new MDCTabBar(themeBuilderDrawerEl.querySelector('.mdc-tab-bar'));
const instructions = themeBuilderDrawerEl.querySelector('.drawer-content--instructions');
const themeSummary = themeBuilderDrawerEl.querySelector('.drawer-content--theme-summary');
themeBuilderDrawerEl.querySelector('.drawer-tab--instructions').addEventListener('MDCTab:interacted', () => {
  instructions.style.display = 'block';
  themeSummary.style.display = 'none';
});
themeBuilderDrawerEl.querySelector('.drawer-tab--theme-summary').addEventListener('MDCTab:interacted', () => {
  instructions.style.display = 'none';
  themeSummary.style.display = 'block';
});

// RTL Switch
const formField = new MDCFormField(themeBuilderDrawerEl.querySelector('.mdc-form-field'));
const rtlSwitch = new MDCSwitch(themeBuilderDrawerEl.querySelector('.rtl-switch'));
formField.input = rtlSwitch;
//const rtlInput = themeBuilderDrawerEl.querySelector('#rtl-input');
rtlInput.addEventListener('change', function() {
  [].forEach.call(mainEl.querySelectorAll('.column'), function(columnEl) {
    if (rtlInput.checked) {
      columnEl.setAttribute('dir', 'rtl');
      linearProgressEl.classList.add('mdc-linear-progress--reversed');
    } else {
      columnEl.removeAttribute('dir');
      linearProgressEl.classList.remove('mdc-linear-progress--reversed');
    }
    slider.layout();
  });
});
*/

//
// Theme Builder app bar
//

const themeBuilderAppBar = new MDCTopAppBar(document.querySelector('.theme-builder-app-bar'));

//
// Handle responsive layout
//

const themeBuilderDrawer = null;

const initModalDrawer = () => {
  themeBuilderDrawerEl.classList.add("mdc-drawer--modal");
  const themeBuilderDrawer = new MDCDrawer(themeBuilderDrawerEl);
  themeBuilderDrawer.open = false;
  console.log("1. themeBuilderDrawer.open: "+themeBuilderDrawer.open)
  themeBuilderAppBar.setScrollTarget(mainEl);
  themeBuilderAppBar.listen('MDCTopAppBar:nav', () => {
    themeBuilderDrawer.open = !themeBuilderDrawer.open;
    console.log("2. themeBuilderDrawer.open: "+themeBuilderDrawer.open)
  });
  
  //click to close
  themeBuilderDrawerEl.addEventListener('click', (event) => {
    themeBuilderDrawer.open = false;
  });
}
const destroyModalDrawer = () => {
  themeBuilderDrawerEl.classList.remove("mdc-drawer--modal");
  console.log(themeBuilderDrawerEl.classList)
  if (themeBuilderDrawer) {
      console.log("destoyed")

    themeBuilderDrawer.destroy();
  }
}

// Toggle between permanent drawer and modal drawer at 1310px

const layoutForScreenSize = () => {
  console.log("layoutForScreenSize")
  if (window.matchMedia("(max-width: 13100px)").matches) {
    initModalDrawer();
    mainEl.classList.add('mdc-top-app-bar--fixed-adjust');
  } 
  else {
    destroyModalDrawer();
    mainEl.classList.remove('mdc-top-app-bar--fixed-adjust');
  }
  console.log(themeBuilderDrawerEl.classList);

}

window.addEventListener('resize', layoutForScreenSize);
layoutForScreenSize();
//for some unknown reason the drawer is showing when the page loads, 
//but doesn't show if the screen is resized
setTimeout(layoutForScreenSize, 10);

// Build out shape size visualizer
[...document.querySelectorAll('.theme-summary-shape')].forEach((elem) => {
  // Get background value of color component and sanitize
  const sizeVals = getComputedStyle(elem).borderRadius
  const node = document.createElement("span");
  const textnode = document.createTextNode(`${sizeVals};`);
  node.classList.add('varValue');
  node.appendChild(textnode); 

  // Append text of the element adjacent sibling to the end of the text string
  elem.previousElementSibling.appendChild(node)
})

// Color Visualization
const rgbToHex = (col) => {
  if(col.charAt(0)=='r') {
    col=col.replace('rgb(','').replace(')','').split(',');
    var r=parseInt(col[0], 10).toString(16);
    var g=parseInt(col[1], 10).toString(16);
    var b=parseInt(col[2], 10).toString(16);
    r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
    var colHex='#'+r+g+b;
    return colHex;
  }
}

// Build out color variable visualizer
[...document.querySelectorAll('.theme-summary-color')].forEach((elem) => {
  // Get background value of color component and sanitize
  const bgColor = rgbToHex(getComputedStyle(elem).backgroundColor) || ''
  const node = document.createElement("span");
  const textnode = document.createTextNode(`: ${bgColor};`);
  node.classList.add('varValue');
  node.appendChild(textnode); 

  // Append text of the element adjacent sibling to the end of the text string
  elem.previousElementSibling.appendChild(node)
})

// Build out typography visualizer
const setVisibleFont = () => {
  const fontSample = document.querySelector('.mdc-typography--headline1')
  const fontUrl = `https://fonts.google.com/specimen/${getComputedStyle(fontSample).fontFamily.split(',', 1)[0].replace(/ /g, '+').replace(/['"]+/g, '')}`
  
  // Set actual CSS
  document.querySelector('.font-name').innerHTML = getComputedStyle(fontSample).fontFamily
  
  // Set Link
  document.querySelector('.font-link').href = fontUrl
}
setVisibleFont()