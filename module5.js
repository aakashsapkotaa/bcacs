// Module 5: Index Numbers - Complete Questions & Solutions from PDF

function renderM5Q1() {
    return `
        ${header('Question 1', 'Price Index Number (Unweighted Aggregative Method)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Calculate Price index number using unweighted aggregative method for the year 2000 and 1999 on the basis of 1998 from the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Commodities</th><th colspan="3" class="text-center">Price</th></tr>
                        <tr><th></th><th>1998</th><th>1999</th><th>2000</th></tr></thead>
                        <tbody>
                            <tr><td>Cheese</td><td class="text-center">12</td><td class="text-center">15</td><td class="text-center">15.8</td></tr>
                            <tr><td>Egg</td><td class="text-center">3</td><td class="text-center">4</td><td class="text-center">3.5</td></tr>
                            <tr><td>Potato</td><td class="text-center">5</td><td class="text-center">6</td><td class="text-center">5.8</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Commodity</th><th class="text-right">Price 1998 (P₀)</th><th class="text-right">Price 1999 (P₁)</th><th class="text-right">Price 2000 (P₂)</th></tr></thead>
                    <tbody>
                        <tr><td>Cheese</td><td class="text-right">12</td><td class="text-right">15</td><td class="text-right">15.8</td></tr>
                        <tr><td>Egg</td><td class="text-right">3</td><td class="text-right">4</td><td class="text-right">3.5</td></tr>
                        <tr><td>Potato</td><td class="text-right">5</td><td class="text-right">6</td><td class="text-right">5.8</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total (Σ)</strong></td><td class="text-right"><strong>20</strong></td><td class="text-right"><strong>25</strong></td><td class="text-right"><strong>25.1</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Calculation', `
            <p><strong>1. Price Index for 1999:</strong></p>
            ${formula('P_{01} = \\frac{\\sum P_1}{\\sum P_0} \\times 100 = \\frac{25}{20} \\times 100 = 125')}
            <p><strong>2. Price Index for 2000:</strong></p>
            ${formula('P_{02} = \\frac{\\sum P_2}{\\sum P_0} \\times 100 = \\frac{25.1}{20} \\times 100 = 125.5')}
        `)}
    `;
}

function renderM5Q2() {
    return `
        ${header('Question 2', 'Laspeyre, Paasche, Marshall-Edgeworth, Dorbish-Bowley, Fisher Price Index', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Compute Laspeyre's, Paasche's, Marshall-Edgeworth's, Dorbish-Bowley's and Fisher's Price Index numbers for the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Items</th><th colspan="2" class="text-center">1995</th><th colspan="2" class="text-center">2000</th></tr>
                        <tr><th></th><th>Price</th><th>Quantity</th><th>Price</th><th>Quantity</th></tr></thead>
                        <tbody>
                            <tr><td>A</td><td class="text-center">6</td><td class="text-center">50</td><td class="text-center">10</td><td class="text-center">56</td></tr>
                            <tr><td>B</td><td class="text-center">2</td><td class="text-center">100</td><td class="text-center">2</td><td class="text-center">120</td></tr>
                            <tr><td>C</td><td class="text-center">4</td><td class="text-center">60</td><td class="text-center">6</td><td class="text-center">60</td></tr>
                            <tr><td>D</td><td class="text-center">10</td><td class="text-center">30</td><td class="text-center">12</td><td class="text-center">24</td></tr>
                            <tr><td>E</td><td class="text-center">8</td><td class="text-center">40</td><td class="text-center">12</td><td class="text-center">36</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Items</th><th class="text-right">p₀</th><th class="text-right">q₀</th><th class="text-right">p₁</th><th class="text-right">q₁</th><th class="text-right">p₀q₀</th><th class="text-right">p₀q₁</th><th class="text-right">p₁q₀</th><th class="text-right">p₁q₁</th></tr></thead>
                    <tbody>
                        <tr><td>A</td><td class="text-right">6</td><td class="text-right">50</td><td class="text-right">10</td><td class="text-right">56</td><td class="text-right">300</td><td class="text-right">336</td><td class="text-right">500</td><td class="text-right">560</td></tr>
                        <tr><td>B</td><td class="text-right">2</td><td class="text-right">100</td><td class="text-right">2</td><td class="text-right">120</td><td class="text-right">200</td><td class="text-right">240</td><td class="text-right">200</td><td class="text-right">240</td></tr>
                        <tr><td>C</td><td class="text-right">4</td><td class="text-right">60</td><td class="text-right">6</td><td class="text-right">60</td><td class="text-right">240</td><td class="text-right">240</td><td class="text-right">360</td><td class="text-right">360</td></tr>
                        <tr><td>D</td><td class="text-right">10</td><td class="text-right">30</td><td class="text-right">12</td><td class="text-right">24</td><td class="text-right">300</td><td class="text-right">240</td><td class="text-right">360</td><td class="text-right">288</td></tr>
                        <tr><td>E</td><td class="text-right">8</td><td class="text-right">40</td><td class="text-right">12</td><td class="text-right">36</td><td class="text-right">320</td><td class="text-right">288</td><td class="text-right">480</td><td class="text-right">432</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td></td><td></td><td></td><td></td><td class="text-right"><strong>1360</strong></td><td class="text-right"><strong>1344</strong></td><td class="text-right"><strong>1900</strong></td><td class="text-right"><strong>1880</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Indices', `
            <p><strong>1. Laspeyre's (L):</strong></p>
            ${formula('P_{01}(L) = \\frac{1900}{1360} \\times 100 = 139.71')}
            <p><strong>2. Paasche's (P):</strong></p>
            ${formula('P_{01}(P) = \\frac{1880}{1344} \\times 100 = 139.88')}
            <p><strong>3. Marshall-Edgeworth (ME):</strong></p>
            ${formula('P_{01}(ME) = \\frac{1900 + 1880}{1360 + 1344} \\times 100 = 139.79')}
            <p><strong>4. Dorbish-Bowley (DB):</strong></p>
            ${formula('P_{01}(DB) = \\frac{139.71 + 139.88}{2} = 139.80')}
            <p><strong>5. Fisher's (F):</strong></p>
            ${formula('P_{01}(F) = \\sqrt{139.71 \\times 139.88} = 139.79')}
        `)}
    `;
}

