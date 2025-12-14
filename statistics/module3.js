// Module 3: Measures of Dispersion - Complete Questions & Solutions

function renderM3Q1() {
    return `
        ${header('Question 1', 'Quartile Deviation', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Find i) Inter-quartile Range ii) Quartile Deviation iii) Coefficient of Quartile Deviation for the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>CI</th><th>0-15</th><th>15-30</th><th>30-45</th><th>45-60</th><th>60-75</th><th>75-90</th><th>90-105</th></tr></thead>
                        <tbody><tr><td><strong>F</strong></td><td>8</td><td>26</td><td>30</td><td>45</td><td>20</td><td>17</td><td>4</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Class Interval</th><th class="text-right">Frequency (f)</th><th class="text-right">Cumulative Frequency (CF)</th></tr></thead>
                    <tbody>
                        <tr><td>0-15</td><td class="text-right">8</td><td class="text-right">8</td></tr>
                        <tr><td>15-30</td><td class="text-right">26</td><td class="text-right">34</td></tr>
                        <tr style="background:#dbeafe"><td>30-45 (Q₁ Class)</td><td class="text-right">30</td><td class="text-right">64</td></tr>
                        <tr><td>45-60</td><td class="text-right">45</td><td class="text-right">109</td></tr>
                        <tr style="background:#fef3c7"><td>60-75 (Q₃ Class)</td><td class="text-right">20</td><td class="text-right">129</td></tr>
                        <tr><td>75-90</td><td class="text-right">17</td><td class="text-right">146</td></tr>
                        <tr><td>90-105</td><td class="text-right">4</td><td class="text-right">150</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>N = 150</strong></td><td></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('First Quartile (Q₁)', `
            <p>Position: N/4 = 150/4 = <strong>37.5</strong></p>
            <p>Q₁ Class: 30-45 (L = 30, cf = 34, f = 30, h = 15)</p>
            ${formula('Q_1 = L + \\frac{\\frac{N}{4} - cf}{f} \\times h = 30 + \\frac{37.5-34}{30} \\times 15 = 30 + 1.75 = 31.75')}
        `)}
        
        ${calcStep('Third Quartile (Q₃)', `
            <p>Position: 3N/4 = 3×150/4 = <strong>112.5</strong></p>
            <p>Q₃ Class: 60-75 (L = 60, cf = 109, f = 20, h = 15)</p>
            ${formula('Q_3 = L + \\frac{\\frac{3N}{4} - cf}{f} \\times h = 60 + \\frac{112.5-109}{20} \\times 15 = 60 + 2.625 = 62.625')}
        `)}
        
        <div class="section">
            <h3 class="section-title">✓ Final Answers</h3>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong class="info-box-title">i) Inter-quartile Range (IQR)</strong>
                    <p>IQR = Q₃ - Q₁ = 62.625 - 31.75 = <strong>30.875</strong></p>
                </div>
                <div class="info-box info-box-green">
                    <strong class="info-box-title">ii) Quartile Deviation (Q.D.)</strong>
                    <p>Q.D. = IQR/2 = 30.875/2 = <strong>15.44</strong></p>
                </div>
            </div>
            <div class="info-box info-box-purple" style="margin-top:1rem">
                <strong class="info-box-title">iii) Coefficient of Q.D.</strong>
                ${formula('\\text{Coeff. of Q.D.} = \\frac{Q_3 - Q_1}{Q_3 + Q_1} = \\frac{30.875}{94.375} = 0.327')}
            </div>
        </div>
    `;
}

