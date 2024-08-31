import Footer from "./components/Footer";
import Form from "./components/Form";
import Profile from "./components/Profile";
import Service from "./components/Service";
import Verification from "./components/Verification";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/React-Login-and-service-Page-Dribble-design-">
        <Routes basename="/React-Login-and-service-Page-Dribble-design-">
          <Route path="/" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/service" element={<Service />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
