// DAA Module 2: Asymptotic Notations

function renderDAAM2Q1() {
    return `
        ${header('Question 3a: Big-O, Ω, Θ Notations', 'Formal definitions and examples', 'calc')}
        ${section('Concept', `
            <div class="info-box info-box-blue">
                <p>These are the <strong>rulers</strong> we use to measure algorithm speed.</p>
                <ul>
                    <li><strong>Big-O:</strong> The "Upper limit". It won't be slower than this. (Worst case)</li>
                    <li><strong>Omega (Ω):</strong> The "Lower limit". It won't be faster than this. (Best case)</li>
                    <li><strong>Theta (Θ):</strong> The "Tight bound". It's exactly in this range. (Average/Exact)</li>
                </ul>
            </div>
        `)}
        ${section('1. Big-O Notation ($O$)', `
            <div class="info-box info-box-green">
                <span class="info-box-title">Definition</span>
                <p>$f(n) = O(g(n))$ if there exist positive constants $c$ and $n_0$ such that:</p>
                ${formula('0 \\le f(n) \\le c \\cdot g(n) \\text{ for all } n \\ge n_0')}
            </div>
            <p><strong>Meaning:</strong> Worst-case complexity.</p>
            <p><strong>Visual:</strong> The function $f(n)$ is always <strong>below</strong> the line $c \\cdot g(n)$.</p>
        `)}
        ${section('2. Big-Omega Notation ($\\Omega$)', `
            <div class="info-box info-box-purple">
                <span class="info-box-title">Definition</span>
                <p>$f(n) = \\Omega(g(n))$ if there exist positive constants $c$ and $n_0$ such that:</p>
                ${formula('0 \\le c \\cdot g(n) \\le f(n) \\text{ for all } n \\ge n_0')}
            </div>
            <p><strong>Meaning:</strong> Best-case complexity.</p>
            <p><strong>Visual:</strong> The function $f(n)$ is always <strong>above</strong> the line $c \\cdot g(n)$.</p>
        `)}
        ${section('3. Big-Theta Notation ($\\Theta$)', `
            <div class="info-box info-box-yellow">
                <span class="info-box-title">Definition</span>
                <p>$f(n) = \\Theta(g(n))$ if there exist constants $c_1, c_2, n_0$ such that:</p>
                ${formula('c_1 \\cdot g(n) \\le f(n) \\le c_2 \\cdot g(n)')}
            </div>
            <p><strong>Meaning:</strong> Average/Tight complexity.</p>
            <p><strong>Visual:</strong> The function $f(n)$ is "sandwiched" between $c_1 \\cdot g(n)$ and $c_2 \\cdot g(n)$.</p>
        `)}
    `;
}

function renderDAAM2Q2() {
    return `
        ${header('Question 3b: Time & Space Complexity', 'With program examples', 'code')}
        ${section('Time Complexity', `
            <p>The amount of computer time it takes to run a program.</p>
            <div class="info-box info-box-blue">
                <span class="info-box-title">Example: Simple Loop</span>
                ${codeBlock(`// Prints numbers 0 to n-1
for(int i=0; i<n; i++) {
    printf("%d", i);
}`, 'c')}
            </div>
            <div class="calc-step" style="margin-top: 1rem;">
                <div class="calc-step-title">Analysis</div>
                <p>The loop runs $n$ times.</p>
                ${answer('Complexity', '$O(n)$ (Linear Time)')}
            </div>
        `)}
        ${section('Space Complexity', `
            <p>The amount of memory (RAM) needed to run the program.</p>
            <div class="info-box info-box-green">
                <span class="info-box-title">Example: Array Sum</span>
                ${codeBlock(`int sum(int arr[], int n) {
    int total = 0; // Requires 1 unit of space
    for(int i=0; i<n; i++) {
        total = total + arr[i];
    }
    return total;
}`, 'c')}
            </div>
            <div class="calc-step" style="margin-top: 1rem;">
                <div class="calc-step-title">Analysis</div>
                <p>We are using a fixed number of variables (total, i, n), regardless of the array size. We don't create a new array.</p>
                ${answer('Complexity', '$O(1)$ (Constant Space)')}
            </div>
        `)}
    `;
}

