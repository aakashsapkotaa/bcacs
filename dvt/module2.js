// DVT Module 2: Data Science & Tableau Basics

function renderDVTM2Q1() {
    return `
        ${header('Q1. What is Data Science?', 'What is Data Science and what are its key steps?', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p><strong>Data Science</strong> is the study of data. It involves using scientific methods to <strong>extract knowledge and insights</strong> from messy data.</p>
                <p>It combines <strong>math, statistics, and computer science</strong>.</p>
            </div>
        `)}
        ${section('Key Steps', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Capture</span>
                <p>Gathering raw data (from surveys, sensors, logs)</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Process</span>
                <p>Cleaning the data (removing errors, sorting)</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Analyze</span>
                <p>Looking for patterns and trends using models</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Communicate</span>
                <p>Visualizing results (charts/graphs) to make decisions</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">5. Maintain</span>
                <p>Storing data for future use</p>
            </div>
        `)}
    `;
}

function renderDVTM2Q2() {
    return `
        ${header('Q2. What is Tableau?', 'Define Tableau and its purpose', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p><strong>Tableau</strong> is a powerful <strong>Data Visualization and Business Intelligence (BI)</strong> tool.</p>
            </div>
        `)}
        ${section('Key Features', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">📊 Visualization</span>
                <p>It takes raw data (rows and columns) and turns it into understandable visual format (charts, graphs, maps).</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">👥 Accessibility</span>
                <p>It helps <strong>non-technical people understand data quickly</strong> without writing code.</p>
            </div>
        `)}
    `;
}

function renderDVTM2Q3() {
    return `
        ${header('Q3. Tableau Data Terminology', 'List the Tableau data terminology', 'theory')}
        ${section('Key Terms', `
            ${table(['Term', 'Description'], [
        ['Workbook', 'The entire Tableau file (like an Excel file)'],
        ['Worksheet', 'A single tab where you create one chart'],
        ['Dashboard', 'A collection of several worksheets shown on one screen'],
        ['Story', 'A sequence of worksheets or dashboards that tells a narrative'],
        ['Dimensions', 'Fields containing text or dates (Qualitative data). Example: Names, Cities'],
        ['Measures', 'Fields containing numbers (Quantitative data). Example: Sales, Profit']
    ])}
        `)}
    `;
}

function renderDVTM2Q4() {
    return `
        ${header('Q4. Google Data Studio vs Tableau', 'What is the difference between Google Data Studio and Tableau?', 'theory')}
        ${section('Comparison', `
            ${table(['Feature', 'Google Data Studio', 'Tableau'], [
        ['Cost', 'Completely free', 'Paid professional software'],
        ['Platform', 'Web-based', 'Desktop software'],
        ['Best For', 'Basic reporting, Google integration', 'Deep analysis, large datasets'],
        ['Complexity', 'Less powerful for complex calculations', 'Extremely powerful'],
        ['Data Sources', 'Google products focus', 'Almost any data source (offline/online)']
    ])}
        `)}
    `;
}

function renderDVTM2Q5() {
    return `
        ${header('Q5. Tableau Design Flow', 'Explain the Tableau design flow', 'theory')}
        ${section('Workflow Steps', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Connect</span>
                <p>Open Tableau and connect to your data source (Excel, SQL, etc.)</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Analyze</span>
                <p>Drag and drop fields to explore data on a Worksheet</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Visualize</span>
                <p>Create charts and format them (colors, labels)</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Construct</span>
                <p>Combine charts into a Dashboard or Story</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">5. Share</span>
                <p>Publish the workbook so others can see it</p>
            </div>
        `)}
    `;
}

function renderDVTM2Q6() {
    return `
        ${header('Q6. Tableau Data Types', 'Explain the data types in Tableau', 'theory')}
        ${section('Data Types', `
            ${table(['Type', 'Icon', 'Description'], [
        ['String (Text)', 'Abc', 'Letters and words'],
        ['Number (whole)', '#', 'Integers like 1, 10, 500'],
        ['Number (decimal)', '#', 'Floating numbers like 12.5, 3.14'],
        ['Date', '📅', 'Dates only, e.g., Jan 1, 2023'],
        ['Date & Time', '📅⏰', 'Date plus specific time'],
        ['Boolean', 'T|F', 'True or False'],
        ['Geographic', '🌍', 'Locations like Country or City']
    ])}
        `)}
    `;
}

function renderDVTM2Q7() {
    return `
        ${header('Q7. Navigation in Tableau', 'List out the navigation options in Tableau', 'theory')}
        ${section('Navigation Areas', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">🏠 Start Page</span>
                <p>The first screen where you open recent files or connect to data</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">📊 Data Source Page</span>
                <p>Where you see your raw data and join tables</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">🎨 Workspace (Sheet View)</span>
                <p>The main area with Shelves (Rows/Columns), Cards (Marks/Filters), and the Canvas</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">📑 Tabs (Bottom)</span>
                <p>Navigation between Sheets, Dashboards, and Stories</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">🔧 Toolbar</span>
                <p>Buttons at the top for Save, Undo, Sort, etc.</p>
            </div>
        `)}
    `;
}

function renderDVTM2Q8() {
    return `
        ${header('Q8. Connecting Tableau to Excel', 'Explain the steps to connect Tableau to an Excel data source', 'theory')}
        ${section('Steps to Connect Excel', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Open Tableau Desktop</li>
                    <li>On the left side under "Connect", click on <strong>Microsoft Excel</strong></li>
                    <li>A file window opens. Select your <code>.xlsx</code> file</li>
                    <li>Click <strong>Open</strong></li>
                </ol>
            </div>
        `)}
        ${section('Other Data Sources', `
            <div class="info-box info-box-blue">
                <p><strong>Three other common data sources:</strong></p>
                <ul>
                    <li><strong>Text File:</strong> .csv or .txt files</li>
                    <li><strong>PDF File:</strong> Extracting tables from a PDF document</li>
                    <li><strong>MySQL / SQL Server:</strong> Connecting directly to a database server</li>
                </ul>
            </div>
        `)}
    `;
}

function renderDVTM2Q9() {
    return `
        ${header('Q9. Changing Data Types in Tableau', 'How do you change the data types in Tableau? Explain all three ways', 'theory')}
        ${section('Why Change Data Types?', `
            <div class="info-box info-box-blue">
                <p>Sometimes Tableau guesses wrong (e.g., treating a Zip Code as a Number instead of Geography).</p>
            </div>
        `)}
        ${section('Three Methods', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">Way 1: Data Source Page</span>
                <p>Click the icon above the column header. Select the new type from the list.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">Way 2: Data Pane (Sidebar)</span>
                <p>Click the icon next to the field name in the left sidebar. Select the new type.</p>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">Way 3: Right-Click</span>
                <p>Right-click the field name in the Data Pane → Go to <strong>Change Data Type</strong> → Select the type.</p>
            </div>
        `)}
    `;
}

function renderDVTM2Q10() {
    return `
        ${header('Q10. Types of Joins in Tableau', 'Explain the four types of joins available in Tableau', 'theory')}
        ${section('What are Joins?', `
            <div class="info-box info-box-blue">
                <p>Joins combine two tables based on a common column (like ID).</p>
            </div>
        `)}
        ${section('Four Types of Joins', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Inner Join</span>
                <p>Keeps <strong>only rows that match in both tables</strong> (Common data only)</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Left Join</span>
                <p>Keeps <strong>all rows from the Left table</strong>, and only matching rows from the Right. (If no match, shows Null)</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Right Join</span>
                <p>Keeps <strong>all rows from the Right table</strong>, and only matching rows from the Left</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">4. Full Outer Join</span>
                <p>Keeps <strong>all rows from both tables</strong>. If they match, they join; if not, they appear with Nulls</p>
            </div>
        `)}
    `;
}
