"use client";

import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Globe } from "lucide-react";

export default function LanguageSwitcher({
    currentLang,
    content,
}: {
    currentLang: string;
    content: string;
}) {
    const router = useRouter();
    const path = usePathname();

    const toggleLanguage = () => {
        const newLang = currentLang === "en-US" ? "pt-BR" : "en-US";
        console.log(currentLang, newLang);
        Cookies.set("preferredLanguage", newLang, { expires: 365 });

        router.push(`${path.replace(`/${currentLang}`, `/${newLang}`)}`);
    };

    return (
        <button
            className="text-lg flex items-center gap-x-2 font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all max-h-4"
            onClick={toggleLanguage}
        >
            <Globe className="h-[18px] w-[18px]"></Globe>
            {content}
        </button>
    );
}
