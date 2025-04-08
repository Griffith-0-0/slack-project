// This line tells Next.js that this component must be rendered on the client side, not server side.
"use client";

// Importing the modal component to be displayed
import { CreateWorkspaceModal } from "@/app/features/workspaces/components/create-workspace-modal";

// Importing React hooks: useEffect and useState
import { useEffect, useState } from "react";

// Define and export the Modals component
export const Modals = () => {
    // Initialize a state variable 'mounted' to false
    // This keeps track of whether the component has been mounted on the client
    const [mounted, setMounted] = useState(false);
    // useEffect runs after the component is first rendered
    // Here, it sets 'mounted' to true once the component is mounted
    useEffect(() => {
        setMounted(true);
    }, []); // The empty dependency array [] means it runs only once, after initial render

    // If the component is not yet mounted, return null (render nothing)
    if (!mounted) return null;

    // Once mounted is true, render the modal component
    return (
        <>
            <CreateWorkspaceModal />
        </>
    );
}
