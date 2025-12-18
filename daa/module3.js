// DAA Module 3: Brute Force Algorithms

function renderDAAM3Q1() {
    return `
        ${header('Question 5a: TSP Brute Force', 'Travelling Salesman Problem', 'calc')}
        ${section('Problem', `
            <p>Solve TSP using brute force for 4 cities. Find minimum tour cost.</p>
            ${table(['', 'A', 'B', 'C', 'D'], [
        ['A', '0', '10', '15', '20'],
        ['B', '10', '0', '35', '25'],
        ['C', '15', '35', '0', '30'],
        ['D', '20', '25', '30', '0']
    ])}
        `)}
        ${section('All Paths', `
            <div class="calc-step">
                <div class="calc-step-title">1. A → B → C → D → A</div>
                <p>Cost: $10 + 35 + 30 + 20 = 95$</p>
            </div>
            <div class="calc-step">
                <div class="calc-step-title">2. A → B → D → C → A</div>
                <p>Cost: $10 + 25 + 30 + 15 = 80$ ✓</p>
            </div>
            <div class="calc-step">
                <div class="calc-step-title">3. A → C → B → D → A</div>
                <p>Cost: $15 + 35 + 25 + 20 = 95$</p>
            </div>
            <div class="calc-step">
                <div class="calc-step-title">4. A → C → D → B → A</div>
                <p>Cost: $15 + 30 + 25 + 10 = 80$ ✓</p>
            </div>
            <div class="calc-step">
                <div class="calc-step-title">5. A → D → B → C → A</div>
                <p>Cost: $20 + 25 + 35 + 15 = 95$</p>
            </div>
            <div class="calc-step">
                <div class="calc-step-title">6. A → D → C → B → A</div>
                <p>Cost: $20 + 30 + 35 + 10 = 95$</p>
            </div>
        `)}
        ${section('Conclusion', `
            ${answer('Minimum Tour Cost', '80')}
            <p><strong>Optimal Paths:</strong> A→B→D→C→A or A→C→D→B→A</p>
        `)}
    `;
}

function renderDAAM3Q2() {
    return `
        ${header('Question 5b: 0/1 Knapsack', 'Exhaustive Search', 'calc')}
        ${section('Problem', `
            <ul>
                <li><strong>Items:</strong> {1, 2, 3}</li>
                <li><strong>Weights:</strong> {10, 20, 30}</li>
                <li><strong>Profits:</strong> {60, 100, 120}</li>
                <li><strong>Capacity:</strong> 50</li>
            </ul>
        `)}
        ${section('Solution', `
            ${table(['Subset', 'Weight', 'Profit', 'Valid?'], [
        ['∅', '0', '0', 'Yes'],
        ['{1}', '10', '60', 'Yes'],
        ['{2}', '20', '100', 'Yes'],
        ['{3}', '30', '120', 'Yes'],
        ['{1,2}', '30', '160', 'Yes'],
        ['{1,3}', '40', '180', 'Yes'],
        ['{2,3}', '50', '220', 'Yes ★'],
        ['{1,2,3}', '60', '280', 'No']
    ])}
        `)}
        ${section('Answer', `
            ${answer('Selected Items', '2 and 3')}
            ${answer('Max Profit', '220')}
        `)}
    `;
}

function renderDAAM3Q3() {
    return `
        ${header('Question 6a: Bubble Sort', 'Step-by-step', 'calc')}
        ${section('Array', `<p><strong>[14, 33, 27, 35, 10]</strong></p>`)}
        ${section('Pass 1', `
            <ul>
                <li>14, 33 (No swap) → [14, 33, 27, 35, 10]</li>
                <li>33, 27 (SWAP) → [14, 27, 33, 35, 10]</li>
                <li>33, 35 (No swap)</li>
                <li>35, 10 (SWAP) → [14, 27, 33, 10, 35]</li>
            </ul>
        `)}
        ${section('Pass 2', `
            <ul>
                <li>14, 27 (No swap)</li>
                <li>27, 33 (No swap)</li>
                <li>33, 10 (SWAP) → [14, 27, 10, 33, 35]</li>
            </ul>
        `)}
        ${section('Pass 3', `
            <ul>
                <li>14, 27 (No swap)</li>
                <li>27, 10 (SWAP) → [14, 10, 27, 33, 35]</li>
            </ul>
        `)}
        ${section('Pass 4', `
            <ul><li>14, 10 (SWAP) → [10, 14, 27, 33, 35]</li></ul>
        `)}
        ${section('Result', `
            ${answer('Sorted Array', '[10, 14, 27, 33, 35]')}
            ${table(['Case', 'Complexity'], [
        ['Best', '$O(n)$'],
        ['Worst', '$O(n^2)$'],
        ['Average', '$O(n^2)$']
    ])}
        `)}
    `;
}

function renderDAAM3Q4() {
    return `
        ${header('Question 6b: BFS & DFS', 'Graph Traversal', 'theory')}
        ${section('Graph', `
            <pre style="font-family: monospace; text-align: center;">
    A
   / \\
  B   C
   \\ /
    D
            </pre>
        `)}
        ${section('BFS (Breadth-First)', `
            <p>Uses <strong>Queue</strong>. Explore level by level.</p>
            <ul>
                <li>Start at A. Queue: [B, C]</li>
                <li>Dequeue B. Queue: [C, D]</li>
                <li>Dequeue C. Queue: [D]</li>
                <li>Dequeue D.</li>
            </ul>
            ${answer('Traversal', 'A → B → C → D')}
        `)}
        ${section('DFS (Depth-First)', `
            <p>Uses <strong>Stack</strong>. Go deep before backtracking.</p>
            <ul>
                <li>Start at A → B → D → C</li>
            </ul>
            ${answer('Traversal', 'A → B → D → C')}
        `)}
    `;
}
