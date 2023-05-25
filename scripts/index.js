import "./vendor/scrollyfills.module.js";
import "./vendor/fit-text-component.js";

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log(rect)
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}







class SPage extends HTMLElement {
  connectedCallback(){

    this.addEventListener('scrollend', (e) => {
      console.log(e)
    })

    this.background = this.getAttribute("background-src");
    if(this.background !== null){
      const extension = this.background.split('.').pop(); 
      switch(extension){
        default: 
          const img = document.createElement('img')
          img.setAttribute('src', this.background); 
          img.classList.add('background-img'); 
          this.appendChild(img);
      }
    }
  }
  

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, old_value, new_value){
    switch(name){
      default:
    }
  }

}

customElements.define('s-page', SPage)





class ScrollVerse extends HTMLElement {
  constructor(){
    super();
    this.child_pages = [...this.querySelectorAll('s-page')];
    this.addEventListener('scrollend', (e) => {
      this.child_pages.forEach(child => {
        console.log(child)
        console.log(isInViewport(child));
      })
    })
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, old_value, new_value){
    switch(name){
      default:
    }
  }

}

customElements.define('scroll-verse', ScrollVerse)


