import Container from "./ui/Container";

export default function LoadingTestimonial() {
    return (
        <Container direction="flex-col" width="w-screen">
            <div className="border border-blue-900 bg-accent shadow rounded-md p-4 max-w-sm w-full mx-auto h-[425px] lg:min-h-[425px] lg:max-w-3xl">
                <div className="flex flex-wrap animate-pulse">
                    <div className="flex justify-center w-full">
                        <div className="self-center w-10 h-10 rounded-full bg-slate-700"></div>
                    </div>
                    <div className="flex-1 py-5 space-y-6">
                        <div className="h-2 rounded bg-slate-700"></div>
                        <div className="space-y-3">
                            <div className="h-2 rounded bg-slate-700"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 col-span-2 rounded bg-slate-700"></div>
                            <div className="h-2 col-span-1 rounded bg-slate-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
