// DVT Module 3: Visualization & Calculations

function renderDVTM3Q1() {
    return `
        ${header('Q1. Visualization Steps in Tableau', 'Explain the steps for visualization in Tableau', 'theory')}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li><strong>Connect to Data:</strong> Open Tableau and connect to your file (like Excel)</li>
                    <li><strong>Go to Worksheet:</strong> Click on "Sheet 1" at the bottom</li>
                    <li><strong>Drag Dimensions:</strong> Drag a text field (like "Category") from the left panel to the Columns shelf</li>
                    <li><strong>Drag Measures:</strong> Drag a number field (like "Sales") from the left panel to the Rows shelf</li>
                    <li><strong>View Chart:</strong> Tableau automatically creates a bar chart. You can change it using the "Show Me" panel on the right</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM3Q2() {
    return `
        ${header('Q2. Changing Order in Visualization', 'Explain the steps to change the order in visualization', 'theory')}
        ${section('What is Sorting?', `
            <div class="info-box info-box-blue">
                <p>Changing the order means <strong>sorting the data</strong> (e.g., from highest sales to lowest).</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Hover your mouse over the axis of the chart (e.g., the Sales axis)</li>
                    <li>You will see a small Sort icon (looks like three bars)</li>
                    <li>Click once for <strong>Descending</strong> (High to Low)</li>
                    <li>Click again for <strong>Ascending</strong> (Low to High)</li>
                </ol>
                <p><strong>Alternative:</strong> Right-click the field in the Rows/Columns shelf → Click Sort → Choose "Ascending" or "Descending"</p>
            </div>
        `)}
    `;
}

function renderDVTM3Q3() {
    return `
        ${header('Q3. Changing Summary in Tableau', 'Explain the steps to change the summary in Tableau', 'theory')}
        ${section('Default Behavior', `
            <div class="info-box info-box-blue">
                <p>By default, Tableau <strong>sums up numbers (SUM)</strong>. You might want the Average or Count instead.</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Go to the Measure field (green pill) in the Rows or Columns shelf</li>
                    <li>Right-click on the field (e.g., SUM(Sales))</li>
                    <li>Hover over <strong>Measure (Sum)</strong></li>
                    <li>Select a different summary type: <strong>Average, Median, Count, or Minimum</strong></li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM3Q4() {
    return `
        ${header('Q4. Operators in Tableau', 'List out the operators in Tableau in detail', 'calc')}
        ${section('Arithmetic Operators', `
            <div class="info-box info-box-green">
                <p>Used for math calculations:</p>
                ${table(['Operator', 'Description'], [
        ['+', 'Add'],
        ['-', 'Subtract'],
        ['*', 'Multiply'],
        ['/', 'Divide']
    ])}
            </div>
        `)}
        ${section('Comparison Operators', `
            <div class="info-box info-box-purple">
                <p>Used to compare two values (result is True or False):</p>
                ${table(['Operator', 'Description'], [
        ['=', 'Equal to'],
        ['>', 'Greater than'],
        ['<', 'Less than'],
        ['>=', 'Greater or equal'],
        ['<>', 'Not equal']
    ])}
            </div>
        `)}
        ${section('Logical Operators', `
            <div class="info-box info-box-yellow">
                <p>Used to combine conditions:</p>
                ${table(['Operator', 'Description'], [
        ['AND', 'Both must be true'],
        ['OR', 'At least one is true'],
        ['NOT', 'Reverses the result']
    ])}
            </div>
        `)}
    `;
}

function renderDVTM3Q5() {
    return `
        ${header('Q5. Logical Functions in Tableau', 'Explain the different types of logical functions in Tableau', 'calc')}
        ${section('Logical Functions', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">IF</span>
                <p>Checks a condition and returns different values based on the result</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">IIF</span>
                <p>A short version of IF (checks condition, gives value if true, gives value if false)</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">CASE</span>
                <p>Checks one value against a list of possible matches</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">ISNULL</span>
                <p>Checks if a field is empty</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">ZN</span>
                <p>Returns zero if the value is null, otherwise returns the value</p>
            </div>
        `)}
    `;
}

function renderDVTM3Q6() {
    return `
        ${header('Q6. IF-END, IF-ELSE-END, IF-ELSEIF-ELSE-END', 'Create a data source and apply conditional logic', 'calc')}
        ${section('Scenario: Grading Students', `
            <div class="info-box info-box-blue">
                <p>We are grading students based on their <strong>Score</strong>.</p>
            </div>
        `)}
        ${section('IF-END (Simple Check)', `
            <div class="info-box info-box-green">
                <p><strong>Only cares about one specific thing:</strong></p>
                ${codeBlock('IF [Score] > 90 THEN "Top Student" END', 'sql')}
                <p>👉 <strong>Result:</strong> Only students with >90 get a label. Everyone else gets nothing (Null).</p>
            </div>
        `)}
        ${section('IF-ELSE-END (Two Options)', `
            <div class="info-box info-box-purple">
                <p><strong>Pass or Fail:</strong></p>
                ${codeBlock('IF [Score] >= 50 THEN "Pass" ELSE "Fail" END', 'sql')}
                <p>👉 <strong>Result:</strong> Everyone gets a label. If 50 or more, "Pass". If less than 50, "Fail".</p>
            </div>
        `)}
        ${section('IF-ELSEIF-ELSE-END (Multiple Options)', `
            <div class="info-box info-box-yellow">
                <p><strong>Grading A, B, or C:</strong></p>
                ${codeBlock('IF [Score] >= 90 THEN "Grade A"\nELSEIF [Score] >= 75 THEN "Grade B"\nELSE "Grade C"\nEND', 'sql')}
                <p>👉 <strong>Result:</strong> Checks 90 first. If not, checks 75. If neither, gives "Grade C".</p>
            </div>
        `)}
    `;
}

function renderDVTM3Q7() {
    return `
        ${header('Q7. Quick Table Calculations', 'What are Quick Table Calculations? Explain the steps', 'calc')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>These are <strong>pre-made calculations</strong> that allow you to analyze data quickly without writing formulas.</p>
                <p><strong>Examples:</strong> "Percent of Total", "Running Total"</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Create a visual (e.g., Sales by Month)</li>
                    <li>Right-click on the Measure field (green pill) in the view (e.g., SUM(Sales))</li>
                    <li>Select <strong>Quick Table Calculation</strong></li>
                    <li>Choose an option like <strong>Running Total</strong> or <strong>Percent of Total</strong></li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM3Q8() {
    return `
        ${header('Q8. LOD Expressions: FIXED, INCLUDE, EXCLUDE', 'Explain the differences between FIXED, INCLUDE, and EXCLUDE LOD expressions', 'calc')}
        ${section('What is LOD?', `
            <div class="info-box info-box-blue">
                <p><strong>LOD (Level of Detail)</strong> expressions let you calculate numbers at a different level than your main chart.</p>
            </div>
        `)}
        ${section('FIXED', `
            <div class="info-box info-box-green">
                <p><strong>Ignores</strong> the chart's filters/view and looks only at what you specify.</p>
                ${codeBlock('{ FIXED [Region] : SUM([Sales]) }', 'sql')}
                <p>👉 Calculates total sales per Region, even if your chart is showing sales by City.</p>
            </div>
        `)}
        ${section('INCLUDE', `
            <div class="info-box info-box-purple">
                <p><strong>Adds more detail</strong> to the calculation than what is in the view.</p>
                ${codeBlock('{ INCLUDE [City] : AVG([Sales]) }', 'sql')}
                <p>👉 Calculates average sales including City details, even if only Region is in the view.</p>
            </div>
        `)}
        ${section('EXCLUDE', `
            <div class="info-box info-box-yellow">
                <p><strong>Removes detail</strong> from the calculation that is present in the view.</p>
                ${codeBlock('{ EXCLUDE [Region] : SUM([Sales]) }', 'sql')}
                <p>👉 Calculates total sales ignoring the Region, even if Region is shown in the chart.</p>
            </div>
        `)}
    `;
}

function renderDVTM3Q9() {
    return `
        ${header('Q9. SUM, AVG, and COUNT Functions', 'Explain the use of SUM, AVG, and COUNT functions with examples', 'calc')}
        ${section('Functions', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">SUM</span>
                <p>Adds all values together</p>
                <p><strong>Example:</strong> <code>SUM([Profit])</code> gives the total profit of the company</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">AVG</span>
                <p>Finds the average value</p>
                <p><strong>Example:</strong> <code>AVG([Discount])</code> gives the average discount given to customers</p>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">COUNT</span>
                <p>Counts how many rows/items there are</p>
                <p><strong>Example:</strong> <code>COUNT([OrderID])</code> tells you how many orders were placed</p>
            </div>
        `)}
    `;
}

function renderDVTM3Q10() {
    return `
        ${header('Q10. ISNULL Calculated Field', 'Write a calculated field to check if Profit is null', 'calc')}
        ${section('Task', `
            <div class="info-box info-box-blue">
                <p>Check if Profit is null. If yes, return "Missing", else "Recorded". Show as a text table.</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <p><strong>1. Create Calculated Field</strong> named "Profit Status"</p>
                ${codeBlock('IF ISNULL([Profit]) THEN "Missing"\nELSE "Recorded"\nEND', 'sql')}
                <p><strong>2.</strong> Drag "Profit Status" to Rows to see the table</p>
            </div>
        `)}
    `;
}

function renderDVTM3Q11() {
    return `
        ${header('Q11. CASE Expression for Classification', 'Write a CASE expression to classify Category', 'calc')}
        ${section('Task', `
            <div class="info-box info-box-blue">
                <p>Classify Category as Furnishing, Tech Items, and Office Use.</p>
            </div>
        `)}
        ${section('Formula', `
            <div class="info-box info-box-green">
                ${codeBlock('CASE [Category]\n  WHEN "Furniture" THEN "Furnishing"\n  WHEN "Technology" THEN "Tech Items"\n  WHEN "Office Supplies" THEN "Office Use"\n  ELSE "Other"\nEND', 'sql')}
            </div>
        `)}
    `;
}

function renderDVTM3Q12() {
    return `
        ${header('Q12. Creating Calculated Fields', 'Explain the steps to create a calculated field in Tableau', 'calc')}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Click the small down arrow at the top of the Data pane (left side)</li>
                    <li>Select <strong>Create Calculated Field</strong></li>
                    <li>Name the field (e.g., "Profit Ratio")</li>
                    <li>Type the formula. Example: <code>SUM([Profit]) / SUM([Sales])</code></li>
                    <li>Click <strong>OK</strong>. The new field appears in your data list to use.</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM3Q13() {
    return `
        ${header('Q13. Aggregate Functions', 'Explain the different types of aggregate functions', 'calc')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>Aggregate functions take many values and return a <strong>single summary number</strong>.</p>
            </div>
        `)}
        ${section('Types', `
            ${table(['Function', 'Description'], [
        ['SUM', 'Total of values'],
        ['AVG', 'Average of values'],
        ['MIN', 'Smallest value'],
        ['MAX', 'Largest value'],
        ['COUNT', 'Number of records'],
        ['COUNTD', 'Count Distinct (number of unique items)']
    ])}
        `)}
    `;
}

function renderDVTM3Q14() {
    return `
        ${header('Q14. Highlight Table in Tableau', 'What is a Highlight Table? Describe how it is created', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>A Highlight Table is a <strong>text table where the background color of the cells changes based on the value</strong> (like a heat map with numbers).</p>
            </div>
        `)}
        ${section('Steps to Create', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Drag a dimension (e.g., Region) to <strong>Rows</strong></li>
                    <li>Drag another dimension (e.g., Category) to <strong>Columns</strong></li>
                    <li>Drag a measure (e.g., Sales) to <strong>Text</strong> (creates a plain table)</li>
                    <li>Drag the same measure (Sales) to <strong>Color</strong></li>
                    <li>Change the "Marks" card type from Automatic to <strong>Square</strong></li>
                </ol>
                <p>👉 The cells will fill with color based on values!</p>
            </div>
        `)}
    `;
}

function renderDVTM3Q15() {
    return `
        ${header('Q15. CASE Function Syntax', 'Explain the syntax and working of the CASE function in Tableau', 'calc')}
        ${section('When to Use', `
            <div class="info-box info-box-blue">
                <p>The CASE function is used when you want to compare one field against a <strong>specific list of values</strong>. It is often cleaner than using many IF-ELSEIF statements.</p>
            </div>
        `)}
        ${section('Syntax', `
            <div class="info-box info-box-green">
                ${codeBlock('CASE [Field Name]\n  WHEN "Value1" THEN "Result1"\n  WHEN "Value2" THEN "Result2"\n  ELSE "Default Result"\nEND', 'sql')}
            </div>
        `)}
        ${section('Working', `
            <div class="answer-box">
                <p>It looks at <code>[Field Name]</code>. If it matches "Value1", it outputs "Result1". If it matches "Value2", it outputs "Result2". Otherwise, it returns the default.</p>
            </div>
        `)}
    `;
}

function renderDVTM3Q16() {
    return `
        ${header('Q16. ISNULL vs ZN vs IFNULL', 'What is the difference between ISNULL, ZN, and IFNULL?', 'calc')}
        ${section('Comparison', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">ISNULL</span>
                <p>Returns <strong>TRUE</strong> if the value is missing, <strong>FALSE</strong> if it is there.</p>
                <p><strong>Usage:</strong> Used inside IF statements</p>
                <p><code>IF ISNULL([Sales]) THEN...</code></p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">ZN (Zero Null)</span>
                <p>If the value is null, it turns it into a <strong>0</strong>. If not null, keeps the number.</p>
                <p><strong>Example:</strong> <code>ZN([Sales])</code> → If Sales is blank, it becomes 0</p>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">IFNULL</span>
                <p>If the value is null, replace it with a <strong>specific value you choose</strong>.</p>
                <p><strong>Example:</strong> <code>IFNULL([Region], "Unknown")</code> → If Region is blank, it says "Unknown"</p>
            </div>
        `)}
    `;
}
