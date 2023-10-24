const fs = require('fs');
const stdin_fd = (process.platform === 'win32') ? process.stdin.fd : fs.openSync('/dev/stdin', 'rs');
const stdout_fd = process.stdout.fd;
const basicEnd = (process.platform === 'win32') ? '\r\n' : '\n';
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

class Console {
    static write(text, end = "") {
        fs.writeSync(stdout_fd, text.toString() + end);
    }

    static output(text, end = "") {
        this.write(text, end);
    }

    static writeWord(text, end = " ") {
        this.write(text, end);
    }

    static outputWord(text, end = "") {
        this.writeWord(text, end);
    }

    static writeLine(text) {
        this.write(text, basicEnd);
    }

    static outputLine(text) {
        this.writeLine(text);
    }

    static alert(msg) {
        this.writeLine(msg);
    }

    static readCharCode() {
        const buf = new Buffer.alloc(1, 0, 'utf8');
        let bytesRead = 0;
        try {
            bytesRead = fs.readSync(stdin_fd, buf, 0, 1);
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
        return this.readCharCode();
    }

    static readChar() {
        const c = this.readCharCode();
        if (c == -1) {
            throw new Error('Is not possible to read a char, probably EOF');
        }
        else {
            return String.fromCharCode(c);
        }
    }

    static inputChar() {
        return this.readChar();
    }

    static read(end = ` ${basicEnd}`) {
        let s = "", char, c;
        while ((c = this.readCharCode()) != -1 && end.indexOf(char = String.fromCharCode(c)) != -1);
        if (c != -1) s = char;
        while ((c = this.readCharCode()) != -1 && end.indexOf(char = String.fromCharCode(c)) == -1) {
            s += char;
        }
        return s;
    }

    static input(end = ` ${basicEnd}`) {
        return this.read(end);
    }

    static readWord(end = ` ${basicEnd}`) {
        return this.read(end);
    }

    static inputWord(end = ` ${basicEnd}`) {
        return this.readWord(end);
    }

    static readLine() {
        return this.read(basicEnd);
    }

    static inputLine() {
        return this.readLine();
    }

    static readLineSplit(sep) {
        return this.read(basicEnd).split(sep).filter(x => x != ""); 
    }

    static inputLineSplit(sep) {
        return this.readLineSplit(sep);
    }

    static readLineSplitWords(sep = " ") {
        return this.read(basicEnd).split(sep).filter(x => x != ""); 
    }

    static inputLineSplitWords(sep = " ") {
        return this.readLineSplitWords(sep);
    }

    static readAll() {
        return this.read("");
    }

    static inputAll() {
        return this.read("");
    }

    static prompt(msg) {
        this.write(msg);
        return this.readLine();
    }
}

module.exports = {Console};