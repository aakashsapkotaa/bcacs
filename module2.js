// Module 2: Measures of Central Tendency - Complete Questions & Solutions

function renderM2Q1() {
    return `
        ${header('Question 1', 'Finding Missing Frequencies', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>For a certain frequency table which has only been partly reproduced, the mean was found to be 1.46. Calculate the missing frequencies:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>No of accidents</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>Total</th></tr></thead>
                        <tbody><tr><td><strong>Frequency</strong></td><td>46</td><td>?</td><td>?</td><td>25</td><td>10</td><td>5</td><td>200</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>No of Accidents (x)</th><th class="text-right">Frequency (f)</th><th class="text-right">Product (fx)</th></tr></thead>
                    <tbody>
                        <tr><td>0</td><td class="text-right">46</td><td class="text-right">0</td></tr>
                        <tr style="background:#fef3c7"><td>1</td><td class="text-right">f₁</td><td class="text-right">f₁</td></tr>
                        <tr style="background:#fef3c7"><td>2</td><td class="text-right">f₂</td><td class="text-right">2f₂</td></tr>
                        <tr><td>3</td><td class="text-right">25</td><td class="text-right">75</td></tr>
                        <tr><td>4</td><td class="text-right">10</td><td class="text-right">40</td></tr>
                        <tr><td>5</td><td class="text-right">5</td><td class="text-right">25</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>200</strong></td><td class="text-right"><strong>140 + f₁ + 2f₂</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        ${calcStep('Step 1: Frequency Equation', `
            <p>Sum of all frequencies = N = 200</p>
            <p>46 + f₁ + f₂ + 25 + 10 + 5 = 200</p>
            <p>86 + f₁ + f₂ = 200</p>
            ${formula('f_1 + f_2 = 114 \\quad \\text{...(i)}')}
        `)}
        
        ${calcStep('Step 2: Mean Equation', `
            <p>Given: Mean (x̄) = 1.46</p>
            ${formula('\\bar{x} = \\frac{\\sum fx}{N}')}
            <p>1.46 = (140 + f₁ + 2f₂) / 200</p>
            <p>292 = 140 + f₁ + 2f₂</p>
            ${formula('f_1 + 2f_2 = 152 \\quad \\text{...(ii)}')}
        `)}
        
        ${calcStep('Step 3: Solve System of Equations', `
            <p>Subtract equation (i) from equation (ii):</p>
            <p>(f₁ + 2f₂) - (f₁ + f₂) = 152 - 114</p>
            ${formula('f_2 = 38')}
            <p>Substituting f₂ = 38 in equation (i):</p>
            <p>f₁ + 38 = 114</p>
            ${formula('f_1 = 76')}
        `)}
        
        ${answer('Missing Frequencies', 'f₁ = 76, f₂ = 38')}
    `;
}

