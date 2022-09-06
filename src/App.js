import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProfInfoPage from "./pages/ProfInfoPage";
import RestaurantPage from "./pages/RestaurantPage";
import { Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import GraduationPage from "./pages/GraduationPage";
import LibraryPage from "./pages/LibraryPage";
import FirstYearInfoPage from "./pages/FirstYearInfoPage";
import SchedulePage from "./pages/SchedulePage";
import FAQSettingsPage from "./pages/FAQSettingsPage";
import AboutSettingsPage from "./pages/AboutSettingsPage";
import MapPage from "./pages/MapPage";

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
        <Route path="/firstyearinfo" element={<FirstYearInfoPage />} />
        <Route path="/examschedule" element={<SchedulePage examsProp />} />
        <Route
          path="/semesterschedule"
          element={<SchedulePage semesterProp />}
        />
        <Route path="/faq" element={<FAQSettingsPage />} />
        <Route path="/about" element={<AboutSettingsPage />} />
        <Route path="/map" element={<MapPage />} />
      </Route>
    </Routes>
  );
}

export default App;
