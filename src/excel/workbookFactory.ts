import * as XLSX from 'xlsx';

export class WorkbookFactory {
    static SimpleWorkbook(): XLSX.WorkBook {
        let workbook = XLSX.utils.book_new();
        let worksheet = XLSX.utils.json_to_sheet([
            { Column1:1, Column2:2, Column3:3, Column4:4, Column5:5, Column6:6, Column7:7, Column8:0},
            { Column1:2, Column2:3, Column3:4, Column4:5, Column5:6, Column6:7, Column7:8, Column8:0}
        ]);
        worksheet['H2'] = {f: 'SUM(A2:G2)'};
        worksheet['H3'] = {f: 'A3+G3'};
        XLSX.utils.book_append_sheet(workbook, worksheet, "Test");
        return workbook;
    }
}