function renderM5Q3() {
    return `
        ${header('Question 3', 'Dorbish-Bowley and Fisher Price Index (from Expenditure)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>From the following data calculate Dorbish-Bowley's and Fisher's Price index number:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Items</th><th colspan="2" class="text-center">Base year</th><th colspan="2" class="text-center">Current year</th></tr>
                        <tr><th></th><th>Price</th><th>Total expenditure</th><th>Price</th><th>Total expenditure</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td class="text-center">2</td><td class="text-center">50</td><td class="text-center">5</td><td class="text-center">60</td></tr>
                            <tr><td>2</td><td class="text-center">4</td><td class="text-center">20</td><td class="text-center">8</td><td class="text-center">48</td></tr>
                            <tr><td>3</td><td class="text-center">1</td><td class="text-center">8</td><td class="text-center">2</td><td class="text-center">20</td></tr>
                            <tr><td>4</td><td class="text-center">5</td><td class="text-center">30</td><td class="text-center">10</td><td class="text-center">70</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        ${note('Quantities calculated as q = Expenditure/Price')}
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Items</th><th class="text-right">p₀</th><th class="text-right">Exp(p₀q₀)</th><th class="text-right">q₀</th><th class="text-right">p₁</th><th class="text-right">Exp(p₁q₁)</th><th class="text-right">q₁</th><th class="text-right">p₁q₀</th><th class="text-right">p₀q₁</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td class="text-right">2</td><td class="text-right">50</td><td class="text-right">25</td><td class="text-right">5</td><td class="text-right">60</td><td class="text-right">12</td><td class="text-right">125</td><td class="text-right">24</td></tr>
                        <tr><td>2</td><td class="text-right">4</td><td class="text-right">20</td><td class="text-right">5</td><td class="text-right">8</td><td class="text-right">48</td><td class="text-right">6</td><td class="text-right">40</td><td class="text-right">24</td></tr>
                        <tr><td>3</td><td class="text-right">1</td><td class="text-right">8</td><td class="text-right">8</td><td class="text-right">2</td><td class="text-right">20</td><td class="text-right">10</td><td class="text-right">16</td><td class="text-right">10</td></tr>
                        <tr><td>4</td><td class="text-right">5</td><td class="text-right">30</td><td class="text-right">6</td><td class="text-right">10</td><td class="text-right">70</td><td class="text-right">7</td><td class="text-right">60</td><td class="text-right">35</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td></td><td class="text-right"><strong>108</strong></td><td></td><td></td><td class="text-right"><strong>198</strong></td><td></td><td class="text-right"><strong>241</strong></td><td class="text-right"><strong>93</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Indices', `
            <p>L = (241/108) × 100 = <strong>223.15</strong></p>
            <p>P = (198/93) × 100 = <strong>212.90</strong></p>
            <p><strong>1. Dorbish-Bowley:</strong></p>
            ${formula('P_{01}(DB) = \\frac{223.15 + 212.90}{2} = 218.03')}
            <p><strong>2. Fisher:</strong></p>
            ${formula('P_{01}(F) = \\sqrt{223.15 \\times 212.90} = 217.96')}
        `)}
    `;
}

