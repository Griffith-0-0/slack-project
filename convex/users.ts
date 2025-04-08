import { auth } from "./auth"; // Import authentication module
import { query } from "./_generated/server"; // Import query function from the Convex server framework

// Define a Convex query to fetch the current user data
export const current = query({

    args: {}, // No arguments are required for this query
    handler: async (ctx) => {

        // Retrieve the current authenticated user's ID
        const userId = await auth.getUserId(ctx);

        // If there is no authenticated user, return null
        if (userId === null) {
            return null;
        }

        // Fetch and return the user data from the database using the user ID
        return await ctx.db.get(userId);
    }
});
