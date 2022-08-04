import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProfInfoPage from "./pages/ProfInfoPage";
import RestaurantPage from "./pages/RestaurantPage";
import { Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import GraduationPage from "./pages/GraduationPage"
import LibraryPage from "./pages/LibraryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/professors" element={<ProfInfoPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/graduationpage" element={<GraduationPage />} />
        <Route path="/librarypage" element={<LibraryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
