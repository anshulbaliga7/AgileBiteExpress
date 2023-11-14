declare type FormatCurrencyFunction = ({ amount, code, }: {
    amount: number;
    code: string;
}) => [string, number, string];
export declare const formatCurrency: FormatCurrencyFunction;
declare type CurrencyCode = {
    code: string;
    name: string;
};
export declare const getSupportedCurrencies: () => CurrencyCode[];
export {};
