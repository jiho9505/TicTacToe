import Counter from './components/Counter/Counter.js'
import Footer from './components/Footer/Footer.js'
import Tictactoe from './components/Tictactoe/Tictactoe.js'

export default class App {
  $target = null;
  score = {
      left : 0,
      right : 0
  };
  datas = Array.from({length : 3}, () => Array(3).fill(0));

  constructor($target) {
    this.$target = $target;

    this.counter = new Counter(this.score);
    this.counter.attachTo($target)

    this.tictactoe = new Tictactoe({
        onClick: (idx,value) => {
           let idxArray = idx.split('');
           let x = parseInt(idxArray[0],10);
           let y = parseInt(idxArray[1],10);
           if(this.datas[x][y] === 0){
              this.datas[x][y] = value;
              this.tictactoe.value++;
              this.setState();
              this.checkBingo();
           }
           
        },
        datas: this.datas
    });
    this.tictactoe.attachTo($target);

    this.footer = new Footer({
        onClick: (type) => {
            if(type === 'New'){
                this.initData()
                this.setState()
            }else{
                this.initCount()
                this.initData()
                this.setState()
            }

        }
    });
    this.footer.attachTo($target);

  }

  initCount() {
    this.score.left = 0;
    this.score.right = 0;
    this.tictactoe.value = 0;
  }
  
  initData() {
    this.datas = this.datas.map(datas => datas.map(data => data = 0));
  }
  
  setState() {
    this.counter.setState(this.score)
    this.tictactoe.setState(this.datas)
  }

 

}