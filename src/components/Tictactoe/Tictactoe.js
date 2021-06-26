export default class Tictactoe {

    datas = null;
  
    constructor({onClick, datas}) {
      this.datas = datas
      const TEMPLATE = document.createElement("template");
      
      TEMPLATE.innerHTML = `
              <div class="Tic__part">
              </div>
              
              `
  
      this.element = TEMPLATE.content.firstElementChild;

      this.onClick = onClick;
      this.render();
    //   this.element.addEventListener('click', (e) => {
    //         if(e.target.className === 'items'){
    //             this.onClick(e.target.dataset.index);
    //         }
            
    //   })
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
                return 'P'
            }else if(data === 1){
                return 'X'
            }else{
                return 'O'
            }
            
        }));
        this.element.innerHTML = `
            <div class="Tic__line1">
                <div class="Tic__line1_detail">${newArray[0][0]}</div>
                <div class="Tic__line1_detail_C">${newArray[0][1]}</div>
                <div class="Tic__line1_detail">${newArray[0][2]}</div>
            </div>
            <div class="Tic__line2">
                <div class="Tic__line2_detail">${newArray[1][0]}</div>
                <div class="Tic__line2_detail_C">${newArray[1][1]}</div>
                <div class="Tic__line2_detail">${newArray[1][2]}</div>
            </div>
            <div class="Tic__line3">
                <div class="Tic__line3_detail">${newArray[2][0]}</div>
                <div class="Tic__line3_detail_C">${newArray[2][1]}</div>
                <div class="Tic__line3_detail">${newArray[2][2]}</div>
            </div>
        `
    }
  }

  