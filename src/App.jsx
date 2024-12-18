import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Link to="/" style={{ margin: '0 10px' }}>홈</Link> {/*React Router를 사용하는 SPA에서는 **Link**를 사용하는 것이 좋다.*/}
                <Link to="/about" style={{ margin: '0 10px' }}>소개</Link> {/*외부 링크나 정적 HTML 페이지로 이동할 때는 a 태그를 사용*/}
                <Link to="/contact" style={{ margin: '0 10px' }}>연락처</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;
