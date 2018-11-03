import { observable, action } from "mobx";

class Store {
   constructor() {
      this.createBoard();
   }

   @observable settings = {
      size: 10,
      bombs: 10
   }

   @observable bombsFound = 0;

   @observable revealedTiles = 0;

   @observable isSettingFlag = false;

   @observable board = [];

   createBoard() {
      let board = [];
      let size = this.settings.size;
      let bombCount = this.settings.bombs;
      let bombs = {};

      let getText = (i, j) => {
         let count = 0;
         for (let a = -1; a <= 1; a++) {
            for (let b = -1; b <= 1; b++) {
               if ((a === 0 && b === 0) ||
                  (i + a < 0 || i + a >= size) ||
                  (j + b < 0 || j + b >= size)) {
                  continue;
               }
               if (bombs[(i + a) + '-' + (j + b)]) {
                  count++;
               }
            }
         }
         return count > 0 ? count.toString() : '';
      }

      let getTile = (i, j, isBomb) => {
         return {
            text: isBomb ? 'B' : getText(i, j),
            isRevealed: false,
            isFlag: false,
            isQuestion: false,
            isBomb: isBomb,
            row: i,
            col: j
         }
      }

      while (Object.keys(bombs).length < bombCount) {
         let row = Math.floor(Math.random() * size);
         let col = Math.floor(Math.random() * size);
         bombs[row + '-' + col] = true;
      }
      for (let i = 0; i < size; i++) {
         let row = [];
         for (let j = 0; j < size; j++) {
            row.push(getTile(i, j, bombs[i + '-' + j]));
         }
         board.push(row);
      }
      this.board = board;
      this.revealedTiles = 0;
      this.bombsFound = 0;
   }

   @action revealTiles(tile) {
      let visitedTiles = {};
      visitedTiles[tile.row + '-' + tile.col] = true;
      let tilesToVisit = [tile];
      while (tilesToVisit.length > 0) {
         let t = tilesToVisit.pop();
         for (let a = -1; a <= 1; a++) {
            for (let b = -1; b <= 1; b++) {
               let row = t.row + a;
               let col = t.col + b;
               if ((a === 0 && b === 0) ||
                  row < 0 || row >= this.settings.size ||
                  col < 0 || col >= this.settings.size ||
                  visitedTiles[row + '-' + col]) {
                  continue;
               }
               visitedTiles[row + '-' + col] = true;
               this.board[row][col].isRevealed = true;
               this.revealedTiles++;
               if (this.board[row][col].text === '') {
                  tilesToVisit.push(this.board[row][col]);
               }
            }
         }
      }
   }
}

export default Store;