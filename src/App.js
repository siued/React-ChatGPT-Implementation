import GPT_Page from "./GPT_Page/GPT_Page";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomLink from "./CustomLink";

function App() {
  return (
    <Router>
        <nav className="bg-[#39FF14] font-bold h-min flex items-center">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </nav>
        <Routes>
            <Route path="/" element={GPT_Page()}/>
        </Routes>
    </Router>
  );
}

export default App;