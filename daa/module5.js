// DAA Module 5: Graph Algorithms & NP

function renderDAAM5Q1() {
    return `
        ${header("Question 9a: Prim's Algorithm", 'Minimum Spanning Tree', 'calc')}
        ${section('Graph Data', `
            <p>$A-B(6), A-C(3), B-C(2), B-D(5), C-D(3), C-E(4), D-E(2)$</p>
            <p><strong>Start Vertex: A</strong></p>
        `)}
        ${section("Prim's Logic", `
            <p>Grow the tree one edge at a time from the start node, always picking the smallest edge connecting the "tree" to the "outside".</p>
        `)}
        ${section('Step 1: Start at A', `
            <p>Neighbors: B(6), C(3). Pick smallest: <strong>A-C (3)</strong></p>
            <p>Tree: {A, C}. Cost = 3</p>
        `)}
        ${section('Step 2: From {A, C}', `
            <p>From A: B(6). From C: B(2), D(3), E(4).</p>
            <p>Smallest: <strong>C-B (2)</strong></p>
            <p>Tree: {A, C, B}. Cost = 5</p>
        `)}
        ${section('Step 3: From {A, C, B}', `
            <p>From B: D(5). From C: D(3), E(4).</p>
            <p>Smallest: <strong>C-D (3)</strong></p>
            <p>Tree: {A, C, B, D}. Cost = 8</p>
        `)}
        ${section('Step 4: From {A, C, B, D}', `
            <p>From D: E(2). From C: E(4).</p>
            <p>Smallest: <strong>D-E (2)</strong></p>
            <p>Tree: {A, C, B, D, E}. All vertices visited.</p>
        `)}
        ${section('Result', `
            ${answer('Total Cost', '$3 + 2 + 3 + 2 = 10$')}
            ${answer('Edges', '(A,C), (C,B), (C,D), (D,E)')}
        `)}
    `;
}

function renderDAAM5Q2() {
    return `
        ${header("Question 9b: Kruskal's Algorithm", 'Minimum Spanning Tree', 'calc')}
        ${section('Graph Data', `
            <p>$A-B(4), A-C(3), B-C(1), B-D(2), C-D(4), C-E(5), D-E(7)$</p>
        `)}
        ${section("Kruskal's Logic", `
            <p>Sort ALL edges by weight. Add them if they don't form a cycle.</p>
        `)}
        ${section('Step 1: Sort Edges', `
            <ol>
                <li>B-C (1)</li>
                <li>B-D (2)</li>
                <li>A-C (3)</li>
                <li>A-B (4)</li>
                <li>C-D (4)</li>
                <li>C-E (5)</li>
                <li>D-E (7)</li>
            </ol>
        `)}
        ${section('Step 2: Selection', `
            <ul>
                <li>Add B-C (1). ✓ No cycle.</li>
                <li>Add B-D (2). ✓ No cycle.</li>
                <li>Add A-C (3). ✓ No cycle.</li>
                <li>Check A-B (4). ✗ Cycle (A-C-B). Reject.</li>
                <li>Check C-D (4). ✗ Cycle (C-B-D). Reject.</li>
                <li>Add C-E (5). ✓ Connects E.</li>
            </ul>
        `)}
        ${section('Result', `
            ${answer('Total Cost', '$1 + 2 + 3 + 5 = 11$')}
            ${answer('Edges', '(B,C), (B,D), (A,C), (C,E)')}
        `)}
    `;
}

function renderDAAM5Q3() {
    return `
        ${header("Question 10a: Dijkstra's Algorithm", 'Shortest Path', 'calc')}
        ${section('Graph Data', `
            <p>$A-B(6), A-D(1), B-D(2), B-E(2), D-E(1), D-C(1), C-E(5)$</p>
            <p><strong>Source: A</strong></p>
        `)}
        ${section('Initialization', `
            <p>A=0, B=∞, C=∞, D=∞, E=∞. Visited = {}</p>
        `)}
        ${section('Step 1: Visit A (Dist 0)', `
            <ul>
                <li>Update B: min(∞, 0+6) = 6</li>
                <li>Update D: min(∞, 0+1) = 1</li>
            </ul>
            <p>Visited = {A}</p>
        `)}
        ${section('Step 2: Visit D (Dist 1)', `
            <ul>
                <li>Update B: min(6, 1+2) = 3</li>
                <li>Update E: min(∞, 1+1) = 2</li>
                <li>Update C: min(∞, 1+1) = 2</li>
            </ul>
            <p>Visited = {A, D}</p>
        `)}
        ${section('Step 3: Visit E (Dist 2)', `
            <ul>
                <li>Check B: 2+2=4 > 3. No change.</li>
                <li>Check C: 2+5=7 > 2. No change.</li>
            </ul>
            <p>Visited = {A, D, E}</p>
        `)}
        ${section('Step 4-5: Visit C then B', `
            <p>No updates needed. All vertices visited.</p>
        `)}
        ${section('Final Shortest Distances', `
            ${table(['Vertex', 'Distance from A'], [
        ['A', '0'],
        ['D', '1'],
        ['C', '2'],
        ['E', '2'],
        ['B', '3']
    ])}
        `)}
    `;
}

function renderDAAM5Q4() {
    return `
        ${header('Question 10b: NP Problems', 'P, NP, NP-Complete, NP-Hard', 'theory')}
        ${section('Concept', `
            <p>This is about how "hard" a problem is to solve.</p>
        `)}
        ${section('1. P (Polynomial Time)', `
            <div class="info-box info-box-green">
                <p>Problems that can be <strong>solved quickly</strong> (in polynomial time like $O(n^2)$).</p>
                <p><strong>Examples:</strong> Sorting, Searching, Shortest Path.</p>
            </div>
        `)}
        ${section('2. NP (Nondeterministic Polynomial)', `
            <div class="info-box info-box-blue">
                <p>Problems where, if you give me a solution (a "certificate"), I can <strong>verify it quickly</strong>. However, finding the solution might take forever.</p>
                <p><strong>Example:</strong> Sudoku (Hard to solve, easy to check).</p>
            </div>
        `)}
        ${section('3. NP-Complete', `
            <div class="info-box info-box-purple">
                <p>The <strong>hardest problems in NP</strong>. If you can solve ONE NP-Complete problem quickly, you can solve ALL NP problems quickly.</p>
                <p><strong>Examples:</strong> TSP, Knapsack Problem.</p>
            </div>
        `)}
        ${section('4. NP-Hard', `
            <div class="info-box info-box-yellow">
                <p>Problems that are <strong>at least as hard</strong> as NP-Complete. They might not even be verifiable in polynomial time.</p>
            </div>
        `)}
        ${section('Example: TSP', `
            <ul>
                <li><strong>Problem:</strong> Given cities and distances, find shortest route to visit all.</li>
                <li><strong>Why NP?</strong> Verification is fast - just check the math.</li>
                <li><strong>Why Hard?</strong> Must check almost every combination. Time: $O(n!)$.</li>
            </ul>
        `)}
    `;
}