function renderM2Q2() {
    return `
        ${header('Question 2', 'Finding Missing Frequencies x and y', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>If the mean of the distribution is 50, calculate the missing frequency for the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Class</th><th>0-20</th><th>20-40</th><th>40-60</th><th>60-80</th><th>80-100</th></tr></thead>
                        <tbody><tr><td><strong>Frequency</strong></td><td>17</td><td>?</td><td>32</td><td>?</td><td>19</td></tr></tbody>
                    </table>
                </div>
                <p>Total N = 120</p>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Class</th><th class="text-right">Mid (m)</th><th class="text-right">Freq (f)</th><th class="text-right">fm</th></tr></thead>
                    <tbody>
                        <tr><td>0-20</td><td class="text-right">10</td><td class="text-right">17</td><td class="text-right">170</td></tr>
                        <tr style="background:#fef3c7"><td>20-40</td><td class="text-right">30</td><td class="text-right">x</td><td class="text-right">30x</td></tr>
                        <tr><td>40-60</td><td class="text-right">50</td><td class="text-right">32</td><td class="text-right">1600</td></tr>
                        <tr style="background:#fef3c7"><td>60-80</td><td class="text-right">70</td><td class="text-right">y</td><td class="text-right">70y</td></tr>
                        <tr><td>80-100</td><td class="text-right">90</td><td class="text-right">19</td><td class="text-right">1710</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td colspan="2"><strong>Total</strong></td><td class="text-right"><strong>120</strong></td><td class="text-right"><strong>3480 + 30x + 70y</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        ${calcStep('Step 1: Frequency Equation', `
            <p>17 + x + 32 + y + 19 = 120</p>
            <p>68 + x + y = 120</p>
            ${formula('x + y = 52 \\quad \\text{...(i)}')}
        `)}
        
        ${calcStep('Step 2: Mean Equation', `
            <p>Mean = 50</p>
            <p>50 = (3480 + 30x + 70y) / 120</p>
            <p>6000 = 3480 + 30x + 70y</p>
            <p>30x + 70y = 2520</p>
            <p>Divide by 10:</p>
            ${formula('3x + 7y = 252 \\quad \\text{...(ii)}')}
        `)}
        
        ${calcStep('Step 3: Solve', `
            <p>From equation (i): x = 52 - y</p>
            <p>Substitute in equation (ii):</p>
            <p>3(52 - y) + 7y = 252</p>
            <p>156 - 3y + 7y = 252</p>
            <p>4y = 96</p>
            ${formula('y = 24')}
            <p>x = 52 - 24 = <strong>28</strong></p>
        `)}
        
        ${answer('Missing Frequencies', 'x = 28, y = 24')}
    `;
}

function renderM2Q4() {
    return `
        ${header('Question 4', 'Two Distributions: Finding x and y', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>For the two frequency distributions, the mean calculated from first was 25.4 and the mean calculated from second was 32.5. Find the value of x and y:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Class</th><th class="text-center">Frequency 1</th><th class="text-center">Frequency 2</th></tr></thead>
                        <tbody>
                            <tr><td>10-20</td><td class="text-center">20</td><td class="text-center">4</td></tr>
                            <tr><td>20-30</td><td class="text-center">15</td><td class="text-center">8</td></tr>
                            <tr><td>30-40</td><td class="text-center">10</td><td class="text-center">4</td></tr>
                            <tr style="background:#fef3c7"><td>40-50</td><td class="text-center">x</td><td class="text-center">2x</td></tr>
                            <tr style="background:#fef3c7"><td>50-60</td><td class="text-center">y</td><td class="text-center">y</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        ${calcStep('Distribution 1 (Mean = 25.4)', `
            <p>Σfm = 20(15) + 15(25) + 10(35) + x(45) + y(55)</p>
            <p>= 300 + 375 + 350 + 45x + 55y = 1025 + 45x + 55y</p>
            <p>N = 45 + x + y</p>
            ${formula('\\frac{1025 + 45x + 55y}{45 + x + y} = 25.4')}
            <p>1025 + 45x + 55y = 25.4(45 + x + y)</p>
            <p>1025 + 45x + 55y = 1143 + 25.4x + 25.4y</p>
            ${formula('19.6x + 29.6y = 118 \\quad \\text{...(i)}')}
        `)}
        
        ${calcStep('Distribution 2 (Mean = 32.5)', `
            <p>Σfm = 4(15) + 8(25) + 4(35) + 2x(45) + y(55)</p>
            <p>= 60 + 200 + 140 + 90x + 55y = 400 + 90x + 55y</p>
            <p>N = 16 + 2x + y</p>
            ${formula('\\frac{400 + 90x + 55y}{16 + 2x + y} = 32.5')}
            <p>400 + 90x + 55y = 32.5(16 + 2x + y)</p>
            <p>400 + 90x + 55y = 520 + 65x + 32.5y</p>
            ${formula('25x + 22.5y = 120 \\quad \\text{...(ii)}')}
        `)}
        
        ${calcStep('Solving Equations', `
            <p>Multiply (i) by 25 and (ii) by 19.6:</p>
            <p>490x + 740y = 2950</p>
            <p>490x + 441y = 2352</p>
            <p>Subtract: 299y = 598</p>
            <p>y = 2, then x = 3</p>
        `)}
        
        ${answer('Final Answer', 'x = 3, y = 2')}
    `;
}

