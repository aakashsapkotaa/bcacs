// Module 1: Introduction & Classification

function renderM1Q1() {
    return `
        ${header('Question 1', 'Definition, Characteristics & Sources of Statistics', 'theory')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Define Statistics. Explain Characteristics and Sources of data in statistics.</strong></p>
            </div>
        </div>
        
        ${section('Definition of Statistics', `
            <p>Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting quantitative data. It deals with numerical facts to draw meaningful conclusions about a specific phenomenon.</p>
        `)}
        ${section('Characteristics of Statistics', `
            <ul>
                <li><strong>Aggregate of Facts:</strong> Single numbers are not statistics; it deals with groups (e.g., class average vs. one student's mark).</li>
                <li><strong>Numerically Expressed:</strong> Qualitative descriptions like "good" or "bad" aren't statistics unless quantified.</li>
                <li><strong>Affected by Multiplicity of Causes:</strong> Data is influenced by many factors (e.g., crop yield depends on rain, soil, seed quality).</li>
                <li><strong>Reasonable Accuracy:</strong> Collected with a standard of accuracy suitable for the purpose.</li>
                <li><strong>Pre-determined Purpose:</strong> Collected with a specific goal in mind.</li>
            </ul>
        `)}
        ${section('Sources of Data', `
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong class="info-box-title">Primary Data</strong>
                    Data collected for the first time by the investigator (e.g., Surveys, Personal Interviews). It is original in nature.
                </div>
                <div class="info-box info-box-green">
                    <strong class="info-box-title">Secondary Data</strong>
                    Data that has already been collected by someone else (e.g., Census data, Journals, Websites).
                </div>
            </div>
        `)}
    `;
}

function renderM1Q2() {
    return `
        ${header('Question 2', 'Functions & Limitations of Statistics', 'theory')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Write the functions and Limitation of Statistics.</strong></p>
            </div>
        </div>
        
        <div class="grid-2">
            ${section('Functions of Statistics', `
                <ul class="bullet-list">
                    <li><span class="bullet-dot bullet-blue"></span><span><strong>Simplification:</strong> Condenses huge data into simple figures (averages).</span></li>
                    <li><span class="bullet-dot bullet-blue"></span><span><strong>Definiteness:</strong> Converts vague statements into precise facts.</span></li>
                    <li><span class="bullet-dot bullet-blue"></span><span><strong>Comparison:</strong> Enables comparing different datasets (e.g., year-on-year sales).</span></li>
                    <li><span class="bullet-dot bullet-blue"></span><span><strong>Forecasting:</strong> Helps predict future trends based on past patterns.</span></li>
                </ul>
            `)}
            ${section('Limitations of Statistics', `
                <ul class="bullet-list">
                    <li><span class="bullet-dot bullet-red"></span><span><strong>Aggregates Only:</strong> Does not study individuals.</span></li>
                    <li><span class="bullet-dot bullet-red"></span><span><strong>Quantitative Only:</strong> Cannot measure honesty, beauty, or intelligence directly.</span></li>
                    <li><span class="bullet-dot bullet-red"></span><span><strong>True on Average:</strong> Statistical laws are approximations, not exact like physical laws.</span></li>
                    <li><span class="bullet-dot bullet-red"></span><span><strong>Prone to Misuse:</strong> Data can be manipulated to support false claims.</span></li>
                </ul>
            `)}
        </div>
    `;
}

function renderM1Q3() {
    return `
        ${header('Question 3', 'Classification of Data', 'theory')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Define Classification and write the types of classification.</strong></p>
            </div>
        </div>
        
        ${section('Definition', `<p>Classification is the process of arranging data into sequences and groups according to their common characteristics or separating them into different but related parts.</p>`)}
        <div class="section">
            <h3 class="section-title">Types of Classification</h3>
            <div class="grid-2-sm">
                <div class="classification-card"><h4>Geographical</h4><p>Based on location or area (e.g., Population by State, Sales by Country).</p></div>
                <div class="classification-card"><h4>Chronological</h4><p>Based on time of occurrence (e.g., Population over decades, Yearly profits).</p></div>
                <div class="classification-card"><h4>Qualitative</h4><p>Based on attributes/qualities (e.g., Gender, Religion, Literacy). Can be Simple or Manifold.</p></div>
                <div class="classification-card"><h4>Quantitative</h4><p>Based on numerical values or magnitude (e.g., Height, Weight, Income groups).</p></div>
            </div>
        </div>
    `;
}

function renderM1Q4() {
    return `
        ${header('Question 4', 'Tabulation: Job Candidates', 'table')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Construct the table for the following data:</strong></p>
                <p>Out of a total number of 10,000 candidates who applied for jobs in a government, 6854 were males, 3146 were graduates and others, non-graduates. The number of candidates with some experience was 2623 of whom 1860 were males. The number of male graduates was 2012. The number of graduates with experience was 1093 that includes 323 females.</p>
            </div>
        </div>
        
        <div class="table-container">
            <table>
                <thead><tr><th>Sex</th><th>Education</th><th class="text-right">Experienced</th><th class="text-right">Inexperienced</th><th class="text-right">Total</th></tr></thead>
                <tbody>
                    <tr><td rowspan="3" class="font-bold">Males</td><td>Graduates</td><td class="text-right font-mono">770</td><td class="text-right font-mono">1,242</td><td class="text-right font-mono font-bold">2,012</td></tr>
                    <tr><td>Non-Graduates</td><td class="text-right font-mono">1,090</td><td class="text-right font-mono">3,752</td><td class="text-right font-mono font-bold">4,842</td></tr>
                    <tr style="background:#f1f5f9;font-weight:600"><td>Total Males</td><td class="text-right font-mono">1,860</td><td class="text-right font-mono">4,994</td><td class="text-right font-mono">6,854</td></tr>
                    <tr><td rowspan="3" class="font-bold">Females</td><td>Graduates</td><td class="text-right font-mono">323</td><td class="text-right font-mono">811</td><td class="text-right font-mono font-bold">1,134</td></tr>
                    <tr><td>Non-Graduates</td><td class="text-right font-mono">440</td><td class="text-right font-mono">1,572</td><td class="text-right font-mono font-bold">2,012</td></tr>
                    <tr style="background:#f1f5f9;font-weight:600"><td>Total Females</td><td class="text-right font-mono">763</td><td class="text-right font-mono">2,383</td><td class="text-right font-mono">3,146</td></tr>
                    <tr style="background:#1e3a8a;color:white;font-weight:bold"><td colspan="2">Grand Total</td><td class="text-right font-mono">2,623</td><td class="text-right font-mono">7,377</td><td class="text-right font-mono" style="color:#fde047">10,000</td></tr>
                </tbody>
            </table>
        </div>
        ${note('Missing values were derived by subtracting known subsets from totals.')}
    `;
}

function renderM1Q5() {
    return `
        ${header('Question 5', 'Tabulation: Coffee Habits', 'table')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>In a sample study about coffee habit in two towns, the following information was received:</strong></p>
                <p><strong>Town A:</strong> Females were 40%, total coffee drinkers were 45% and male non coffee drinkers were 20%</p>
                <p><strong>Town B:</strong> Males were 55%, males non coffee drinkers were 30% and females coffee drinkers were 15%.</p>
                <p>Present the above in tabular form.</p>
            </div>
        </div>
        
        <div class="table-container">
            <table>
                <thead style="background:#059669"><tr><th>Category</th><th class="text-center">Town A (%)</th><th class="text-center">Town B (%)</th></tr></thead>
                <tbody>
                    <tr style="background:#f1f5f9;font-weight:bold"><td>Males (Total)</td><td class="text-center">60</td><td class="text-center">55</td></tr>
                    <tr><td style="padding-left:2rem;color:#6b7280">Coffee Drinkers</td><td class="text-center font-mono" style="color:#059669">40</td><td class="text-center font-mono" style="color:#059669">25</td></tr>
                    <tr><td style="padding-left:2rem;color:#6b7280">Non-Drinkers</td><td class="text-center font-mono">20</td><td class="text-center font-mono">30</td></tr>
                    <tr style="background:#f1f5f9;font-weight:bold"><td>Females (Total)</td><td class="text-center">40</td><td class="text-center">45</td></tr>
                    <tr><td style="padding-left:2rem;color:#6b7280">Coffee Drinkers</td><td class="text-center font-mono" style="color:#059669">5</td><td class="text-center font-mono" style="color:#059669">15</td></tr>
                    <tr><td style="padding-left:2rem;color:#6b7280">Non-Drinkers</td><td class="text-center font-mono">35</td><td class="text-center font-mono">30</td></tr>
                    <tr style="background:#1f2937;color:white;font-weight:bold"><td>Total Population</td><td class="text-center">100</td><td class="text-center">100</td></tr>
                </tbody>
            </table>
        </div>
    `;
}

function renderM1Q6() {
    const data = [{ r: '0-10', v: 4 }, { r: '10-20', v: 2 }, { r: '20-30', v: 18 }, { r: '30-40', v: 22 }, { r: '40-50', v: 21 }, { r: '50-60', v: 19 }, { r: '60-70', v: 10 }, { r: '70-80', v: 3 }, { r: '80-90', v: 1 }];
    let cf = 0;
    const tableRows = data.map(d => { cf += d.v; return `<tr><td>${d.r}</td><td class="text-right">${cf}</td><td class="text-right font-mono font-bold">${d.v}</td></tr>`; }).join('');
    const bars = data.map(d => `<div class="bar-container"><div class="bar" style="height:${(d.v / 25) * 100}%"><div class="bar-tooltip">${d.v}</div></div><span class="bar-label">${d.r}</span></div>`).join('');
    const gridLines = [0, 5, 10, 15, 20, 25].map(t => `<div class="grid-line" style="bottom:${(t / 25) * 100}%"><span class="grid-label">${t}</span></div>`).join('');

    return `
        ${header('Question 6', 'Histogram Construction', 'graph')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Represent the adjoining distribution of marks of 100 students in the examination by a histogram:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Marks</th><th>Less than 10</th><th>Less than 20</th><th>Less than 30</th><th>Less than 40</th><th>Less than 50</th><th>Less than 60</th><th>Less than 70</th><th>Less than 80</th><th>Less than 90</th></tr></thead>
                        <tbody><tr><td>No of students</td><td>4</td><td>6</td><td>24</td><td>46</td><td>67</td><td>86</td><td>96</td><td>99</td><td>100</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="histogram-container">
            <div class="histogram-table">
                <h3 class="histogram-title">Calculation Table</h3>
                <div class="table-container">
                    <table><thead style="background:#6b7280"><tr><th>Marks</th><th class="text-right">CF</th><th class="text-right">Freq</th></tr></thead><tbody>${tableRows}</tbody></table>
                </div>
            </div>
            <div class="histogram-graph">
                <h3 class="histogram-title">Histogram</h3>
                <div class="graph-wrapper">
                    <div class="y-axis-label">No. of Students</div>
                    <div class="chart-area">${gridLines}${bars}</div>
                    <div class="x-axis-label">Marks Interval</div>
                </div>
            </div>
        </div>
    `;
}

function renderM1Q7() {
    const data = [{ l: 'More than 0', f: 41, logic: 'All workers', cf: 201 }, { l: 'More than 20', f: 51, logic: '201-41', cf: 160 }, { l: 'More than 40', f: 64, logic: '160-51', cf: 109 }, { l: 'More than 60', f: 38, logic: '109-64', cf: 45 }, { l: 'More than 80', f: 7, logic: '45-38', cf: 7 }, { l: 'More than 100', f: 0, logic: 'End', cf: 0 }];
    const rows = data.map(d => `<tr><td class="font-bold">${d.l}</td><td class="text-right">${d.f || '-'}</td><td style="color:#9ca3af;font-style:italic">${d.logic}</td><td class="text-right font-mono font-bold" style="color:#7c3aed">${d.cf}</td></tr>`).join('');

    return `
        ${header('Question 7', '"More Than" Frequency Conversion', 'table')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Convert the following distribution into "more than" frequency distribution:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Weekly wages(less than)</th><th>20</th><th>40</th><th>60</th><th>80</th><th>100</th></tr></thead>
                        <tbody><tr><td>No of workers</td><td>41</td><td>92</td><td>156</td><td>194</td><td>201</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="table-container">
            <table><thead style="background:#7c3aed"><tr><th>Wages</th><th class="text-right">Simple Freq</th><th>Logic</th><th class="text-right">Cumulative Freq</th></tr></thead><tbody>${rows}</tbody></table>
        </div>
    `;
}

function renderM1Q8() {
    const data = [{ r: '0-20', f: 10, ltv: 20, ltcf: 10, mtv: 0, mtcf: 100 }, { r: '20-40', f: 20, ltv: 40, ltcf: 30, mtv: 20, mtcf: 90 }, { r: '40-60', f: 40, ltv: 60, ltcf: 70, mtv: 40, mtcf: 70 }, { r: '60-80', f: 20, ltv: 80, ltcf: 90, mtv: 60, mtcf: 30 }, { r: '80-100', f: 10, ltv: 100, ltcf: 100, mtv: 80, mtcf: 10 }];
    const rows = data.map(d => `<tr><td class="font-bold">${d.r}</td><td class="text-right font-mono">${d.f}</td><td class="text-right" style="color:#3b82f6">Less than ${d.ltv}</td><td class="text-right font-bold font-mono" style="color:#1d4ed8">${d.ltcf}</td><td class="text-right" style="color:#ef4444">More than ${d.mtv}</td><td class="text-right font-bold font-mono" style="color:#dc2626">${d.mtcf}</td></tr>`).join('');

    return `
        ${header('Question 8', 'Ogive Curves (Less Than & More Than)', 'graph')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Draw 'less than' and 'more than' ogive curves from the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Weekly wages</th><th>0-20</th><th>20-40</th><th>40-60</th><th>60-80</th><th>80-100</th></tr></thead>
                        <tbody><tr><td>No. of workers</td><td>10</td><td>20</td><td>40</td><td>20</td><td>10</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">Calculation Table</h3>
            <div class="table-container">
                <table><thead style="background:#374151"><tr><th>Class</th><th class="text-right">f</th><th class="text-right" style="color:#93c5fd">Less Than</th><th class="text-right" style="color:#93c5fd">CF(&lt;)</th><th class="text-right" style="color:#fca5a5">More Than</th><th class="text-right" style="color:#fca5a5">CF(&gt;)</th></tr></thead><tbody>${rows}<tr style="background:#1f2937;color:white;font-weight:bold"><td>Total</td><td class="text-right">100</td><td colspan="4" class="text-center" style="font-size:0.75rem;font-weight:normal;color:#9ca3af">Intersection = Median</td></tr></tbody></table>
            </div>
        </div>
        <div class="svg-container">
            <h3 class="histogram-title">Ogive Graph</h3>
            <div class="svg-wrapper">${renderOgiveSVG()}</div>
        </div>
        <div class="ogive-legend"><div class="legend-item"><span class="legend-dot legend-blue"></span><span>Less Than Ogive</span></div><div class="legend-item"><span class="legend-dot legend-red"></span><span>More Than Ogive</span></div></div>
    `;
}

function renderOgiveSVG() {
    const w = 600, h = 300, p = 40;
    const gX = v => p + (v / 100) * (w - 2 * p), gY = v => h - p - (v / 100) * (h - 2 * p);
    const lt = [{ x: 0, y: 0 }, { x: 20, y: 10 }, { x: 40, y: 30 }, { x: 60, y: 70 }, { x: 80, y: 90 }, { x: 100, y: 100 }];
    const mt = [{ x: 0, y: 100 }, { x: 20, y: 90 }, { x: 40, y: 70 }, { x: 60, y: 30 }, { x: 80, y: 10 }, { x: 100, y: 0 }];
    const mkPath = pts => pts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${gX(pt.x)} ${gY(pt.y)}`).join(' ');
    const grid = [0, 20, 40, 60, 80, 100].map(v => `<line x1="${p}" y1="${gY(v)}" x2="${w - p}" y2="${gY(v)}" stroke="#f0f0f0"/><text x="${p - 10}" y="${gY(v)}" dy="4" text-anchor="end" font-size="10" fill="#999">${v}</text><line x1="${gX(v)}" y1="${h - p}" x2="${gX(v)}" y2="${p}" stroke="#f0f0f0"/><text x="${gX(v)}" y="${h - p + 15}" text-anchor="middle" font-size="10" fill="#999">${v}</text>`).join('');
    const ltC = lt.map(pt => `<circle cx="${gX(pt.x)}" cy="${gY(pt.y)}" r="4" fill="white" stroke="#2563eb" stroke-width="2"><title>(${pt.x},${pt.y})</title></circle>`).join('');
    const mtC = mt.map(pt => `<circle cx="${gX(pt.x)}" cy="${gY(pt.y)}" r="4" fill="white" stroke="#dc2626" stroke-width="2"><title>(${pt.x},${pt.y})</title></circle>`).join('');
    return `<svg width="${w}" height="${h}">${grid}<text x="${w / 2}" y="${h - 5}" text-anchor="middle" font-size="12" font-weight="bold" fill="#666">Weekly Wages</text><text x="10" y="${h / 2}" transform="rotate(-90,10,${h / 2})" text-anchor="middle" font-size="12" font-weight="bold" fill="#666">Workers (CF)</text><path d="${mkPath(lt)}" fill="none" stroke="#2563eb" stroke-width="2"/>${ltC}<path d="${mkPath(mt)}" fill="none" stroke="#dc2626" stroke-width="2"/>${mtC}<line x1="${gX(53)}" y1="${p}" x2="${gX(53)}" y2="${h - p}" stroke="#16a34a" stroke-dasharray="4"/><circle cx="${gX(53)}" cy="${gY(50)}" r="6" fill="#16a34a"/><text x="${gX(53) + 10}" y="${gY(50)}" fill="#16a34a" font-weight="bold" font-size="12">Median ≈ 53</text></svg>`;
}
