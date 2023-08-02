import '../styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { AppProps } from 'next/app';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Loading } from '@/components/base/loading';
import { MainProvider } from '@/context/main-context';
import { WelcomeContext, WelcomeProvider } from '@/context/welcome-context';
import Redux from '@/redux';

const { store, persistor } = Redux();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <WelcomeProvider>
        <ContainerMyApp pageProps={pageProps} Component={Component} />
      </WelcomeProvider>
    </PersistGate>
  </Provider>
);

const ContainerMyApp = ({ Component, pageProps }: any) => {
  const { loadingstartnow } = useContext(WelcomeContext);
  return (
    <div className="w-full">
      {loadingstartnow ? <Loading /> : null}
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </div>
  );
};

export default MyApp;
