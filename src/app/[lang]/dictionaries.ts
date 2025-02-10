"server only";

import { availableLanguages } from "@/interfaces/languages";

const dictionaries = {
    "en-US": () =>
        import("../../dictionaries/en.json").then((module) => module.default),
    "pt-BR": () =>
        import("../../dictionaries/ptbr.json").then((module) => module.default),
};

export const getDictionary = async (locale: `${availableLanguages}`) => {
    return dictionaries[locale]();
};
