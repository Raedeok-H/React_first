import {useState} from 'react'
import './App.css'

function App() {
    // 입력 값과 Todo 리스트를 저장할 상태
    const [task, setTask] = useState(''); // 입력 필드 상태
    const [tasks, setTasks] = useState([]); // Todo 리스트 상태

    // 입력 값이 변경될 때 호출되는 함수
    const handleInputChange = (event) => {
        setTask(event.target.value); // 입력 값을 상태에 반영
    };

    // 입력된 값을 Todo 리스트에 추가하는 함수
    const addTask = () => {
        if (task.trim() === '') return; // 빈 값 방지
        setTasks([...tasks, task]); // 새로운 배열 생성 (기존 tasks + 새로운 task) ...은 배열의 요소들을 나열하는 효과임(스프레드 연산자)
        setTask(''); // 입력 필드 초기화
    };

    // 리스트 항목 삭제 함수
    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove)); // 클릭한 항목 제외
        // 배열의 첫번째 값은 value, 두번째 값은 index, 세번째 값은 있다면 array 임
        // 쓰지 않는 값은 _ 처럼 표시하는 것이 관례
        // 위에서 index가 전달 받은 값이 아닌 것들만 남김(제거 효과)
    };


    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>React 학습: Todo 리스트 만들기</h1>

            {/* 입력 필드와 추가 버튼 */}
            <input
                type="text"
                placeholder="할 일을 입력하세요"
                value={task}
                onChange={handleInputChange}
                style={{padding: '8px', fontSize: '16px', marginRight: '10px'}}
            />
            <button onClick={addTask} style={{padding: '8px 16px', fontSize: '16px'}}>
                추가
            </button>

            {/*리스트 렌더링 수정*/}
            <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
                {tasks.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => removeTask(index)} // 클릭 시 항목 삭제
                        style={{
                            marginBottom: '10px',
                            fontSize: '18px',
                            cursor: 'pointer',
                            color: 'white',
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
