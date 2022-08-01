import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProfInfoPage from "./pages/ProfInfoPage";
import RestaurantPage from "./pages/RestaurantPage";
import { Routes, Route } from "react-router-dom";
import MerimnaPage from "./pages/MerimnaPage.jsx";
import StudentWebPage from "./pages/StudentsWebPage"
import EudoxusPage from "./pages/EudoxusPage"
import ServicesPage from "./pages/ServicesPage"
import OpenEclassPage from "./pages/OpenEclassPage";
import GraduationPage from "./pages/GraduationPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/professors" element={<ProfInfoPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/merimna" element={<MerimnaPage />} />
        <Route path="/openeclass" element={<OpenEclassPage />} />
        <Route path="/studentsweb" element={<StudentWebPage />} />
        <Route path="/eudoxus" element={<EudoxusPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/graduationpage" element={<GraduationPage />}  />
      </Route>
    </Routes>
  );
}

export default App;