function renderM3Q2() {
    return `
        ${header('Question 2', 'Quartile Deviation & Coefficient', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Calculate i) Quartile Deviation ii) Coefficient of Quartile Deviation for the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Income</th><th>Less than 50</th><th>50-70</th><th>70-90</th><th>90-110</th><th>110-130</th><th>130-150</th><th>Above 150</th></tr></thead>
                        <tbody><tr><td><strong>No. of persons</strong></td><td>54</td><td>100</td><td>140</td><td>300</td><td>230</td><td>125</td><td>51</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Income</th><th class="text-right">Frequency (f)</th><th class="text-right">Cumulative Frequency (CF)</th></tr></thead>
                    <tbody>
                        <tr><td>Less than 50</td><td class="text-right">54</td><td class="text-right">54</td></tr>
                        <tr><td>50-70</td><td class="text-right">100</td><td class="text-right">154</td></tr>
                        <tr style="background:#dbeafe"><td>70-90 (Q₁ Class)</td><td class="text-right">140</td><td class="text-right">294</td></tr>
                        <tr><td>90-110</td><td class="text-right">300</td><td class="text-right">594</td></tr>
                        <tr style="background:#fef3c7"><td>110-130 (Q₃ Class)</td><td class="text-right">230</td><td class="text-right">824</td></tr>
                        <tr><td>130-150</td><td class="text-right">125</td><td class="text-right">949</td></tr>
                        <tr><td>Above 150</td><td class="text-right">51</td><td class="text-right">1000</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>N = 1000</strong></td><td></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('First Quartile (Q₁) - Position: N/4 = 250', `
            <p>Q₁ Class: 70-90 (L = 70, cf = 154, f = 140, h = 20)</p>
            ${formula('Q_1 = 70 + \\frac{250-154}{140} \\times 20 = 70 + 13.71 = 83.71')}
        `)}
        
        ${calcStep('Third Quartile (Q₃) - Position: 3N/4 = 750', `
            <p>Q₃ Class: 110-130 (L = 110, cf = 594, f = 230, h = 20)</p>
            ${formula('Q_3 = 110 + \\frac{750-594}{230} \\times 20 = 110 + 13.57 = 123.57')}
        `)}
        
        ${answer('i) Quartile Deviation', 'Q.D. = (123.57 - 83.71)/2 = 39.86/2 = 19.93')}
        ${answer('ii) Coefficient of Q.D.', '39.86/207.28 = 0.192')}
    `;
}

function renderM3Q3() {
    return `
        ${header('Question 3', 'Mean Deviation from Mean & Median', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>For the following data, Find:</strong></p>
                <p>i) Mean Deviation from Mean</p>
                <p>ii) Mean Deviation about Median</p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>CI</th><th>0-10</th><th>10-20</th><th>20-30</th><th>30-40</th><th>40-50</th><th>50-60</th><th>60-70</th></tr></thead>
                        <tbody><tr><td><strong>F</strong></td><td>8</td><td>12</td><td>10</td><td>8</td><td>3</td><td>2</td><td>7</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Part (i): Mean Deviation from Mean</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Class Interval</th><th class="text-right">f</th><th class="text-right">Mid (x)</th><th class="text-right">fx</th><th class="text-right">|x - x̄|</th><th class="text-right">f|x - x̄|</th></tr></thead>
                    <tbody>
                        <tr><td>0-10</td><td class="text-right">8</td><td class="text-right">5</td><td class="text-right">40</td><td class="text-right">24</td><td class="text-right">192</td></tr>
                        <tr><td>10-20</td><td class="text-right">12</td><td class="text-right">15</td><td class="text-right">180</td><td class="text-right">14</td><td class="text-right">168</td></tr>
                        <tr><td>20-30</td><td class="text-right">10</td><td class="text-right">25</td><td class="text-right">250</td><td class="text-right">4</td><td class="text-right">40</td></tr>
                        <tr><td>30-40</td><td class="text-right">8</td><td class="text-right">35</td><td class="text-right">280</td><td class="text-right">6</td><td class="text-right">48</td></tr>
                        <tr><td>40-50</td><td class="text-right">3</td><td class="text-right">45</td><td class="text-right">135</td><td class="text-right">16</td><td class="text-right">48</td></tr>
                        <tr><td>50-60</td><td class="text-right">2</td><td class="text-right">55</td><td class="text-right">110</td><td class="text-right">26</td><td class="text-right">52</td></tr>
                        <tr><td>60-70</td><td class="text-right">7</td><td class="text-right">65</td><td class="text-right">455</td><td class="text-right">36</td><td class="text-right">252</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>50</strong></td><td></td><td class="text-right"><strong>1450</strong></td><td></td><td class="text-right"><strong>800</strong></td></tr>
                    </tbody>
                </table>
            </div>
            ${calcStep('Calculation', `
                <p>Mean (x̄) = Σfx / N = 1450/50 = <strong>29</strong></p>
                ${formula('M.D. = \\frac{\\sum f|x-\\bar{x}|}{N} = \\frac{800}{50} = 16')}
            `)}
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Part (ii): Mean Deviation about Median</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Class Interval</th><th class="text-right">f</th><th class="text-right">CF</th><th class="text-right">Mid (x)</th><th class="text-right">|x - Med|</th><th class="text-right">f|x - Med|</th></tr></thead>
                    <tbody>
                        <tr><td>0-10</td><td class="text-right">8</td><td class="text-right">8</td><td class="text-right">5</td><td class="text-right">20</td><td class="text-right">160</td></tr>
                        <tr><td>10-20</td><td class="text-right">12</td><td class="text-right">20</td><td class="text-right">15</td><td class="text-right">10</td><td class="text-right">120</td></tr>
                        <tr style="background:#fef3c7"><td>20-30 (Median Class)</td><td class="text-right">10</td><td class="text-right">30</td><td class="text-right">25</td><td class="text-right">0</td><td class="text-right">0</td></tr>
                        <tr><td>30-40</td><td class="text-right">8</td><td class="text-right">38</td><td class="text-right">35</td><td class="text-right">10</td><td class="text-right">80</td></tr>
                        <tr><td>40-50</td><td class="text-right">3</td><td class="text-right">41</td><td class="text-right">45</td><td class="text-right">20</td><td class="text-right">60</td></tr>
                        <tr><td>50-60</td><td class="text-right">2</td><td class="text-right">43</td><td class="text-right">55</td><td class="text-right">30</td><td class="text-right">60</td></tr>
                        <tr><td>60-70</td><td class="text-right">7</td><td class="text-right">50</td><td class="text-right">65</td><td class="text-right">40</td><td class="text-right">280</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>50</strong></td><td></td><td></td><td></td><td class="text-right"><strong>760</strong></td></tr>
                    </tbody>
                </table>
            </div>
            ${calcStep('Calculation', `
                <p>Median Class: Position N/2 = 25, Class is 20-30</p>
                <p>Median = 20 + [(25-20)/10] × 10 = <strong>25</strong></p>
                ${formula('M.D. = \\frac{\\sum f|x-Median|}{N} = \\frac{760}{50} = 15.2')}
            `)}
        </div>
        
        ${answer('Final Answers', 'i) M.D. from Mean = 16   |   ii) M.D. about Median = 15.2')}
    `;
}

