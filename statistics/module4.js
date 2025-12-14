// Module 4: Time Series Analysis - Complete Questions & Solutions

function renderM4Q1() {
    return `
        ${header('Question 1', 'Linear Trend by Least Squares Method', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>For the following time series, fit a linear trend by the method of least squares. Estimate the sales for the year 2010:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Year</th><th>1980</th><th>1985</th><th>1990</th><th>1995</th><th>2000</th><th>2005</th></tr></thead>
                        <tbody><tr><td><strong>Sale</strong></td><td>16</td><td>20</td><td>18</td><td>15</td><td>18</td><td>21</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Year</th><th class="text-right">Sales (Y)</th><th class="text-right">X</th><th class="text-right">X²</th><th class="text-right">XY</th></tr></thead>
                    <tbody>
                        <tr><td>1980</td><td class="text-right">16</td><td class="text-right">-5</td><td class="text-right">25</td><td class="text-right">-80</td></tr>
                        <tr><td>1985</td><td class="text-right">20</td><td class="text-right">-3</td><td class="text-right">9</td><td class="text-right">-60</td></tr>
                        <tr><td>1990</td><td class="text-right">18</td><td class="text-right">-1</td><td class="text-right">1</td><td class="text-right">-18</td></tr>
                        <tr><td>1995</td><td class="text-right">15</td><td class="text-right">1</td><td class="text-right">1</td><td class="text-right">15</td></tr>
                        <tr><td>2000</td><td class="text-right">18</td><td class="text-right">3</td><td class="text-right">9</td><td class="text-right">54</td></tr>
                        <tr><td>2005</td><td class="text-right">21</td><td class="text-right">5</td><td class="text-right">25</td><td class="text-right">105</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>108</strong></td><td class="text-right"><strong>0</strong></td><td class="text-right"><strong>70</strong></td><td class="text-right"><strong>16</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${note('N = 6 (Even). Origin: Between 1990 & 1995 = 1992.5. X = (Year - 1992.5)/2.5')}
        
        ${calcStep('Normal Equations (ΣX = 0)', `
            ${formula('a = \\frac{\\sum Y}{N} = \\frac{108}{6} = 18')}
            ${formula('b = \\frac{\\sum XY}{\\sum X^2} = \\frac{16}{70} = 0.229')}
        `)}
        
        ${calcStep('Linear Trend Equation', `
            ${formula('Y_c = 18 + 0.229X')}
        `)}
        
        ${calcStep('Estimate for 2010', `
            <p>X for 2010 = (2010 - 1992.5)/2.5 = 17.5/2.5 = 7</p>
            <p>Y₂₀₁₀ = 18 + 0.229(7) = 18 + 1.60 = <strong>19.60</strong></p>
        `)}
        
        ${answer('Sales Estimate for 2010', '19.60')}
    `;
}

function renderM4Q2() {
    return `
        ${header('Question 2', 'Time Series Definition & Components', 'theory')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Define Time Series. Explain the components of time series.</strong></p>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📖 Definition of Time Series</h3>
            <div class="section-content">
                <p>A <strong>Time Series</strong> is a set of observations taken at specified times, usually at equal intervals. It is a statistical data arranged in chronological order showing changes over time.</p>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Components of Time Series</h3>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong class="info-box-title">1. Secular Trend (T)</strong>
                    <p>The general tendency of data to increase or decrease over a long period of time. It shows the long-term movement in the data.</p>
                    <p><em>Example: Population growth, increase in prices over decades</em></p>
                </div>
                <div class="info-box info-box-green">
                    <strong class="info-box-title">2. Seasonal Variation (S)</strong>
                    <p>Regular variations that repeat within a year or shorter period. These are predictable and occur at fixed intervals.</p>
                    <p><em>Example: Umbrella sales in monsoon, ice cream sales in summer</em></p>
                </div>
                <div class="info-box info-box-yellow">
                    <strong class="info-box-title">3. Cyclical Variation (C)</strong>
                    <p>Long-term oscillations or swings about a trend line lasting more than a year. Often related to business cycles.</p>
                    <p><em>Example: Economic boom and recession cycles</em></p>
                </div>
                <div class="info-box info-box-purple">
                    <strong class="info-box-title">4. Irregular/Random Variation (I)</strong>
                    <p>Unpredictable, erratic movements that cannot be attributed to trend, seasonal, or cyclical factors.</p>
                    <p><em>Example: Effects of earthquakes, wars, strikes</em></p>
                </div>
            </div>
        </div>
        
        ${section('Mathematical Models', `
            <ul>
                <li><strong>Additive Model:</strong> Y = T + S + C + I</li>
                <li><strong>Multiplicative Model:</strong> Y = T × S × C × I</li>
            </ul>
        `)}
    `;
}

