import * as React from "react";
import { Field } from "formik";

import { cn } from "@/lib/utils";
import { Button } from "../button/Button";
import { Eye, EyeOffIcon } from "lucide-react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type InputType = InputProps & {
    icon?: React.ElementType;
    label?: string;
    textarea?: boolean;
};

const InputRoot = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div className={cn("flex flex-col h-full", className)} ref={ref} {...props}>
            {props.children}
        </div>
    );
});
InputRoot.displayName = "InputRoot";

const InputField = React.forwardRef<HTMLInputElement, InputType>(
    ({ className, type, textarea = false, icon: Icon, label, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);

        function togglePassword() {
            setShowPassword(!showPassword);
        }

        const inputType = type === "password" && showPassword ? "text" : type;

        return (
            <div className="flex flex-col h-full">
                <div className="relative h-full">
                    {Icon && <Icon className="inputIcon" />}

                    <Field
                        name={props.name}
                        type={inputType}
                        className={cn(
                            "peer flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-solid invalid:border-destructive",
                            Icon && "pl-10",
                            textarea && "min-h-[80px]",
                            className,
                        )}
                        ref={ref}
                        {...props}
                        as={textarea && "textarea"}
                    />

                    {label && (
                        <label
                            htmlFor={props.name}
                            className={cn(
                                "text-sm leading-6 text-foreground absolute top-2 left-3 peer-focus:-translate-y-full peer-focus:scale-75 peer-focus:-translate-x-1 peer-focus:bg-muted transition-all duration-150",
                                props.required &&
                                    "after:content-['*'] after:text-destructive",
                                Icon && "left-5",
                            )}
                        >
                            {label}
                        </label>
                    )}

                    {type === "password" && (
                        <Button
                            className="absolute top-0 right-2 hover:bg-transparent hover:text-primary"
                            variant={"ghost"}
                            size={"icon"}
                            onClick={togglePassword}
                            type="button"
                        >
                            {showPassword ? <EyeOffIcon></EyeOffIcon> : <Eye></Eye>}
                        </Button>
                    )}
                </div>
            </div>
        );
    },
);
InputField.displayName = "InputField";

interface InputErrorProps extends React.HTMLAttributes<HTMLSpanElement> {
    error?: string;
    touched?: boolean;
}

const InputError = React.forwardRef<HTMLSpanElement, InputErrorProps>(
    ({ className, error, touched, ...props }, ref) => {
        console.log(!error || !touched);
        if (!error || !touched) return <div className="min-h-[1.5rem]"></div>;
        return (
            <span className={cn("text-destructive", className)} ref={ref} {...props}>
                {error}
            </span>
        );
    },
);
InputError.displayName = "InputError";

export { InputRoot, InputField, InputError };
