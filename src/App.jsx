import {useState} from 'react'
import './App.css'
import HelloWorld from "./components/HelloWorld.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>React 학습을 시작합니다!</h1>
        <p>이 화면이 React의 첫 화면입니다.🎉</p>
        <HelloWorld name="철수" /> {/* Props로 name 값 전달 */}
        <HelloWorld name="영희" />
    </div>
  )
}

export default App
