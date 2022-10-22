class pulsador extends HTMLElement{
    constructor () {
    super();    
    }

connectedCallback(){  
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<div><button class="btn">pulsador</button></div>`;
}
}
window.customElements.define('boton-creado', pulsador);