import * as XLSX from "xlsx";
import './DownloadWorkbookButton.css';
import React from "react";

interface WorkbookProps {
    workbook: XLSX.WorkBook;
}

function DownloadWorkbookButton(props: WorkbookProps) {
    const workbook = props.workbook;

    function downloadSheet() {
        XLSX.writeFile(workbook, "output.xlsx");
    }

    return (
        <button onClick={downloadSheet} className={'DownloadWorkbookButton-button'}>
            Download
        </button>
    );
}

export default DownloadWorkbookButton;