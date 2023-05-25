class FitTextComponent extends HTMLElement {
  connectedCallback(){
    const text = this.innerHTML; 
    this.style.display = 'block';
    this.style.width = `100%`;
    this.style.lineHeight = 1;
    this.style.textAlign = `center`;
    let compressor = this.getAttribute('compressor');
    if(compressor === null){
      compressor = 1;
    }
    const text_size = (240 * compressor) / text.length;
    this.style.fontSize = `${text_size}vw`;
  }
}

customElements.define('fit-text', FitTextComponent)