function renderM3Q4() {
    return `
        ${header('Question 4', 'Mean Deviation about Median', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Calculate Mean Deviation about Median for the following data distribution:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>CI</th><th>50-100</th><th>100-150</th><th>150-200</th><th>200-250</th><th>250-300</th><th>300-350</th></tr></thead>
                        <tbody><tr><td><strong>F</strong></td><td>7</td><td>18</td><td>25</td><td>31</td><td>15</td><td>4</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Class Interval</th><th class="text-right">f</th><th class="text-right">CF</th><th class="text-right">Mid (x)</th><th class="text-right">|x - Med|</th><th class="text-right">f|x - Med|</th></tr></thead>
                    <tbody>
                        <tr><td>50-100</td><td class="text-right">7</td><td class="text-right">7</td><td class="text-right">75</td><td class="text-right">125</td><td class="text-right">875</td></tr>
                        <tr><td>100-150</td><td class="text-right">18</td><td class="text-right">25</td><td class="text-right">125</td><td class="text-right">75</td><td class="text-right">1350</td></tr>
                        <tr style="background:#fef3c7"><td>150-200 (Median Class)</td><td class="text-right">25</td><td class="text-right">50</td><td class="text-right">175</td><td class="text-right">25</td><td class="text-right">625</td></tr>
                        <tr><td>200-250</td><td class="text-right">31</td><td class="text-right">81</td><td class="text-right">225</td><td class="text-right">25</td><td class="text-right">775</td></tr>
                        <tr><td>250-300</td><td class="text-right">15</td><td class="text-right">96</td><td class="text-right">275</td><td class="text-right">75</td><td class="text-right">1125</td></tr>
                        <tr><td>300-350</td><td class="text-right">4</td><td class="text-right">100</td><td class="text-right">325</td><td class="text-right">125</td><td class="text-right">500</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>100</strong></td><td></td><td></td><td></td><td class="text-right"><strong>5250</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 1: Find Median', `
            <p>Position = N/2 = 100/2 = 50</p>
            <p>Median Class: 150-200 (CF ≥ 50)</p>
            <p>L = 150, cf = 25, f = 25, h = 50</p>
            ${formula('Median = 150 + \\frac{50-25}{25} \\times 50 = 150 + 50 = 200')}
        `)}
        
        ${calcStep('Step 2: Mean Deviation', `
            ${formula('M.D. = \\frac{\\sum f|x-Median|}{N} = \\frac{5250}{100} = 52.5')}
        `)}
        
        ${answer('Mean Deviation about Median', '52.5')}
    `;
}

