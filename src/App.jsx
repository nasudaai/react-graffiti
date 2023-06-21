//import './styles.css';
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  }
  let Q = 'お焦げできてますか？';
  let A = 'まあまあ出来てます。';

  return (
    <div className="app">
      <h1 className="appH1" style={{ color: "green"}}>App.js</h1>
        <p>
          <del>たまには</del>
          まだまだ
          <code>create-react-app</code>
          したいじゃない。
        </p>
      <section>
        <hr />
        <h1>Hello</h1>
        <ColoredMessage color="red" back="beige">{Q}</ColoredMessage>
        
        <ColoredMessage color="pink" back="black">{A}</ColoredMessage>
        <button onClick={onClickButton}>button</button>
      </section>
    </div>
  )
}
