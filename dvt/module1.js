// DVT Module 1: Excel & Data Management

function renderDVTM1Q1() {
    return `
        ${header('Q1. Excel Workbook and Worksheet Structure', 'Explain the basic structure of an Excel workbook and worksheet', 'theory')}
        ${section('Workbook vs Worksheet', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">📘 Workbook</span>
                <p>This is the <strong>entire file itself</strong> (like a notebook). It contains all the pages inside it.</p>
                <p>An Excel file (ending in <code>.xlsx</code>) is a Workbook.</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">📄 Worksheet (Sheet)</span>
                <p>These are the <strong>individual pages</strong> inside the Workbook.</p>
                <ul>
                    <li>You see tabs at the bottom named "Sheet1", "Sheet2", etc.</li>
                    <li>You do your actual work on a worksheet</li>
                    <li>It is a grid made up of <strong>rows and columns</strong></li>
                </ul>
            </div>
        `)}
        ${section('Think of it Like...', `
            <div class="answer-box">
                <p>📚 <strong>Workbook</strong> = Physical Notebook</p>
                <p>📄 <strong>Worksheet</strong> = Individual Pages in the Notebook</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q2() {
    return `
        ${header('Q2. Data Types in Excel', 'Describe different data types in Excel with examples', 'theory')}
        ${section('Data Types', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">📝 Text</span>
                <p>Letters or a mix of letters and numbers</p>
                <p><strong>Examples:</strong> "Apple", "ID-123"</p>
                <p>👉 Aligns to the <strong>left</strong></p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">🔢 Number</span>
                <p>Digits used for math</p>
                <p><strong>Examples:</strong> 100, 50.5</p>
                <p>👉 Aligns to the <strong>right</strong></p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">📅 Date/Time</span>
                <p>Specific formats for calendars and clocks</p>
                <p><strong>Example:</strong> "01/01/2023"</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">💰 Currency</span>
                <p>Numbers with money symbols</p>
                <p><strong>Example:</strong> $50.00</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">✅ Boolean (Logical)</span>
                <p>Only two values: <strong>TRUE</strong> or <strong>FALSE</strong></p>
            </div>
        `)}
    `;
}

function renderDVTM1Q3() {
    return `
        ${header('Q3. Cell Formatting in Excel', 'What is cell formatting in Excel? Explain its types', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>Cell formatting <strong>changes how data looks</strong> without changing the actual data. It makes the sheet easier to read.</p>
            </div>
        `)}
        ${section('Types of Cell Formatting', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Number Formatting</span>
                <p>Changing "0.5" to "50%" or "$0.50"</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Font Formatting</span>
                <p>Changing text size, color, or making it <strong>Bold</strong></p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Alignment</span>
                <p>Centering text, wrapping text so it fits, or merging cells</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">4. Borders and Fill</span>
                <p>Adding lines around cells or coloring the background of a cell</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q4() {
    return `
        ${header('Q4. SUM and AVERAGE Functions', 'Write the syntax and usage of the SUM and AVERAGE functions', 'calc')}
        ${section('SUM Function', `
            <div class="info-box info-box-green">
                <span class="info-box-title">SUM - Adds up a list of numbers</span>
                <p><strong>Syntax:</strong> <code>=SUM(number1, [number2], ...)</code> or <code>=SUM(range)</code></p>
                <p><strong>Example:</strong> <code>=SUM(A1:A10)</code> adds all numbers from cell A1 to A10</p>
            </div>
        `)}
        ${section('AVERAGE Function', `
            <div class="info-box info-box-purple">
                <span class="info-box-title">AVERAGE - Calculates the mean</span>
                <p><strong>Syntax:</strong> <code>=AVERAGE(number1, [number2], ...)</code> or <code>=AVERAGE(range)</code></p>
                <p><strong>Example:</strong> <code>=AVERAGE(B1:B5)</code> finds the average of numbers in cells B1 to B5</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q5() {
    return `
        ${header('Q5. Conditional Formatting', 'What is conditional formatting and how is it applied in Excel?', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>This feature <strong>changes the color of a cell automatically</strong> based on the data inside it.</p>
                <p><strong>Usage:</strong> To highlight trends or errors. For example, coloring all scores below 35 in Red.</p>
            </div>
        `)}
        ${section('How to Apply', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Select the cells</li>
                    <li>Go to the <strong>Home tab</strong> → Click <strong>Conditional Formatting</strong></li>
                    <li>Choose a rule (e.g., "Highlight Cells Rules" → "Greater Than")</li>
                    <li>Enter the value and choose a color</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM1Q6() {
    return `
        ${header('Q6. Creating PivotTable', 'Explain the steps to create a PivotTable in Excel', 'theory')}
        ${section('What is a PivotTable?', `
            <div class="info-box info-box-blue">
                <p>A PivotTable is a tool to <strong>summarize large amounts of data quickly</strong> without formulas.</p>
            </div>
        `)}
        ${section('Steps to Create', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Click anywhere inside your data</li>
                    <li>Go to the <strong>Insert tab</strong> → Click <strong>PivotTable</strong></li>
                    <li>Choose where to place it (New Worksheet or Existing Worksheet)</li>
                    <li>In the panel on the right, drag fields (columns) into areas: <strong>Rows, Columns, Values, and Filters</strong></li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM1Q7() {
    return `
        ${header('Q7. Linking Data Across Sheets', 'What is linking data across multiple sheets or workbooks?', 'theory')}
        ${section('Concept', `
            <div class="info-box info-box-blue">
                <p>Linking is the process of <strong>connecting cells</strong> so that if data changes in one sheet (the source), it <strong>automatically updates</strong> in another sheet (the destination).</p>
                <p>It creates a <strong>live connection</strong>.</p>
            </div>
        `)}
        ${section('Syntax Example', `
            <div class="info-box info-box-green">
                <p><code>=Sheet2!A1</code></p>
                <p>This formula in Sheet1 pulls data specifically from cell A1 in Sheet2.</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q8() {
    return `
        ${header('Q8. Remove Duplicates with Power Query', 'Write the steps to remove duplicates using Power Query', 'theory')}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Select your data table</li>
                    <li>Go to <strong>Data tab</strong> → Click <strong>From Table/Range</strong> (this opens Power Query)</li>
                    <li>In the Power Query Editor window, select the column(s) where you suspect duplicates</li>
                    <li>Right-click the column header</li>
                    <li>Select <strong>Remove Duplicates</strong></li>
                    <li>Click <strong>Close & Load</strong> to bring the clean unique list back to Excel</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM1Q9() {
    return `
        ${header('Q9. Macros in Excel', 'Define what a macro is and explain how to record it in Excel', 'theory')}
        ${section('What is a Macro?', `
            <div class="info-box info-box-blue">
                <p>A Macro is a <strong>recording of a series of steps or commands</strong>. You record it once, and then you can play it back to repeat the task automatically.</p>
            </div>
        `)}
        ${section('How to Record a Macro', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Go to the <strong>Developer tab</strong></li>
                    <li>Click <strong>Record Macro</strong>. Give it a name and a shortcut key (e.g., Ctrl + Shift + M)</li>
                    <li>Perform the actions you want to save (e.g., formatting a table)</li>
                    <li>Click <strong>Stop Recording</strong></li>
                </ol>
                <p>👉 Now, whenever you press the shortcut, Excel does those steps for you!</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q10() {
    return `
        ${header('Q10. Power Pivot', 'Mention the role of Power Pivot in data transformation', 'theory')}
        ${section('What is Power Pivot?', `
            <div class="info-box info-box-blue">
                <p>Power Pivot is an <strong>add-in for performing powerful data analysis</strong> and creating complex data models.</p>
            </div>
        `)}
        ${section('Key Features', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">🚀 Handles Huge Datasets</span>
                <p>It handles huge datasets (millions of rows) that normal Excel cannot handle well.</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">🔗 Relationships</span>
                <p>Unlike standard Excel, it allows you to create <strong>relationships between different tables</strong> (like a database) without using VLOOKUP.</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q11() {
    return `
        ${header('Q11. Excel Interface', 'Explain the Excel interface in detail with the functions of its key parts', 'theory')}
        ${section('Key Parts of Excel Interface', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">⚡ Quick Access Toolbar</span>
                <p>Small icons at the very top left (Save, Undo, Redo) for fast clicking.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">🎀 Ribbon</span>
                <p>The big strip at the top with buttons. It has tabs like Home, Insert, Data, etc.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">📝 Formula Bar</span>
                <p>The long white bar above the grid. It shows the contents or formula of the selected cell.</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">📍 Name Box</span>
                <p>The small box to the left of the Formula Bar. It shows the address of the selected cell (e.g., "A1").</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">📊 Grid (Cells)</span>
                <p>The main area. Columns are letters (A, B, C) and Rows are numbers (1, 2, 3).</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">📋 Status Bar</span>
                <p>The bar at the very bottom. It shows info like "Ready" or the sum of selected cells.</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q12() {
    return `
        ${header('Q12. Types of Charts in Excel', 'Describe different types of charts in Excel and their usage in data visualization', 'theory')}
        ${section('Chart Types', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">📊 Column/Bar Chart</span>
                <p>Uses bars to compare items</p>
                <p><strong>Example:</strong> Sales in Jan vs. Feb</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">📈 Line Chart</span>
                <p>Shows trends over time</p>
                <p><strong>Example:</strong> Stock prices going up and down</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">🥧 Pie Chart</span>
                <p>Shows parts of a whole</p>
                <p><strong>Example:</strong> Percentage of budget spent on food vs. rent</p>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">⚫ Scatter Plot</span>
                <p>Shows the relationship between two sets of numbers</p>
                <p><strong>Example:</strong> Height vs. Weight</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q13() {
    return `
        ${header('Q13. VLOOKUP Function', 'Explain how VLOOKUP works with its syntax, parameters, and example', 'calc')}
        ${section('What is VLOOKUP?', `
            <div class="info-box info-box-blue">
                <p>VLOOKUP searches for a value in the <strong>first column</strong> of a table and returns a value in the same row from another column.</p>
            </div>
        `)}
        ${section('Syntax', `
            <div class="formula-box">
                <code>=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</code>
            </div>
        `)}
        ${section('Parameters', `
            ${table(['Parameter', 'Description'], [
        ['Lookup_value', 'What ID or name are you looking for?'],
        ['Table_array', 'The range of the whole table'],
        ['Col_index_num', 'Which column number has the answer you want?'],
        ['Range_lookup', 'FALSE for exact match (usually used), TRUE for approximate']
    ])}
        `)}
        ${section('Example', `
            <div class="info-box info-box-green">
                <p><strong>Scenario:</strong> Looking for a student's name based on their Roll Number</p>
                <p><code>=VLOOKUP(101, A2:C10, 2, FALSE)</code></p>
                <p>This looks for Roll No 101 and gives the Name from column 2.</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q14() {
    return `
        ${header('Q14. Pivot Charts', 'Write a detailed note on Pivot Charts and how they are created from PivotTables', 'theory')}
        ${section('What are Pivot Charts?', `
            <div class="info-box info-box-blue">
                <p>These are <strong>charts connected to a PivotTable</strong>. If you filter or change the PivotTable, the chart updates automatically to match.</p>
            </div>
        `)}
        ${section('How to Create', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Click on your existing PivotTable</li>
                    <li>Go to the <strong>Insert tab</strong> (or Analyze tab)</li>
                    <li>Select <strong>PivotChart</strong></li>
                </ol>
                <p>👉 It works just like a normal chart but relies on the PivotTable data source.</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q15() {
    return `
        ${header('Q15. Consolidating Data', 'What is consolidating data across multiple sheets or workbooks? Explain the steps', 'theory')}
        ${section('What is Consolidation?', `
            <div class="info-box info-box-blue">
                <p>Consolidating is <strong>combining data from multiple separate sheets</strong> into one single summary sheet.</p>
                <p><strong>Example:</strong> Combining Jan, Feb, and Mar sales sheets into a "Q1 Total" sheet.</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Click on the cell where you want the result</li>
                    <li>Go to <strong>Data tab</strong> → Click <strong>Consolidate</strong></li>
                    <li>Select the Function (like SUM)</li>
                    <li>Browse and select the ranges from the different sheets you want to combine</li>
                    <li>Click <strong>OK</strong></li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM1Q16() {
    return `
        ${header('Q16. Importance of Cell Formatting', 'Explain the importance of cell formatting and how it helps in data presentation', 'theory')}
        ${section('Why is Cell Formatting Important?', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">✨ Clarity</span>
                <p>It distinguishes headers from data</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">👁️ Readability</span>
                <p>It makes large numbers easier to read (e.g., adding commas: 1,000,000)</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">🎨 Presentation</span>
                <p>It makes the report look professional</p>
            </div>
        `)}
        ${section('Example', `
            <div class="answer-box">
                <p>If you type "0.1", it might be confusing. Formatting it as <strong>"10%"</strong> makes the meaning clear immediately.</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q17() {
    return `
        ${header('Q17. Power Query for Data Cleaning', 'Describe how Power Query is used to clean and transform data', 'theory')}
        ${section('What is Power Query?', `
            <div class="info-box info-box-blue">
                <p>Power Query is an advanced tool used to <strong>import data from various sources, clean it, and transform it</strong> before bringing it into Excel.</p>
            </div>
        `)}
        ${section('Key Features', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">🧹 Cleaning Data</span>
                <p>It can remove extra spaces, split columns (e.g., splitting "FirstLast Name"), and change data types.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">🚫 Removing Nulls</span>
                <p>You can filter out empty rows easily to keep the dataset clean.</p>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">🔄 Transformation</span>
                <p>All changes are recorded as "steps," so you can <strong>re-run the cleanup on new data automatically</strong>.</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q18() {
    return `
        ${header('Q18. VBA in Excel', 'What is VBA and why is it used in Excel? Explain its applications with examples', 'theory')}
        ${section('What is VBA?', `
            <div class="info-box info-box-blue">
                <p><strong>VBA (Visual Basic for Applications)</strong> is the programming language used to write Macros.</p>
                <p>While a standard Macro records your clicks, VBA allows you to <strong>write code to do complex logic</strong>.</p>
            </div>
        `)}
        ${section('Why Use VBA?', `
            <div class="info-box info-box-green">
                <p>To automate tasks that are <strong>too complex for the simple macro recorder</strong>, or to create custom forms and buttons.</p>
            </div>
        `)}
        ${section('Example', `
            <div class="answer-box">
                <p>👉 Writing a script that checks a folder for new files, opens them, copies data, and emails a summary report to your boss every Monday morning.</p>
            </div>
        `)}
    `;
}

function renderDVTM1Q19() {
    return `
        ${header('Q19. Excel Best Practices', 'Discuss best practices in Excel for organization, error prevention, and optimization', 'theory')}
        ${section('Best Practices', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">📁 Organization</span>
                <ul>
                    <li>Use clear headers in the first row</li>
                    <li>Use separate sheets for raw data (inputs), calculations, and final dashboards (outputs)</li>
                </ul>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">🛡️ Error Prevention</span>
                <ul>
                    <li>Use <strong>Data Validation</strong> (Data tab) to restrict what users can type (e.g., forcing them to enter a date)</li>
                    <li>Use simple formulas where possible</li>
                </ul>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">⚡ Optimization</span>
                <ul>
                    <li>Avoid using too many volatile formulas (like TODAY or RAND) as they slow down the file</li>
                    <li>Remove unused empty rows/columns to keep the file size small</li>
                </ul>
            </div>
        `)}
    `;
}

function renderDVTM1Q20() {
    return `
        ${header('Q20. Linking and Consolidating Data', 'Explain how linking and consolidating data help in effective data management and reporting', 'theory')}
        ${section('Benefits', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">⏱️ Efficiency</span>
                <p>You don't have to copy-paste data manually, saving time.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">✅ Accuracy</span>
                <p>Reduces human errors because data updates automatically when the source changes.</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">📊 Management</span>
                <p>Helps in creating a <strong>"Master Report"</strong> from several smaller departmental reports, keeping data organized and up-to-date.</p>
            </div>
        `)}
    `;
}