function renderM4Q3() {
    return `
        ${header('Question 3', 'Uses of Time Series', 'theory')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Write the uses of time series.</strong></p>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Uses of Time Series Analysis</h3>
            <ul class="bullet-list">
                <li><span class="bullet-dot bullet-blue"></span><span><strong>Understanding Past Behavior:</strong> Helps in understanding historical patterns and trends in data.</span></li>
                <li><span class="bullet-dot bullet-green"></span><span><strong>Forecasting:</strong> Enables prediction of future values based on past patterns.</span></li>
                <li><span class="bullet-dot bullet-purple"></span><span><strong>Planning:</strong> Helps businesses make informed decisions for production, inventory, and sales.</span></li>
                <li><span class="bullet-dot bullet-red"></span><span><strong>Comparison:</strong> Allows comparison of different time periods to identify changes.</span></li>
                <li><span class="bullet-dot bullet-blue"></span><span><strong>Policy Making:</strong> Government uses time series for economic policies and budgeting.</span></li>
                <li><span class="bullet-dot bullet-green"></span><span><strong>Seasonal Adjustment:</strong> Helps in removing seasonal effects to see underlying trends.</span></li>
                <li><span class="bullet-dot bullet-purple"></span><span><strong>Evaluation:</strong> Used to evaluate the effectiveness of past decisions and policies.</span></li>
            </ul>
        </div>
    `;
}

function renderM4Q4() {
    return `
        ${header('Question 4', 'Seasonal Index (Additive & Multiplicative)', 'table')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Below are given figures of production of sugar factory:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Year</th><th>1998</th><th>1999</th><th>2000</th><th>2001</th><th>2002</th><th>2003</th><th>2004</th><th>2005</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Production</strong></td><td>80</td><td>75</td><td>90</td><td>91</td><td>85</td><td>91</td><td>98</td><td>90</td></tr>
                            <tr><td><strong>Trend</strong></td><td>81</td><td>83</td><td>85</td><td>87</td><td>89</td><td>91</td><td>93</td><td>95</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>i) Compute short-term fluctuations<br>ii) Eliminate trend by using additive and multiplicative models</p>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Year</th><th class="text-right">Y (Actual)</th><th class="text-right">Trend (T)</th><th class="text-right">Y - T (Additive)</th><th class="text-right">Y/T (Multiplicative)</th></tr></thead>
                    <tbody>
                        <tr><td>1998</td><td class="text-right">80</td><td class="text-right">81</td><td class="text-right">-1</td><td class="text-right">0.988</td></tr>
                        <tr><td>1999</td><td class="text-right">75</td><td class="text-right">83</td><td class="text-right">-8</td><td class="text-right">0.904</td></tr>
                        <tr><td>2000</td><td class="text-right">90</td><td class="text-right">85</td><td class="text-right">5</td><td class="text-right">1.059</td></tr>
                        <tr><td>2001</td><td class="text-right">91</td><td class="text-right">87</td><td class="text-right">4</td><td class="text-right">1.046</td></tr>
                        <tr><td>2002</td><td class="text-right">85</td><td class="text-right">89</td><td class="text-right">-4</td><td class="text-right">0.955</td></tr>
                        <tr><td>2003</td><td class="text-right">91</td><td class="text-right">91</td><td class="text-right">0</td><td class="text-right">1.000</td></tr>
                        <tr><td>2004</td><td class="text-right">98</td><td class="text-right">93</td><td class="text-right">5</td><td class="text-right">1.054</td></tr>
                        <tr><td>2005</td><td class="text-right">90</td><td class="text-right">95</td><td class="text-right">-5</td><td class="text-right">0.947</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${section('Interpretation', `
            <ul>
                <li><strong>Additive Model (Y - T):</strong> Short-term fluctuations are obtained by subtracting trend from actual values. Positive values indicate above-trend performance.</li>
                <li><strong>Multiplicative Model (Y/T):</strong> Values > 1 indicate above-trend performance, values < 1 indicate below-trend.</li>
            </ul>
        `)}
    `;
}

