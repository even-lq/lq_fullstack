import React, { Component } from "react";
export default class LifeCycle extends Component {
  static defaultProps = {
    name: "计数器",
  };
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      user: [],
    };
    console.log("1. constructor 初始化 props and state");
  }
  componentWillMount() {
    console.log("2. componentWillMount 组件将要挂载");
  }
  componentDidMount() {
    console.log("4. componentDidMount 组件已挂载");
    // fetch 网络请求
  }
  add = () => {
    // 不+1的话，number永远等于0， 0 % 2 === 0，所以SubCounter组件在点击添加时会不断重新挂载——子组件updation流程
    // 而+1的话，根据模二运算，只会触发SubCounter的componentWillUnmount或render
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    console.log("3. render渲染，也就是挂载");
    return (
      <div>
        <p>
          {this.props.name}: {this.state.number}
        </p>
        <button onClick={this.add}>+</button>
        {this.state.number % 2 === 0 && (
          <SubCounter number={this.state.number} />
        )}
      </div>
    );
  }
}

class SubCounter extends Component {
  constructor(props) {
    // 使用 super(...) 调用父构造函数（仅在 constructor 函数中）
    super(props);
  }
  // 更新数据不会触发该生命周期
  componentWillReceiveProps() {
    console.log("SubCounter 1. componentWillReceiveProps");
  }
  // 更新数据不会触发该生命周期
  // 当前状态和即将要来的状态对比，看是否要变
  shouldComponentUpdate(nextProps, nextState) {
    console.log("SubCounter", nextProps, nextState);
    if (nextProps.number % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
  componentWillUpdate() {
    console.log("SubCounter组件即将更新");
  }
  componentDidUpdate() {
    console.log("SubCounter组件已更新");
  }
  componentWillUnmount() {
    console.log("SubCounter组件即将要卸载");
  }
  render() {
    console.log("SubCounter组件重新渲染...");
    return <div>{this.props.number}</div>;
  }
}
