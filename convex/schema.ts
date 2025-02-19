import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";

// Define the schema for your Convex backend
const schema = defineSchema({
    // Spread the authentication tables into the schema
    // These tables are provided by the `@convex-dev/auth` package and handle user authentication
    ...authTables,

    // Add your custom tables here
    // For example:
    // tasks: defineTable({
    //     text: v.string(),
    //     isCompleted: v.boolean(),
    //     userId: v.id("users"), // Reference to the users table
    // }),
});

export default schema;