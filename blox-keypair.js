import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-keypair`
 * Makes 2 EOS key-pairs
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxKeypair extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'blox-keypair',
      },
    };
  }

} window.customElements.define('blox-keypair', BloxKeypair);
