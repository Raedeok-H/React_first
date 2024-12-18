import React, { useState } from 'react';

function App() {
    // Form 데이터를 저장할 상태
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        agree: false,
    });

    // 입력 값 변경 처리
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target; // 각 Form 요소의 name, value, type, checked 속성을 가져온다.

        setFormData((prevData) => ({ // prevData 는 이전 상태의 값을 얕은 복사를 통해 가져오기 때문에 이전 값을 안전하게 보장한다.
            ...prevData,
            [name]: type === 'checkbox' ? checked : value, // 체크박스는 checked 속성, 나머지는 value 속성
            // 위 문장의 뜻은 name 속성의 값을 type 이 checkbox 인 경우 checked 속성의 값으로, 그 외의 경우 value 속성의 값으로 설정한다.는 것이다.
        }));
    };

    // Form 제출 처리
    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 제출 동작 방지
        console.log('제출된 데이터:', formData);
        alert('Form 데이터가 제출되었습니다!');
    };

    return (
        <div style={{ padding: '20px', color: '#fff', backgroundColor: '#222' }}>
            <h1>React 학습: Form 처리</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                {/* 이름 입력 필드 */}
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        이름:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        />
                    </label>
                </div>

                {/* 이메일 입력 필드 */}
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        이메일:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        />
                    </label>
                </div>

                {/* 체크박스 */}
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            style={{ marginRight: '5px' }}
                        />
                        이용 약관에 동의합니다.
                    </label>
                </div>

                {/* 제출 버튼 type의 기본값이 submit이기 때문에 다른 값을 명시하지 않는 한 submit 동작이 수행된다.*/}
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0078ff', color: '#fff', border: 'none', borderRadius: '5px' }}>
                    제출
                </button>
            </form>
        </div>
    );
}

export default App;
