import { FASTElement, attr, customElement, html } from '@microsoft/fast-element';
import React, { ReactElement } from 'react';

import { App } from "./App";
import ReactDOM from 'react-dom';

const template = html<FastAppComponent>`
    <div id="root"></div>
`;

@customElement({
    name: 'fast-app-component',
    template
})
export class FastAppComponent extends FASTElement {
    @attr name: string = 'Isaac';

    connectedCallback() {
        super.connectedCallback();
        ReactDOM.render(this.generateReactComponent(this.getAttribute('name')), this.shadowRoot.getElementById('root'));        
    }

    private generateReactComponent(name: string) : ReactElement {
        return React.createElement(App, { name: name }, React.createElement('slot'))
    }
}