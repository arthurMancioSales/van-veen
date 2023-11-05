import * as React from "react";
import { Field } from "formik";

import { cn } from "@/lib/utils";
import { Button } from "../button/Button";
import { Eye, EyeOffIcon } from "lucide-react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type InputType = InputProps & {
    error?: string;
    touched?: boolean;
    icon?: React.ElementType;
    textarea?: boolean;
};

const FormField = React.forwardRef<HTMLInputElement, InputType>(
    (
        { className, type, textarea = false, error, touched, icon: Icon, ...props },
        ref,
    ) => {
        const [showPassword, setShowPassword] = React.useState(false);

        function showError() {
            if (!error || !touched) return;
            return <span className="text-destructive">{error}</span>;
        }

        function togglePassword() {
            setShowPassword(!showPassword);
        }

        const inputType = type === "password" && showPassword ? "text" : type;

        return (
            <div className="flex flex-col">
                <div className="relative">
                    {Icon && <Icon className="inputIcon" />}
                    <Field
                        name={props.name}
                        type={inputType}
                        className={cn(
                            "flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            Icon && "pl-10",
                            error && touched
                                ? "border-solid border-destructive"
                                : "",
                            className,
                            textarea && "min-h-[80px]",
                        )}
                        ref={ref}
                        {...props}
                        as={textarea && "textarea"}
                    />
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
                <div className="min-h-[1.5rem]">{showError()}</div>
            </div>
        );
    },
);
FormField.displayName = "Input";

export { FormField };
