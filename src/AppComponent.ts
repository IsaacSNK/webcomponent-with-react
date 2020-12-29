import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';
import { ReactElement } from 'react';
import retargetEvents from 'react-shadow-dom-retarget-events';

export default class AppComponent extends HTMLElement {
  mountPoint: HTMLSpanElement;
  name: string;

  static get observedAttributes() {
    return ['name'];
  }
  
  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.mountPoint);

    ReactDOM.render(this.generateReactComponent(this.getAttribute('name')), this.mountPoint);
    retargetEvents(shadowRoot);
  }

  attributeChangedCallback(name : string, oldValue : any, newValue : any) {
    if (name === 'title') {
      ReactDOM.render(this.generateReactComponent(newValue), this.mountPoint);
    }
  }  

  private generateReactComponent(name: string) : ReactElement {
    return React.createElement(App, { name: name }, React.createElement('slot'))
  }
}

window.customElements.define('app-component', AppComponent);