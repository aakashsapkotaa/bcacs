// DAA Module 4: Divide & Conquer, Sorting

function renderDAAM4Q1() {
    return `
        ${header('Question 7a: Insertion Sort', 'Step-by-step process', 'calc')}
        ${section('Concept', `
            <p>Insertion sort works like sorting playing cards. You take one card and place it in the correct position relative to the cards already sorted.</p>
        `)}
        ${section('Array: [31, 41, 59, 26, 41, 58]', `
            <div class="calc-step">
                <div class="calc-step-title">i=1 (Value 41)</div>
                <p>Compare with 31. 41 > 31. No change.</p>
                <p>→ [31, 41, 59, 26, 41, 58]</p>
            </div>
            <div class="calc-step">
                <div class="calc-step-title">i=2 (Value 59)</div>
                <p>Compare with 41. 59 > 41. No change.</p>
                <p>→ [31, 41, 59, 26, 41, 58]</p>
            </div>
            <div class="calc-step">
                <div class="calc-step-title">i=3 (Value 26)</div>
                <ul>
                    <li>26 < 59 (Shift 59 right)</li>
                    <li>26 < 41 (Shift 41 right)</li>
                    <li>26 < 31 (Shift 31 right)</li>
                    <li>Insert 26 at start</li>
                </ul>
                <p>→ [26, 31, 41, 59, 41, 58]</p>
            </div>
            <div class="calc-step">
                <div class="calc-step-title">i=4 (Value 41)</div>
                <ul>
                    <li>41 < 59 (Shift 59 right)</li>
                    <li>41 = 41 (Stop). Insert after first 41.</li>
                </ul>
                <p>→ [26, 31, 41, 41, 59, 58]</p>
            </div>
            <div class="calc-step">
                <div class="calc-step-title">i=5 (Value 58)</div>
                <ul>
                    <li>58 < 59 (Shift 59 right)</li>
                    <li>58 > 41 (Stop). Insert.</li>
                </ul>
                <p>→ [26, 31, 41, 41, 58, 59]</p>
            </div>
        `)}
        ${section('Complexity', `
            ${table(['Case', 'Complexity'], [
        ['Best', '$O(n)$'],
        ['Worst', '$O(n^2)$']
    ])}
        `)}
    `;
}

function renderDAAM4Q2() {
    return `
        ${header('Question 7b: Topological Sort', 'Source Removal Method', 'calc')}
        ${section('Edges', `<p>$A \\to C, A \\to D, B \\to D, C \\to E, D \\to E$</p>`)}
        ${section('Step 1: Calculate Indegrees', `
            <ul>
                <li>A: 0</li>
                <li>B: 0</li>
                <li>C: 1 (from A)</li>
                <li>D: 2 (from A, B)</li>
                <li>E: 2 (from C, D)</li>
            </ul>
        `)}
        ${section('Step 2: Pick A (Indegree 0)', `
            <p>Output: <strong>A</strong></p>
            <p>Remove A and its edges. New: C=0, D=1</p>
        `)}
        ${section('Step 3: Pick B (Indegree 0)', `
            <p>Output: <strong>A, B</strong></p>
            <p>Remove B. New: D=0</p>
        `)}
        ${section('Step 4: Pick C (Indegree 0)', `
            <p>Output: <strong>A, B, C</strong></p>
            <p>Remove C. New: E=1</p>
        `)}
        ${section('Step 5: Pick D (Indegree 0)', `
            <p>Output: <strong>A, B, C, D</strong></p>
            <p>Remove D. New: E=0</p>
        `)}
        ${section('Step 6: Pick E', `
            ${answer('Final Output', 'A, B, C, D, E')}
            <p><em>Note: A, B, D, C, E is also valid.</em></p>
        `)}
    `;
}

function renderDAAM4Q3() {
    return `
        ${header('Question 8a: Merge Sort', 'Divide and Conquer', 'calc')}
        ${section('Array', `<p>[38, 27, 43, 3, 9, 82, 10, 40, 15, 20]</p>`)}
        ${section('Divide Phase', `
            <ul>
                <li>[38, 27, 43, 3, 9] | [82, 10, 40, 15, 20]</li>
                <li>[38, 27] [43, 3, 9] | [82, 10] [40, 15, 20]</li>
                <li>Continue until single elements...</li>
            </ul>
        `)}
        ${section('Conquer (Merge) Phase', `
            <ul>
                <li>Merge [38], [27] → [27, 38]</li>
                <li>Merge [3], [9] → [3, 9]</li>
                <li>Merge [43], [3, 9] → [3, 9, 43]</li>
                <li>Merge Left Half: [27, 38] + [3, 9, 43] → [3, 9, 27, 38, 43]</li>
                <li>Merge [82], [10] → [10, 82]</li>
                <li>Merge [15], [20] → [15, 20]</li>
                <li>Merge [40], [15, 20] → [15, 20, 40]</li>
                <li>Merge Right Half: [10, 82] + [15, 20, 40] → [10, 15, 20, 40, 82]</li>
            </ul>
        `)}
        ${section('Final Merge', `
            <p>[3, 9, 27, 38, 43] + [10, 15, 20, 40, 82]</p>
            ${answer('Result', '[3, 9, 10, 15, 20, 27, 38, 40, 43, 82]')}
        `)}
    `;
}

function renderDAAM4Q4() {
    return `
        ${header('Question 8b: Quick Sort', 'First element as pivot', 'calc')}
        ${section('Array', `<p>[35, 50, 15, 25, 80, 20, 90, 45]</p><p><strong>Pivot: 35</strong></p>`)}
        ${section('Partitioning', `
            <ul>
                <li>50 > 35 (left pointer stops)</li>
                <li>20 < 35 (right pointer stops)</li>
                <li>Swap 50 and 20 → [35, 20, 15, 25, 80, 50, 90, 45]</li>
                <li>Left sees 80 (>35). Right sees 25 (<35).</li>
                <li>Indices crossed. Split point at 25.</li>
                <li>Swap Pivot (35) with 25</li>
            </ul>
            <p>After Partition: [25, 20, 15, <strong>35</strong>, 80, 50, 90, 45]</p>
        `)}
        ${section('Recursive Step', `
            <ul>
                <li>Sort Left: [25, 20, 15]</li>
                <li>Sort Right: [80, 50, 90, 45]</li>
            </ul>
        `)}
        ${section('Result', `
            ${answer('Final Result', '[15, 20, 25, 35, 45, 50, 80, 90]')}
        `)}
    `;
}

function renderDAAM4Q5() {
    return `
        ${header('Question 8c: Tree Traversals', 'Preorder, Inorder, Postorder', 'calc')}
        ${section('Binary Tree', `
            <pre style="font-family: monospace; font-size: 0.9rem;">
        F
     /   \\
    B     G
   / \\     \\
  A   D     I
     / \\   /
    C   E H
            </pre>
        `)}
        ${section('1. Preorder (Root → Left → Right)', `
            <p>Visit F → B → A → D → C → E → G → I → H</p>
            ${answer('Answer', 'F, B, A, D, C, E, G, I, H')}
        `)}
        ${section('2. Inorder (Left → Root → Right)', `
            <p>A → B → C → D → E → F → G → H → I</p>
            ${answer('Answer', 'A, B, C, D, E, F, G, H, I')}
        `)}
        ${section('3. Postorder (Left → Right → Root)', `
            <p>A → C → E → D → B → H → I → G → F</p>
            ${answer('Answer', 'A, C, E, D, B, H, I, G, F')}
        `)}
    `;
}