function renderM5Q4() {
    return `
        ${header('Question 4', 'Quantity Index Numbers', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Compute Laspeyre's, Paasche's, Marshall-Edgeworth's, Dorbish-Bowley's and Fisher's Quantity Index number from the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Items</th><th colspan="2" class="text-center">2006</th><th colspan="2" class="text-center">2010</th></tr>
                        <tr><th></th><th>Price</th><th>Quantity</th><th>Price</th><th>Quantity</th></tr></thead>
                        <tbody>
                            <tr><td>A</td><td class="text-center">8</td><td class="text-center">50</td><td class="text-center">10</td><td class="text-center">60</td></tr>
                            <tr><td>B</td><td class="text-center">4</td><td class="text-center">80</td><td class="text-center">5</td><td class="text-center">100</td></tr>
                            <tr><td>C</td><td class="text-center">6</td><td class="text-center">70</td><td class="text-center">6</td><td class="text-center">60</td></tr>
                            <tr><td>D</td><td class="text-center">5</td><td class="text-center">30</td><td class="text-center">7</td><td class="text-center">50</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Items</th><th class="text-right">p₀</th><th class="text-right">q₀</th><th class="text-right">p₁</th><th class="text-right">q₁</th><th class="text-right">p₀q₀</th><th class="text-right">p₁q₀</th><th class="text-right">p₀q₁</th><th class="text-right">p₁q₁</th></tr></thead>
                    <tbody>
                        <tr><td>A</td><td class="text-right">8</td><td class="text-right">50</td><td class="text-right">10</td><td class="text-right">60</td><td class="text-right">400</td><td class="text-right">500</td><td class="text-right">480</td><td class="text-right">600</td></tr>
                        <tr><td>B</td><td class="text-right">4</td><td class="text-right">80</td><td class="text-right">5</td><td class="text-right">100</td><td class="text-right">320</td><td class="text-right">400</td><td class="text-right">400</td><td class="text-right">500</td></tr>
                        <tr><td>C</td><td class="text-right">6</td><td class="text-right">70</td><td class="text-right">6</td><td class="text-right">60</td><td class="text-right">420</td><td class="text-right">420</td><td class="text-right">360</td><td class="text-right">360</td></tr>
                        <tr><td>D</td><td class="text-right">5</td><td class="text-right">30</td><td class="text-right">7</td><td class="text-right">50</td><td class="text-right">150</td><td class="text-right">210</td><td class="text-right">250</td><td class="text-right">350</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td></td><td></td><td></td><td></td><td class="text-right"><strong>1290</strong></td><td class="text-right"><strong>1530</strong></td><td class="text-right"><strong>1490</strong></td><td class="text-right"><strong>1810</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Indices', `
            <p><strong>1. Laspeyre's Qty (Q_L):</strong></p>
            ${formula('Q_{01}(L) = \\frac{1490}{1290} \\times 100 = 115.50')}
            <p><strong>2. Paasche's Qty (Q_P):</strong></p>
            ${formula('Q_{01}(P) = \\frac{1810}{1530} \\times 100 = 118.30')}
            <p><strong>3. Marshall-Edgeworth (Q_ME):</strong></p>
            ${formula('Q_{01}(ME) = \\frac{1490 + 1810}{1290 + 1530} \\times 100 = 117.02')}
            <p><strong>4. Dorbish-Bowley (Q_DB):</strong></p>
            ${formula('Q_{01}(DB) = \\frac{115.50 + 118.30}{2} = 116.90')}
            <p><strong>5. Fisher (Q_F):</strong></p>
            ${formula('Q_{01}(F) = \\sqrt{115.50 \\times 118.30} = 116.89')}
        `)}
    `;
}

