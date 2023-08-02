export class Console {
    static write(text: string, end?: string): void;
    static output(text: string, end?: string): void;
    static writeWord(text: string, end?: string): void;
    static outputWord(text: string, end?: string): void;
    static writeLine(text: string): void;
    static outputLine(text: string): void;
    static alert(msg: string): void;
    static readCharCode(): number;
    static inputCharCode(): number;
    static readChar(): string;
    static inputChar(): string;
    static read(end?: string): string;
    static input(end?: string): string;
    static readWord(end?: string): string;
    static inputWord(end?: string): string;
    static readLine(): string;
    static inputLine(): string;
    static readLineSplit(sep: string): string;
    static inputLineSplit(sep: string): string;
    static readLineSplitWords(sep: string): string;
    static inputLineSplitWords(sep: string): string;
    static readAll(): string;
    static inputAll(): string;
    static prompt(msg: string): void;
}