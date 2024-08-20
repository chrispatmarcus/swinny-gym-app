import Navbar from "@/Scenes/navbar";
import Home from "@/Scenes/home/index";
import Benefits from "@/Scenes/benefits/index";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import OurClasses from "./Scenes/ourClasses";
import ContactUs from "./Scenes/contactUs";
import Footer from "./Scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () =>{
      if (window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY ! == 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
    <div className="app  bg-gray-20 ">
      <Navbar 
      isTopOfPage ={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
                  
         />
         <Home setSelectedPage={setSelectedPage} />
         <Benefits setSelectedPage={setSelectedPage} />
         <OurClasses setSelectedPage={setSelectedPage} />
          <ContactUs setSelectedPage={setSelectedPage} />
           <Footer setSelectedPage={setSelectedPage} />
         

      </div>
      
    </>
  )
}

export default App
