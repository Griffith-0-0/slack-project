import {
    convexAuthNextjsMiddleware,
    createRouteMatcher, isAuthenticatedNextjs,
    nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

// Define a route matcher to identify public pages that do not require authentication
// In this case, the "/signin" route is considered a public page
const isPublicPage = createRouteMatcher(["/auth"]);

// Export the default middleware function
export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
    // Check if the current request is not for a public page and if the user is not authenticated
    if (!isPublicPage(request) && !(await convexAuth.isAuthenticated())) {
        // If the user is not authenticated and the page is not public, redirect to the sign-in page
        return nextjsMiddlewareRedirect(request, "/auth");
    }
    // If the user is authenticated or the page is public, continue to the root
    if(isPublicPage(request) && await convexAuth.isAuthenticated()) {
        return nextjsMiddlewareRedirect(request, "/");
    }
});

// Export a configuration object for the middleware
export const config = {
    // The matcher specifies which routes the middleware should run on
    // This configuration runs the middleware on all routes except for static assets and Next.js internal routes
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};