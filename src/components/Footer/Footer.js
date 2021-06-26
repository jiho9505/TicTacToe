export default class Footer {
  
    constructor({onClick}) {
  
      const TEMPLATE = document.createElement("template");
      
      TEMPLATE.innerHTML = `
            <footer>
                <div class="footer__Game">
                    <div class="footer__New">
                        New Game
                    </div>
                    <div class="footer__Reset">
                        Reset Game
                    </div>
                </div>
                <div class="footer__Ver">
                    <span>Ver0.1-2021</span>
                </div>
            </footer> 
            `
  
      this.element = TEMPLATE.content.firstElementChild;

      this.onClick = onClick;
        
      this.element.addEventListener('click', (e) => {
            if(e.target.className === 'footer__New'){
                this.onClick('New');
            }else if(e.target.className === 'footer__Reset'){
                this.onClick('Reset');
            }
      })
    }
  
    attachTo(parent) {
      parent.appendChild(this.element)
    }
  }