function renderM5Q5() {
    return `
        ${header('Question 5', 'Marshall-Edgeworth, Dorbish-Bowley, Fisher Quantity Index', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>For the following data compute Marshall Edgeworth's, Dorbish Bowley's and Fisher's quantity index number:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Commodity</th><th colspan="2" class="text-center">Base year</th><th colspan="2" class="text-center">Current year</th></tr>
                        <tr><th></th><th>Quantity</th><th>Value</th><th>Quantity</th><th>Value</th></tr></thead>
                        <tbody>
                            <tr><td>A</td><td class="text-center">50</td><td class="text-center">350</td><td class="text-center">60</td><td class="text-center">420</td></tr>
                            <tr><td>B</td><td class="text-center">120</td><td class="text-center">600</td><td class="text-center">140</td><td class="text-center">700</td></tr>
                            <tr><td>C</td><td class="text-center">30</td><td class="text-center">330</td><td class="text-center">20</td><td class="text-center">200</td></tr>
                            <tr><td>D</td><td class="text-center">20</td><td class="text-center">360</td><td class="text-center">15</td><td class="text-center">300</td></tr>
                            <tr><td>E</td><td class="text-center">5</td><td class="text-center">40</td><td class="text-center">5</td><td class="text-center">50</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        ${note('Prices calculated as p = Value/Quantity')}
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Item</th><th class="text-right">q₀</th><th class="text-right">Val(p₀q₀)</th><th class="text-right">p₀</th><th class="text-right">q₁</th><th class="text-right">Val(p₁q₁)</th><th class="text-right">p₁</th><th class="text-right">p₀q₁</th><th class="text-right">p₁q₀</th></tr></thead>
                    <tbody>
                        <tr><td>A</td><td class="text-right">50</td><td class="text-right">350</td><td class="text-right">7</td><td class="text-right">60</td><td class="text-right">420</td><td class="text-right">7</td><td class="text-right">420</td><td class="text-right">350</td></tr>
                        <tr><td>B</td><td class="text-right">120</td><td class="text-right">600</td><td class="text-right">5</td><td class="text-right">140</td><td class="text-right">700</td><td class="text-right">5</td><td class="text-right">700</td><td class="text-right">600</td></tr>
                        <tr><td>C</td><td class="text-right">30</td><td class="text-right">330</td><td class="text-right">11</td><td class="text-right">20</td><td class="text-right">200</td><td class="text-right">10</td><td class="text-right">220</td><td class="text-right">300</td></tr>
                        <tr><td>D</td><td class="text-right">20</td><td class="text-right">360</td><td class="text-right">18</td><td class="text-right">15</td><td class="text-right">300</td><td class="text-right">20</td><td class="text-right">270</td><td class="text-right">400</td></tr>
                        <tr><td>E</td><td class="text-right">5</td><td class="text-right">40</td><td class="text-right">8</td><td class="text-right">5</td><td class="text-right">50</td><td class="text-right">10</td><td class="text-right">40</td><td class="text-right">50</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td></td><td class="text-right"><strong>1680</strong></td><td></td><td></td><td class="text-right"><strong>1670</strong></td><td></td><td class="text-right"><strong>1650</strong></td><td class="text-right"><strong>1700</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Indices', `
            <p>Q_L = (1650/1680) × 100 = <strong>98.21</strong></p>
            <p>Q_P = (1670/1700) × 100 = <strong>98.24</strong></p>
            <p><strong>1. Marshall-Edgeworth:</strong></p>
            ${formula('Q_{01}(ME) = \\frac{1650 + 1670}{1680 + 1700} \\times 100 = 98.22')}
            <p><strong>2. Dorbish-Bowley:</strong></p>
            ${formula('Q_{01}(DB) = \\frac{98.21 + 98.24}{2} = 98.23')}
            <p><strong>3. Fisher:</strong></p>
            ${formula('Q_{01}(F) = \\sqrt{98.21 \\times 98.24} = 98.22')}
        `)}
    `;
}