function renderM3Q5() {
    return `
        ${header('Question 5', 'Mean Deviation about Mean', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Calculate Mean Deviation about Mean for the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>CI</th><th>2-4</th><th>4-6</th><th>6-8</th><th>8-10</th></tr></thead>
                        <tbody><tr><td><strong>F</strong></td><td>3</td><td>4</td><td>2</td><td>1</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Class Interval</th><th class="text-right">f</th><th class="text-right">Mid (x)</th><th class="text-right">fx</th><th class="text-right">|x - x̄|</th><th class="text-right">f|x - x̄|</th></tr></thead>
                    <tbody>
                        <tr><td>2-4</td><td class="text-right">3</td><td class="text-right">3</td><td class="text-right">9</td><td class="text-right">2.2</td><td class="text-right">6.6</td></tr>
                        <tr><td>4-6</td><td class="text-right">4</td><td class="text-right">5</td><td class="text-right">20</td><td class="text-right">0.2</td><td class="text-right">0.8</td></tr>
                        <tr><td>6-8</td><td class="text-right">2</td><td class="text-right">7</td><td class="text-right">14</td><td class="text-right">1.8</td><td class="text-right">3.6</td></tr>
                        <tr><td>8-10</td><td class="text-right">1</td><td class="text-right">9</td><td class="text-right">9</td><td class="text-right">3.8</td><td class="text-right">3.8</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>10</strong></td><td></td><td class="text-right"><strong>52</strong></td><td></td><td class="text-right"><strong>14.8</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Calculation', `
            <p>Mean (x̄) = Σfx/N = 52/10 = <strong>5.2</strong></p>
            ${formula('M.D. = \\frac{\\sum f|x-\\bar{x}|}{N} = \\frac{14.8}{10} = 1.48')}
        `)}
        
        ${answer('Mean Deviation about Mean', '1.48')}
    `;
}

function renderM3Q6() {
    return `
        ${header('Question 6', 'Correction Problem', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>The mean and variance of ten observations are 17 and 33 respectively. Later one observation (i.e 26) was inaccurate. What is the mean and standard deviation of the remaining 9 observations?</strong></p>
            </div>
        </div>
        
        ${calcStep('Step 1: Find New Mean', `
            <p>Original Sum Σx = n × Mean = 10 × 17 = <strong>170</strong></p>
            <p>New Sum = 170 - 26 = <strong>144</strong></p>
            ${formula('\\text{New Mean} = \\frac{144}{9} = 16')}
        `)}
        
        ${calcStep('Step 2: Find New Standard Deviation', `
            <p>From Variance formula: σ² = Σx²/n - (x̄)²</p>
            <p>33 = Σx²/10 - 17² → Σx² = (33 + 289) × 10 = <strong>3220</strong></p>
            <p>New Σx² = 3220 - 26² = 3220 - 676 = <strong>2544</strong></p>
            <p>New Variance = 2544/9 - 16² = 282.67 - 256 = <strong>26.67</strong></p>
            ${formula('\\text{New S.D.} = \\sqrt{26.67} = 5.16')}
        `)}
        
        ${answer('Final Answers', 'New Mean = 16, New S.D. = 5.16')}
    `;
}

function renderM3Q7() {
    return `
        ${header('Question 7', 'Consistency of Batsmen', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>The arithmetic mean of runs scored by three batsmen - Vijay, Subhash and Kumar in the same series of 10 innings are 50, 48 and 12 respectively. The standard deviations of their runs are 15, 12 and 2 respectively. Find who is more consistent of three?</strong></p>
            </div>
        </div>
        
        ${calcStep('Coefficient of Variation Formula', `
            ${formula('C.V. = \\frac{\\sigma}{\\bar{x}} \\times 100')}
        `)}
        
        <div class="section">
            <h3 class="section-title">📊 Calculations</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Batsman</th><th class="text-right">Mean (x̄)</th><th class="text-right">S.D. (σ)</th><th class="text-right">C.V. (%)</th></tr></thead>
                    <tbody>
                        <tr><td>Vijay</td><td class="text-right">50</td><td class="text-right">15</td><td class="text-right">(15/50)×100 = <strong>30%</strong></td></tr>
                        <tr><td>Subhash</td><td class="text-right">48</td><td class="text-right">12</td><td class="text-right">(12/48)×100 = <strong>25%</strong></td></tr>
                        <tr style="background:#d1fae5"><td>Kumar</td><td class="text-right">12</td><td class="text-right">2</td><td class="text-right">(2/12)×100 = <strong>16.67%</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="alert alert-success">
            <strong>Conclusion:</strong> Kumar is the most consistent batsman as he has the lowest Coefficient of Variation (16.67%).
        </div>
    `;
}

