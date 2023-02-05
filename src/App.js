import "./App.css";
import React, { Component } from "react";
import Try from "./components/Try";

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

  fruits = [
    { fruit: "사과", taste: "맛없다" },
    { fruit: "감", taste: "시다" },
    { fruit: "귤", taste: "달다" },
    { fruit: "배", taste: "달다" },
    { fruit: "밤", taste: "떫다" },
    { fruit: "무", taste: "맛없다" },
  ];

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
          {this.fruits.map((v, i) => {
            return (
              <Try key={v.fruit + v.taste} v={v} i={i} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseBall;
