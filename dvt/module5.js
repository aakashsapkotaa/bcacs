// DVT Module 5: Charts & Dashboards

function renderDVTM5Q1() {
    return `
        ${header('Q1. Funnel Chart', 'Explain the difference between a traditional funnel chart and a funnel chart in Tableau', 'theory')}
        ${section('Traditional Funnel Chart', `
            <div class="info-box info-box-blue">
                <p>In many other tools, a funnel chart is a specific, <strong>built-in 3D cone shape</strong> used to show stages in a process.</p>
                <p><strong>Example:</strong> Sales: Lead → Prospect → Customer</p>
            </div>
        `)}
        ${section('Tableau Funnel Chart', `
            <div class="info-box info-box-green">
                <p>Tableau does <strong>not have a "Funnel" button</strong> in the "Show Me" panel.</p>
                <p>Instead, you have to <strong>build it manually</strong>:</p>
                <ul>
                    <li>Usually created using a Bar Chart that is centered and sorted</li>
                    <li>Or by using an Area Chart</li>
                    <li>More customizable but requires more steps</li>
                </ul>
            </div>
        `)}
    `;
}

function renderDVTM5Q2() {
    return `
        ${header('Q2. Waterfall Chart', 'Explain the waterfall chart in Tableau', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>A Waterfall chart shows the <strong>cumulative effect of positive and negative values</strong>. It is often called a "flying bricks" chart.</p>
            </div>
        `)}
        ${section('Usage', `
            <div class="info-box info-box-green">
                <p>It explains <strong>how you got from a starting number to an ending number</strong>.</p>
                <p><strong>Example:</strong></p>
                <ul>
                    <li>Start with Gross Salary</li>
                    <li>Minus Tax (bar goes down)</li>
                    <li>Minus Insurance (bar goes down)</li>
                    <li>Equals Net Salary (final bar)</li>
                </ul>
            </div>
        `)}
        ${section('In Tableau', `
            <div class="answer-box">
                <p>Created using the <strong>Gantt Bar</strong> mark type and a <strong>Quick Table Calculation (Running Total)</strong>.</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q3() {
    return `
        ${header('Q3. Five Types of Charts in Tableau', 'Explain any five types of charts used in Tableau', 'theory')}
        ${section('Chart Types', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">📊 Bar Chart</span>
                <p>Uses bars to compare categorical data</p>
                <p><strong>Example:</strong> Sales by Product</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">📈 Line Chart</span>
                <p>Uses a line to show trends over time</p>
                <p><strong>Example:</strong> Stock price over a year</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">🥧 Pie Chart</span>
                <p>Uses slices of a circle to show parts of a whole</p>
                <p><strong>Example:</strong> % of Budget</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">⚫ Scatter Plot</span>
                <p>Uses dots to show the relationship between two numbers</p>
                <p><strong>Example:</strong> Advertising Spend vs. Sales</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">🌡️ Heat Map</span>
                <p>Uses color intensity to represent values in a matrix</p>
                <p><strong>Example:</strong> Darker red = Higher profit</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q4() {
    return `
        ${header('Q4. Bar Charts vs Stacked Bar Charts', 'Discuss the advantages and disadvantages', 'theory')}
        ${section('Bar Chart', `
            <div class="info-box info-box-green">
                <p><strong>Advantage:</strong> Easiest to read and compare lengths accurately</p>
                <p><strong>Disadvantage:</strong> Takes up a lot of space if there are many categories</p>
                <p><strong>Example:</strong> Comparing total sales of 5 different countries</p>
            </div>
        `)}
        ${section('Stacked Bar Chart', `
            <div class="info-box info-box-purple">
                <p><strong>Advantage:</strong> Shows the total and the breakdown of parts in one bar. Saves space.</p>
                <p><strong>Disadvantage:</strong> Hard to compare segments in the middle because they don't start at the same baseline</p>
                <p><strong>Example:</strong> Total sales per year, split by Product Category (Furniture, Tech, Office)</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q5() {
    return `
        ${header('Q5. Line Chart vs Area Chart', 'Explain the difference with business scenarios', 'theory')}
        ${section('Line Chart', `
            <div class="info-box info-box-green">
                <p><strong>Focus:</strong> Shows the <strong>direction of the trend</strong> (Up or Down)</p>
                <p><strong>Scenario:</strong> Analyzing whether the company's stock price is rising or falling over 12 months</p>
            </div>
        `)}
        ${section('Area Chart', `
            <div class="info-box info-box-purple">
                <p><strong>Focus:</strong> Shows the <strong>volume or magnitude</strong> of the trend (The area under the line is filled)</p>
                <p><strong>Scenario:</strong> Showing total sales over time, stacked to see how much "Technology" contributed to the total volume compared to "Furniture"</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q6() {
    return `
        ${header('Q6. Scatter Plot vs Bubble Chart', 'Compare a scatter plot and a bubble chart', 'theory')}
        ${section('Scatter Plot', `
            <div class="info-box info-box-green">
                <ul>
                    <li>Uses an <strong>X-axis and a Y-axis</strong></li>
                    <li>Best for finding <strong>correlations</strong> (relationships) between two specific measures</li>
                    <li>Dots are plotted on a grid</li>
                </ul>
                <p><strong>Example:</strong> Height vs. Weight</p>
            </div>
        `)}
        ${section('Bubble Chart (Packed Bubbles)', `
            <div class="info-box info-box-purple">
                <ul>
                    <li>Does <strong>not typically use axes</strong></li>
                    <li>Uses circle <strong>size</strong> to show a measure and <strong>color</strong> for categories</li>
                    <li>Best for comparing relative sizes of many categories at once</li>
                </ul>
            </div>
        `)}
    `;
}

function renderDVTM5Q7() {
    return `
        ${header('Q7. Gantt Chart', 'Define a Gantt chart and explain how it is constructed', 'theory')}
        ${section('Definition', `
            <div class="info-box info-box-blue">
                <p>A Gantt chart is a <strong>project management tool</strong>. It shows tasks scheduled over time.</p>
            </div>
        `)}
        ${section('Construction', `
            <div class="info-box info-box-green">
                <ol>
                    <li>Drag a <strong>Date field</strong> to Columns (Timeline)</li>
                    <li>Drag a <strong>Task Name</strong> to Rows</li>
                    <li>Select <strong>Gantt Bar</strong> from the Marks card</li>
                    <li>Drag the <strong>Duration</strong> (how long the task takes) to the Size shelf</li>
                </ol>
                <p>This stretches the bar to cover the correct time period.</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q8() {
    return `
        ${header('Q8. Symbol Map vs Filled Map', 'Illustrate the difference between a basic map and a geographic map', 'theory')}
        ${section('Symbol Map (Basic)', `
            <div class="info-box info-box-green">
                <p>Places a <strong>shape</strong> (like a dot or square) at a specific location.</p>
                <p>The <strong>size</strong> of the dot can represent a value (Sales).</p>
            </div>
        `)}
        ${section('Filled Map (Choropleth)', `
            <div class="info-box info-box-purple">
                <p><strong>Fills</strong> the entire shape of the region (Country/State) with color.</p>
                <p>You cannot change the size of the shape, only the <strong>color</strong>.</p>
            </div>
        `)}
        ${section('Note', `
            <div class="answer-box">
                <p>Both require <strong>geographic roles</strong> (Globe icon) assigned to the data fields (City, Country).</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q9() {
    return `
        ${header('Q9. Circle Views vs Bubble Charts', 'Evaluate how circle views differ from bubble charts', 'theory')}
        ${section('Circle View', `
            <div class="info-box info-box-green">
                <p>This is essentially a "Scatter plot" but often restricted to one dimension and one measure.</p>
                <p>The circles are <strong>aligned in columns or rows</strong>.</p>
                <p><strong>Example:</strong> Sales for each Category shown as circles on a straight line</p>
                <p>👉 It is <strong>organized</strong></p>
            </div>
        `)}
        ${section('Bubble Chart', `
            <div class="info-box info-box-purple">
                <p>The circles are <strong>"packed" together in a cluster</strong> to fit the space.</p>
                <p>They are <strong>not aligned to an axis</strong>.</p>
                <p>👉 It is more <strong>artistic/visual</strong> but less precise for reading exact values</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q10() {
    return `
        ${header('Q10. Worksheet vs Dashboard Level Filters', 'Compare worksheet-level filters and dashboard-level filters', 'theory')}
        ${section('Worksheet-Level Filter', `
            <div class="info-box info-box-green">
                <p>The filter only changes the <strong>specific chart it is attached to</strong>.</p>
                <p><strong>Scenario:</strong> You filter the "Profit Map" to show only "2023", but the "Sales Bar Chart" next to it still shows all years. This can be confusing.</p>
            </div>
        `)}
        ${section('Dashboard-Level (Global) Filter', `
            <div class="info-box info-box-purple">
                <p>The filter is <strong>applied to multiple sheets at once</strong>.</p>
                <p><strong>Use:</strong> Enable "Apply to Worksheets" → "Selected Worksheets" or "All Using This Data Source"</p>
                <p><strong>Scenario:</strong> A manager selects "West Region" on the dashboard filter. Instantly, the Map, Bar Chart, and KPI text all update to show only West Region data.</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q11() {
    return `
        ${header('Q11. Dashboard vs Worksheet', 'What is a dashboard and how is it different from a worksheet?', 'theory')}
        ${section('Worksheet', `
            <div class="info-box info-box-green">
                <p>A <strong>single canvas</strong> where you build one specific visualization (e.g., just a bar chart).</p>
                <p>It is the <strong>building block</strong>.</p>
            </div>
        `)}
        ${section('Dashboard', `
            <div class="info-box info-box-purple">
                <p>A canvas where you <strong>combine multiple worksheets</strong> into a single view.</p>
                <p>It allows you to see the <strong>"Full Picture"</strong> and interact with different charts simultaneously.</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q12() {
    return `
        ${header('Q12. Tiled vs Floating Objects', 'Differentiate between tiled and floating objects in Tableau dashboards', 'theory')}
        ${section('Tiled', `
            <div class="info-box info-box-green">
                <p>The charts <strong>snap into a grid layout</strong>.</p>
                <ul>
                    <li>They do not overlap</li>
                    <li>If you resize one, the others adjust automatically</li>
                </ul>
                <p><strong>Example:</strong> A neat 2x2 grid of four charts</p>
            </div>
        `)}
        ${section('Floating', `
            <div class="info-box info-box-purple">
                <p>The object <strong>floats on top of others</strong> (like a sticker).</p>
                <ul>
                    <li>You can drag it anywhere</li>
                    <li>Can partially cover another chart</li>
                </ul>
                <p><strong>Example:</strong> Placing a small company logo or a "Help" button in the corner on top of a map</p>
            </div>
        `)}
    `;
}

function renderDVTM5Q13() {
    return `
        ${header('Q13. Dashboard Filters - Adding, Applying, Managing', 'Explain the process with business scenarios', 'theory')}
        ${section('Adding Filters', `
            <div class="info-box info-box-green">
                <p>Click on a chart in the dashboard → Click the small down arrow → Select <strong>Filters</strong> → Choose the field (e.g., "Year")</p>
                <p>The filter appears on the dashboard.</p>
            </div>
        `)}
        ${section('Applying to Multiple Sheets', `
            <div class="info-box info-box-purple">
                <p>By default, it only filters that one chart.</p>
                <p><strong>To make it global:</strong> Right-click the filter → <strong>Apply to Worksheets</strong> → All Using Related Data Sources</p>
            </div>
        `)}
        ${section('Managing Filters', `
            <div class="info-box info-box-yellow">
                <p>You can format the filter (Dropdown, Slider) to make it user-friendly.</p>
            </div>
        `)}
        ${section('Business Scenario', `
            <div class="answer-box">
                <p>A generic "Executive Dashboard" shows total company sales. The CEO wants to investigate a slump in "Furniture."</p>
                <p>She uses a <strong>Category Filter</strong> (set to apply to all sheets). She selects "Furniture," and the entire dashboard (Sales trend, Regional map, Profit table) updates to show only Furniture performance, allowing her to spot the specific issue.</p>
            </div>
        `)}
    `;
}
