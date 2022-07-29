import HomePage from './pages/HomePage'
import Header from './components/Header'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
