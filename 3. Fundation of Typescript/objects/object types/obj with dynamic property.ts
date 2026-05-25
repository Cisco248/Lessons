// ============================================================
// INDEX SIGNATURES (DYNAMIC PROPERTIES)
// ============================================================

type StringDictionary = {
    [key: string]: string;
};

const translations: StringDictionary = {
    hello: "Ayubowan",
    goodbye: "ආයුබෝවන්",
};

type FlexibleScores = {
    name: string;
    [subject: string]: string | number;
};

const report: FlexibleScores = {
    name: "Lahiru",
    math: 95,
    science: 88,
    english: "A",
};

export { StringDictionary, translations, FlexibleScores, report };