function renderM3Q8() {
    return `
        ${header('Question 8', 'Find Missing Observations', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>The mean of 5 observations is 4.4 and the variance is 8.24. If three of the five observations are 1, 2 and 6, Find the values of other two.</strong></p>
            </div>
        </div>
        
        ${calcStep('Step 1: Using Mean', `
            <p>Let the two missing observations be x and y</p>
            <p>Sum = 5 × 4.4 = 22</p>
            <p>1 + 2 + 6 + x + y = 22</p>
            ${formula('x + y = 13 \\quad \\text{...(i)}')}
        `)}
        
        ${calcStep('Step 2: Using Variance', `
            <p>Variance = Σx²/n - (Mean)²</p>
            <p>8.24 = Σx²/5 - (4.4)²</p>
            <p>Σx² = 5 × (8.24 + 19.36) = 138</p>
            <p>1² + 2² + 6² + x² + y² = 138</p>
            <p>1 + 4 + 36 + x² + y² = 138</p>
            ${formula('x^2 + y^2 = 97 \\quad \\text{...(ii)}')}
        `)}
        
        ${calcStep('Step 3: Solving', `
            <p>From (i): y = 13 - x</p>
            <p>Substitute in (ii): x² + (13-x)² = 97</p>
            <p>x² + 169 - 26x + x² = 97</p>
            <p>2x² - 26x + 72 = 0</p>
            <p>x² - 13x + 36 = 0</p>
            <p>(x - 4)(x - 9) = 0</p>
        `)}
        
        ${answer('Missing Observations', 'x = 4, y = 9  OR  x = 9, y = 4')}
    `;
}

function renderM3Q12() {
    return `
        ${header('Question 12', 'Football Team Consistency', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Goals scored in a football season are given. By calculating Coefficient of Variation find which team may be considered more consistent:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Number of goals scored</th><th class="text-center">A team</th><th class="text-center">B team</th></tr></thead>
                        <tbody>
                            <tr><td>0</td><td class="text-center">27</td><td class="text-center">17</td></tr>
                            <tr><td>1</td><td class="text-center">9</td><td class="text-center">9</td></tr>
                            <tr><td>2</td><td class="text-center">8</td><td class="text-center">6</td></tr>
                            <tr><td>3</td><td class="text-center">5</td><td class="text-center">5</td></tr>
                            <tr><td>4</td><td class="text-center">4</td><td class="text-center">3</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="grid-2">
            <div class="section">
                <h3 class="section-title">Team A Calculation</h3>
                <div class="table-container">
                    <table>
                        <thead><tr><th>x</th><th>f</th><th>fx</th><th>fx²</th></tr></thead>
                        <tbody>
                            <tr><td>0</td><td>27</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>9</td><td>9</td><td>9</td></tr>
                            <tr><td>2</td><td>8</td><td>16</td><td>32</td></tr>
                            <tr><td>3</td><td>5</td><td>15</td><td>45</td></tr>
                            <tr><td>4</td><td>4</td><td>16</td><td>64</td></tr>
                            <tr style="background:#f1f5f9"><td>Total</td><td>53</td><td>56</td><td>150</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Mean A = 56/53 = 1.06</p>
                <p>S.D. A = √(150/53 - 1.06²) = 1.28</p>
                <p><strong>C.V. A = (1.28/1.06)×100 = 120.8%</strong></p>
            </div>
            
            <div class="section">
                <h3 class="section-title">Team B Calculation</h3>
                <div class="table-container">
                    <table>
                        <thead><tr><th>x</th><th>f</th><th>fx</th><th>fx²</th></tr></thead>
                        <tbody>
                            <tr><td>0</td><td>17</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>9</td><td>9</td><td>9</td></tr>
                            <tr><td>2</td><td>6</td><td>12</td><td>24</td></tr>
                            <tr><td>3</td><td>5</td><td>15</td><td>45</td></tr>
                            <tr><td>4</td><td>3</td><td>12</td><td>48</td></tr>
                            <tr style="background:#f1f5f9"><td>Total</td><td>40</td><td>48</td><td>126</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Mean B = 48/40 = 1.2</p>
                <p>S.D. B = √(126/40 - 1.2²) = 1.31</p>
                <p><strong>C.V. B = (1.31/1.2)×100 = 109.2%</strong></p>
            </div>
        </div>
        
        <div class="alert alert-success">
            <strong>Conclusion:</strong> Team B is more consistent (Lower C.V. = 109.2% < 120.8%)
        </div>
    `;
}

