import { Route, Routes } from 'react-router-dom';
import CreatePost from './CreatePost';
import Navbar from './Navbar';
import Home from './Home';
import PostDetail from './PostDetail';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route exact path="/post/:postId" component={<CreatePost/>} />
        <Route exact path="/create-post" element={<CreatePost />} />
        <Route exact path ="/post-detail" element={<PostDetail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;