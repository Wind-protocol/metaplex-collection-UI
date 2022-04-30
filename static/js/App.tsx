import { ChakraProvider } from "@chakra-ui/react";
import { WalletProvider } from "./contexts";
import { theme } from "./theme";
import { AppRoutes } from "routes/AppRoutes";
import { ErrorBoundary } from "react-error-boundary";
import { useToast } from "components/modals/Toast";
import debug from "debug";
import { Home } from "views/Home";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const LOGErr = debug("error:App");

export const App = () => {
  Sentry.init({
    dsn: "https://7c29f4a5219b4d4ea029acf8cfc16522@o1150734.ingest.sentry.io/6224162",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  const toast = useToast();

  const handleError = (error: Error) => {
    toast({ duration: 2000, title: error.name, text: error.message });
  };

  try {
    return (
      <ChakraProvider theme={theme}>
        <WalletProvider autoConnect>
          <ErrorBoundary onError={handleError} fallback={<Home />}>
            <AppRoutes />
          </ErrorBoundary>
        </WalletProvider>
      </ChakraProvider>
    );
  } catch (error) {
    LOGErr.log(error);
    return <>error</>;
  }
};
