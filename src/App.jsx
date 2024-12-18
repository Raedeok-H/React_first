import {useState} from 'react'
import './App.css'
import HelloWorld from "./components/HelloWorld.jsx";

function App() {
    // State 설정: count라는 변수를 만들고, setCount라는 함수를 통해 count의 값을 변경할 수 있도록 함
    const [count, setCount] = useState(0)

    // 숫자를 증가시키는 함수
    const increaseCount = () => {
        setCount(count + 1);// state를 변경하면 화면이 자동으로 업데이트 됨
    };

    // 숫자 감소 함수
    const decreaseCount = () => {
        setCount(count - 1);
    };

    // 숫자 초기화 함수
    const resetCount = () => {
        setCount(0);
    };

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>React 학습: State를 사용한 카운터</h1>
            <h2>Count: {count}</h2>
            <button onClick={decreaseCount}> -1 감소</button>
            <button onClick={resetCount} style={{margin: '0 10px'}}>초기화</button>
            <button onClick={increaseCount}> +1 증가</button>
        </div>
    )
}

export default App
