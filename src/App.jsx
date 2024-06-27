import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Posts from "./pages/Posts.jsx";
import Post from "./pages/Post.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;