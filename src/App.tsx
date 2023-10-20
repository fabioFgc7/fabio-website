import Navbar from "./components/Navbar/Navbar";
import { InicioButton } from "./components/button/InicioButton";
import Footer from "./components/footer/Footer";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import "aos/dist/aos.css";
import Skills from "./pages/Skills";
import "animate.css";
import AOS from "aos";
import { useEffect } from "react";
import { DarkContext } from "./components/context/DarkContext";
import { ModalContext } from "./components/context/ModalContext";
import { DescriptionsProyects } from "./components/modal/DescriptionsProyects";
import { Routes, Route } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in", delay: 50 });
  }, []);

  return (
    <>
      <DarkContext>
        <ModalContext>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <main className='w-full h-full'>
                    <Navbar />
                    <div className='space-y-10 flex flex-col items-center '>
                      <Home />
                      <About />
                      <Skills />
                      <Project />
                      <Contact />
                    </div>
                  </main>
                  <Footer />
                  <InicioButton />
                </>
              }
            />
            <Route
              path='/proyectos/:id'
              element={<DescriptionsProyects />}
            />
          </Routes>
        </ModalContext>
      </DarkContext>
    </>
  );
}

export default App;
