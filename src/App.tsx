import Footer from "components/layout/footer";
import Header from "components/layout/header";
import Message from "components/shared/message";
import "i18n";
import AffiliatePage from "pages/affiliate";
import LoginPage from 'pages/auth/login';
import RegisterPage from 'pages/auth/register';
import FAQPage from "pages/faq";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

const HomepageLoading = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 3000)).then(() => import('./pages/homepage'));
})

function App() {
  useEffect(() => {
    setTimeout(() => {
      toast(<Message
        type="info"
        message="<b>Congratulation! You've Successfully Bought <span>23 Four Numbers Ticket</span>. Good Luck!</b>"
      />, { type: 'info' });
    }, 50000)
  }, [])

  return (
    <div data-bs-theme="dark" className="fn-app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomepageLoading />} />
          <Route path='/affiliate' element={<AffiliatePage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer autoClose={5000} hideProgressBar={false} closeOnClick={true} pauseOnHover={true} className="fn-toast" />
    </div>
  );
}

export default App;
