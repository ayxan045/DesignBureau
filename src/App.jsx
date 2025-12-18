import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Layout from "./layout/Layout";
import ProjectList from "./pages/ProjectList/ProjectList";
import About from "./pages/About/About";
import News from "./pages/News/News";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectList" element={<ProjectList/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsdetails" element={<NewsDetails/>} />
          <Route path="/contact" element={<Contact />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopBtn />
    </>
  );
}

export default App;
