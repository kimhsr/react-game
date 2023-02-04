import "./App.css";
import React, { Component } from "react";

function getNumbers() {
  // 숫자 네 개를 랜덤하게 뽑는 함수
}

class NumberBaseBall extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {};

  onChageInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChageInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {["사과","바나나","포도","귤","감","배","밤"].map((v)=>{
            return (
              <li>{v}</li>
            )
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseBall;
