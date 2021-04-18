import React, { Component, Fragment } from "react";
import "./style.css";
import AppItem from "./AppItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["dasd", "dsgfdgadas"],
    };
    this.textInput = React.createRef();
  }
  render() {
    return (
      /*class就是calssName
      <ul className="my-list">
        <li>{true ? 'JSpang' : '李庆'}</li>
        <li>456</li>
      </ul>*/

      <Fragment>
        {/* 注释 */}
        <div>
          <label htmlFor="jspang">增加服务</label>
          <input
            id="jspang"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            /*ref={(input) => {
              this.input = input;
            }}*/
            ref={this.textInput}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul) => {
          this.ul = ul;
        }}>
          {this.state.list.map((item, index) => {
            return (
              /*<li
                key={index + item}
                onClick={this.deleteItem.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}
              >
                {// {item} }
              </li>*/
              <AppItem
                name="gfdv"
                content={item}
                key={item + index}
                index={index}
                deleteItem={this.deleteItem.bind(this)}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }

  inputChange(e) {
    this.setState({
      // inputValue: e.target.value,
      // this.input存储了id为jspang的input的dom
      // inputValue: this.input.value, // 回调refs方式
      inputValue: this.textInput.current.value, // createRef方法
    });
  }

  addList() {
    // setState 异步
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      },
      () => {
        // 在虚拟dom挂载到dom后执行
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
  }

  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list,
    });
  }
}

export default App;
