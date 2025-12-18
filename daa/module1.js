// DAA Module 1: Introduction to Algorithms

function renderDAAM1Q1() {
    return `
        ${header('Question 1a: Define Algorithm', 'Explain characteristics with example', 'theory')}
        ${section('Concept', `
            <div class="info-box info-box-blue">
                <p>Think of an algorithm like a <strong>cooking recipe</strong>. It is a step-by-step procedure to solve a specific problem. If you follow the steps exactly, you get the correct result every time.</p>
            </div>
        `)}
        ${section('Definition', `
            <p>An <strong>Algorithm</strong> is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.</p>
        `)}
        ${section('Characteristics of an Algorithm', `
            <p>To be a valid algorithm, it must satisfy these five properties:</p>
            <div class="grid-2">
                <div class="info-box info-box-green">
                    <span class="info-box-title">1. Input</span>
                    <p>It must take zero or more inputs.</p>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">2. Output</span>
                    <p>It must produce at least one output (the result).</p>
                </div>
            </div>
            <div class="info-box info-box-yellow" style="margin-top: 1rem;">
                <span class="info-box-title">3. Definiteness</span>
                <p>Each instruction must be clear and unambiguous. (No guessing allowed!)</p>
            </div>
            <div class="info-box info-box-blue" style="margin-top: 1rem;">
                <span class="info-box-title">4. Finiteness</span>
                <p>The algorithm must terminate after a finite number of steps. It cannot run forever.</p>
            </div>
            <div class="info-box info-box-green" style="margin-top: 1rem;">
                <span class="info-box-title">5. Effectiveness</span>
                <p>Every instruction must be basic enough to be carried out manually (using pencil and paper).</p>
            </div>
        `)}
        ${section('Example: Sum of Two Numbers', `
            <div class="calc-step">
                <pre style="font-family: monospace; font-size: 0.9rem;">
Step 1: Start
Step 2: Read input variables A and B
Step 3: Calculate Sum = A + B
Step 4: Display Sum
Step 5: Stop
                </pre>
            </div>
            <div class="info-box info-box-purple" style="margin-top: 1rem;">
                <p><strong>Finiteness:</strong> Ends at Step 5.</p>
                <p><strong>Definiteness:</strong> "Add A and B" is clear.</p>
            </div>
        `)}
    `;
}

function renderDAAM1Q2() {
    return `
        ${header('Question 1b: Designing Algorithms', 'Steps, Advantages & Disadvantages', 'theory')}
        ${section('Steps in Designing an Algorithm', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Understand the Problem</span>
                <p>Read the problem statement carefully. What is the input? What is the required output?</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Decide on Computational Means</span>
                <p>Will this run on a supercomputer or a calculator? How much memory do we have?</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Design the Algorithm</span>
                <p>Choose a technique (like Divide and Conquer, Greedy, etc.) and write the logic.</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Prove Correctness</span>
                <p>Mathematically prove that it gives the right answer for all inputs.</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">5. Analyze the Algorithm</span>
                <p>Check efficiency. How much Time (speed) and Space (memory) does it need?</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">6. Code the Algorithm</span>
                <p>Convert the logical steps into a program (C, Java, Python).</p>
            </div>
        `)}
        ${section('Advantages', `
            <ul>
                <li><strong>Easy to Understand:</strong> Written in English-like steps, so anyone can read it.</li>
                <li><strong>Language Independent:</strong> Can be converted into C++, Java, or Python later.</li>
                <li><strong>Debugging:</strong> Easier to find logical errors on paper before writing code.</li>
            </ul>
        `)}
        ${section('Disadvantages', `
            <ul>
                <li><strong>Time Consuming:</strong> Writing complex algorithms takes time.</li>
                <li><strong>No Standard Syntax:</strong> Different people might write the same algorithm differently.</li>
            </ul>
        `)}
    `;
}

function renderDAAM1Q3() {
    return `
        ${header('Question 2a: Efficiency Analysis Framework', 'How input size is measured', 'theory')}
        ${section('Concept', `
            <div class="info-box info-box-blue">
                <p>How do we know if code is "good"? We don't measure it in seconds (because computers vary in speed). We measure it by <strong>counting operations</strong> based on the Input Size.</p>
            </div>
        `)}
        ${section('Analysis Framework', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Time Efficiency</span>
                <p>How fast does the algorithm run? We count the number of basic operations (like additions or comparisons) required.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Space Efficiency</span>
                <p>How much extra memory does the algorithm need?</p>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">3. Order of Growth</span>
                <p>We look at how the time grows as input ($n$) gets huge.</p>
            </div>
        `)}
        ${section('Measuring Input Size ($n$)', `
            <p>The "size" depends on the problem type:</p>
            ${table(['Problem Type', 'Input Size Measure'], [
        ['Sorting/Searching lists', 'Number of items in the array/list ($n$)'],
        ['Matrix Multiplication', 'Dimension of the matrix ($N \\times N$)'],
        ['Graph Problems', 'Vertices ($V$) and Edges ($E$)'],
        ['Polynomial Problems', 'Degree of polynomial or number of bits']
    ])}
        `)}
    `;
}

function renderDAAM1Q4() {
    return `
        ${header('Question 2b: Case Analysis', 'Best, Worst, and Average Case', 'theory')}
        ${section('Case Types', `
            ${table(['Case Type', 'Definition', 'Example (Linear Search)'], [
        ['Best Case', 'Input configuration where algorithm takes minimum time', 'Element at first index (1 comparison)'],
        ['Worst Case', 'Input configuration where algorithm takes maximum time', 'Element at last index or not present ($n$ comparisons)'],
        ['Average Case', 'Expected time taken over all possible inputs', 'Element somewhere in middle (approx $n/2$ comparisons)']
    ])}
        `)}
        ${section('Example: Linear Search', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">Best Case: $O(1)$</span>
                <p>The element we are looking for is at the <strong>first</strong> index.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">Worst Case: $O(n)$</span>
                <p>The element is at the <strong>last</strong> index or not present at all.</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">Average Case: $O(n/2) = O(n)$</span>
                <p>The element is somewhere in the <strong>middle</strong>.</p>
            </div>
        `)}
    `;
}

function renderDAAM1Q5() {
    return `
        ${header('Question 2c: Priori vs Posterior Analysis', 'Theoretical vs Empirical', 'theory')}
        ${section('Priori Analysis (Theoretical)', `
            <div class="info-box info-box-blue">
                <ul>
                    <li>Done <strong>before</strong> running the code.</li>
                    <li>Based on mathematical calculation using asymptotic notations (Big-O).</li>
                    <li><strong>Independent of hardware</strong> (doesn't matter if it's an i3 or i9 processor).</li>
                    <li>Example: Calculating that Bubble Sort is $O(n^2)$.</li>
                </ul>
            </div>
        `)}
        ${section('Posterior Analysis (Empirical)', `
            <div class="info-box info-box-green">
                <ul>
                    <li>Done <strong>after</strong> running the code.</li>
                    <li>Based on actual statistics (start time, end time).</li>
                    <li><strong>Dependent on hardware</strong> and compiler.</li>
                    <li>Example: Running a sort on 1000 items and seeing it took 5ms.</li>
                </ul>
            </div>
        `)}
        ${section('Comparison', `
            ${table(['Aspect', 'Priori Analysis', 'Posterior Analysis'], [
        ['When Done', 'Before running code', 'After running code'],
        ['Based On', 'Mathematical calculation', 'Actual statistics'],
        ['Hardware Dependency', 'Independent', 'Dependent'],
        ['Example', '$O(n^2)$ complexity', '5ms execution time']
    ])}
        `)}
    `;
}
