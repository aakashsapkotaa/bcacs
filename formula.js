// Formula Module - All Statistics Formulas

function renderM6Q1() {
    return `
        ${header('Module 1', 'Classification & Tabulation', 'theory')}
        <div class="section">
            <h3 class="section-title">📐 Frequency Density</h3>
            <div class="info-box info-box-blue">
                ${formula('\\text{Frequency Density} = \\frac{\\text{Class Frequency}}{\\text{Class Width}}')}
                <p><em>Used for Histograms when class intervals are unequal</em></p>
            </div>
        </div>
        <div class="section">
            <h3 class="section-title">📐 Cumulative Frequency</h3>
            <ul>
                <li><strong>Less than cf:</strong> Add frequencies from Top to Bottom</li>
                <li><strong>More than cf:</strong> Add frequencies from Bottom to Top</li>
            </ul>
        </div>
    `;
}

function renderM6Q2() {
    return `
        ${header('Module 2', 'Measures of Central Tendency', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📐 Arithmetic Mean</h3>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong>Direct Method</strong>
                    ${formula('\\bar{X} = \\frac{\\sum fX}{N}')}
                </div>
                <div class="info-box info-box-green">
                    <strong>Step Deviation Method</strong>
                    ${formula("\\bar{X} = A + \\frac{\\sum fd'}{N} \\times h")}
                    <p>A = Assumed Mean, d' = (X-A)/h, h = Class Width</p>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Median</h3>
            <div class="info-box info-box-yellow">
                ${formula('M = L + \\left[ \\frac{\\frac{N}{2} - c.f}{f} \\right] \\times h')}
                <ul>
                    <li>L = Lower limit of median class</li>
                    <li>c.f = CF of class preceding median class</li>
                    <li>f = Frequency of median class</li>
                </ul>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Mode</h3>
            <div class="info-box info-box-purple">
                ${formula('Z = L + \\left[ \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\right] \\times h')}
                <ul>
                    <li>f₁ = Frequency of modal class</li>
                    <li>f₀ = Frequency of preceding class</li>
                    <li>f₂ = Frequency of succeeding class</li>
                </ul>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Empirical Relationship</h3>
            <div class="info-box info-box-blue">
                ${formula('\\text{Mode} = 3(\\text{Median}) - 2(\\text{Mean})')}
            </div>
        </div>
    `;
}

function renderM6Q3() {
    return `
        ${header('Module 3', 'Dispersion & Skewness', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📐 Quartiles</h3>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong>Q₁ (Lower Quartile)</strong>
                    ${formula('Q_1 = L + \\left[ \\frac{\\frac{N}{4} - c.f}{f} \\right] \\times h')}
                </div>
                <div class="info-box info-box-green">
                    <strong>Q₃ (Upper Quartile)</strong>
                    ${formula('Q_3 = L + \\left[ \\frac{\\frac{3N}{4} - c.f}{f} \\right] \\times h')}
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Standard Deviation</h3>
            <div class="info-box info-box-yellow">
                ${formula('\\sigma = \\sqrt{\\frac{\\sum fd^2}{N} - \\left( \\frac{\\sum fd}{N} \\right)^2} \\times h')}
                <p>where d = (X - A)/h (Step Deviation)</p>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Coefficient of Variation</h3>
            <div class="info-box info-box-purple">
                ${formula('CV = \\frac{\\sigma}{\\bar{X}} \\times 100')}
                <p><strong>Lower CV = More Consistent</strong></p>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Karl Pearson's Skewness</h3>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong>Using Mode</strong>
                    ${formula('S_k = \\frac{\\text{Mean} - \\text{Mode}}{\\sigma}')}
                </div>
                <div class="info-box info-box-green">
                    <strong>Using Median</strong>
                    ${formula('S_k = \\frac{3(\\text{Mean} - \\text{Median})}{\\sigma}')}
                </div>
            </div>
        </div>
    `;
}

function renderM6Q4() {
    return `
        ${header('Module 4', 'Time Series Analysis', 'graph')}
        
        <div class="section">
            <h3 class="section-title">📐 Linear Trend (Least Squares)</h3>
            <div class="info-box info-box-blue">
                ${formula('Y_c = a + bX')}
                <p>When ΣX = 0:</p>
                ${formula('a = \\frac{\\sum Y}{N}, \\quad b = \\frac{\\sum XY}{\\sum X^2}')}
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Parabolic Trend</h3>
            <div class="info-box info-box-green">
                ${formula('Y_c = a + bX + cX^2')}
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Moving Average</h3>
            <div class="info-box info-box-yellow">
                ${formula('MA_t = \\frac{\\sum_{i=-k}^{k} Y_{t+i}}{2k+1}')}
                <p>For 5-year MA: k = 2, divide by 5</p>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Seasonal Index</h3>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong>Additive Model</strong>
                    ${formula('Y = T + S + C + I')}
                </div>
                <div class="info-box info-box-green">
                    <strong>Multiplicative Model</strong>
                    ${formula('Y = T \\times S \\times C \\times I')}
                </div>
            </div>
        </div>
    `;
}

function renderM6Q5() {
    return `
        ${header('Module 5', 'Index Numbers', 'table')}
        
        <div class="section">
            <h3 class="section-title">📐 Price Index Numbers</h3>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong>Laspeyre's (Base Qty)</strong>
                    ${formula('P_L = \\frac{\\sum p_1 q_0}{\\sum p_0 q_0} \\times 100')}
                </div>
                <div class="info-box info-box-green">
                    <strong>Paasche's (Current Qty)</strong>
                    ${formula('P_P = \\frac{\\sum p_1 q_1}{\\sum p_0 q_1} \\times 100')}
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Fisher's Ideal Index</h3>
            <div class="info-box info-box-yellow">
                ${formula('P_F = \\sqrt{P_L \\times P_P} = \\sqrt{\\frac{\\sum p_1 q_0}{\\sum p_0 q_0} \\times \\frac{\\sum p_1 q_1}{\\sum p_0 q_1}} \\times 100')}
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Marshall-Edgeworth Index</h3>
            <div class="info-box info-box-purple">
                ${formula('P_{ME} = \\frac{\\sum p_1(q_0 + q_1)}{\\sum p_0(q_0 + q_1)} \\times 100')}
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Tests of Consistency</h3>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong>Time Reversal Test</strong>
                    ${formula('P_{01} \\times P_{10} = 1')}
                </div>
                <div class="info-box info-box-green">
                    <strong>Factor Reversal Test</strong>
                    ${formula('P_{01} \\times Q_{01} = \\frac{\\sum p_1 q_1}{\\sum p_0 q_0}')}
                </div>
            </div>
            ${note('Fisher Index satisfies BOTH tests')}
        </div>
        
        <div class="section">
            <h3 class="section-title">📐 Consumer Price Index (CPI)</h3>
            <div class="info-box info-box-yellow">
                <strong>Family Budget Method</strong>
                ${formula('CPI = \\frac{\\sum PW}{\\sum W}')}
                <p>P = (p₁/p₀) × 100 (Price Relative), W = p₀q₀ (Weight)</p>
            </div>
        </div>
    `;
}