function renderDAAM2Q3() {
    return `
        ${header('Question 4a: Tower of Hanoi', 'Rules, diagram, and time complexity', 'calc')}
        ${section('Concept', `
            <div class="info-box info-box-blue">
                <p>A classic puzzle! You have 3 rods (A, B, C) and $N$ disks. You must move all disks from A to C using B as a helper.</p>
            </div>
        `)}
        ${section('Rules', `
            <ol>
                <li>Move only <strong>one disk</strong> at a time.</li>
                <li>A larger disk <strong>cannot</strong> be placed on top of a smaller disk.</li>
                <li>Only the <strong>top disk</strong> of a stack can be moved.</li>
            </ol>
        `)}
        ${section('Diagram (4 Disks)', `
            <div class="calc-step">
                <div class="calc-step-title">Initial State</div>
                <pre style="font-family: monospace; font-size: 0.8rem; overflow-x: auto;">
   |        |        |
  [=]       |        |   (Disk 1 - Smallest)
 [===]      |        |   (Disk 2)
[=====]     |        |   (Disk 3)
[=======]   |        |   (Disk 4 - Largest)
--------------------------
 Rod A    Rod B    Rod C
                </pre>
            </div>
            <div class="calc-step" style="margin-top: 1rem;">
                <div class="calc-step-title">Final State</div>
                <pre style="font-family: monospace; font-size: 0.8rem; overflow-x: auto;">
   |        |        |
   |        |       [=]
   |        |      [===]
   |        |     [=====]
   |        |    [=======]
--------------------------
 Rod A    Rod B    Rod C
                </pre>
            </div>
        `)}
        ${section('Time Complexity Analysis', `
            <p>The recurrence relation is:</p>
            ${formula('T(n) = 2T(n-1) + 1')}
            <p>(Move $n-1$ disks to helper, move largest disk to destination, move $n-1$ disks to destination).</p>
            <ul>
                <li>$T(1) = 1$</li>
                <li>$T(2) = 3$</li>
                <li>$T(3) = 7$</li>
                <li>$T(n) = 2^n - 1$</li>
            </ul>
            ${answer('Complexity', '$O(2^n)$ (Exponential Time)')}
        `)}
    `;
}

function renderDAAM2Q4() {
    return `
        ${header('Question 4b: Binomial Coefficients', 'Concept and program example', 'code')}
        ${section('Concept', `
            <p>Binomial coefficients, written as $C(n, k)$ or $\\binom{n}{k}$, represent the number of ways to choose $k$ items from a set of $n$ items.</p>
            ${formula('C(n, k) = \\frac{n!}{k!(n-k)!}')}
        `)}
        ${section('Dynamic Programming Approach', `
            <p>Using factorials is computationally expensive. We use <strong>Pascal's Triangle logic</strong>:</p>
            ${formula('C(n, k) = C(n-1, k-1) + C(n-1, k)')}
        `)}
        ${section('Program Example', `
            <div class="info-box info-box-green">
                ${codeBlock(`int binomialCoeff(int n, int k) {
    int C[n+1][k+1];
    
    for (int i = 0; i <= n; i++) {
        for (int j = 0; j <= min(i, k); j++) {
            if (j == 0 || j == i)
                C[i][j] = 1; // Base case
            else
                C[i][j] = C[i-1][j-1] + C[i-1][j]; // Recursive step
        }
    }
    return C[n][k];
}`, 'c')}
            </div>
        `)}
        ${section('Pascal\'s Triangle Visualization', `
            <div class="calc-step">
                <pre style="font-family: monospace; font-size: 0.9rem; text-align: center;">
        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1
                </pre>
            </div>
            <p>Each number is the sum of the two numbers above it.</p>
        `)}
    `;
}