function renderM3Q13() {
    return `
        ${header('Question 13', 'Karl Pearson Coefficient of Skewness', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Calculate Karl Pearson's Coefficient of Skewness from the data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Hourly wages</th><th>40-50</th><th>50-60</th><th>60-70</th><th>70-80</th><th>80-90</th><th>90-100</th><th>100-110</th><th>110-120</th><th>120-130</th><th>130-140</th></tr></thead>
                        <tbody><tr><td><strong>No. of workers</strong></td><td>5</td><td>6</td><td>8</td><td>10</td><td>25</td><td>30</td><td>36</td><td>50</td><td>60</td><td>70</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>CI</th><th class="text-right">f</th><th class="text-right">Mid (x)</th><th class="text-right">fx</th><th class="text-right">fx²</th></tr></thead>
                    <tbody>
                        <tr><td>40-50</td><td class="text-right">5</td><td class="text-right">45</td><td class="text-right">225</td><td class="text-right">10125</td></tr>
                        <tr><td>50-60</td><td class="text-right">6</td><td class="text-right">55</td><td class="text-right">330</td><td class="text-right">18150</td></tr>
                        <tr><td>60-70</td><td class="text-right">8</td><td class="text-right">65</td><td class="text-right">520</td><td class="text-right">33800</td></tr>
                        <tr><td>70-80</td><td class="text-right">10</td><td class="text-right">75</td><td class="text-right">750</td><td class="text-right">56250</td></tr>
                        <tr><td>80-90</td><td class="text-right">25</td><td class="text-right">85</td><td class="text-right">2125</td><td class="text-right">180625</td></tr>
                        <tr><td>90-100</td><td class="text-right">30</td><td class="text-right">95</td><td class="text-right">2850</td><td class="text-right">270750</td></tr>
                        <tr><td>100-110</td><td class="text-right">36</td><td class="text-right">105</td><td class="text-right">3780</td><td class="text-right">396900</td></tr>
                        <tr><td>110-120</td><td class="text-right">50</td><td class="text-right">115</td><td class="text-right">5750</td><td class="text-right">661250</td></tr>
                        <tr><td>120-130</td><td class="text-right">60</td><td class="text-right">125</td><td class="text-right">7500</td><td class="text-right">937500</td></tr>
                        <tr style="background:#fef3c7"><td>130-140 (Mode Class)</td><td class="text-right">70</td><td class="text-right">135</td><td class="text-right">9450</td><td class="text-right">1275750</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td>Total</td><td class="text-right">300</td><td></td><td class="text-right">33280</td><td class="text-right">3841100</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Calculations', `
            <p><strong>Mean:</strong> Σfx/N = 33280/300 = <strong>110.93</strong></p>
            <p><strong>S.D. (σ):</strong> √(Σfx²/N - Mean²) = √(12803.67 - 12305.46) = <strong>22.32</strong></p>
            <p><strong>Mode:</strong> L + [(f₁-f₀)/(2f₁-f₀-f₂)] × h</p>
            <p>Mode = 130 + [(70-60)/(140-60-0)] × 10 = 130 + 1.25 = <strong>131.25</strong></p>
        `)}
        
        ${calcStep('Skewness Formula', `
            ${formula('Sk_p = \\frac{Mean - Mode}{\\sigma} = \\frac{110.93 - 131.25}{22.32} = -0.91')}
        `)}
        
        ${answer('Karl Pearson\'s Coefficient of Skewness', 'Skₚ = -0.91 (Negatively Skewed)')}
    `;
}

