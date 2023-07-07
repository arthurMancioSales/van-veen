import * as Toast from "@radix-ui/react-toast";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { motion } from "framer-motion";


interface INotification {
    header: string,
    body: string,
    status: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
}


export default function Notification({
    children,
    header,
    body,
    status,
    open,
    setOpen
}:PropsWithChildren<INotification>) {

    const slideIn = {
        hidden: {
            x: "100%",
            opacity: 0
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                type: "Inertia",
                duration: 0.4
            }
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: {
                type: "Inertia",
                duration: 0.5
            }
        }
    };

    return (
        <Toast.Provider>
            {children}

            {open ? (
                <motion.div variants={slideIn} initial="hidden" animate="visible" exit="exit">
                    <Toast.Root
                        className="bg-blue-200 rounded-md shadow-2xl p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center animate__animated animate__slideInRight animate_faster"
                        open={open}
                        onOpenChange={setOpen}
                    >
                        <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
                            {header}
                        </Toast.Title>
                        <Toast.Description asChild>
                            <p>{body}</p>
                        </Toast.Description>
                        <Toast.Action className="[grid-area:_action]" asChild altText="Goto schedule to undo">
                            <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
                                Ok
                            </button>
                        </Toast.Action>
                    </Toast.Root>
                </motion.div>
                    
            ) : ""}


            <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
        </Toast.Provider>

    );
}
