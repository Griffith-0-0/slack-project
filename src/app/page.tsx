"use client"
import {UserButton} from "@/app/features/auth/components/ui/user-button";
import {useGetWorkspaces} from "@/app/features/workspaces/api/use-get-workspaces";
import {useEffect, useMemo} from "react";
import {useCreateWorkspaceModal} from "@/app/features/workspaces/store/use-creat-workspace-modal";


export default function Home() {
    const [open, setOpen]= useCreateWorkspaceModal();

    const {data, isLoading}= useGetWorkspaces();

    const workspaceid= useMemo(() => data?.[0]?._id, [data])

    useEffect(() => {
        if(isLoading) return
        if(workspaceid){
            console.log("Redirected to workspace...");
        }else if(!open){
            setOpen(true);
        }
    }, [workspaceid, isLoading, open, setOpen]);
  return (
    <div>
        <UserButton/>
    </div>
  );
}