function renderM4Q5() {
    return `
        ${header('Question 5', 'Linear Trend Equation (Company Sales)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>The sales of a company in million of rupees are given below:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Year</th><th>1994</th><th>1995</th><th>1996</th><th>1997</th><th>1998</th><th>1999</th><th>2000</th><th>2001</th></tr></thead>
                        <tbody><tr><td><strong>Sales</strong></td><td>550</td><td>560</td><td>555</td><td>585</td><td>540</td><td>524</td><td>545</td><td>585</td></tr></tbody>
                    </table>
                </div>
                <p>i) Find linear trend equation<br>ii) Estimate the sales for the year 1993<br>iii) Find the slope of the straight line trend<br>iv) Do the figures show a rising trend or a falling trend?</p>
            </div>
        </div>
        
        ${note('N = 8 (Even). Origin: Between 1997 & 1998 = 1997.5. X = (Year - 1997.5)/0.5')}
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Year</th><th class="text-right">Y (Sales)</th><th class="text-right">X</th><th class="text-right">X²</th><th class="text-right">XY</th></tr></thead>
                    <tbody>
                        <tr><td>1994</td><td class="text-right">550</td><td class="text-right">-7</td><td class="text-right">49</td><td class="text-right">-3850</td></tr>
                        <tr><td>1995</td><td class="text-right">560</td><td class="text-right">-5</td><td class="text-right">25</td><td class="text-right">-2800</td></tr>
                        <tr><td>1996</td><td class="text-right">555</td><td class="text-right">-3</td><td class="text-right">9</td><td class="text-right">-1665</td></tr>
                        <tr><td>1997</td><td class="text-right">585</td><td class="text-right">-1</td><td class="text-right">1</td><td class="text-right">-585</td></tr>
                        <tr><td>1998</td><td class="text-right">540</td><td class="text-right">1</td><td class="text-right">1</td><td class="text-right">540</td></tr>
                        <tr><td>1999</td><td class="text-right">524</td><td class="text-right">3</td><td class="text-right">9</td><td class="text-right">1572</td></tr>
                        <tr><td>2000</td><td class="text-right">545</td><td class="text-right">5</td><td class="text-right">25</td><td class="text-right">2725</td></tr>
                        <tr><td>2001</td><td class="text-right">585</td><td class="text-right">7</td><td class="text-right">49</td><td class="text-right">4095</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Total</strong></td><td class="text-right"><strong>4444</strong></td><td class="text-right"><strong>0</strong></td><td class="text-right"><strong>168</strong></td><td class="text-right"><strong>32</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Finding Constants a and b', `
            ${formula('a = \\frac{\\sum Y}{N} = \\frac{4444}{8} = 555.5')}
            ${formula('b = \\frac{\\sum XY}{\\sum X^2} = \\frac{32}{168} = 0.1905')}
        `)}
        
        <div class="section">
            <h3 class="section-title">✓ Answers</h3>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <strong class="info-box-title">i) Linear Trend Equation</strong>
                    ${formula('Y_c = 555.5 + 0.1905X')}
                </div>
                <div class="info-box info-box-green">
                    <strong class="info-box-title">ii) Estimate for 1993</strong>
                    <p>X = (1993 - 1997.5)/0.5 = -9</p>
                    <p>Y = 555.5 + 0.1905(-9) = 555.5 - 1.71 = <strong>553.79</strong></p>
                </div>
                <div class="info-box info-box-yellow">
                    <strong class="info-box-title">iii) Slope</strong>
                    <p>b = <strong>0.1905</strong></p>
                </div>
                <div class="info-box info-box-purple">
                    <strong class="info-box-title">iv) Trend Direction</strong>
                    <p><strong>Rising Trend</strong> (positive slope b > 0)</p>
                </div>
            </div>
        </div>
    `;
}

