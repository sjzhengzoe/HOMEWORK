import { observable, computed, makeAutoObservable } from "mobx";
class AppleStore {
  @observable appleList = [];
  @observable howMuchEat = [0, 0];
  index = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addApple = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.appleList.push({
          name: this.index++,
          weight: Math.ceil(Math.random() * 1000),
        });
        console.log(this.appleList);
        resolve();
      }, 1000);
    });
  };

  eatApple = (name) => {
    this.appleList = this.appleList.filter((item) => {
      if (item.name === name) {
        this.howMuchEat[0] = this.howMuchEat[0] + 1;
        this.howMuchEat[1] = this.howMuchEat[1] + item.weight;
        return false;
      }

      return true;
    });
  };

  @computed get howMuchHad1() {
    return this.appleList.length;
  }
  @computed get howMuchHad2() {
    return this.appleList.reduce(function (total, item) {
      return item.weight + total;
    }, 0);
  }
}
const appleStore = new AppleStore();
export default appleStore;