function renderM3Q14() {
    return `
        ${header('Question 14', 'Skewness (Discrete Data)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Calculate Karl Pearson's Coefficient of Skewness from the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Size</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr></thead>
                        <tbody><tr><td><strong>f</strong></td><td>10</td><td>18</td><td>30</td><td>25</td><td>12</td><td>3</td><td>2</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Size (x)</th><th class="text-right">f</th><th class="text-right">fx</th><th class="text-right">fx²</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td class="text-right">10</td><td class="text-right">10</td><td class="text-right">10</td></tr>
                        <tr><td>2</td><td class="text-right">18</td><td class="text-right">36</td><td class="text-right">72</td></tr>
                        <tr style="background:#fef3c7"><td>3 (Mode)</td><td class="text-right">30</td><td class="text-right">90</td><td class="text-right">270</td></tr>
                        <tr><td>4</td><td class="text-right">25</td><td class="text-right">100</td><td class="text-right">400</td></tr>
                        <tr><td>5</td><td class="text-right">12</td><td class="text-right">60</td><td class="text-right">300</td></tr>
                        <tr><td>6</td><td class="text-right">3</td><td class="text-right">18</td><td class="text-right">108</td></tr>
                        <tr><td>7</td><td class="text-right">2</td><td class="text-right">14</td><td class="text-right">98</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td>Total</td><td class="text-right">100</td><td class="text-right">328</td><td class="text-right">1258</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Calculations', `
            <p><strong>Mean:</strong> 328/100 = <strong>3.28</strong></p>
            <p><strong>S.D.:</strong> √(12.58 - 10.76) = <strong>1.35</strong></p>
            <p><strong>Mode:</strong> 3 (highest frequency = 30)</p>
        `)}
        
        ${answer('Skewness', 'Skₚ = (3.28 - 3)/1.35 = 0.207 (Positively Skewed)')}
    `;
}

function renderM3Q15() {
    return `
        ${header('Question 15', 'Find C.V. from Skewness Data', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Pearson's measure of skewness of a distribution is 0.5. Its median and mode are respectively 42 and 36. Find the Coefficient of Variation.</strong></p>
            </div>
        </div>
        
        ${calcStep('Step 1: Find Mean', `
            <p>Using empirical formula: Mode = 3(Median) - 2(Mean)</p>
            <p>36 = 3(42) - 2(Mean)</p>
            <p>36 = 126 - 2(Mean)</p>
            <p>2(Mean) = 90</p>
            ${formula('Mean = 45')}
        `)}
        
        ${calcStep('Step 2: Find Standard Deviation', `
            <p>Using Skewness formula: Sk = (Mean - Mode)/σ</p>
            <p>0.5 = (45 - 36)/σ</p>
            <p>0.5 = 9/σ</p>
            ${formula('\\sigma = \\frac{9}{0.5} = 18')}
        `)}
        
        ${calcStep('Step 3: Find Coefficient of Variation', `
            ${formula('C.V. = \\frac{\\sigma}{Mean} \\times 100 = \\frac{18}{45} \\times 100 = 40\\%')}
        `)}
        
        ${answer('Coefficient of Variation', 'C.V. = 40%')}
    `;
}

function renderM3Q17() {
    return `
        ${header('Question 17', 'First Four Moments', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Calculate first four moments and comment on the nature of distribution:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>X</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                        <tbody><tr><td><strong>f</strong></td><td>1</td><td>6</td><td>13</td><td>25</td><td>30</td><td>22</td><td>9</td><td>5</td><td>2</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        ${note('Mean x̄ ≈ 4.91 (calculated from Σfx/N = 556/113)')}
        
        <div class="section">
            <h3 class="section-title">📊 Calculation Summary</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Moment</th><th>Formula</th><th>Calculation</th><th>Value</th></tr></thead>
                    <tbody>
                        <tr><td>μ₁ (First)</td><td>Σf(x-x̄)/N</td><td>Always zero for moments about mean</td><td><strong>0</strong></td></tr>
                        <tr><td>μ₂ (Second)</td><td>Σf(x-x̄)²/N</td><td>281.1/113</td><td><strong>2.49</strong></td></tr>
                        <tr><td>μ₃ (Third)</td><td>Σf(x-x̄)³/N</td><td>76.7/113</td><td><strong>0.68</strong></td></tr>
                        <tr><td>μ₄ (Fourth)</td><td>Σf(x-x̄)⁴/N</td><td>2071.9/113</td><td><strong>18.34</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${answer('First Four Moments', 'μ₁ = 0, μ₂ = 2.49, μ₃ = 0.68, μ₄ = 18.34')}
    `;
}
