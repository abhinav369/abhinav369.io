import React, { useState } from "react";
import "./index.css";
import "./App.css";
var emojiDictionary = {
  "😀": "smiling",
  "😂": "laughing!",
  "😎": "stylish bud",
  "😍": "maybe in love with react!",
  "🥱": "rest indeed",
  "😴": "asleep",
};

export default function App() {
  const [meaning, setmeaning] = useState(" ");
  function emojiinput(event) {
    var inputv = event.target.value;
    var meaning = emojiDictionary[inputv];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1 id="emo">
        <span id="emoj">EMOJI</span> dalo!
      </h1>
      <input onChange={emojiinput}></input>
      <div className="mean"> {meaning} </div>
      <div>😀 😂 😎 😍 🥱 😴</div>
    </div>
  );
}
