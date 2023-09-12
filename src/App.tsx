import Footer from "components/layout/footer";
import Header from "components/layout/header";
import "i18n";
import AffiliatePage from "pages/affiliate";
import LoginPage from 'pages/auth/login';
import RegisterPage from 'pages/auth/register';
import Homepage from 'pages/homepage';
import { Route, Routes } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div data-bs-theme="dark" className="fn-app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/affiliate' element={<AffiliatePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
