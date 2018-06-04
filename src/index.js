import React from "react"
import { render } from "react-dom"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
}

const App = () => (
  <div style={styles}>
    <button onClick={() => {}}>Do some webWork stuff {"🤹"}</button>
  </div>
)

render(<App />, document.getElementById("root"))
