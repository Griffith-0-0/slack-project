// This is necessary because Convex and its hooks are client-side only
"use client";

import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ConvexAuthNextjsProvider } from "@convex-dev/auth/nextjs";

// The URL is fetched from the environment variable NEXT_PUBLIC_CONVEX_URL
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Define a provider component that wraps its children with the Convex client and authentication provider
export function ConvexClientProvider({ children }: { children: ReactNode }) {
    return (
        // This provider enables Convex authentication and client functionality
        <ConvexAuthNextjsProvider client={convex}>
            {children}
        </ConvexAuthNextjsProvider>
    );
}