function renderM4Q6() {
    return `
        ${header('Question 6', '3-Yearly & 5-Yearly Moving Averages', 'table')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Compute 3 yearly, 5 yearly moving averages for the following time series:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Year</th><th>2000</th><th>2001</th><th>2002</th><th>2003</th><th>2004</th><th>2005</th><th>2006</th><th>2007</th><th>2008</th></tr></thead>
                        <tbody><tr><td><strong>Value</strong></td><td>10</td><td>15</td><td>18</td><td>21</td><td>25</td><td>30</td><td>33</td><td>40</td><td>50</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Moving Averages Calculation</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Year</th><th class="text-right">Value</th><th class="text-right">3-Yr Total</th><th class="text-right">3-Yr MA</th><th class="text-right">5-Yr Total</th><th class="text-right">5-Yr MA</th></tr></thead>
                    <tbody>
                        <tr><td>2000</td><td class="text-right">10</td><td class="text-right">-</td><td class="text-right">-</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                        <tr><td>2001</td><td class="text-right">15</td><td class="text-right">43</td><td class="text-right">14.33</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                        <tr><td>2002</td><td class="text-right">18</td><td class="text-right">54</td><td class="text-right">18.00</td><td class="text-right">89</td><td class="text-right">17.80</td></tr>
                        <tr><td>2003</td><td class="text-right">21</td><td class="text-right">64</td><td class="text-right">21.33</td><td class="text-right">109</td><td class="text-right">21.80</td></tr>
                        <tr><td>2004</td><td class="text-right">25</td><td class="text-right">76</td><td class="text-right">25.33</td><td class="text-right">127</td><td class="text-right">25.40</td></tr>
                        <tr><td>2005</td><td class="text-right">30</td><td class="text-right">88</td><td class="text-right">29.33</td><td class="text-right">149</td><td class="text-right">29.80</td></tr>
                        <tr><td>2006</td><td class="text-right">33</td><td class="text-right">103</td><td class="text-right">34.33</td><td class="text-right">178</td><td class="text-right">35.60</td></tr>
                        <tr><td>2007</td><td class="text-right">40</td><td class="text-right">123</td><td class="text-right">41.00</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                        <tr><td>2008</td><td class="text-right">50</td><td class="text-right">-</td><td class="text-right">-</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${note('3-Year MA: Sum of 3 consecutive values divided by 3. 5-Year MA: Sum of 5 consecutive values divided by 5. Moving averages are centered on the middle year.')}
    `;
}

