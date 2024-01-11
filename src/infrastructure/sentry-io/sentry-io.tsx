import * as Sentry from "@sentry/react";
import env from "../../env";

function SentryIO() {
  Sentry.init({
    dsn: env.REACT_APP_SENTRY_IO_URI,
    integrations: [
      new Sentry.BrowserTracing({
        traceFetch: true,
        enableLongTask: true,
        tracePropagationTargets: ["localhost", /^https:\/\/wwww\.juniorcarrillo\.com/, /^https:\/\/api\.juniorcarrillo\.com\/v1/],
      }),
      new Sentry.Replay(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    environment: env.NODE_ENV,
  })
}

export default SentryIO;
