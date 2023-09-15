import Loading from 'components/shared/loading';
import HttpProvider from 'providers/http-context';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <HttpProvider>
        <App />
      </HttpProvider>
    </Provider>
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
