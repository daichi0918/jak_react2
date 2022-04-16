import "./styles.css";
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState();
  const [open, setOpen] = useState(false);

  const onChengeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1+3, []);
  console.log(temp)
  return (
    <div className="App">
      <input value={text} onChange={onChengeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
