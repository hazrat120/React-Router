import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Posts from "./component/Posts";
import Navbar from "./component/Navbar";
import ErrorShow from "./component/Error";
import Faq from "./component/Faq";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services/*" element={<Services />}>
          <Route path="service" element={<h5>This is a heading 5</h5>} />
        </Route>

        <Route path="/Post" element={<Posts />} />
        <Route path="/faq/*" element={<Faq />}>
          <Route path="question" element={<h3>This is Question</h3>} />
        </Route>

        {/* Dynamic link  */}
        <Route path="/posts/:category/:topic" element={<Posts />} />
        <Route path="*" element={<ErrorShow />} />
      </Routes>
    </Router>
  );
}

export default App;
