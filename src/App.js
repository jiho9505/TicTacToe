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
  isFinish = false;

  constructor($target) {
    this.$target = $target;

    this.counter = new Counter(this.score);
    this.counter.attachTo($target)

    this.tictactoe = new Tictactoe({
        onClick: (idx,value) => {
           let idxArray = idx.split('');
           let x = parseInt(idxArray[0],10);
           let y = parseInt(idxArray[1],10);
           if(this.datas[x][y] === 0 && !this.isFinish){
              this.datas[x][y] = value; 
              this.tictactoe.value++;
              this.checkBingo();
              this.setState();
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
            this.tictactoe.value = 0;
            this.isFinish = false;
        }
    });
    this.footer.attachTo($target);

  }

  initCount() {
    this.score.left = 0;
    this.score.right = 0;
  }
  
  initData() {
    this.datas = this.datas.map(datas => datas.map(data => data = 0));
  }
  
  setState() {
    this.counter.setState(this.score)
    this.tictactoe.setState(this.datas)
  }

  checkWhole() {
    let Success = true;
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        if(this.datas[i][j] === 0){
          Success = false;
          break;
        }
      }
    }
    if(Success){
        alert('Game Over, Draw---')
        return;
    }

  }

  checkGaro() {
    let i = 0;
    let j = 0;

    for(i = 0; i < 3; i++){
      let Success = true;
      for(j = 0; j < 3; j++){
        if(this.datas[i][j] === 0 || this.datas[i][0] !== this.datas[i][j]){
          Success = false;
          break;
        }
      }
   
      if(Success){
        i === 3 ? i = 2 : '';
        if(this.datas[i][0] === 1){
          alert('Game Over, X win !!!')
          this.isFinish = true;
          this.score.left += 1;
          return;
        }else{
          alert('Game Over, O win !!!')
          this.isFinish = true;
          this.score.right += 1;
          return;
        }
      }
    }
  }

  checkSero() {
    let i = 0;
    let j = 0;

    for(j = 0; j < 3; j++){
      let Success = true;
      for(i = 0; i < 3; i++){
        if(this.datas[i][j] === 0 || this.datas[0][j] !== this.datas[i][j]){
          Success = false;
          break;
        }
      }
      if(Success){
        j === 3 ? j = 2 : '';
        if(this.datas[0][j] === 1){
          alert('Game Over, X win !!!')
          this.isFinish = true;
          this.score.left += 1;
          return;
        }else{
          alert('Game Over, O win !!!')
          this.isFinish = true;
          this.score.right += 1;
          return;
        }
      }
    }
  }

  checkCross() {
    let Success = true;
    for(let i = 0; i < 3; i++){
      if(this.datas[i][i] === 0 || this.datas[0][0] !== this.datas[i][i]){
        Success = false;
        break;
      }
    }
    if(Success){
      if(this.datas[0][0] === 1){
        alert('Game Over, X win !!!')
        this.isFinish = true;
        this.score.left += 1;
        return;
      }else{
        alert('Game Over, O win !!!')
        this.isFinish = true;
        this.score.right += 1;
        return;
      }
    }


    let Success2 = true;
    for(let i = 0; i < 3; i++){
      if(this.datas[i][2-i] === 0 || this.datas[0][2] !== this.datas[i][2-i]){
        Success2 = false;
        break;
      }
    }
    if(Success2){
      if(this.datas[0][2] === 1){
        alert('Game Over, X win !!!')
        this.isFinish = true;
        this.score.left += 1;
        return;
      }else{
        alert('Game Over, O win !!!')
        this.isFinish = true;
        this.score.right += 1;
        return;
      }
    }
  }

  checkBingo() {
    this.checkGaro();
    if(this.isFinish) return;
    this.checkSero();
    if(this.isFinish) return;
    this.checkCross();
    if(this.isFinish) return;
    this.checkWhole();
  }

}