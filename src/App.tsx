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
import { useTranslation } from "react-i18next";
import ClaimPage from "pages/claim-reward";

const HomepageLoading = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 3000)).then(() => import('./pages/homepage'));
})

function App() {

  const {t, i18n} = useTranslation();
  useEffect(() => {
    const message = `<b>${t("Congratulation! You've Successfully Bought")} <span>${t('23 Four Numbers Ticket')}</span>. ${t('Good Luck!')}</b>`
    setTimeout(() => {
      toast(<Message
        type="info"
        message={message}
      />, { type: 'info' });
    }, 1000)
  }, [i18n.language, t])

  return (
    <div data-bs-theme="dark" className="fn-app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomepageLoading />} />
          <Route path='/affiliate' element={<AffiliatePage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/claim-reward' element={<ClaimPage />} />
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
