const fs = require('fs');
const fd = (process.platform === 'win32') ? process.stdin.fd : fs.openSync('/dev/tty', 'rs');
const basicEnd = (process.platform === 'win32') ? '\r\n' : '\n';
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

class Console {
    static write(text, end = "") {
        fs.writeSync(process.stdout.fd, text.toString() + end);
    }

    static output(text, end = "") {
        write(text, end);
    }

    static writeWord(text, end = " ") {
        write(text, end);
    }

    static outputWord(text, end = "") {
        writeWord(text, end);
    }

    static writeLine(text) {
        write(text, basicEnd);
    }

    static outputLine(text) {
        writeLine(text);
    }

    static alert(msg) {
        writeLine(msg);
    }

    static readCharCode() {
        const buf = new Buffer.alloc(1, 0, 'utf8');
        let bytesRead = 0;
        try {
            bytesRead = fs.readSync(fd, buf, 0, 1);
        }
        catch(error) {
            return -1;
        }
        finally {
            if (bytesRead > 0) return decoder.write(buf).charCodeAt(0);
            else return -1;
        }
    }

    static inputCharCode() {
        return readCharCode();
    }

    static readChar() {
        const c = readCharCode();
        if (c == -1) {
            throw new Error('Is not possible to read a char, probably EOF');
        }
        else {
            return String.fromCharCode(c);
        }
    }

    static inputChar() {
        return readChar();
    }

    static read(end = ` ${basicEnd}`) {
        let s = "", char, c;
        while ((c = readCharCode()) != -1 && end.indexOf(char = String.fromCharCode(c)) != -1);
        if (c != -1) s = char;
        while ((c = readCharCode()) != -1 && end.indexOf(char = String.fromCharCode(c)) == -1) {
            s += char;
        }
        return s;
    }

    static input(end = ` ${basicEnd}`) {
        return read(end);
    }

    static readWord(end = ` ${basicEnd}`) {
        return read(end);
    }

    static inputWord(end = ` ${basicEnd}`) {
        return readWord(end);
    }

    static readLine() {
        return read(basicEnd);
    }

    static inputLine() {
        return readLine();
    }

    static readLineSplit(sep) {
        return read(basicEnd).split(sep).filter(x => x != ""); 
    }

    static inputLineSplit(sep) {
        return readLineSplit(sep);
    }

    static readLineSplitWords(sep = " ") {
        return read(basicEnd).split(sep).filter(x => x != ""); 
    }

    static inputLineSplitWords(sep = " ") {
        return readLineSplitWords(sep);
    }

    static readAll() {
        return read("");
    }

    static inputAll() {
        return read();
    }

    static prompt(msg) {
        write(msg);
        return readLine();
    }
}

module.exports = {Console};