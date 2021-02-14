import { inject, observer } from "mobx-react";
import React from "react";

@inject("appleStore")
@observer
class App extends React.Component {
  state = {
    isPicking: false,
  };

  handlePick = async () => {
    const { addApple } = this.props.appleStore;
    this.setState({ isPicking: true });
    await addApple();
    this.setState({ isPicking: false });
  };
  render() {
    const { appleList, howMuchEat, eatApple, howMuchHad1, howMuchHad2 } = this.props.appleStore;
    const { isPicking } = this.state;
    return (
      <div id="app" className="app">
        <div data-reactroot="" className="appleBusket">
          <div className="title">苹果篮子</div>
          <div className="stats">
            <div className="section">
              <div className="head">当前</div>
              <div className="content">
                {howMuchHad1}个苹果，
                {howMuchHad2}克
              </div>
            </div>
            <div className="section">
              <div className="head">已吃掉</div>
              <div className="content">
                {howMuchEat[0]}个苹果，{howMuchEat[1]}克
              </div>
            </div>
          </div>
          <div className="appleList">
            {appleList.map((item, index) => {
              return (
                <div className="appleItem" key={index}>
                  <div className="apple">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">红苹果-{item.name}号</div>
                    <div className="weight">{item.weight}克</div>
                  </div>
                  <div className="btn-div">
                    <button onClick={() => eatApple(item.name)}> 吃掉 </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-div">
            {isPicking ? (
              <button className="disabled">正在采摘...</button>
            ) : (
              <button onClick={this.handlePick}>摘苹果</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
