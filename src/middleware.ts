import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { availableLanguages } from "./interfaces/languages";
import { cookies } from "next/headers";

const locales = Object.keys(availableLanguages);
const defaultLocale = availableLanguages["en-US"];

function getLocale() {
    const headers = { "accept-language": "pt,en-US,en;q=0.5" };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const cookieStore = cookies();

    const preferredLanguage = cookieStore.get("preferredLanguage");
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (preferredLanguage && pathnameHasLocale) {
        console.log("preferredLanguage: ", preferredLanguage.value);
        console.log("path: ", pathname);
        if (
            pathname.startsWith(`/${preferredLanguage.value}/`) ||
            pathname === `/${preferredLanguage.value}`
        ) {
            return NextResponse.next();
        }

        request.nextUrl.pathname = `${pathname.replace(
            `/${locales.filter((locale) => locale !== preferredLanguage.value)[0]}`,
            `/${preferredLanguage.value}`,
        )}`;
        return NextResponse.redirect(request.nextUrl);
    }

    if (preferredLanguage) {
        request.nextUrl.pathname = `/${preferredLanguage.value}${pathname}`;
        return NextResponse.redirect(request.nextUrl);
    }

    if (!preferredLanguage && pathnameHasLocale) {
        return NextResponse.next();
    }

    const locale = getLocale();
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|icon.svg|favicon.ico|sitemap.xml|robots.txt|images).*)",
    ],
};