function renderM5Q6() {
    return `
        ${header('Question 6', 'Value Index Number', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Compute value index number for the following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Items</th><th colspan="2" class="text-center">2008</th><th colspan="2" class="text-center">2010</th></tr>
                        <tr><th></th><th>Price</th><th>Quantity</th><th>Price</th><th>Quantity</th></tr></thead>
                        <tbody>
                            <tr><td>A</td><td class="text-center">9</td><td class="text-center">10</td><td class="text-center">10</td><td class="text-center">11</td></tr>
                            <tr><td>B</td><td class="text-center">10</td><td class="text-center">9</td><td class="text-center">11</td><td class="text-center">10</td></tr>
                            <tr><td>C</td><td class="text-center">7</td><td class="text-center">8</td><td class="text-center">8</td><td class="text-center">10</td></tr>
                            <tr><td>D</td><td class="text-center">15</td><td class="text-center">8</td><td class="text-center">15</td><td class="text-center">9</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Items</th><th class="text-right">p₀</th><th class="text-right">q₀</th><th class="text-right">V₀(p₀q₀)</th><th class="text-right">p₁</th><th class="text-right">q₁</th><th class="text-right">V₁(p₁q₁)</th></tr></thead>
                    <tbody>
                        <tr><td>A</td><td class="text-right">9</td><td class="text-right">10</td><td class="text-right">90</td><td class="text-right">10</td><td class="text-right">11</td><td class="text-right">110</td></tr>
                        <tr><td>B</td><td class="text-right">10</td><td class="text-right">9</td><td class="text-right">90</td><td class="text-right">11</td><td class="text-right">10</td><td class="text-right">110</td></tr>
                        <tr><td>C</td><td class="text-right">7</td><td class="text-right">8</td><td class="text-right">56</td><td class="text-right">8</td><td class="text-right">10</td><td class="text-right">80</td></tr>
                        <tr><td>D</td><td class="text-right">15</td><td class="text-right">8</td><td class="text-right">120</td><td class="text-right">15</td><td class="text-right">9</td><td class="text-right">135</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td></td><td></td><td class="text-right"><strong>356</strong></td><td></td><td></td><td class="text-right"><strong>435</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Calculation', `
            ${formula('V_{01} = \\frac{\\sum p_1q_1}{\\sum p_0q_0} \\times 100 = \\frac{435}{356} \\times 100 = 122.19')}
        `)}
    `;
}

function renderM5Q7() {
    return `
        ${header('Question 7', 'Index Verification (FRT and TRT)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Using the following data verify:</strong></p>
                <p>a. Laspeyre's index satisfies FRT</p>
                <p>b. Marshall-Edgeworth index number satisfies TRT</p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Commodity</th><th colspan="2" class="text-center">Base year</th><th colspan="2" class="text-center">Current year</th></tr>
                        <tr><th></th><th>Price</th><th>Value</th><th>Price</th><th>Value</th></tr></thead>
                        <tbody>
                            <tr><td>Rice</td><td class="text-center">40</td><td class="text-center">800</td><td class="text-center">45</td><td class="text-center">990</td></tr>
                            <tr><td>Wheat</td><td class="text-center">25</td><td class="text-center">400</td><td class="text-center">30</td><td class="text-center">450</td></tr>
                            <tr><td>Oil</td><td class="text-center">95</td><td class="text-center">760</td><td class="text-center">95</td><td class="text-center">855</td></tr>
                            <tr><td>Fish</td><td class="text-center">110</td><td class="text-center">1100</td><td class="text-center">120</td><td class="text-center">1200</td></tr>
                            <tr><td>Milk</td><td class="text-center">80</td><td class="text-center">480</td><td class="text-center">90</td><td class="text-center">630</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table (q = Value/Price)</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Item</th><th class="text-right">p₀</th><th class="text-right">Val(p₀q₀)</th><th class="text-right">q₀</th><th class="text-right">p₁</th><th class="text-right">Val(p₁q₁)</th><th class="text-right">q₁</th><th class="text-right">p₁q₀</th><th class="text-right">p₀q₁</th></tr></thead>
                    <tbody>
                        <tr><td>Rice</td><td class="text-right">40</td><td class="text-right">800</td><td class="text-right">20</td><td class="text-right">45</td><td class="text-right">990</td><td class="text-right">22</td><td class="text-right">900</td><td class="text-right">880</td></tr>
                        <tr><td>Wheat</td><td class="text-right">25</td><td class="text-right">400</td><td class="text-right">16</td><td class="text-right">30</td><td class="text-right">450</td><td class="text-right">15</td><td class="text-right">480</td><td class="text-right">375</td></tr>
                        <tr><td>Oil</td><td class="text-right">95</td><td class="text-right">760</td><td class="text-right">8</td><td class="text-right">95</td><td class="text-right">855</td><td class="text-right">9</td><td class="text-right">760</td><td class="text-right">855</td></tr>
                        <tr><td>Fish</td><td class="text-right">110</td><td class="text-right">1100</td><td class="text-right">10</td><td class="text-right">120</td><td class="text-right">1200</td><td class="text-right">10</td><td class="text-right">1200</td><td class="text-right">1100</td></tr>
                        <tr><td>Milk</td><td class="text-right">80</td><td class="text-right">480</td><td class="text-right">6</td><td class="text-right">90</td><td class="text-right">630</td><td class="text-right">7</td><td class="text-right">540</td><td class="text-right">560</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td></td><td class="text-right"><strong>3540</strong></td><td></td><td></td><td class="text-right"><strong>4125</strong></td><td></td><td class="text-right"><strong>3880</strong></td><td class="text-right"><strong>3770</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Laspeyre Factor Reversal Test (FRT)', `
            <p>P_L = 3880/3540 = <strong>1.096</strong></p>
            <p>Q_L = 3770/3540 = <strong>1.065</strong></p>
            <p>P_L × Q_L = <strong>1.167</strong></p>
            <p>Value Index = 4125/3540 = <strong>1.165</strong></p>
            <p><strong>Result: 1.167 ≠ 1.165. FRT Not Satisfied.</strong></p>
        `)}
        
        ${calcStep('Step 3: Marshall-Edgeworth Time Reversal Test (TRT)', `
            <p>P₀₁(ME) = (3880+4125)/(3540+3770) = 8005/7310</p>
            <p>P₁₀(ME) = (3770+3540)/(4125+3880) = 7310/8005</p>
            <p><strong>Product = 1. TRT Satisfied.</strong></p>
        `)}
    `;
}

