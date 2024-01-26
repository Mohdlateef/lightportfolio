import React from "react";
import Navebar from "./Components/Navebar";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
const App=()=>{
return(
<div>
    <Navebar />
    <Aboutme />
    <Skills />
    <Footer />
</div>
);
}

export default App;