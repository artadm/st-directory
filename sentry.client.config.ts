import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://75c3949b65887f6baad582828557ca81@o4509326578417664.ingest.us.sentry.io/4509326662434816",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});