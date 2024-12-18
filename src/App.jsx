import {useState} from 'react'
import './App.css'

function App() {
    // 입력 값을 저장할 상태
    const [inputValue, setInputValue] = useState('');

    // 입력 값이 변경될 때 호출되는 함수
    const handleInputChange = (event) => {
        setInputValue(event.target.value); // 입력된 값을 상태에 반영
    }

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>React 학습: 입력 필드 실시간 반영</h1>

            {/* 입력 필드 */}
            <input
                type="text"
                placeholder="텍스트를 입력하세요"
                value={inputValue} // 상태 값과 입력 필드를 연결
                onChange={handleInputChange} // 입력 값이 변경될 때 호출
                style={{padding: '8px', fontSize: '16px'}}
            />

            {/* 입력된 값을 화명에 표시 */}
            <h2>입력된 값: {inputValue}</h2>
        </div>
    )
}

export default App
