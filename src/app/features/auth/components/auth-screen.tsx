"use client";

import {useState} from "react";
import {SignInFlow} from "@/app/features/auth/types";
import {SingUpCard} from "@/app/features/auth/components/Sign-up-card";
import {SingInCard} from "@/app/features/auth/components/Sign-in-card";

export const AuthScreen=()=>{
    const  [state, setState]=useState<SignInFlow>("signIn")
    return(
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                {state=== "signIn" ? <SingInCard setState={setState}/> : <SingUpCard setState={setState}/>}
            </div>

        </div>
    )
}