// ============================================================
// CLASSES IMPLEMENTING INTERFACES
// ============================================================

interface Printable {
    print(): void;
}

interface Loggable {
    log(message: string): void;
}

class Document implements Printable, Loggable {
    constructor(public title: string) {}

    print(): void {
        console.log(`Printing: ${this.title}`);
    }

    log(message: string): void {
        console.log(`[${this.title}] ${message}`);
    }
}

const doc = new Document("TypeScript Guide");
doc.print();
doc.log("Chapter 1");

export { Printable, Loggable, Document, doc };
