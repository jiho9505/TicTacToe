export default class Counter {

    left = 0;
    right = 0;
  
    constructor(score) {
      this.left = score.left
      this.right = score.right

      const TEMPLATE = document.createElement("template");
      
      TEMPLATE.innerHTML = `
              <div class='counter'>  
              </div>
              `
  
      this.element = TEMPLATE.content.firstElementChild;

      this.render()
    }
  
    attachTo(parent) {
      parent.appendChild(this.element)
    }
  
    setState(newScore) {
        this.left = newScore.left
        this.right = newScore.right
        this.render();
    }

    render() {
        this.element.innerHTML = `
            <span>${this.left}</span>
            <span>:</span>
            <span>${this.right}</span>
        `
    }
  }