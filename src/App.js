import "./styles.css";
import { useState } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState();
  const [open, setOpen] = useState(false);

  const onChengeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);
  return (
    <div className="App">
      <input value={text} onChange={onChengeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
