// Information Security Module 1: Fundamentals of Information Security

function renderISM1Q1() {
    return `
        ${header('Question 1a: Types of Attacks', 'Explain different types of attacks with suitable examples (6 Marks)', 'theory')}
        ${section('What is an Attack?', `
            <div class="info-box info-box-blue">
                <p>An <strong>attack</strong> is an attempt by an unauthorized person (attacker) to <strong>steal, damage, modify, or misuse information</strong> or computer systems.</p>
            </div>
        `)}
        ${section('Types of Attacks', `
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Passive Attack</span>
                <ul>
                    <li>Attacker <strong>only observes data</strong></li>
                    <li>No modification of data</li>
                    <li>Difficult to detect</li>
                </ul>
                <p><strong>Examples:</strong> Eavesdropping on Wi-Fi, Traffic analysis (observing communication patterns)</p>
                <p>👉 <em>Example:</em> A hacker listens to your unsecured Wi-Fi traffic to read emails.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Active Attack</span>
                <ul>
                    <li>Attacker <strong>modifies, deletes, or disrupts data</strong></li>
                    <li>Easy to detect but difficult to prevent</li>
                </ul>
                <p><strong>Examples:</strong> Data modification, Denial of Service (DoS), Masquerade attack</p>
                <p>👉 <em>Example:</em> A hacker changes marks stored in a university database.</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Insider Attack</span>
                <ul>
                    <li>Attack performed by <strong>authorized users</strong></li>
                    <li>Very dangerous</li>
                </ul>
                <p>👉 <em>Example:</em> An employee leaking company passwords.</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">4. External Attack</span>
                <ul>
                    <li>Attack from <strong>outside the organization</strong></li>
                </ul>
                <p>👉 <em>Example:</em> A hacker from another country hacking a bank server.</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Attacks can be <strong>passive or active</strong>, <strong>internal or external</strong>, and cause serious damage to information systems.</p>
            </div>
        `)}
    `;
}

function renderISM1Q2() {
    return `
        ${header('Question 1b: Computer Security & CIA Triad', 'Define computer security and explain 3 key points of Information Security (5 Marks)', 'theory')}
        ${section('Computer Security Definition', `
            <div class="info-box info-box-blue">
                <p>Computer security refers to the <strong>protection of computer systems and data</strong> from unauthorized access, misuse, damage, or theft.</p>
            </div>
        `)}
        ${section('Three Key Points (CIA Triad)', `
            <div class="grid-2">
                <div class="info-box info-box-green">
                    <span class="info-box-title">1. Confidentiality</span>
                    <p>Ensures data is accessible <strong>only to authorized users</strong></p>
                    <p>👉 <em>Example:</em> Passwords, ATM PINs, medical records.</p>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">2. Integrity</span>
                    <p>Ensures data is <strong>accurate and not altered illegally</strong></p>
                    <p>👉 <em>Example:</em> Marks stored in a university database must not be modified.</p>
                </div>
            </div>
            <div class="info-box info-box-yellow" style="margin-top: 1rem;">
                <span class="info-box-title">3. Availability</span>
                <p>Ensures data is <strong>available when needed</strong></p>
                <p>👉 <em>Example:</em> Bank servers must work 24/7.</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Information security focuses on <strong>Confidentiality, Integrity, and Availability (CIA)</strong>.</p>
            </div>
        `)}
    `;
}

