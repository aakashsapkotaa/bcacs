// DVT Model Questions - Exam Paper Format

// MODULE 1 - Excel Basics Model Questions
function renderDVTMO1Q1() {
    return `
        ${header('Q1(a). Cell Formatting in Excel', '5 Marks', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p><strong>Cell Formatting</strong> means changing how the data looks in a cell without changing the real value. It makes the spreadsheet look neat, attractive, and easy to read.</p>
            </div>
        `)}
        ${section('Types of Cell Formatting', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Number Formatting</span>
                <p>Changes how numbers look (e.g., adding currency symbols like ₹ or $, showing percentages %, or changing date formats).</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Font Formatting</span>
                <p>Changes the text style. You can make text <strong>Bold</strong>, <em>Italic</em>, or <u>Underlined</u>. You can also change the font size, type, and color.</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Alignment Formatting</span>
                <p>Changes where the text sits in the cell (Left, Right, Center). It also includes "Merge & Center" (combining cells) and "Wrap Text" (fitting long text in one box).</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Borders and Shading</span>
                <p>Adds lines (borders) around cells and changes the background color (shading) to highlight important data.</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">5. Cell Styles</span>
                <p>These are ready-made designs (like "Heading" or "Good/Bad") that you can apply quickly.</p>
            </div>
        `)}
    `;
}

function renderDVTMO1Q2() {
    return `
        ${header('Q1(b). Macros in Excel', '5 Marks', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>A <strong>Macro</strong> is a tool in Excel that records a set of actions or steps you perform. You can save these steps and run them later to automatically repeat the same task. It is used to save time on work you do often.</p>
            </div>
        `)}
        ${section('Steps to Record a Macro', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Open your Excel file</li>
                    <li>Go to the <strong>View tab</strong> (or Developer tab)</li>
                    <li>Click on <strong>Macros</strong> and select <strong>Record Macro</strong></li>
                    <li>A box will appear. Give your macro a <strong>Name</strong> (no spaces allowed). You can also choose a shortcut key (like Ctrl+Shift+M)</li>
                    <li>Click <strong>OK</strong>. Excel is now recording everything you do</li>
                    <li>Perform the task you want to automate (e.g., formatting a table or calculating a sum)</li>
                    <li>When finished, go back to <strong>View > Macros</strong> and click <strong>Stop Recording</strong></li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTMO1Q3() {
    return `
        ${header('Q1(c). Creating PivotTable', '10 Marks', 'theory')}
        ${section('What is PivotTable?', `
            <div class="info-box info-box-blue">
                <p>A <strong>PivotTable</strong> is a powerful tool to summarize and analyze large amounts of data quickly. It helps you find patterns or totals without writing formulas manually.</p>
            </div>
        `)}
        ${section('Steps to Create a PivotTable', `
            <div class="info-box info-box-green">
                <ol>
                    <li><strong>Select Data:</strong> Click anywhere inside your dataset (ensure your data has headers like Product, Region, Sales)</li>
                    <li><strong>Insert:</strong> Go to the Insert tab on the top ribbon</li>
                    <li><strong>Click PivotTable:</strong> Click the "PivotTable" button</li>
                    <li><strong>Create Box:</strong> A box will pop up asking where to put the table. Choose "New Worksheet" and click OK</li>
                    <li><strong>PivotTable Fields:</strong> On the right side, you will see a panel called "PivotTable Fields"</li>
                    <li><strong>Drag and Drop:</strong> Drag your columns into the four areas:
                        <ul>
                            <li><strong>Rows:</strong> (e.g., Drag "Region" here)</li>
                            <li><strong>Values:</strong> (e.g., Drag "Sales Amount" here to get the total)</li>
                            <li><strong>Columns:</strong> (Optional, e.g., Drag "Product" here)</li>
                            <li><strong>Filters:</strong> (Optional)</li>
                        </ul>
                    </li>
                </ol>
            </div>
        `)}
        ${section('Example', `
            <div class="info-box info-box-purple">
                <p>Imagine you have a list of sales:</p>
                <ul>
                    <li>Laptop - North - 50,000</li>
                    <li>Mobile - South - 30,000</li>
                    <li>Laptop - West - 40,000</li>
                </ul>
                <p>If you create a PivotTable and drag <strong>Region to Rows</strong> and <strong>Sales to Values</strong>, Excel will automatically show:</p>
                ${table(['Region', 'Sales'], [
        ['North', '50,000'],
        ['South', '30,000'],
        ['West', '40,000'],
        ['<strong>Grand Total</strong>', '<strong>1,20,000</strong>']
    ])}
            </div>
        `)}
    `;
}

function renderDVTMO1Q4() {
    return `
        ${header('Q2(a). Conditional Formatting', '6 Marks', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p><strong>Conditional Formatting</strong> is a feature that changes the color or style of a cell automatically based on a rule or condition. It helps you visually spot trends, such as high sales or failing grades.</p>
            </div>
        `)}
        ${section('How to Apply it', `
            <div class="info-box info-box-green">
                <ol>
                    <li><strong>Select Data:</strong> Highlight the cells you want to format (e.g., a column of marks)</li>
                    <li><strong>Home Tab:</strong> Go to the Home tab</li>
                    <li><strong>Click Conditional Formatting:</strong> Click the button in the Styles group</li>
                    <li><strong>Choose a Rule:</strong> Select a rule type. Common options are:
                        <ul>
                            <li><strong>Highlight Cell Rules:</strong> (e.g., "Greater Than 50" creates a rule to color numbers over 50)</li>
                            <li><strong>Top/Bottom Rules:</strong> (e.g., Highlight the "Top 10 items")</li>
                            <li><strong>Data Bars:</strong> Adds colored bars inside the cell based on the value</li>
                            <li><strong>Color Scales:</strong> Changes cell color from green (high) to red (low)</li>
                        </ul>
                    </li>
                    <li><strong>Finish:</strong> Click the rule you want, and Excel applies the formatting immediately</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTMO1Q5() {
    return `
        ${header('Q2(b). Data Types in Excel', '6 Marks', 'theory')}
        ${section('Data Types', `
            ${table(['Data Type', 'Description', 'Example'], [
        ['Number', 'General numeric values for math', '123, 45.67'],
        ['Currency', 'Used for money. It adds symbols like ₹ or $', '₹1,200.00'],
        ['Accounting', 'Similar to currency but aligns symbols neatly. Negatives in parentheses', '(₹500.00)'],
        ['Short Date', 'Shows the date simply', '30-07-2025'],
        ['Long Date', 'Shows the full date with the day name', 'Wednesday, July 30, 2025'],
        ['Time', 'Shows hours and minutes', '10:30 AM'],
        ['Percentage', 'Multiplies by 100 and adds a % sign', '0.75 becomes 75%']
    ])}
        `)}
    `;
}

function renderDVTMO1Q6() {
    return `
        ${header('Q2(c). IF Function and VLOOKUP Function', '8 Marks', 'calc')}
        ${section('1. IF Function', `
            <div class="info-box info-box-green">
                <p>The <strong>IF function</strong> checks a condition. If the condition is true, it gives one result; if false, it gives another.</p>
                <p><strong>Syntax:</strong> <code>=IF(Condition, Value_if_True, Value_if_False)</code></p>
                <p><strong>Example:</strong> Checking if a student passed.</p>
                <p><strong>Formula:</strong> <code>=IF(C2>=35, "Pass", "Fail")</code></p>
                <p><strong>Explanation:</strong> If the value in cell C2 is 35 or more, it shows "Pass". If less, it shows "Fail".</p>
            </div>
        `)}
        ${section('2. VLOOKUP Function', `
            <div class="info-box info-box-purple">
                <p><strong>VLOOKUP (Vertical Lookup)</strong> searches for a value in the first column of a table and returns a value from another column in the same row.</p>
                <p><strong>Syntax:</strong> <code>=VLOOKUP(lookup_value, table_array, column_index_num, [range_lookup])</code></p>
                <p><strong>Example:</strong> Finding a student's name using their Roll Number (101).</p>
                <p><strong>Formula:</strong> <code>=VLOOKUP(101, A2:C10, 2, FALSE)</code></p>
                <p><strong>Explanation:</strong> It looks for "101" in the first column of the range A2:C10. When it finds it, it returns the name from the 2nd column.</p>
            </div>
        `)}
    `;
}

// MODULE 2 - Tableau Basics Model Questions
function renderDVTMO2Q1() {
    return `
        ${header('Q3(a). Four Types of Joins in Tableau', '10 Marks', 'theory')}
        ${section('What is a Join?', `
            <div class="info-box info-box-blue">
                <p>A <strong>Join</strong> in Tableau combines data from two tables based on a common field (like Customer_ID).</p>
            </div>
        `)}
        ${section('1. Inner Join', `
            <div class="info-box info-box-green">
                <p><strong>Definition:</strong> Returns only the rows where there is a match in both tables.</p>
                <p><strong>Result:</strong> Only customers C001, C002, and C004 appear because they exist in both the Orders and Customers lists.</p>
                <p><strong>Data Example:</strong> O101, C001, Chair, Ravi Kumar</p>
            </div>
        `)}
        ${section('2. Left Join', `
            <div class="info-box info-box-purple">
                <p><strong>Definition:</strong> Returns all rows from the Left table (Orders) and matched rows from the Right table (Customers). Unmatched rows get NULL values.</p>
                <p><strong>Result:</strong> All Orders (O101-O105) are shown. Orders O103 (C003) and O105 (C005) will show "Null" for Customer Name.</p>
                <p><strong>Data Example:</strong> O103, C003, Laptop, Null (Name)</p>
            </div>
        `)}
        ${section('3. Right Join', `
            <div class="info-box info-box-yellow">
                <p><strong>Definition:</strong> Returns all rows from the Right table (Customers) and matched rows from the Left table (Orders).</p>
                <p><strong>Result:</strong> All Customers are shown. C006 (Priya) appears, but since she has no order, her Order columns will be Null.</p>
                <p><strong>Data Example:</strong> Null (Order), C006, Priya Singh</p>
            </div>
        `)}
        ${section('4. Full Outer Join', `
            <div class="info-box info-box-blue">
                <p><strong>Definition:</strong> Returns all rows from both tables. When there is no match, it fills the gaps with NULLs.</p>
                <p><strong>Result:</strong> Shows all orders and all customers, regardless of whether they match.</p>
            </div>
        `)}
    `;
}

function renderDVTMO2Q2() {
    return `
        ${header('Q3(b). Sales and Profit Calculated Field', '10 Marks', 'calc')}
        ${section('Scenario', `
            <div class="info-box info-box-blue">
                <p>You are analyzing retail data. Your dataset contains the Sales Price and the Cost Price for items, but it does not have a "Profit" column. You need to use a <strong>Calculated Field</strong> in Tableau to derive this insight.</p>
            </div>
        `)}
        ${section('Step 1: The Dataset', `
            <div class="info-box info-box-green">
                ${table(['Product', 'Sales Amount', 'Cost Amount'], [
        ['Laptop', '50,000', '40,000']
    ])}
            </div>
        `)}
        ${section('Step 2: Steps to Create Calculated Field', `
            <div class="info-box info-box-purple">
                <ol>
                    <li><strong>Navigate:</strong> Go to the Analysis menu or right-click in the Data Pane</li>
                    <li><strong>Select:</strong> Click Create Calculated Field</li>
                    <li><strong>Name:</strong> Name the field "Total Profit"</li>
                    <li><strong>Formula:</strong> Enter the formula:
                        ${codeBlock('[Sales Amount] - [Cost Amount]', 'sql')}
                    </li>
                    <li><strong>Apply:</strong> Click OK. The new field appears in the Measures pane</li>
                </ol>
            </div>
        `)}
        ${section('Step 3: Explanation', `
            <div class="answer-box">
                <p>By creating this field, you can now drag "Total Profit" to the rows shelf. Tableau will calculate <strong>50,000 - 40,000 = 10,000</strong> as the profit. This allows you to visualize which products are actually making money.</p>
            </div>
        `)}
    `;
}

function renderDVTMO2Q3() {
    return `
        ${header('Q4(a). What is Tableau? GDS vs Tableau', '7 Marks', 'theory')}
        ${section('What is Tableau?', `
            <div class="info-box info-box-blue">
                <p><strong>Tableau</strong> is a powerful data visualization tool used by analysts to visualize data and get clear opinions based on analysis. It connects to various data sources and allows users to create interactive dashboards with a simple drag-and-drop interface.</p>
            </div>
        `)}
        ${section('Difference: Google Data Studio vs Tableau', `
            ${table(['Feature', 'Google Data Studio (GDS)', 'Tableau'], [
        ['Introduction', 'Launched by Google in 2016', 'Launched by Salesforce/Tableau in 2013'],
        ['Cost', 'Free to use (requires Google account)', 'Desktop version is paid ($35-$70)'],
        ['Performance', 'Good for basic dashboards; limited tools', 'World-leading performance; handles complex data well'],
        ['Connections', 'Limited connections (mostly Google ecosystem)', 'Connects to 60+ data sources (SQL, Excel, Cloud)'],
        ['Security', 'Supports access sharing and password protection', 'Highly secure with granular row-level permissions']
    ])}
        `)}
    `;
}

function renderDVTMO2Q4() {
    return `
        ${header('Q4(b). Tableau Design Flow', '7 Marks', 'theory')}
        ${section('The Tableau Design Flow', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Connect to Data Source</span>
                <p>Open Tableau and connect to files (Excel, CSV) or Servers (SQL, Oracle).</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Build Data Views</span>
                <p>Drag fields from the Data Pane to Rows and Columns shelves to create basic charts (e.g., Bar charts, Line graphs).</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Enhance the Views</span>
                <p>Add filters, labels, colors, and tooltips to make the visualization informative and attractive.</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Create Worksheets</span>
                <p>A worksheet is where you analyze specific parts of data. You create multiple worksheets for different insights.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">5. Create and Organize Dashboards</span>
                <p>Combine multiple worksheets into a single Dashboard view to compare data side-by-side.</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">6. Create a Story</span>
                <p>Link worksheets and dashboards in a sequence to tell a data narrative step-by-step.</p>
            </div>
        `)}
    `;
}

function renderDVTMO2Q5() {
    return `
        ${header('Q4(c). Data Types in Tableau', '6 Marks', 'theory')}
        ${section('Tableau Data Types', `
            ${table(['Data Type', 'Icon', 'Description'], [
        ['String', 'Abc', 'Text values. (e.g., "Customer Name")'],
        ['Number', '#', 'Numeric values (integers or decimals) used for calculations. (e.g., Sales, Profit)'],
        ['Date & Date Time', '📅', 'Calendar dates and timestamps. (e.g., 01-Jan-2025)'],
        ['Boolean', 'T/F', 'Logical values representing True or False'],
        ['Geographic', '🌍', 'Values used for maps. (e.g., City, Country, Postal Code)'],
        ['Cluster/Mixed', '🔀', 'Columns that contain a mix of different data types']
    ])}
        `)}
    `;
}

// MODULE 3 - Visualization Model Questions
function renderDVTMO3Q1() {
    return `
        ${header('Q5(a). Operators in Tableau', '8 Marks', 'calc')}
        ${section('Arithmetic Operators (For math)', `
            ${table(['Operator', 'Description'], [
        ['+', 'Addition'],
        ['-', 'Subtraction'],
        ['*', 'Multiplication'],
        ['/', 'Division']
    ])}
        `)}
        ${section('Relational (Comparison) Operators', `
            <div class="info-box info-box-green">
                <p>To compare two values. Returns True or False.</p>
                ${table(['Operator', 'Description'], [
        ['>', 'Greater than'],
        ['<', 'Less than'],
        ['>=', 'Greater than or equal to'],
        ['<=', 'Less than or equal to'],
        ['=', 'Equal to'],
        ['!=', 'Not equal to']
    ])}
            </div>
        `)}
        ${section('Logical Operators', `
            <div class="info-box info-box-purple">
                <p>Combines multiple conditions.</p>
                ${table(['Operator', 'Description'], [
        ['AND', 'True if both conditions are true'],
        ['OR', 'True if at least one condition is true'],
        ['NOT', 'Reverses the result (True becomes False)']
    ])}
            </div>
        `)}
    `;
}

function renderDVTMO3Q2() {
    return `
        ${header('Q5(b). FIXED, INCLUDE, EXCLUDE LOD Expressions', '7 Marks', 'calc')}
        ${section('What is LOD?', `
            <div class="info-box info-box-blue">
                <p><strong>LOD (Level of Detail)</strong> expressions allow you to calculate values at a different level than what is shown in your main view.</p>
            </div>
        `)}
        ${section('FIXED', `
            <div class="info-box info-box-green">
                <p><strong>Definition:</strong> Calculates a value using only the specific dimensions you mention, ignoring other filters in the view.</p>
                ${codeBlock('{ FIXED [Region] : SUM([Sales]) }', 'sql')}
                <p><strong>Result:</strong> This calculates total sales per Region, even if your view is filtered by State or City. It is a "Fixed" number.</p>
            </div>
        `)}
        ${section('INCLUDE', `
            <div class="info-box info-box-purple">
                <p><strong>Definition:</strong> Calculates at a more detailed level than the view. It adds a dimension to the calculation.</p>
                ${codeBlock('{ INCLUDE [Customer ID] : AVG([Sales]) }', 'sql')}
                <p><strong>Result:</strong> Even if your view just shows "Region," this calculates the average sales per customer first, then averages that for the Region.</p>
            </div>
        `)}
        ${section('EXCLUDE', `
            <div class="info-box info-box-yellow">
                <p><strong>Definition:</strong> Calculates at a less detailed level than the view. It removes a dimension from the calculation.</p>
                ${codeBlock('{ EXCLUDE [Region] : SUM([Sales]) }', 'sql')}
                <p><strong>Result:</strong> If your view shows Sales by Region, this calculation ignores Region and gives the total Global Sales.</p>
            </div>
        `)}
    `;
}

function renderDVTMO3Q3() {
    return `
        ${header('Q5(c). Creating Calculated Fields', '5 Marks', 'calc')}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Connect to your data in Tableau</li>
                    <li>Go to the <strong>Analysis menu</strong> at the top OR click the small arrow next to the Search bar in the Data pane</li>
                    <li>Select <strong>Create Calculated Field</strong></li>
                    <li>A popup window opens. Enter a <strong>Name</strong> for the field (e.g., "Profit Ratio")</li>
                    <li>Type your <strong>Formula</strong> in the box</li>
                    <li>Click <strong>Apply</strong> and <strong>OK</strong></li>
                </ol>
            </div>
        `)}
        ${section('Example', `
            <div class="info-box info-box-purple">
                <p>Calculating a 10% tax on sales:</p>
                <p><strong>Name:</strong> Tax Amount</p>
                <p><strong>Formula:</strong> <code>[Sales] * 0.10</code></p>
            </div>
        `)}
    `;
}

function renderDVTMO3Q4() {
    return `
        ${header('Q6(a). ISNULL vs ZN vs IFNULL', '10 Marks', 'calc')}
        ${section('These functions handle missing (Null) data', ``)}
        ${section('ISNULL', `
            <div class="info-box info-box-green">
                <p><strong>Function:</strong> Checks if a cell is empty. Returns <strong>True</strong> if empty, <strong>False</strong> if it has data.</p>
                <p><strong>Example:</strong> <code>ISNULL([Profit])</code></p>
                <p><strong>Result:</strong> If Profit is missing, it says True.</p>
            </div>
        `)}
        ${section('ZN (Zero Null)', `
            <div class="info-box info-box-purple">
                <p><strong>Function:</strong> Checks a value. If it is a number, it keeps it. If it is Null (empty), it converts it to <strong>Zero (0)</strong>. This is useful for math so calculations don't break.</p>
                <p><strong>Example:</strong> <code>ZN([Profit])</code></p>
                <p><strong>Result:</strong> If Profit is null, the result is 0.</p>
            </div>
        `)}
        ${section('IFNULL', `
            <div class="info-box info-box-yellow">
                <p><strong>Function:</strong> Checks a value. If it is NOT null, it returns that value. If it IS null, it returns a second value that you specify.</p>
                <p><strong>Example 1:</strong> <code>IFNULL([Profit], 0)</code> → This does the exact same thing as ZN</p>
                <p><strong>Example 2:</strong> <code>IFNULL([Category], "Other")</code> → If category is missing, it writes "Other"</p>
            </div>
        `)}
    `;
}

function renderDVTMO3Q5() {
    return `
        ${header('Q6(b). ISNULL Check & CASE Expression', '10 Marks', 'calc')}
        ${section('Part 1: Check for Null Profit', `
            <div class="info-box info-box-green">
                <p>We need a formula that returns "Missing" if null, and "Recorded" if not.</p>
                <p><strong>Formula:</strong></p>
                ${codeBlock('IF ISNULL([Profit]) THEN "Missing"\nELSE "Recorded"\nEND', 'sql')}
            </div>
        `)}
        ${section('Part 2: CASE Expression for Category', `
            <div class="info-box info-box-purple">
                <p>We need to rename categories based on the question.</p>
                <p><strong>Formula:</strong></p>
                ${codeBlock("CASE [Category]\n  WHEN 'Furniture' THEN 'Furnishing'\n  WHEN 'Technology' THEN 'Tech Items'\n  WHEN 'Office Supplies' THEN 'Office Use'\nEND", 'sql')}
            </div>
        `)}
    `;
}

// MODULE 4 - Sort and Filter Model Questions
function renderDVTMO4Q1() {
    return `
        ${header('Q7(a). Groups, Bins, and Hierarchies', '10 Marks', 'theory')}
        ${section('Comparison', `
            ${table(['Feature', 'Groups', 'Bins', 'Hierarchies'], [
        ['Definition', 'Combines specific items into one bigger category manually', 'Creates equal-sized intervals (buckets) for numerical data', 'Arranges data in levels (Parent to Child) for drilling down'],
        ['Used For', 'Simplifying data. (e.g., combining "Apple", "Banana" into "Fruit")', 'Creating Histograms. (e.g., grouping Age into 0-10, 11-20)', 'Drilling down data. (e.g., Year → Quarter → Month)'],
        ['Data Type', 'Works best on Dimensions (Text)', 'Works only on Measures (Numbers)', 'Works on related Dimensions'],
        ['How to Create', 'Select items → Right Click → Group', 'Right Click Measure → Create → Bins', 'Drag one field on top of another field'],
        ['Example', 'Grouping "India", "China", "Japan" as "Asia"', 'Grouping Sales into buckets of 1000 (0-1000, 1000-2000)', 'Location: Country → State → City']
    ])}
        `)}
    `;
}

function renderDVTMO4Q2() {
    return `
        ${header('Q7(b). Conditional Filters - Amount > 500', '10 Marks', 'theory')}
        ${section('What is Conditional Filtering?', `
            <div class="info-box info-box-blue">
                <p><strong>Conditional Filtering</strong> allows you to filter data based on a rule (like "Amount > 500") rather than manually selecting items from a list.</p>
            </div>
        `)}
        ${section('Steps to Apply', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Drag the <strong>Item</strong> field to the Filters shelf</li>
                    <li>A dialog box appears. Click the <strong>Condition tab</strong></li>
                    <li>Select <strong>By Field</strong></li>
                    <li>Choose the field <strong>Amount</strong></li>
                    <li>Select <strong>Sum</strong> (aggregation) and set the operator to <strong>> (Greater than)</strong></li>
                    <li>Type <strong>500</strong> in the value box</li>
                    <li>Click <strong>OK</strong></li>
                </ol>
            </div>
        `)}
        ${section('Applying to Dataset', `
            <div class="info-box info-box-purple">
                <p><strong>Dataset:</strong></p>
                ${table(['Item', 'Amount', 'Filtered?'], [
        ['Desk', '450', '❌ Filtered out'],
        ['Pen', '90', '❌ Filtered out'],
        ['Monitor', '800', '✅ Kept'],
        ['Phone', '700', '✅ Kept'],
        ['Lamp', '150', '❌ Filtered out']
    ])}
                <p><strong>Resulting Items Displayed:</strong> Monitor (800), Phone (700)</p>
            </div>
        `)}
    `;
}

function renderDVTMO4Q3() {
    return `
        ${header('Q8(a). Filtering in Tableau - Types', '10 Marks', 'theory')}
        ${section('What is Filtering?', `
            <div class="info-box info-box-blue">
                <p><strong>Filtering</strong> means restricting the data to show only what you want to see (e.g., showing only Sales from 2024).</p>
            </div>
        `)}
        ${section('Types of Filters', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">Quick Filter</span>
                <p>Allows users to change the filter directly on the dashboard (using checkboxes or dropdowns).</p>
                <p><strong>Step:</strong> Right-click a field in the Filters shelf and select <strong>Show Filter</strong>.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">Context Filter</span>
                <p>This is a "Primary" filter. It filters the data first before any other filters run.</p>
                <p><strong>Step:</strong> Add a filter, right-click it on the shelf, and select <strong>Add to Context</strong>. (It turns grey).</p>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">Date Filter</span>
                <p>Specific to dates. You can filter by Range (Jan to March), Year, or Relative Date (Last 3 days).</p>
                <p><strong>Step:</strong> Drag a Date field to Filters and choose "Range of Dates".</p>
            </div>
        `)}
    `;
}

function renderDVTMO4Q4() {
    return `
        ${header('Q8(b). Sorting by Field', '5 Marks', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p><strong>Sorting by Field</strong> means arranging your data (like bars in a chart) based on the values of a measure, rather than alphabetically.</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Click the drop-down arrow on a Dimension (e.g., Category) in the Rows/Columns shelf</li>
                    <li>Click <strong>Sort</strong></li>
                    <li>Change "Sort By" to <strong>Field</strong></li>
                    <li>Select the field (e.g., Sales)</li>
                    <li>Choose Order: <strong>Descending</strong> (Highest to Lowest)</li>
                </ol>
            </div>
        `)}
        ${section('Result', `
            <div class="answer-box">
                <p>The category with the highest sales will appear at the top.</p>
            </div>
        `)}
    `;
}

function renderDVTMO4Q5() {
    return `
        ${header('Q8(c). Sets vs Combined Sets', '5 Marks', 'theory')}
        ${section('Set', `
            <div class="info-box info-box-green">
                <p>A <strong>Set</strong> is a custom group or subset of data based on a condition.</p>
                <p><strong>Example:</strong> A set of "Top 10 Customers". It only contains those 10 specific people.</p>
            </div>
        `)}
        ${section('Combined Set', `
            <div class="info-box info-box-purple">
                <p>A <strong>Combined Set</strong> is a new set created by merging two existing sets using logic.</p>
                <p><strong>Example:</strong> If Set A is "Top Customers" and Set B is "Customers from North", a Combined Set can show <strong>"Top Customers who are ALSO from North"</strong> (Intersection/AND).</p>
            </div>
        `)}
    `;
}

// MODULE 5 - Dashboards & Advanced Charts Model Questions
function renderDVTMO5Q1() {
    return `
        ${header('Q9(a). Traditional Funnel vs Tableau Funnel', '10 Marks', 'theory')}
        ${section('Traditional Funnel Chart', `
            <div class="info-box info-box-green">
                <p><strong>Shape:</strong> It looks like a smooth inverted triangle or a real funnel.</p>
                <p><strong>Alignment:</strong> It is perfectly centered.</p>
                <p><strong>Usage:</strong> It is very visual and easy to understand instantly. It emphasizes the "funnel" shape.</p>
                <p><strong>Construction:</strong> Often requires complex calculated fields in Tableau to create the "centered" look because Tableau naturally aligns bars to the left.</p>
            </div>
        `)}
        ${section('Tableau Standard Funnel (Stepped)', `
            <div class="info-box info-box-purple">
                <p><strong>Shape:</strong> It looks like a Bar Chart sorted in descending order.</p>
                <p><strong>Alignment:</strong> Usually left-aligned (unless modified). It looks like steps going down.</p>
                <p><strong>Usage:</strong> Better for reading exact values and comparing the length of bars.</p>
                <p><strong>Construction:</strong> Very easy. Just drag Dimension to Rows, Measure to Size, and sort Descending.</p>
            </div>
        `)}
    `;
}

function renderDVTMO5Q2() {
    return `
        ${header('Q9(b). Bar Chart, Line Chart, Dual Line Chart', '10 Marks', 'theory')}
        ${section('Bar Chart', `
            <div class="info-box info-box-green">
                <p><strong>Concept:</strong> Uses rectangular bars to compare categories. The length of the bar shows the value.</p>
                <p><strong>Best For:</strong> Comparing items (e.g., Sales by Product).</p>
            </div>
        `)}
        ${section('Line Chart', `
            <div class="info-box info-box-purple">
                <p><strong>Concept:</strong> Connects data points with a line to show movement.</p>
                <p><strong>Best For:</strong> Showing trends over time (e.g., Sales growth over 12 months).</p>
            </div>
        `)}
        ${section('Dual Line Chart (Dual Axis)', `
            <div class="info-box info-box-yellow">
                <p><strong>Concept:</strong> Combines TWO line charts on the same graph. One line might use the left axis (e.g., Sales) and the other line uses the right axis (e.g., Profit).</p>
                <p><strong>Best For:</strong> Comparing two different measures to see if they follow the same trend (e.g., "Did Profit go up when Sales went up?").</p>
            </div>
        `)}
    `;
}

function renderDVTMO5Q3() {
    return `
        ${header('Q10(a). Tiled vs Floating Objects', '10 Marks', 'theory')}
        ${section('Comparison', `
            ${table(['Feature', 'Tiled Objects', 'Floating Objects'], [
        ['Behavior', 'Snap into a grid layout automatically. They do not overlap.', 'Can be placed anywhere, pixel-perfect. They can overlap other objects.'],
        ['Resizing', 'If you resize one tiled object, the others resize automatically to fit the space.', 'Resizing one does not affect the others.'],
        ['Best For', 'Clean, organized dashboards where everything is aligned perfectly.', 'Placing a logo on top of a chart, or placing a small legend over a map.'],
        ['Example', 'A Dashboard split into 4 equal quarters (Top-Left, Top-Right, etc.).', 'A company Logo placed on the top-right corner, hovering over the background.']
    ])}
        `)}
    `;
}

function renderDVTMO5Q4() {
    return `
        ${header('Q10(b). Dashboard Level Filters', '10 Marks', 'theory')}
        ${section('Process', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Add Filter</span>
                <p>Click on a chart in your Dashboard. Click the small drop-down arrow > <strong>Filters</strong> > Select the field (e.g., Region). The filter appears on the dashboard.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Apply to All</span>
                <p>By default, the filter only changes one chart. To make it control the whole dashboard:</p>
                <ul>
                    <li>Click the drop-down on the Filter card</li>
                    <li>Select <strong>Apply to Worksheets > All Using Related Data Sources</strong></li>
                </ul>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">3. Manage</span>
                <p>You can change the style (Radio buttons, Dropdown, Slider) to make it user-friendly.</p>
            </div>
        `)}
        ${section('Business Scenario Example', `
            <div class="answer-box">
                <p><strong>Scenario:</strong> A National Sales Manager looks at a dashboard showing "Sales Map", "Profit Trend", and "Top Products".</p>
                <p><strong>Action:</strong> The manager selects "South" in the Region Filter.</p>
                <p><strong>Result:</strong> Because the filter is applied to the whole dashboard, the Map zooms into the South, the Trend line changes to show only South data, and the Product list updates to show what sells best in the South. This helps the manager analyze that specific region quickly.</p>
            </div>
        `)}
    `;
}