function renderM5Q8() {
    return `
        ${header('Question 8', 'Fisher Price Index (TRT & FRT)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Show that Fisher's Ideal Index satisfies both Time Reversal Test and Factor Reversal Test</strong></p>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Item</th><th class="text-right">p₀q₀</th><th class="text-right">p₁q₀</th><th class="text-right">p₀q₁</th><th class="text-right">p₁q₁</th></tr></thead>
                    <tbody>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>472</strong></td><td class="text-right"><strong>541</strong></td><td class="text-right"><strong>503</strong></td><td class="text-right"><strong>579</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Fisher Index Calculation', `
            ${formula('P_{01}(F) = \\sqrt{\\frac{541}{472} \\times \\frac{579}{503}} \\times 100 = \\sqrt{1.1462 \\times 1.1511} \\times 100 = 114.86')}
        `)}
        
        ${calcStep('Step 3: Test Verification', `
            <p><strong>TRT:</strong> P₀₁ × P₁₀ = 1. (Verified by formula symmetry).</p>
            <p><strong>FRT:</strong> P₀₁ × Q₀₁ = 579/472 (Value Index). (Verified by formula symmetry).</p>
        `)}
        
        ${answer('Conclusion', 'Fisher Index satisfies BOTH TRT and FRT')}
    `;
}

function renderM5Q9() {
    return `
        ${header('Question 9', 'Consumer Price Index (Aggregative)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Calculate CPI for the year 2012 w.r.t base 2005:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Commodity</th><th class="text-right">No.of Units</th><th colspan="2" class="text-center">Price</th></tr>
                        <tr><th></th><th></th><th>2005</th><th>2012</th></tr></thead>
                        <tbody>
                            <tr><td>Rice</td><td class="text-right">4</td><td class="text-right">1600</td><td class="text-right">3800</td></tr>
                            <tr><td>Sugar</td><td class="text-right">0.6</td><td class="text-right">1500</td><td class="text-right">3200</td></tr>
                            <tr><td>Dhal</td><td class="text-right">1</td><td class="text-right">2100</td><td class="text-right">6400</td></tr>
                            <tr><td>Tea</td><td class="text-right">3</td><td class="text-right">60</td><td class="text-right">100</td></tr>
                            <tr><td>Fuel</td><td class="text-right">12</td><td class="text-right">400</td><td class="text-right">1000</td></tr>
                            <tr><td>Cloth</td><td class="text-right">1</td><td class="text-right">500</td><td class="text-right">600</td></tr>
                            <tr><td>House Rent</td><td class="text-right">12</td><td class="text-right">1500</td><td class="text-right">3200</td></tr>
                            <tr><td>Miscellaneous</td><td class="text-right">12</td><td class="text-right">2000</td><td class="text-right">3000</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table (q₀ = Units)</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Item</th><th class="text-right">q₀</th><th class="text-right">p₀</th><th class="text-right">p₁</th><th class="text-right">p₀q₀</th><th class="text-right">p₁q₀</th></tr></thead>
                    <tbody>
                        <tr><td>Rice</td><td class="text-right">4</td><td class="text-right">1600</td><td class="text-right">3800</td><td class="text-right">6,400</td><td class="text-right">15,200</td></tr>
                        <tr><td>Sugar</td><td class="text-right">0.6</td><td class="text-right">1500</td><td class="text-right">3200</td><td class="text-right">900</td><td class="text-right">1,920</td></tr>
                        <tr><td>Dhal</td><td class="text-right">1</td><td class="text-right">2100</td><td class="text-right">6400</td><td class="text-right">2,100</td><td class="text-right">6,400</td></tr>
                        <tr><td>Tea</td><td class="text-right">3</td><td class="text-right">60</td><td class="text-right">100</td><td class="text-right">180</td><td class="text-right">300</td></tr>
                        <tr><td>Fuel</td><td class="text-right">12</td><td class="text-right">400</td><td class="text-right">1000</td><td class="text-right">4,800</td><td class="text-right">12,000</td></tr>
                        <tr><td>Cloth</td><td class="text-right">1</td><td class="text-right">500</td><td class="text-right">600</td><td class="text-right">500</td><td class="text-right">600</td></tr>
                        <tr><td>Rent</td><td class="text-right">12</td><td class="text-right">1500</td><td class="text-right">3200</td><td class="text-right">18,000</td><td class="text-right">38,400</td></tr>
                        <tr><td>Misc.</td><td class="text-right">12</td><td class="text-right">2000</td><td class="text-right">3000</td><td class="text-right">24,000</td><td class="text-right">36,000</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td colspan="4"><strong>Total</strong></td><td class="text-right"><strong>56,880</strong></td><td class="text-right"><strong>110,820</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Calculation', `
            ${formula('CPI = \\frac{110,820}{56,880} \\times 100 = 194.83')}
        `)}
    `;
}

