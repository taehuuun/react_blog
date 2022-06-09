import { useState } from "react";
import "./App.css";

function App() {
  const [title, SetTitle] = useState(["111111111", "222222222", "333333333"]);

  const [like, SetLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]} <span>♥</span>
          {like}
        </h4>
        <p>글내용</p>
      </div>
      <div className="list">
        <h4>
          {title[1]} <span>♥</span>
          {like}
        </h4>
        <p>글내용</p>
      </div>
      <div className="list">
        <h4>
          {title[2]} <span>♥</span>
          {like}
        </h4>
        <p>글내용</p>
      </div>
    </div>
  );
}

export default App;
