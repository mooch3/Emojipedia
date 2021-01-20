import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function makeEmoji(emoji) {
  return (
    <Emoji
      name={emoji.name}
      meaning={emoji.meaning}
      emoji={emoji.emoji}
      aria={emoji.name}
      key={emoji.id}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(makeEmoji)}</dl>
    </div>
  );
}

export default App;