function renderM5Q10() {
    return `
        ${header('Question 10', 'Cost of Living Index (Aggregative)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Compute Cost of Living Index using Aggregative method</strong></p>
            </div>
        </div>
        
        ${note('q₀ = Exp/p₀')}
        
        <div class="section">
            <h3 class="section-title">📊 Computation Summary</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Total</th><th class="text-right">p₀q₀</th><th class="text-right">p₁q₀</th></tr></thead>
                    <tbody>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Sum</strong></td><td class="text-right"><strong>7,770</strong></td><td class="text-right"><strong>9,575</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Calculation', `
            ${formula('CLI = \\frac{9,575}{7,770} \\times 100 = 123.23')}
        `)}
    `;
}

function renderM5Q11() {
    return `
        ${header('Question 11', 'CLI (Weighted Average of Price Relatives)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Compute CLI using following data:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Item</th><th class="text-right">Weight</th><th colspan="2" class="text-center">Price</th></tr>
                        <tr><th></th><th></th><th>Base year</th><th>Current year</th></tr></thead>
                        <tbody>
                            <tr><td>Food</td><td class="text-right">10</td><td class="text-right">200</td><td class="text-right">250</td></tr>
                            <tr><td>House rent</td><td class="text-right">5</td><td class="text-right">80</td><td class="text-right">120</td></tr>
                            <tr><td>Clothing</td><td class="text-right">3</td><td class="text-right">40</td><td class="text-right">50</td></tr>
                            <tr><td>Fuel and Lighting</td><td class="text-right">4</td><td class="text-right">50</td><td class="text-right">70</td></tr>
                            <tr><td>Miscellaneous</td><td class="text-right">5</td><td class="text-right">80</td><td class="text-right">100</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table (R = p₁/p₀ × 100)</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Item</th><th class="text-right">W</th><th class="text-right">p₀</th><th class="text-right">p₁</th><th class="text-right">R</th><th class="text-right">RW</th></tr></thead>
                    <tbody>
                        <tr><td>Food</td><td class="text-right">10</td><td class="text-right">200</td><td class="text-right">250</td><td class="text-right">125</td><td class="text-right">1250</td></tr>
                        <tr><td>Rent</td><td class="text-right">5</td><td class="text-right">80</td><td class="text-right">120</td><td class="text-right">150</td><td class="text-right">750</td></tr>
                        <tr><td>Cloth</td><td class="text-right">3</td><td class="text-right">40</td><td class="text-right">50</td><td class="text-right">125</td><td class="text-right">375</td></tr>
                        <tr><td>Fuel</td><td class="text-right">4</td><td class="text-right">50</td><td class="text-right">70</td><td class="text-right">140</td><td class="text-right">560</td></tr>
                        <tr><td>Misc</td><td class="text-right">5</td><td class="text-right">80</td><td class="text-right">100</td><td class="text-right">125</td><td class="text-right">625</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>27</strong></td><td></td><td></td><td></td><td class="text-right"><strong>3560</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Calculation', `
            ${formula('CLI = \\frac{3560}{27} = 131.85')}
        `)}
    `;
}

