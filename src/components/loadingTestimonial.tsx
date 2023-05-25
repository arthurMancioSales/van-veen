export default function LoadingTestimonial() {
    return (
        <>
            <div className="border border-blue-900 bg-blue-950 shadow rounded-md p-4 max-w-sm w-full mx-auto h-[425px]">
                <div className="animate-pulse flex flex-wrap">
                    <div className="justify-center w-full flex">
                        <div className="rounded-full self-center bg-slate-700 h-10 w-10"></div>
                    </div>
                    <div className="flex-1 space-y-6 py-5">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
