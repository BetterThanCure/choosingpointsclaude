import "server-only";
import { StackServerApp } from "@stackframe/stack";

// Reads NEXT_PUBLIC_STACK_PROJECT_ID, NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
// and STACK_SECRET_SERVER_KEY from the environment. Set these once Neon Auth
// is enabled for this project in the Neon console. Left unset, the app still
// builds and the public site still works — only sign-in is unavailable.
export const stackServerApp = process.env.NEXT_PUBLIC_STACK_PROJECT_ID
  ? new StackServerApp({ tokenStore: "nextjs-cookie" })
  : null;
