import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { availableLanguages } from "./interfaces/languages";

const locales = Object.keys(availableLanguages);
const defaultLocale = availableLanguages["en-US"];

function getLocale() {
    const headers = { "accept-language": "pt,en-US,en;q=0.5" };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (pathnameHasLocale) return;

    const locale = getLocale();
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|icon.svg|favicon.ico|sitemap.xml|robots.txt|images).*)",
    ],
};