function renderISM1Q3() {
    return `
        ${header('Question 1c: Security Services & Mechanisms', 'Explain different types of security services and its mechanism (7 Marks)', 'theory')}
        ${section('What are Security Services?', `
            <div class="info-box info-box-blue">
                <p>Security services protect data and communication from attacks.</p>
            </div>
        `)}
        ${section('Types of Security Services', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Authentication</span>
                <p>Verifies the identity of users</p>
                <p><strong>Mechanism:</strong> Passwords, OTP, biometric verification</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Access Control</span>
                <p>Controls who can access resources</p>
                <p><strong>Mechanism:</strong> User permissions, roles</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Data Confidentiality</span>
                <p>Protects data from unauthorized disclosure</p>
                <p><strong>Mechanism:</strong> Encryption</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Data Integrity</span>
                <p>Ensures data is not altered</p>
                <p><strong>Mechanism:</strong> Hash functions, checksums</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">5. Non-Repudiation</span>
                <p>Sender cannot deny sending data</p>
                <p><strong>Mechanism:</strong> Digital signatures</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Security services ensure <strong>safe communication and data protection</strong> using various mechanisms.</p>
            </div>
        `)}
    `;
}

function renderISM1Q4() {
    return `
        ${header('Question 1d: IT Act', 'Expand the term IT Act and define it (2 Marks)', 'theory')}
        ${section('IT Act Definition', `
            <div class="info-box info-box-blue">
                <p><strong>IT Act</strong> stands for <strong>Information Technology Act</strong>.</p>
            </div>
            <div class="info-box info-box-green" style="margin-top: 1rem;">
                <p>The <strong>Information Technology Act, 2000</strong> is an Indian law that provides <strong>legal recognition to electronic transactions</strong> and deals with <strong>cyber crimes and electronic governance</strong>.</p>
            </div>
        `)}
    `;
}

function renderISM1Q5() {
    return `
        ${header('Question 2a: Computer Crimes', 'Discuss various types of computer crimes with real-world examples (10 Marks)', 'theory')}
        ${section('What is Computer Crime?', `
            <div class="info-box info-box-blue">
                <p>A computer crime is an <strong>illegal activity involving computers or networks</strong>.</p>
            </div>
        `)}
        ${section('Types of Computer Crimes', `
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Hacking</span>
                <p>Unauthorized access to systems</p>
                <p>👉 <em>Example:</em> Hacking bank websites.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Phishing</span>
                <p>Fake emails or websites to steal data</p>
                <p>👉 <em>Example:</em> Fake SBI email asking for OTP.</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Identity Theft</span>
                <p>Stealing personal details</p>
                <p>👉 <em>Example:</em> Using Aadhaar details illegally.</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Cyber Stalking</span>
                <p>Harassing someone online</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">5. Data Theft</span>
                <p>Stealing confidential data</p>
                <p>👉 <em>Example:</em> Stealing company customer database.</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">6. Online Fraud</span>
                <p>Financial cheating</p>
                <p>👉 <em>Example:</em> Fake online shopping websites.</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Computer crimes are increasing and require <strong>strong security laws and awareness</strong>.</p>
            </div>
        `)}
    `;
}

function renderISM1Q6() {
    return `
        ${header('Question 2b: Cryptography', 'Define cryptography and explain its types in detail (10 Marks)', 'theory')}
        ${section('Cryptography Definition', `
            <div class="info-box info-box-blue">
                <p>Cryptography is the <strong>science of protecting information</strong> by converting it into an unreadable form called <strong>cipher text</strong>.</p>
            </div>
        `)}
        ${section('Types of Cryptography', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Symmetric Key Cryptography</span>
                <ul>
                    <li>Same key for encryption and decryption</li>
                    <li>Fast and simple</li>
                </ul>
                <p>👉 <em>Example:</em> AES, DES</p>
                <p>📌 <em>Real-life example:</em> Locker key – same key to lock and unlock.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Asymmetric Key Cryptography</span>
                <ul>
                    <li>Uses <strong>two keys</strong>: public key and private key</li>
                    <li>More secure</li>
                </ul>
                <p>👉 <em>Example:</em> RSA</p>
                <p>📌 <em>Real-life example:</em> ATM card + PIN.</p>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">3. Hash Functions</span>
                <ul>
                    <li>Converts data into fixed-length value</li>
                    <li>One-way function</li>
                </ul>
                <p>👉 <em>Example:</em> SHA-256</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Cryptography ensures <strong>confidentiality, integrity, and authentication</strong> of data.</p>
            </div>
        `)}
    `;
}