function renderM4Q7() {
    return `
        ${header('Question 7', '5-Year Moving Average (Annual Sales)', 'graph')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Find the trend of annual sales of a trading organization by moving average method:</strong></p>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr><th>Year</th><th>Annual Sales</th><th>Year</th><th>Annual Sales</th><th>Year</th><th>Annual Sales</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>1980</td><td>40</td><td>1987</td><td>44</td><td>1994</td><td>58</td></tr>
                            <tr><td>1981</td><td>42</td><td>1988</td><td>44</td><td>1995</td><td>56</td></tr>
                            <tr><td>1982</td><td>40</td><td>1989</td><td>50</td><td>1996</td><td>51</td></tr>
                            <tr><td>1983</td><td>44</td><td>1990</td><td>42</td><td>1997</td><td>57</td></tr>
                            <tr><td>1984</td><td>49</td><td>1991</td><td>48</td><td>1998</td><td>54</td></tr>
                            <tr><td>1985</td><td>46</td><td>1992</td><td>46</td><td>1999</td><td>63</td></tr>
                            <tr><td>1986</td><td>42</td><td>1993</td><td>52</td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        ${note('Peaks at 1984, 1989, 1994, 1999 with 5-year gap → Use 5-Year Moving Average')}
        
        <div class="section">
            <h3 class="section-title">📊 Solution: 5-Year Moving Average</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Year</th><th class="text-right">Sales</th><th class="text-right">5-Yr Total</th><th class="text-right">5-Yr MA</th></tr></thead>
                    <tbody>
                        <tr><td>1980</td><td class="text-right">40</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                        <tr><td>1981</td><td class="text-right">42</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                        <tr><td>1982</td><td class="text-right">40</td><td class="text-right">215</td><td class="text-right">43.0</td></tr>
                        <tr><td>1983</td><td class="text-right">44</td><td class="text-right">221</td><td class="text-right">44.2</td></tr>
                        <tr><td>1984</td><td class="text-right">49</td><td class="text-right">221</td><td class="text-right">44.2</td></tr>
                        <tr><td>1985</td><td class="text-right">46</td><td class="text-right">225</td><td class="text-right">45.0</td></tr>
                        <tr><td>1986</td><td class="text-right">42</td><td class="text-right">225</td><td class="text-right">45.0</td></tr>
                        <tr><td>1987</td><td class="text-right">44</td><td class="text-right">226</td><td class="text-right">45.2</td></tr>
                        <tr><td>1988</td><td class="text-right">44</td><td class="text-right">222</td><td class="text-right">44.4</td></tr>
                        <tr><td>1989</td><td class="text-right">50</td><td class="text-right">228</td><td class="text-right">45.6</td></tr>
                        <tr><td>1990</td><td class="text-right">42</td><td class="text-right">230</td><td class="text-right">46.0</td></tr>
                        <tr><td>1991</td><td class="text-right">48</td><td class="text-right">238</td><td class="text-right">47.6</td></tr>
                        <tr><td>1992</td><td class="text-right">46</td><td class="text-right">246</td><td class="text-right">49.2</td></tr>
                        <tr><td>1993</td><td class="text-right">52</td><td class="text-right">260</td><td class="text-right">52.0</td></tr>
                        <tr><td>1994</td><td class="text-right">58</td><td class="text-right">263</td><td class="text-right">52.6</td></tr>
                        <tr><td>1995</td><td class="text-right">56</td><td class="text-right">274</td><td class="text-right">54.8</td></tr>
                        <tr><td>1996</td><td class="text-right">51</td><td class="text-right">276</td><td class="text-right">55.2</td></tr>
                        <tr><td>1997</td><td class="text-right">57</td><td class="text-right">281</td><td class="text-right">56.2</td></tr>
                        <tr><td>1998</td><td class="text-right">54</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                        <tr><td>1999</td><td class="text-right">63</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📈 Graph: Trend of Annual Sales</h3>
            <div style="height:400px;position:relative">
                <canvas id="chartQ7"></canvas>
            </div>
        </div>
    `;
}

function initChartQ7() {
    const ctx = document.getElementById('chartQ7');
    if (!ctx) return;
    const yearsQ7 = Array.from({ length: 20 }, (_, i) => 1980 + i);
    const actualSalesQ7 = [40, 42, 40, 44, 49, 46, 42, 44, 44, 50, 42, 48, 46, 52, 58, 56, 51, 57, 54, 63];
    const maSalesQ7 = [null, null, 43.0, 44.2, 44.2, 45.0, 45.0, 45.2, 44.4, 45.6, 46.0, 47.6, 49.2, 52.0, 52.6, 54.8, 55.2, 56.2, null, null];
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearsQ7,
            datasets: [
                { label: 'Actual Sales', data: actualSalesQ7, borderColor: 'blue', backgroundColor: 'blue', borderDash: [5, 5], pointStyle: 'circle', pointRadius: 5, tension: 0, borderWidth: 2 },
                { label: '5-Year Moving Average', data: maSalesQ7, borderColor: 'red', backgroundColor: 'red', pointStyle: 'rect', pointRadius: 6, tension: 0, borderWidth: 2 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { title: { display: true, text: 'Question 7: Trend of Annual Sales (5-Year Moving Average)', font: { size: 16 } }, legend: { position: 'top' } },
            scales: { y: { title: { display: true, text: 'Sales' } }, x: { title: { display: true, text: 'Year' } } }
        }
    });
}

