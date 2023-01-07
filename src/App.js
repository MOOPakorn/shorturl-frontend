import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Routes, Route } from 'react-router-dom';

import Firstpage from './component/firstpage.component';
import Secondpage from './component/secondpage.component';
import UrlList from './component/urllist.component';
import RediracttoUrl from './component/redirecttourl.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Firstpage />} />
      <Route path="/shortened/:id" element={<Secondpage />} />
      <Route path="/url-list" element={<UrlList />} />
      <Route path="/:id" element={<RediracttoUrl />} />
    </Routes >
  );
}

export default App;
