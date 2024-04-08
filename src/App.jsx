import Footer from "./components/Footer";
import Form from "./components/Form";
import Profile from "./components/Profile";
import Service from "./components/Service";
import Verification from "./components/Verification";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/Aeonaxy-Technologies-Private-Limited/" element={<Form/>}/>
          <Route path="/Aeonaxy-Technologies-Private-Limited/profile" element={<Profile />} />
          <Route path="/Aeonaxy-Technologies-Private-Limited/service" element={<Service />} />
          <Route path="/Aeonaxy-Technologies-Private-Limited/verification" element={<Verification />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