function renderM5Q12() {
    return `
        ${header('Question 12', 'CLI (Family Budget Method)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Compute Cost of living using Family Budget method:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Item</th><th colspan="2" class="text-center">2004</th><th class="text-center">2005</th></tr>
                        <tr><th></th><th>Price</th><th>Quantity</th><th>Price</th></tr></thead>
                        <tbody>
                            <tr><td>Food</td><td class="text-center">220</td><td class="text-center">30</td><td class="text-center">200</td></tr>
                            <tr><td>House rent</td><td class="text-center">60</td><td class="text-center">10</td><td class="text-center">60</td></tr>
                            <tr><td>Clothing</td><td class="text-center">40</td><td class="text-center">25</td><td class="text-center">50</td></tr>
                            <tr><td>Fuel</td><td class="text-center">20</td><td class="text-center">30</td><td class="text-center">20</td></tr>
                            <tr><td>Others</td><td class="text-center">70</td><td class="text-center">40</td><td class="text-center">70</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table (W = p₀q₀)</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Item</th><th class="text-right">p₀</th><th class="text-right">q₀</th><th class="text-right">p₁</th><th class="text-right">W</th><th class="text-right">R</th><th class="text-right">RW</th></tr></thead>
                    <tbody>
                        <tr><td>Food</td><td class="text-right">220</td><td class="text-right">30</td><td class="text-right">200</td><td class="text-right">6,600</td><td class="text-right">90.91</td><td class="text-right">600,006</td></tr>
                        <tr><td>Rent</td><td class="text-right">60</td><td class="text-right">10</td><td class="text-right">60</td><td class="text-right">600</td><td class="text-right">100</td><td class="text-right">60,000</td></tr>
                        <tr><td>Cloth</td><td class="text-right">40</td><td class="text-right">25</td><td class="text-right">50</td><td class="text-right">1,000</td><td class="text-right">125</td><td class="text-right">125,000</td></tr>
                        <tr><td>Fuel</td><td class="text-right">20</td><td class="text-right">30</td><td class="text-right">20</td><td class="text-right">600</td><td class="text-right">100</td><td class="text-right">60,000</td></tr>
                        <tr><td>Others</td><td class="text-right">70</td><td class="text-right">40</td><td class="text-right">70</td><td class="text-right">2,800</td><td class="text-right">100</td><td class="text-right">280,000</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td></td><td></td><td></td><td class="text-right"><strong>11,600</strong></td><td></td><td class="text-right"><strong>1,125,006</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Calculation', `
            ${formula('CLI = \\frac{1,125,006}{11,600} = 96.98')}
        `)}
    `;
}

function renderM5Q13() {
    return `
        ${header('Question 13', 'CPI (Price Index & Percentage Expenditure)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>From the following data calculate consumer price index number:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Item</th><th class="text-right">Price Index</th><th class="text-right">Percentage Expenditure</th></tr></thead>
                        <tbody>
                            <tr><td>Food</td><td class="text-right">225</td><td class="text-right">40</td></tr>
                            <tr><td>House rent</td><td class="text-right">250</td><td class="text-right">14</td></tr>
                            <tr><td>Clothing</td><td class="text-right">150</td><td class="text-right">12</td></tr>
                            <tr><td>Fuel and Lighting</td><td class="text-right">175</td><td class="text-right">16</td></tr>
                            <tr><td>Miscellaneous</td><td class="text-right">140</td><td class="text-right">19</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Step 1: Computation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Item</th><th class="text-right">Price Index (I)</th><th class="text-right">% Exp (W)</th><th class="text-right">IW</th></tr></thead>
                    <tbody>
                        <tr><td>Food</td><td class="text-right">225</td><td class="text-right">40</td><td class="text-right">9,000</td></tr>
                        <tr><td>House Rent</td><td class="text-right">250</td><td class="text-right">14</td><td class="text-right">3,500</td></tr>
                        <tr><td>Clothing</td><td class="text-right">150</td><td class="text-right">12</td><td class="text-right">1,800</td></tr>
                        <tr><td>Fuel</td><td class="text-right">175</td><td class="text-right">16</td><td class="text-right">2,800</td></tr>
                        <tr><td>Misc</td><td class="text-right">140</td><td class="text-right">19</td><td class="text-right">2,660</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td></td><td class="text-right"><strong>101</strong></td><td class="text-right"><strong>19,760</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Step 2: Calculation', `
            ${formula('CPI = \\frac{\\sum IW}{\\sum W} = \\frac{19,760}{101} = 195.64')}
        `)}
    `;
}
