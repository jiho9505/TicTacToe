import Counter from './components/Counter/Counter.js'
import Footer from './components/Footer/Footer.js'
// import Tictactoe from './components/Tictactoe/Tictactoe.js'

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

    // this.tictactoe = new Tictactoe();
    // this.tictactoe.attachTo($target);

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
    this.score.left = 0
    this.score.right = 0
  }
  
  initData() {
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            this.datas[i][j] = 0;
        }
    }
    console.log(this.datas)
  }
  
  setState() {
    this.counter.setState(this.score)
    // this.tictactoe.setState(this.datas)
  }

}