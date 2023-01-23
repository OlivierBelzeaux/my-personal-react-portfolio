import './App.css';

// Components
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Home from './components/home/Home.jsx';
import Layout from './components/Layout/Layout.jsx';
import Projects from './components/projects/Projects.jsx';
import Resume from './components/resume/Resume.jsx';
import Services from './components/services/Services.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';

function App() {
  return (
    <Layout>
      <Sidebar />
      <Home />
      <About />
      <Services />
      <Resume />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
