import * as Sentry from "@sentry/react";
import env from "../../env";

Sentry.init({
  dsn: env.SENTRY_IO_URI,
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ["localhost", /^https:\/\/wwww\.juniorcarrillo\.com/, /^https:\/\/api\.juniorcarrillo\.com\/v1/],
    }),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
