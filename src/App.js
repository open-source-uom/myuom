/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

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
