import React from "react"
import ReactDOM from "react-dom"
import Button from "./button"
import "./style.css"

function soma(){
    alert(a+b)
}

function App(){
    return(
        <div className="App">
            Hello World
            <Button onClick={() => soma(10, 20)} name="Thauany Silva" />
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)