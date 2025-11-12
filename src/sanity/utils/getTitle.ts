import {
    InternationalizedArrayPortableText,
    InternationalizedArrayString,
    InternationalizedArrayText,
} from "../../../sanity.types";

export const getTitleFromIntArrays = (
    title:
        | InternationalizedArrayString
        | InternationalizedArrayText
        | InternationalizedArrayPortableText,
    fallbackMessage: string = "No title"
) => {
    if (!title) {
        return fallbackMessage;
    }
    const requisiteTitle =
        title.find(item => item._key === "uk")?.value || fallbackMessage;

    return requisiteTitle;
};

export const getTitleFromIntArraysString = (
    title: InternationalizedArrayString | InternationalizedArrayText,
    fallbackMessage: string = "No title"
) => {
    if (!title) {
        return fallbackMessage;
    }
    const requisiteTitle =
        title.find(item => item._key === "uk")?.value || fallbackMessage;
    return requisiteTitle;
};