function renderM4Q8() {
    return `
        ${header('Question 8', 'Period Detection & Moving Average', 'graph')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Determine the period of the moving average for the following data and calculate moving averages for that period:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Year</th><th>Value</th><th>Year</th><th>Value</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td>130</td><td>9</td><td>145</td></tr>
                            <tr><td>2</td><td>127</td><td>10</td><td>158</td></tr>
                            <tr><td>3</td><td>124</td><td>11</td><td>153</td></tr>
                            <tr><td>4</td><td>135</td><td>12</td><td>146</td></tr>
                            <tr><td>5</td><td>140</td><td>13</td><td>145</td></tr>
                            <tr><td>6</td><td>132</td><td>14</td><td>164</td></tr>
                            <tr><td>7</td><td>129</td><td>15</td><td>170</td></tr>
                            <tr><td>8</td><td>127</td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 Period Detection</h3>
            <ul>
                <li><strong>Peaks:</strong> Year 5 (140), Year 10 (158), Year 15 (170). Gap = <strong>5 Years</strong></li>
                <li><strong>Troughs:</strong> Year 3 (124), Year 8 (127), Year 13 (145). Gap = <strong>5 Years</strong></li>
            </ul>
            ${answer('Period of Moving Average', '5 Years')}
        </div>
        
        <div class="section">
            <h3 class="section-title">📊 5-Year Moving Average Calculation</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Year</th><th class="text-right">Value</th><th class="text-right">5-Yr Total</th><th class="text-right">5-Yr MA</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td class="text-right">130</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                        <tr><td>2</td><td class="text-right">127</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                        <tr><td>3</td><td class="text-right">124</td><td class="text-right">656</td><td class="text-right">131.2</td></tr>
                        <tr><td>4</td><td class="text-right">135</td><td class="text-right">658</td><td class="text-right">131.6</td></tr>
                        <tr><td>5</td><td class="text-right">140</td><td class="text-right">660</td><td class="text-right">132.0</td></tr>
                        <tr><td>6</td><td class="text-right">132</td><td class="text-right">663</td><td class="text-right">132.6</td></tr>
                        <tr><td>7</td><td class="text-right">129</td><td class="text-right">673</td><td class="text-right">134.6</td></tr>
                        <tr><td>8</td><td class="text-right">127</td><td class="text-right">691</td><td class="text-right">138.2</td></tr>
                        <tr><td>9</td><td class="text-right">145</td><td class="text-right">712</td><td class="text-right">142.4</td></tr>
                        <tr><td>10</td><td class="text-right">158</td><td class="text-right">729</td><td class="text-right">145.8</td></tr>
                        <tr><td>11</td><td class="text-right">153</td><td class="text-right">747</td><td class="text-right">149.4</td></tr>
                        <tr><td>12</td><td class="text-right">146</td><td class="text-right">766</td><td class="text-right">153.2</td></tr>
                        <tr><td>13</td><td class="text-right">145</td><td class="text-right">778</td><td class="text-right">155.6</td></tr>
                        <tr><td>14</td><td class="text-right">164</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                        <tr><td>15</td><td class="text-right">170</td><td class="text-right">-</td><td class="text-right">-</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="section">
            <h3 class="section-title">📈 Graph: Moving Average Periodicity</h3>
            <div style="height:400px;position:relative">
                <canvas id="chartQ8"></canvas>
            </div>
        </div>
    `;
}

function initChartQ8() {
    const ctx = document.getElementById('chartQ8');
    if (!ctx) return;
    const yearsQ8 = Array.from({ length: 15 }, (_, i) => i + 1);
    const observedValQ8 = [130, 127, 124, 135, 140, 132, 129, 127, 145, 158, 153, 146, 145, 164, 170];
    const maTrendQ8 = [null, null, 131.2, 131.6, 132.0, 132.6, 134.6, 138.2, 142.4, 145.8, 149.4, 153.2, 155.6, null, null];
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearsQ8,
            datasets: [
                { label: 'Observed Value', data: observedValQ8, borderColor: 'purple', backgroundColor: 'purple', borderDash: [5, 5], pointStyle: 'circle', pointRadius: 5, tension: 0, borderWidth: 2 },
                { label: '5-Year MA Trend', data: maTrendQ8, borderColor: 'green', backgroundColor: 'green', pointStyle: 'rect', pointRadius: 6, tension: 0, borderWidth: 2 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { title: { display: true, text: 'Question 8: Moving Average Periodicity', font: { size: 16 } }, legend: { position: 'top' } },
            scales: { y: { title: { display: true, text: 'Value' } }, x: { title: { display: true, text: 'Year' } } }
        }
    });
}

