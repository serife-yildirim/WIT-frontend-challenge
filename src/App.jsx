
import Header from "./components/Header"; 
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { DataContext } from "./context/Context";
import './index.css';


function App() {
  const { error } = useContext(DataContext);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="flex flex-col font-inter overflow-hidden">
        <ToastContainer />
        <div>
          <Header />
        </div>
        <div>
          <Skills className="bg-black" />
        </div>
        <div>
          <Profile />
        </div>
        <div>
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
