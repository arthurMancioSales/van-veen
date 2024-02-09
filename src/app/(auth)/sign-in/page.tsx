import Container from "@/components/ui/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/card/Card";
import Image from "next/image";
import { SignInForm } from "./forms/SignInForm";

export default function SignUp() {
    return (
        <div className="grid h-screen grid-cols-5 grid-rows-1">
            <div className="bg-accent col-span-2 text-accent-foreground h-full">
                asdasd
            </div>
            <div className="col-span-3 bg-accent flex items-center">
                <div className="max-w-xl mx-auto">
                    <Card>
                        <CardHeader className="bg-muted rounded-t-md"></CardHeader>
                        <CardContent className="bg-muted rounded-b-md">
                            <SignInForm></SignInForm>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
