import excel4node from "excel4node";


export async function testExcel(): Promise<Buffer> {
    const wb = new excel4node.Workbook();
    const ws = wb.addWorksheet("Sheet 1");
    wb.addWorksheet("Sheet 2");

    const style = wb.createStyle({
        font: {
            color: "#FF0800",
            size: 12,
        },
        numberFormat: "$#,##0.00; ($#,##0.00); -",
    });

    ws.cell(1, 1)
        .number(100)
        .style(style);

    ws.cell(1, 2)
        .number(200)
        .style(style);

    ws.cell(1, 3)
        .formula("A1 + B1")
        .style(style);

    ws.cell(2, 1)
        .string("string")
        .style(style);

    ws.cell(3, 1)
        .bool(true)
        .style(style)
        .style({font: {size: 14}});


    return await wb.writeToBuffer();

}
