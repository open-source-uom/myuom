/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

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
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { useEffect } from "react";
import FAQSettingsPage from "./pages/FAQSettingsPage";
import AboutSettingsPage from "./pages/AboutSettingsPage";
import { Categories } from "./assets/ConfigRoutes";
import i18n from "./i18n";
import Error404 from "./pages/Error404";
function App() {
  console.log("hello", Categories);
  // Load the preferred language from local storage and set it initially
  useEffect(() => {
    const storedLanguage = localStorage.getItem('preferred_language');
    if (storedLanguage && i18n.options.whitelist.includes(storedLanguage)) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);
  const categoriesToDisplay = Categories.filter(
    ({ hide }) => hide === false
  )
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        {categoriesToDisplay.map((category) => {
          return (
            <Route
              path={`/${category.route}`}
              element={category.pageToDisplay}
              key={category.route}
            />
          );
        })}
        <Route path="/faq" element={<FAQSettingsPage />} />
        <Route path="/about" element={<AboutSettingsPage />} />
        <Route path="/*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
