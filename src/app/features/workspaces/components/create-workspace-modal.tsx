"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {useCreateWorkspaceModal} from "@/app/features/workspaces/store/use-creat-workspace-modal";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useCreateWorkspace} from "@/app/features/workspaces/api/use-create-workspace";

export const CreateWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal();

    const {mutate} = useCreateWorkspace();

    const handleSubmit = () => {
        mutate({
            name: "Workspace 1",
        }, {
            onSuccess(data){

            }
        })
    };

    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a Workspace</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                    <Input value="" disabled={false} required autoFocus minLength={3} placeholder="Workspace name e.g. 'Work', 'Personal', ..."  />
                </form>
                <div className="flex justify-end">
                    <Button disabled={false}>Create</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}