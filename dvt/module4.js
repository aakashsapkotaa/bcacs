// DVT Module 4: Filtering, Grouping & Parameters

function renderDVTM4Q1() {
    return `
        ${header('Q1. Filtering in Tableau', 'What do you mean by filtering? Explain the steps', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>Filtering means <strong>limiting the data shown</strong> in your chart. Instead of seeing everything, you only see specific parts (e.g., showing data only for the year 2023).</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Choose the field you want to filter (e.g., "Region")</li>
                    <li>Drag that field onto the <strong>Filters Shelf</strong> (above the Marks card)</li>
                    <li>A pop-up window appears. Select the items you want to keep (e.g., check "East" and "West")</li>
                    <li>Click <strong>OK</strong>. The chart now updates to show only that data.</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM4Q2() {
    return `
        ${header('Q2. Types of Filters', 'Explain the different types of filters with examples', 'theory')}
        ${section('Filter Order', `
            <div class="info-box info-box-blue">
                <p>Tableau processes filters in a specific order:</p>
            </div>
        `)}
        ${section('Filter Types', `
            ${table(['Filter Type', 'Description', 'Example'], [
        ['Extract Filters', 'Applied before data loads into Tableau', 'Loading only "USA" data from database'],
        ['Data Source Filters', 'Applied at the connection level', 'Limit data at source'],
        ['Context Filters', 'The "Boss" filter that runs before normal filters', 'Creates temporary table'],
        ['Dimension Filters', 'Filtering text/categories', 'Selecting "Furniture" from Category'],
        ['Measure Filters', 'Filtering numbers', 'Sales > 500'],
        ['Table Calculation Filters', 'Applied last, after view is created', 'Filter on Running Total']
    ])}
        `)}
    `;
}

function renderDVTM4Q3() {
    return `
        ${header('Q3. Quick Filters', 'What do you mean by Quick Filter? Explain the types', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>A Quick Filter (now called <strong>"Show Filter"</strong>) puts an interactive menu on the screen so the user can change the filter themselves without entering edit mode.</p>
            </div>
        `)}
        ${section('Types', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">Single Value List</span>
                <p>User can pick only one option (Radio buttons)</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">Multi Value List</span>
                <p>User can check multiple boxes</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">Dropdown</span>
                <p>A list that expands when clicked (saves space)</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">Slider</span>
                <p>A bar to slide for ranges (mostly for numbers/dates)</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">Wildcard Match</span>
                <p>User types a word to search</p>
            </div>
        `)}
    `;
}

function renderDVTM4Q4() {
    return `
        ${header('Q4. Creating Quick Filters', 'Explain the steps for creating a Quick Filter', 'theory')}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Drag a field (e.g., "Category") to the <strong>Filters Shelf</strong></li>
                    <li>Right-click the blue pill on the Filters Shelf</li>
                    <li>Select <strong>Show Filter</strong></li>
                    <li>A control card appears on the right side of the screen for users to interact with</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM4Q5() {
    return `
        ${header('Q5. Context Filters', 'What do you mean by Context Filter? Explain the steps', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>A Context Filter is a <strong>primary filter that creates a temporary subset of data</strong>. All other filters apply only to the data passed through the Context Filter.</p>
                <p>It improves performance and fixes "Top N" filter issues.</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Add a normal filter to the Filters Shelf (e.g., "Country")</li>
                    <li>Right-click that filter on the shelf</li>
                    <li>Select <strong>Add to Context</strong></li>
                    <li>The filter turns <strong>Gray</strong> to show it is now a Context filter</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM4Q6() {
    return `
        ${header('Q6. Conditional Filtering', 'Explain conditional filtering in brief', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>Conditional filtering means filtering data based on a <strong>rule</strong> rather than selecting items manually from a list.</p>
            </div>
        `)}
        ${section('Example', `
            <div class="info-box info-box-green">
                <p>Instead of checking "Product A, Product B," you say <strong>"Show me any Product where Sales > $1000."</strong></p>
            </div>
        `)}
        ${section('How to Apply', `
            <div class="answer-box">
                <p>In the Filter dialog box, click the <strong>Condition tab</strong> and write your rule.</p>
            </div>
        `)}
    `;
}

function renderDVTM4Q7() {
    return `
        ${header('Q7. Slicing Filter', 'Briefly explain the slicing filter', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>A slicing filter usually refers to a standard <strong>Dimension Filter</strong> that "slices" the dataset into smaller parts.</p>
            </div>
        `)}
        ${section('Concept', `
            <div class="info-box info-box-green">
                <p>It allows you to view the data from a specific angle, like <strong>slicing a pie to look at just one piece</strong>.</p>
                <p><strong>Example:</strong> Slicing total sales to see only "California" sales.</p>
            </div>
        `)}
    `;
}

function renderDVTM4Q8() {
    return `
        ${header('Q8. Grouping in Tableau', 'What do you mean by grouping? Explain the two methods', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>Grouping is <strong>combining multiple members of a field into a single category</strong>.</p>
                <p><strong>Example:</strong> Combining "Envelopes," "Paper," and "Labels" into a new group called "Stationery".</p>
            </div>
        `)}
        ${section('Method 1: Visual Grouping', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Select the bars or points on the chart itself</li>
                    <li>Click the <strong>Paperclip icon</strong> in the tooltip menu</li>
                </ol>
            </div>
        `)}
        ${section('Method 2: From Data Pane', `
            <div class="info-box info-box-purple">
                <ol>
                    <li>Right-click the dimension (e.g., Category) in the left Data pane</li>
                    <li>Select <strong>Create → Group</strong></li>
                    <li>Select items and click the <strong>Group</strong> button</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM4Q9() {
    return `
        ${header('Q9. Hierarchy in Tableau', 'What do you mean by hierarchy? Explain the three methods', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>A hierarchy creates a <strong>parent-child relationship</strong> between fields, allowing you to "Drill Down" from summary to detail.</p>
                <p><strong>Example:</strong> Year → Quarter → Month</p>
            </div>
        `)}
        ${section('Method 1: Drag and Drop', `
            <div class="info-box info-box-green">
                <p>Drag a field (e.g., "City") and drop it directly on top of another field (e.g., "Country") in the Data pane.</p>
            </div>
        `)}
        ${section('Method 2: Right-Click', `
            <div class="info-box info-box-purple">
                <p>Right-click a field → <strong>Hierarchy</strong> → <strong>Create Hierarchy</strong></p>
            </div>
        `)}
        ${section('Method 3: Context Menu', `
            <div class="info-box info-box-yellow">
                <p>Select multiple fields using Ctrl key, right-click, and choose <strong>Hierarchy → Create Hierarchy</strong></p>
            </div>
        `)}
    `;
}

function renderDVTM4Q10() {
    return `
        ${header('Q10. Sets and Combined Sets', 'Explain the concept of Sets and Combined Sets in Tableau', 'theory')}
        ${section('Sets', `
            <div class="info-box info-box-blue">
                <p>A Set is a <strong>custom field that defines a subset of data</strong> based on some conditions.</p>
                <p>A row is either <strong>"In" the set</strong> or <strong>"Out" of the set</strong>.</p>
                <p><strong>Example:</strong> A set of "Top 10 Customers"</p>
            </div>
        `)}
        ${section('Combined Sets', `
            <div class="info-box info-box-green">
                <p>If you have two different sets, you can <strong>combine them</strong> to create a new one.</p>
            </div>
        `)}
    `;
}

function renderDVTM4Q11() {
    return `
        ${header('Q11. Sets vs Combined Sets', 'Differentiate between Sets and Combined Sets', 'theory')}
        ${section('Comparison', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">Set</span>
                <p>Defines a group based on <strong>one logic</strong></p>
                <p><strong>Example:</strong> Top 10 customers by Profit</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">Combined Set</span>
                <p>Compares two existing sets using logic like:</p>
                <ul>
                    <li><strong>Union:</strong> All members in Set A OR Set B</li>
                    <li><strong>Intersection:</strong> Members shared by BOTH Set A AND Set B</li>
                    <li><strong>Difference:</strong> Members in Set A but NOT in Set B</li>
                </ul>
            </div>
        `)}
    `;
}

function renderDVTM4Q12() {
    return `
        ${header('Q12. Parameters in Tableau', 'What is a Parameter? Explain its steps', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>A Parameter is a <strong>dynamic variable</strong> (like a placeholder number) that users can change to replace a constant value in calculations or filters.</p>
                <p>It allows <strong>"What-If" analysis</strong>.</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Click the arrow in the Data pane → <strong>Create Parameter</strong></li>
                    <li>Name it (e.g., "Pass Mark") and set the Data Type (e.g., Integer)</li>
                    <li>Set current value (e.g., 50)</li>
                    <li><strong>Important:</strong> You must use the parameter in a Calculated Field or Filter for it to work</li>
                    <li>Right-click the parameter → <strong>Show Parameter Control</strong></li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM4Q13() {
    return `
        ${header('Q13. Bins in Tableau', 'What are bins? Explain their usage and steps', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>Bins are <strong>user-defined groupings of continuous data into equal-sized buckets</strong>.</p>
                <p><strong>Usage:</strong> Used to create Histograms</p>
                <p><strong>Example:</strong> Grouping ages into bins of 0-10, 11-20, 21-30</p>
            </div>
        `)}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Right-click a Measure (e.g., Age or Sales)</li>
                    <li>Go to <strong>Create → Bins</strong></li>
                    <li>Enter the Size of bins (e.g., 10)</li>
                    <li>Tableau creates a new dimension field for the bins</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM4Q14() {
    return `
        ${header('Q14. Manual Sorting', 'Explain manual sorting in visualizations', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>Manual sorting is when you arrange the data in a <strong>specific order you want</strong>, not based on any math rule.</p>
            </div>
        `)}
        ${section('How to Apply', `
            <div class="info-box info-box-green">
                <p><strong>Drag the headers</strong> in the chart and drop them where you want them.</p>
                <p><strong>Example:</strong> Manually moving "March" to be before "February" (though that would be weird!).</p>
            </div>
        `)}
    `;
}

function renderDVTM4Q15() {
    return `
        ${header('Q15. Sorting by Data Source Order', 'Explain sorting by Data Source Order', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>This sorts the data exactly as it <strong>appears in the original database or Excel file</strong>.</p>
            </div>
        `)}
        ${section('How to Apply', `
            <div class="info-box info-box-green">
                <p>In the Sort menu, choose <strong>"Data Source Order"</strong>.</p>
                <p>It resets any custom sorting.</p>
            </div>
        `)}
    `;
}

function renderDVTM4Q16() {
    return `
        ${header('Q16. Sorting by Field', 'Explain sorting by Field in visualization', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>This sorts the data based on the <strong>values of a measure</strong>.</p>
            </div>
        `)}
        ${section('Example', `
            <div class="info-box info-box-green">
                <p>Sorting "Category" based on "Sum of Sales".</p>
                <p>The category with the <strong>highest sales goes first</strong>.</p>
            </div>
        `)}
    `;
}

function renderDVTM4Q17() {
    return `
        ${header('Q17. Manual Sorting vs Sorting by Field', 'Differentiate between manual sorting and sorting by field', 'theory')}
        ${section('Comparison', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">Manual Sorting</span>
                <p><strong>Static:</strong> You physically move "Product A" to the top.</p>
                <p>Even if Product A's sales drop to zero next month, it stays at the top because you put it there.</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">Sorting by Field</span>
                <p><strong>Dynamic:</strong> You tell Tableau "Sort by Sales."</p>
                <p>If Product A has the most sales today, it is at the top. If Product B sells more next month, Product B automatically moves to the top.</p>
            </div>
        `)}
    `;
}

function renderDVTM4Q18() {
    return `
        ${header('Q18. Bar Chart with Descending Order', 'Create a bar chart and change the order of regions in descending order of sales', 'theory')}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Drag <strong>Region</strong> to the Columns shelf</li>
                    <li>Drag <strong>Sales</strong> to the Rows shelf (This creates a Bar Chart)</li>
                    <li>Look at the toolbar at the top of the screen</li>
                    <li>Find the <strong>Sort Descending</strong> icon (looks like bars getting smaller from top to bottom)</li>
                    <li>Click it. The bars will rearrange so the Region with the highest sales is on the left</li>
                </ol>
            </div>
        `)}
    `;
}

function renderDVTM4Q19() {
    return `
        ${header('Q19. Conditional Filters with Amount > 500', 'Apply conditional filters to display items where amount is greater than 500', 'theory')}
        ${section('Steps', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Drag the field <strong>Amount</strong> (or the Item name if filtering by Item based on Amount) to the Filters Shelf</li>
                    <li>A dialog box opens. Select <strong>All values</strong> (or Sum) and click Next</li>
                    <li>Choose the <strong>"At Least"</strong> option</li>
                    <li>Type <strong>500</strong> in the box</li>
                    <li>Click <strong>OK</strong></li>
                </ol>
                <p>👉 The view now hides any rows where the amount is less than 500.</p>
            </div>
        `)}
    `;
}
