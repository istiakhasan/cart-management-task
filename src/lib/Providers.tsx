"use client"
import { useEffect, useState } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "@/redux/store";
import StyledComponentsRegistry from "./AntdRegistry";
import { Suspense } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Provider store={store}>
      {isClient ? (
        <PersistGate persistor={persistor}>
          <Suspense fallback={<h1>Loading</h1>}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </Suspense>
        </PersistGate>
      ) : (
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      )}
    </Provider>
  );
};

export default Providers;