function renderM2Q5() {
    return `
        ${header('Question 5', 'Mean & Median of Mango Weights', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>The frequency distribution of weight in grams of mangoes of a given variety is given below. Calculate the Arithmetic Mean and Median:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Weight in gm</th><th>410-419</th><th>420-429</th><th>430-439</th><th>440-449</th><th>450-459</th><th>460-469</th><th>470-479</th></tr></thead>
                        <tbody><tr><td><strong>No of mangoes</strong></td><td>14</td><td>20</td><td>42</td><td>54</td><td>45</td><td>18</td><td>7</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        ${note('Class Intervals converted to Exclusive Boundaries (±0.5 Correction Factor)')}
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Class (Exclusive)</th><th class="text-right">Mid (x)</th><th class="text-right">f</th><th class="text-right">CF</th><th class="text-right">fx</th></tr></thead>
                    <tbody>
                        <tr><td>409.5-419.5</td><td class="text-right">414.5</td><td class="text-right">14</td><td class="text-right">14</td><td class="text-right">5,803</td></tr>
                        <tr><td>419.5-429.5</td><td class="text-right">424.5</td><td class="text-right">20</td><td class="text-right">34</td><td class="text-right">8,490</td></tr>
                        <tr><td>429.5-439.5</td><td class="text-right">434.5</td><td class="text-right">42</td><td class="text-right">76</td><td class="text-right">18,249</td></tr>
                        <tr style="background:#fef3c7"><td>439.5-449.5 (Median Class)</td><td class="text-right">444.5</td><td class="text-right">54</td><td class="text-right">130</td><td class="text-right">24,003</td></tr>
                        <tr><td>449.5-459.5</td><td class="text-right">454.5</td><td class="text-right">45</td><td class="text-right">175</td><td class="text-right">20,452.5</td></tr>
                        <tr><td>459.5-469.5</td><td class="text-right">464.5</td><td class="text-right">18</td><td class="text-right">193</td><td class="text-right">8,361</td></tr>
                        <tr><td>469.5-479.5</td><td class="text-right">474.5</td><td class="text-right">7</td><td class="text-right">200</td><td class="text-right">3,321.5</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td colspan="2"><strong>Total</strong></td><td class="text-right"><strong>N = 200</strong></td><td></td><td class="text-right"><strong>88,680</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        ${calcStep('1. Arithmetic Mean', `
            ${formula('\\bar{x} = \\frac{\\sum fx}{N} = \\frac{88680}{200} = 443.4 \\text{ gm}')}
        `)}
        
        ${calcStep('2. Median', `
            <p>N/2 = 200/2 = 100</p>
            <p>Median Class = 439.5-449.5 (CF ≥ 100 is 130)</p>
            <p>L = 439.5, cf = 76, f = 54, h = 10</p>
            ${formula('Median = L + \\frac{\\frac{N}{2} - cf}{f} \\times h = 439.5 + \\frac{100-76}{54} \\times 10')}
            <p>= 439.5 + (24/54) × 10 = 439.5 + 4.44 = <strong>443.94 gm</strong></p>
        `)}
        
        ${answer('Final Answers', 'Arithmetic Mean = 443.4 gm, Median = 443.94 gm')}
    `;
}

