# efrog

# Українська

## Встановлення (на тестувальному сервері efrog вже встановлено)

```console
npm install efrog
```

## Імпорт

```js
const Console = require('efrog').Console;
```

## Функції

* **`Console.write(text, end)`** | **`Console.output(text, end)`** — вивід тексту у консоль

    `text` — текст, який буде виведений у консоль

    `end` — кінець виводу

* **`Console.writeWord(text, end)`** | **`Console.outputWord(text, end)`** — вивід слова у консоль

    `text` — текст, який буде виведений у консоль

    `end` — кінець слова

* **`Console.writeLine(text, end)`** | **`Console.outputLine(text, end)`** — вивід рядка у консоль

    `text` — текст, який буде виведений у консоль

    `end` — кінець рядка

* **`Console.alert(msg)`** — вивід повідомлення у консоль
    
    `msg` — повідомлення, яке буде виводитися у консоль

* **`Console.readCharCode()`** | **`Console.inputCharCode()`** — отримання char-коду останнього непрочитаного символа

* **`Console.readChar()`** | **`Console.inputChar()`** — отримання останнього непрочитаного символа

* **`Console.read(end)`** | **`Console.input(end)`** — читання з консолі до кінця

    `end` — кінець

* **`Console.readWord(end)`** | **`Console.inputWord(end)`** — читання останнього непрочитаного слова

    `end` — кінець слова

* **`Console.readLine(sep)`** | **`Console.inputLine(sep)`** — читання останнього непрочитаного рядка

* **`Console.readLineSplit(sep)`** | **`Console.inputLineSplit(sep)`** — читання і розбиття останнього непрочитаного рядка

    `sep` — розділювач, який розділяє слова в рядку, по ньому відбувається поділ рядка на масив слів

* **`Console.readLineSplit(sep)`** | **`Console.inputLineSplit(sep)`** — читання і розбиття на слова останнього непрочитаного рядка

    `sep` — розділювач, який розділяє слова в рядку, по ньому відбувається поділ рядка на масив слів

* **`Console.readAll()`** | **`Console.inputAll()`** — читання усьогу потоку з консолі

* **`prompt(msg)`** — читання з консолі після вивіду у консоль повідомлення

    `msg` — повідомлення, яке буде виводитися у консоль

# English

## Installation (on the testing server efrog is it already installed)

```console
npm install efrog
```

## Import

```js
const Console = require('efrog').Console;
```

## Functions

* **`Console.write(text, end)`** | **`Console.output(text, end)`** — text output to the console

    `text` — the text that will be output to the console

    `end` — the end of the output

* **`Console.writeWord(text, end)`** | **`Console.outputWord(text, end)`** — output the word to the console

    `text` — the text that will be output to the console

    `end` — the end of the word

* **`Console.writeLine(text, end)`** | **`Console.outputLine(text, end)`** — output a line to the console

    `text` — the text that will be output to the console

    `end` — the end of the line

* **`Console.alert(msg)`** — output a message to the console
    
    `msg` — the message that will be output to the console

* **`Console.readCharCode()`** | **`Console.inputCharCode()`** — getting a char code of the last unread character

* **`Console.readChar()`** | **`Console.inputChar()`** — getting the last unread character

* **`Console.read(end)`** | **`Console.input(end)`** — reading from the console to the end

    `end` — the end

* **`Console.readWord(end)`** | **`Console.inputWord(end)`** — reading the last unread word

    `end` — the end of a word

* **`Console.readLine(sep)`** | **`Console.inputLine(sep)`** — reading the last unread line

* **`Console.readLineSplit(sep)`** | **`Console.inputLineSplit(sep)`** — reading and splitting the last unread line

    `sep` — the delimiter that separates words in a line, it is used to divide the line into an array

* **`Console.readLineSplit(sep)`** | **`Console.inputLineSplit(sep)`** — читання і розбиття на слова останнього непрочитаного рядка

    `sep` — the delimiter that separates words in a line, it is used to divide the line into an array

* **`Console.readAll()`** | **`Console.inputAll()`** — reading the entire stream from the console

* **`prompt(msg)`** — reading from the console after outputting a message to the console

    `msg` — the message that will be output to the console