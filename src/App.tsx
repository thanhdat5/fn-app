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
        type="error"
        title="Error"
        message="Invalid two-factor authentication"
      />, { type: 'error' });
    }, 5000)

    setTimeout(() => {
      toast(<Message
        type="success"
        title="Deposit confirmed"
        message="Your deposit of <span>0.000 USDT</span> has been successfully processed"
      />, { type: 'success' });
    }, 14000)

    setTimeout(() => {
      toast(<Message
        type="error"
        title="Error"
        message="Withdrawal address is incorrect or the wallet is temporarily unavailable."
      />, { type: 'error' });
    }, 23000)

    setTimeout(() => {
      toast(<Message
        type="info"
        title="withdrawal"
        message="Your withdrawal of <span>0.000000 USDT</span> was successfull"
      />, { type: 'info' });
    }, 32000)

    setTimeout(() => {
      toast(<Message
        type="info"
        title="Password Reset Email Sen"
        message="We have sent an account recovery email to <span>xnxx@gmail.com</span>"
      />, { type: 'info' });
    }, 41000)

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
