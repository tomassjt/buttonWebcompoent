class pulsador extends HTMLElement{
    constructor () {
    super();    
    }

connectedCallback(){  
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<div><img src="/btn.png" style="width:30px; height:30px;" alt="imagen pulsador"></div>`;
    this.shadowRoot.addEventListener("click",precionado);
}
}
window.customElements.define('boton-creado', pulsador);

function precionado() {
alert("precionado");    
}

