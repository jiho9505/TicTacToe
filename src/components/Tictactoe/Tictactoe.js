export default class Tictactoe {

    datas = null;
    value = 0;
    constructor({onClick, datas}) {
      this.datas = datas
      const TEMPLATE = document.createElement("template");
      
      TEMPLATE.innerHTML = `
              <div class="Tic">
              </div>
              `
  
      this.element = TEMPLATE.content.firstElementChild;

      this.onClick = onClick;

      this.render();
    }
  
    attachTo(parent) {
      parent.appendChild(this.element)
    }
  
    setState(newData) {
        this.datas = newData;
        this.render();
    }
  
    render() {
      
        const newArray = this.datas.map(datas => datas.map(data => {
            if(data === 0){
                return ''
            }else if(data === 1){
                return 'X'
            }else{
                return 'O'
            }
            
        }));
        this.element.innerHTML = `
            <div class="Tic__line1">
                <div class="Tic__line1Detail" data-idx="00">${newArray[0][0]}</div>
                <div class="Tic__line1Detail Tic__border" data-idx="01">${newArray[0][1]}</div>
                <div class="Tic__line1Detail" data-idx="02">${newArray[0][2]}</div>
            </div>
            <div class="Tic__line2">
                <div class="Tic__line2Detail" data-idx="10">${newArray[1][0]}</div>
                <div class="Tic__line2Detail Tic__border" data-idx="11">${newArray[1][1]}</div>
                <div class="Tic__line2Detail" data-idx="12">${newArray[1][2]}</div>
            </div>
            <div class="Tic__line3">
                <div class="Tic__line3Detail" data-idx="20">${newArray[2][0]}</div>
                <div class="Tic__line3Detail Tic__border" data-idx="21">${newArray[2][1]}</div>
                <div class="Tic__line3Detail" data-idx="22">${newArray[2][2]}</div>
            </div>
        `

        this.element.onclick = (e) => {
            
            if(e.target.className === 'Tic__line1Detail' || e.target.className === 'Tic__line1Detail Tic__border' || 
            e.target.className === 'Tic__line2Detail' || e.target.className === 'Tic__line2Detail Tic__border' ||
            e.target.className === 'Tic__line3Detail' || e.target.className === 'Tic__line3Detail Tic__border'){ 
                this.onClick(e.target.dataset.idx,this.value%2+1);
                
            } 
      }
    }
  }

  