function renderM4Q9() {
    return `
        ${header('Question 9', 'Parabolic Trend (Second Degree Curve)', 'calc')}
        
        <div class="section">
            <h3 class="section-title">📋 Question</h3>
            <div class="section-content">
                <p><strong>Fit a parabolic curve of second degree to the data given below and estimate the value for 1999:</strong></p>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Years</th><th>1993</th><th>1994</th><th>1995</th><th>1996</th><th>1997</th></tr></thead>
                        <tbody><tr><td><strong>Sales</strong></td><td>10</td><td>12</td><td>13</td><td>10</td><td>8</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        ${note('Standard parabolic equation: Y = a + bX + cX². Origin at 1995 (middle year).')}
        
        <div class="section">
            <h3 class="section-title">📊 Solution: Calculation Table</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Year</th><th class="text-right">Y</th><th class="text-right">X</th><th class="text-right">X²</th><th class="text-right">X³</th><th class="text-right">X⁴</th><th class="text-right">XY</th><th class="text-right">X²Y</th></tr></thead>
                    <tbody>
                        <tr><td>1993</td><td class="text-right">10</td><td class="text-right">-2</td><td class="text-right">4</td><td class="text-right">-8</td><td class="text-right">16</td><td class="text-right">-20</td><td class="text-right">40</td></tr>
                        <tr><td>1994</td><td class="text-right">12</td><td class="text-right">-1</td><td class="text-right">1</td><td class="text-right">-1</td><td class="text-right">1</td><td class="text-right">-12</td><td class="text-right">12</td></tr>
                        <tr><td>1995</td><td class="text-right">13</td><td class="text-right">0</td><td class="text-right">0</td><td class="text-right">0</td><td class="text-right">0</td><td class="text-right">0</td><td class="text-right">0</td></tr>
                        <tr><td>1996</td><td class="text-right">10</td><td class="text-right">1</td><td class="text-right">1</td><td class="text-right">1</td><td class="text-right">1</td><td class="text-right">10</td><td class="text-right">10</td></tr>
                        <tr><td>1997</td><td class="text-right">8</td><td class="text-right">2</td><td class="text-right">4</td><td class="text-right">8</td><td class="text-right">16</td><td class="text-right">16</td><td class="text-right">32</td></tr>
                        <tr style="background:#1e3a8a;color:white"><td><strong>Sum</strong></td><td class="text-right"><strong>53</strong></td><td class="text-right"><strong>0</strong></td><td class="text-right"><strong>10</strong></td><td class="text-right"><strong>0</strong></td><td class="text-right"><strong>34</strong></td><td class="text-right"><strong>-6</strong></td><td class="text-right"><strong>94</strong></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        ${calcStep('Normal Equations', `
            <ol>
                <li>ΣY = Na + cΣX² → 53 = 5a + 10c ...(i)</li>
                <li>ΣXY = bΣX² → -6 = 10b → <strong>b = -0.6</strong></li>
                <li>ΣX²Y = aΣX² + cΣX⁴ → 94 = 10a + 34c ...(ii)</li>
            </ol>
        `)}
        
        ${calcStep('Solving for a and c', `
            <p>Multiply equation (i) by 2: 106 = 10a + 20c</p>
            <p>Subtract from equation (ii): -12 = 14c</p>
            <p><strong>c = -0.857</strong></p>
            <p>Substitute in (i): 53 = 5a + 10(-0.857) = 5a - 8.57</p>
            <p>5a = 61.57</p>
            <p><strong>a = 12.314</strong></p>
        `)}
        
        ${answer('Parabolic Trend Equation', 'Yc = 12.314 - 0.6X - 0.857X²')}
        
        ${calcStep('Estimation for 1999', `
            <p>X = 1999 - 1995 = 4</p>
            <p>Y = 12.314 - 0.6(4) - 0.857(16)</p>
            <p>Y = 12.314 - 2.4 - 13.712</p>
            ${formula('Y_{1999} = -3.80')}
        `)}
        
        ${note('The negative value suggests the parabolic model may not be suitable for extrapolation beyond the data range, or sales have drastically declined.')}
    `;
}