function renderM2Q6() {
    return `
        ${header('Question 6', 'Finding Missing Frequencies (Median = 50)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>In the frequency distribution of 100 families, some number of families are missing from the table. Median is 50. Find the missing frequencies:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Expenditure</th><th>0-20</th><th>20-40</th><th>40-60</th><th>60-80</th><th>80-100</th></tr></thead>
                        <tbody><tr><td><strong>No of families</strong></td><td>14</td><td>?</td><td>27</td><td>?</td><td>15</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Expenditure</th><th class="text-right">f</th><th class="text-right">CF</th></tr></thead>
                    <tbody>
                        <tr><td>0-20</td><td class="text-right">14</td><td class="text-right">14</td></tr>
                        <tr style="background:#fef3c7"><td>20-40</td><td class="text-right">f₁</td><td class="text-right">14 + f₁</td></tr>
                        <tr style="background:#dbeafe"><td>40-60 (Median Class)</td><td class="text-right">27</td><td class="text-right">41 + f₁</td></tr>
                        <tr style="background:#fef3c7"><td>60-80</td><td class="text-right">f₂</td><td class="text-right">41 + f₁ + f₂</td></tr>
                        <tr><td>80-100</td><td class="text-right">15</td><td class="text-right">100</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>100</strong></td><td></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 1: Total Frequency Equation', `
            <p>14 + f₁ + 27 + f₂ + 15 = 100</p>
            <p>56 + f₁ + f₂ = 100</p>
            ${formula('f_1 + f_2 = 44 \\quad \\text{...(i)}')}
        `)}
        
        ${calcStep('Step 2: Median Formula (Class 40-60)', `
            <p>Given: Median = 50, N/2 = 50</p>
            <p>L = 40, cf = 14 + f₁, f = 27, h = 20</p>
            ${formula('50 = 40 + \\frac{50 - (14 + f_1)}{27} \\times 20')}
            <p>10 = [(36 - f₁)/27] × 20</p>
            <p>10 × 27 = (36 - f₁) × 20</p>
            <p>270 = 720 - 20f₁</p>
            <p>20f₁ = 450</p>
            ${formula('f_1 = 22.5 \\approx 23')}
        `)}
        
        ${calcStep('Step 3: Find f₂', `
            <p>From equation (i):</p>
            <p>f₂ = 44 - f₁ = 44 - 22.5</p>
            ${formula('f_2 = 21.5 \\approx 21')}
        `)}
        
        ${answer('Missing Frequencies', 'f₁ ≈ 23, f₂ ≈ 21')}
    `;
}

function renderM2Q7() {
    return `
        ${header('Question 7', 'Missing Frequency (Median = 2400)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Find the missing frequency from the following distribution of daily sales of shops, given that the median sale of the shops is Rs.2,400:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Sales ('00)</th><th>0-10</th><th>10-20</th><th>20-30</th><th>30-40</th><th>40-50</th></tr></thead>
                        <tbody><tr><td><strong>No. of shops</strong></td><td>5</td><td>25</td><td>----</td><td>18</td><td>7</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        ${note('Sales in 00s, so Median 2400 becomes 24. Median Class: 20-30')}
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Sales ('00)</th><th class="text-right">f</th><th class="text-right">CF</th></tr></thead>
                    <tbody>
                        <tr><td>0-10</td><td class="text-right">5</td><td class="text-right">5</td></tr>
                        <tr><td>10-20</td><td class="text-right">25</td><td class="text-right">30</td></tr>
                        <tr style="background:#fef3c7"><td>20-30 (Median Class)</td><td class="text-right">x</td><td class="text-right">30 + x</td></tr>
                        <tr><td>30-40</td><td class="text-right">18</td><td class="text-right">48 + x</td></tr>
                        <tr><td>40-50</td><td class="text-right">7</td><td class="text-right">55 + x</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>55 + x</strong></td><td></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Median Formula', `
            <p>Median = 24, N/2 = (55 + x)/2</p>
            <p>L = 20, cf = 30, f = x, h = 10</p>
            ${formula('24 = 20 + \\frac{\\frac{55+x}{2} - 30}{x} \\times 10')}
            <p>4 = [(55 + x - 60)/(2x)] × 10</p>
            <p>4 = [(x - 5)/(2x)] × 10</p>
            <p>4 × 2x = 10(x - 5)</p>
            <p>8x = 10x - 50</p>
            <p>2x = 50</p>
            ${formula('x = 25')}
        `)}
        
        ${answer('Missing Frequency', 'x = 25')}
    `;
}

