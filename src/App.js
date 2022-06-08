import { useState } from "react";
import "./App.css";

function App() {
  const [title1, SetTitle1] = useState("남자 코트 추천");
  const [title2, SetTitle2] = useState("여자 코트 추천");
  const [title3, SetTitle3] = useState("파이썬 독학");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{title1}</h4>
        <p>글내용</p>
      </div>
      <div className="list">
        <h4>{title2}</h4>
        <p>글내용</p>
      </div>
      <div className="list">
        <h4>{title3}</h4>
        <p>글내용</p>
      </div>
    </div>
  );
}

export default App;
