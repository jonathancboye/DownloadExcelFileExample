import React from 'react';
import './App.css'
import DownloadWorkbookButton from "./components/DownloadWorkbookButton/DownloadWorkbookButton";
import {WorkbookFactory} from "./excel/workbookFactory";

function App() {
    const workbook = WorkbookFactory.SimpleWorkbook();
    return (
        <div className={'App'}>
            <DownloadWorkbookButton workbook={workbook}/>
        </div>
    );
}

export default App;
