import React, { useState, useEffect } from 'react';

function App() {
    const [posts, setPosts] = useState([]); // API 데이터를 저장할 상태
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태
    const [search, setSearch] = useState(''); // 검색어 상태

    // API 호출 함수
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // API 호출
            if (!response.ok) {
                throw new Error('데이터를 불러오는 데 실패했습니다.');
            }
            const data = await response.json(); // JSON 데이터를 JavaScript 객체로 변환
            setPosts(data); // 상태 업데이트
            setLoading(false); // 로딩 종료
        } catch (err) {
            setError(err.message); // 에러 상태 업데이트
            setLoading(false); // 로딩 종료
        }
    };

    // 컴포넌트가 처음 렌더링될 때 API 호출
    useEffect(() => {
        fetchPosts();
    }, []);

    // 검색된 데이터를 필터링
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>React 학습: API 연동과 검색 기능</h1>

            {/* 검색 입력 필드 */}
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={search} // 검색 상태를 입력 필드와 연결
                onChange={(e) => setSearch(e.target.value)} // 검색어 변경 시 상태 업데이트
                style={{
                    marginBottom: '20px',
                    padding: '8px',
                    fontSize: '16px',
                    width: '100%',
                    maxWidth: '400px',
                }}
            />

            {/* 로딩 상태 */}
            {loading && <p>로딩 중...</p>}

            {/* 에러 상태 */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* 필터링된 데이터 렌더링 */}
            {!loading && !error && (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {filteredPosts.map((post) => (
                        <li
                            key={post.id}
                            style={{
                                marginBottom: '20px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '10px',
                            }}
                        >
                            <strong style={{ fontSize: '18px', color: '#333' }}>
                                {post.title}
                            </strong>
                            <p style={{ margin: '5px 0', color: '#555' }}>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
