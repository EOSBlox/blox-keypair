import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './ecc.js';
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
      <template is="dom-if" if="{{debug}}">
      {{keypairOne}}  </br></br>
      {{keypairTwo}}  
      </template>
    `;
  }
  static get properties() {
    return {
      generate: {
        type: Number,
        observer: 'generate',
      },
      debug: {
        type: Boolean,
        value: false,
        observer: 'generate',
      },
      keypairs: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
    };
  }


  generate(){
    return new Promise((resolve, reject) => {
      let keypair = [];
      this._keypair()
      .then((keypair1) => {
        keypair.push(keypair1)
        return this._keypair()
      })
      .then((keypair2) => {
        keypair.push(keypair2)
        this.keypairs = JSON.stringify(keypair);
        this.keypairOne = JSON.stringify(keypair[0]);
        this.keypairTwo = JSON.stringify(keypair[1]);
        resolve(keypair)
      })
      .catch((err) => {
        throw err
      })
    })
  }

  _keypair() {
    return new Promise((resolve, reject) => {
      const ecc = eosjs_ecc;
      ecc.randomKey()
      .then((privateKey) => {
        if (!privateKey) {
          reject(Error('No private key returned'));
        } else {
          let publicKey = ecc.privateToPublic(privateKey);
          if (ecc.isValidPublic(publicKey) && ecc.isValidPrivate(privateKey)) {
            resolve({publicKey: publicKey, privateKey: privateKey});
          } else {
            reject(Error('Invalid key returned'));
          }
        }
      })
      .catch((error) => {
        reject(Error(error));
      });
    });
}

} window.customElements.define('blox-keypair', BloxKeypair);
