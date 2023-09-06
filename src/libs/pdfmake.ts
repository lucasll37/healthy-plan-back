import PdfPrinter from "pdfmake";
import { TDocumentDefinitions, TFontDictionary } from "pdfmake/interfaces";


const fonts: TFontDictionary = {
    Courier: {
        normal: "Courier",
        bold: "Courier-Bold",
        italics: "Courier-Oblique",
        bolditalics: "Courier-BoldOblique"
    },
    Helvetica: {
        normal: "Helvetica",
        bold: "Helvetica-Bold",
        italics: "Helvetica-Oblique",
        bolditalics: "Helvetica-BoldOblique"
    },
    Times: {
        normal: "Times-Roman",
        bold: "Times-Bold",
        italics: "Times-Italic",
        bolditalics: "Times-BoldItalic"
    },
    Symbol: {
        normal: "Symbol"
    },
    ZapfDingbats: {
        normal: "ZapfDingbats"
    },
    Roboto: {
        normal: "src/fonts/Roboto/Roboto-Regular.ttf",
        bold: "src/fonts/Roboto/Roboto-Bold.ttf",
        italics: "src/fonts/Roboto/Roboto-Italic.ttf",
        bolditalics: "src/fonts/Roboto/Roboto-BoldItalic.ttf"
    },
    Lato: {
        normal: "src/fonts/Lato/Lato-Regular.ttf",
        bold: "src/fonts/Lato/Lato-Bold.ttf",
        italics: "src/fonts/Lato/Lato-Italic.ttf",
        bolditalics: "src/fonts/Lato/Lato-BoldItalic.ttf"
    },
    Latex: {
        normal: "src/fonts/Latex/lmroman12-regular.otf",
        bold: "src/fonts/Latex/lmroman12-regular.otf",
        italics: "src/fonts/Latex/lmroman12-regular.otf",
        bolditalics: "src/fonts/Latex/lmroman12-regular.otf",
    }

};

const printer = new PdfPrinter(fonts);


export async function generatePdf(docDefinition: TDocumentDefinitions): Promise<Buffer> {
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    const chunks: Buffer[] = [];

    pdfDoc.on("data", chunk => {
        chunks.push(chunk);
    });

    pdfDoc.end();

    return new Promise((resolve, reject) => {
        pdfDoc.on("end", () => {
            const result = Buffer.concat(chunks);
            resolve(result);
        });
    });
}

