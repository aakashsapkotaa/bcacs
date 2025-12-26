// Information Security Module 3: Program & Operating System Security

function renderISM3Q1() {
    return `
        ${header('Question 5a: Program Errors', 'Types and how they affect software security (6 Marks)', 'theory')}
        ${section('What are Program Errors?', `
            <div class="info-box info-box-blue">
                <p>Program errors are <strong>mistakes in software programs</strong> that can lead to <strong>security problems</strong>.</p>
            </div>
        `)}
        ${section('Types of Program Errors', `
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Logic Errors</span>
                <ul>
                    <li>Program runs but gives <strong>wrong output</strong></li>
                    <li>Caused by incorrect logic</li>
                </ul>
                <p>👉 <em>Example:</em> Wrong condition in login check allows unauthorized access.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Syntax Errors</span>
                <ul>
                    <li>Errors in programming rules</li>
                    <li>Detected at compile time</li>
                </ul>
                <p>👉 <em>Example:</em> Missing semicolon in C program.</p>
                <p>⚠️ <em>Security Impact:</em> Usually low, but can delay security updates.</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Runtime Errors</span>
                <ul>
                    <li>Occur while program is running</li>
                </ul>
                <p>👉 <em>Example:</em> Division by zero causing program crash.</p>
                <p>⚠️ <em>Security Impact:</em> Can be exploited to crash systems (DoS attack).</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">4. Buffer Overflow Errors</span>
                <ul>
                    <li>Extra data written beyond allocated memory</li>
                </ul>
                <p>👉 <em>Example:</em> Attacker inputs long password to overwrite memory.</p>
                <p>⚠️ <em>Security Impact:</em> Allows execution of malicious code.</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Program errors reduce software security and can allow attackers to exploit systems.</p>
            </div>
        `)}
    `;
}

function renderISM3Q2() {
    return `
        ${header('Question 5b: Malicious Code', 'Define and explain any two types with examples (4 Marks)', 'theory')}
        ${section('Malicious Code Definition', `
            <div class="info-box info-box-blue">
                <p>Malicious code is <strong>software designed to harm, disrupt, or gain unauthorized access</strong> to systems.</p>
            </div>
        `)}
        ${section('Types of Malicious Code', `
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Virus</span>
                <ul>
                    <li>Attaches itself to legitimate programs</li>
                    <li>Spreads when program runs</li>
                </ul>
                <p>👉 <em>Example:</em> Virus spreads through infected USB drives.</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">2. Worm</span>
                <ul>
                    <li>Self-replicating</li>
                    <li>Does not need host program</li>
                </ul>
                <p>👉 <em>Example:</em> Worm spreading through network automatically.</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Malicious code damages systems and spreads rapidly if not controlled.</p>
            </div>
        `)}
    `;
}

function renderISM3Q3() {
    return `
        ${header('Question 5c: Trapdoors, Salami Attacks & Covert Channels', 'Describe with examples (8 Marks)', 'theory')}
        ${section('1. Trapdoor (Backdoor)', `
            <div class="info-box info-box-purple">
                <span class="info-box-title">Definition</span>
                <p>A secret entry point in a program that <strong>bypasses normal authentication</strong>.</p>
                <p>👉 <em>Example:</em> Developer leaves hidden password to access system.</p>
                <p>⚠️ <em>Risk:</em> Attackers can misuse trapdoors.</p>
            </div>
        `)}
        ${section('2. Salami Attack', `
            <div class="info-box info-box-green">
                <span class="info-box-title">Definition</span>
                <p>Stealing <strong>small amounts repeatedly</strong> so it goes unnoticed.</p>
                <p>👉 <em>Example:</em> ₹1 deducted from thousands of bank accounts daily.</p>
            </div>
        `)}
        ${section('3. Covert Channel', `
            <div class="info-box info-box-yellow">
                <span class="info-box-title">Definition</span>
                <p>A hidden communication path that transfers data secretly.</p>
                <p>👉 <em>Example:</em> Sending data using file access time or CPU usage patterns.</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>These attacks are dangerous because they are <strong>hard to detect</strong>.</p>
            </div>
        `)}
    `;
}

function renderISM3Q4() {
    return `
        ${header('Question 5d: Control Measures', 'Discuss control measures against program security threats (2 Marks)', 'theory')}
        ${section('Control Measures', `
            <div class="info-box info-box-blue">
                <ol>
                    <li>Secure coding practices</li>
                    <li>Regular software updates</li>
                    <li>Input validation</li>
                    <li>Antivirus and firewalls</li>
                    <li>Code reviews and testing</li>
                </ol>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Preventive measures reduce risks from program-level threats.</p>
            </div>
        `)}
    `;
}

function renderISM3Q5() {
    return `
        ${header('Question 6a: Memory & Address Protection', 'Explain how these mechanisms work in OS (7 Marks)', 'theory')}
        ${section('Memory Protection', `
            <div class="info-box info-box-blue">
                <p>Memory protection prevents one program from <strong>accessing another program's memory</strong>.</p>
            </div>
        `)}
        ${section('How it Works', `
            <div class="info-box info-box-green">
                <ul>
                    <li>Each process has its own memory space</li>
                    <li>OS uses <strong>base and limit registers</strong></li>
                    <li>Illegal access causes program termination</li>
                </ul>
                <p>👉 <em>Example:</em> One app cannot read another app's data.</p>
            </div>
        `)}
        ${section('Address Protection', `
            <div class="info-box info-box-purple">
                <ul>
                    <li>Converts logical address → physical address</li>
                    <li>Done using <strong>Memory Management Unit (MMU)</strong></li>
                </ul>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Memory and address protection prevent unauthorized access and crashes.</p>
            </div>
        `)}
    `;
}

function renderISM3Q6() {
    return `
        ${header('Question 6b: Access Control & File Protection', 'Explain in OS and their role in security (7 Marks)', 'theory')}
        ${section('Access Control', `
            <div class="info-box info-box-blue">
                <span class="info-box-title">Definition</span>
                <p>Restricts system resources to authorized users only.</p>
                <p><strong>Methods:</strong></p>
                <ul>
                    <li>User IDs</li>
                    <li>Passwords</li>
                    <li>Access Control Lists (ACL)</li>
                </ul>
            </div>
        `)}
        ${section('File Protection', `
            <div class="info-box info-box-green">
                <span class="info-box-title">Definition</span>
                <p>Controls who can <strong>read, write, or execute files</strong>.</p>
                <p>👉 <em>Example:</em> Linux file permissions (rwx)</p>
            </div>
        `)}
        ${section('Role in Security', `
            <div class="answer-box">
                <ul>
                    <li>Prevents data misuse</li>
                    <li>Protects sensitive files</li>
                </ul>
            </div>
        `)}
    `;
}

function renderISM3Q7() {
    return `
        ${header('Question 6c: User Authentication Techniques', 'Identify various techniques in OS (6 Marks)', 'theory')}
        ${section('User Authentication Techniques', `
            <div class="info-box info-box-blue">
                <ol>
                    <li>Password-based authentication</li>
                    <li>Biometric authentication (fingerprint, face)</li>
                    <li>Smart cards</li>
                    <li>One-Time Passwords (OTP)</li>
                    <li>Two-factor authentication</li>
                    <li>Token-based authentication</li>
                </ol>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Authentication ensures only <strong>legitimate users</strong> access the system.</p>
            </div>
        `)}
    `;
}