function renderM2Q8() {
    return `
        ${header('Question 8', 'Mean, Median & Empirical Mode', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Find the value of Mean, Median and hence estimate the value of Mode:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Weight</th><th>93-97</th><th>98-102</th><th>103-107</th><th>108-112</th><th>113-117</th><th>118-122</th><th>123-127</th><th>128-132</th></tr></thead>
                        <tbody><tr><td><strong>No of students</strong></td><td>3</td><td>5</td><td>12</td><td>17</td><td>14</td><td>6</td><td>3</td><td>1</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Class</th><th class="text-right">f</th><th class="text-right">CF</th><th class="text-right">Mid (x)</th><th class="text-right">fx</th></tr></thead>
                    <tbody>
                        <tr><td>92.5-97.5</td><td class="text-right">3</td><td class="text-right">3</td><td class="text-right">95</td><td class="text-right">285</td></tr>
                        <tr><td>97.5-102.5</td><td class="text-right">5</td><td class="text-right">8</td><td class="text-right">100</td><td class="text-right">500</td></tr>
                        <tr><td>102.5-107.5</td><td class="text-right">12</td><td class="text-right">20</td><td class="text-right">105</td><td class="text-right">1,260</td></tr>
                        <tr style="background:#fef3c7"><td>107.5-112.5 (Median Class)</td><td class="text-right">17</td><td class="text-right">37</td><td class="text-right">110</td><td class="text-right">1,870</td></tr>
                        <tr><td>112.5-117.5</td><td class="text-right">14</td><td class="text-right">51</td><td class="text-right">115</td><td class="text-right">1,610</td></tr>
                        <tr><td>117.5-122.5</td><td class="text-right">6</td><td class="text-right">57</td><td class="text-right">120</td><td class="text-right">720</td></tr>
                        <tr><td>122.5-127.5</td><td class="text-right">3</td><td class="text-right">60</td><td class="text-right">125</td><td class="text-right">375</td></tr>
                        <tr><td>127.5-132.5</td><td class="text-right">1</td><td class="text-right">61</td><td class="text-right">130</td><td class="text-right">130</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td colspan="2"><strong>Total</strong></td><td></td><td></td><td class="text-right"><strong>6,750</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('1. Mean Calculation', `
            ${formula('\\bar{x} = \\frac{\\sum fx}{N} = \\frac{6750}{61} = 110.66')}
        `)}
        
        ${calcStep('2. Median Calculation', `
            <p>N/2 = 61/2 = 30.5, Median Class: 107.5-112.5</p>
            <p>L = 107.5, cf = 20, f = 17, h = 5</p>
            ${formula('Median = 107.5 + \\frac{30.5 - 20}{17} \\times 5 = 107.5 + 3.09 = 110.59')}
        `)}
        
        ${calcStep('3. Empirical Mode (Using Relation)', `
            ${formula('Mode = 3(Median) - 2(Mean)')}
            <p>Mode = 3(110.59) - 2(110.66)</p>
            <p>Mode = 331.77 - 221.32 = <strong>110.45</strong></p>
        `)}
        
        ${answer('Results', 'Mean = 110.66, Median = 110.59, Mode = 110.45')}
    `;
}

function renderM2Q9() {
    return `
        ${header('Question 9', 'Mode Calculation', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Calculate Mode for the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Age</th><th>20-25</th><th>25-30</th><th>30-35</th><th>35-40</th><th>40-45</th><th>45-50</th><th>50-55</th><th>55-60</th></tr></thead>
                        <tbody><tr><td><strong>Persons</strong></td><td>50</td><td>70</td><td>80</td><td>180</td><td>150</td><td>120</td><td>70</td><td>50</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Identifying Modal Class</h3>
            <div class="section-content">
                <p>Modal Class = <strong>35-40</strong> (highest frequency = 180)</p>
                <ul>
                    <li>L = 35 (Lower boundary of modal class)</li>
                    <li>f₁ = 180 (Modal frequency)</li>
                    <li>f₀ = 80 (Frequency of preceding class)</li>
                    <li>f₂ = 150 (Frequency of succeeding class)</li>
                    <li>h = 5 (Class width)</li>
                </ul>
            </div>
        </div>
        
        ${calcStep('Mode Formula', `
            ${formula('Mode = L + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h')}
            <p>Mode = 35 + [(180 - 80) / (2×180 - 80 - 150)] × 5</p>
            <p>Mode = 35 + [100 / (360 - 230)] × 5</p>
            <p>Mode = 35 + (100/130) × 5</p>
            <p>Mode = 35 + 0.769 × 5</p>
            <p>Mode = 35 + 3.85</p>
        `)}
        
        ${answer('Mode', '38.85')}
    `;
}
