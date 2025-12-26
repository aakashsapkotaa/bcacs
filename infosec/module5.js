// Information Security Module 5: Network Security, Risk Analysis & Security Policy

function renderISM5Q1() {
    return `
        ${header('Question 9a: Network Security', 'Define and explain key objectives (5 Marks)', 'theory')}
        ${section('Network Security Definition', `
            <div class="info-box info-box-blue">
                <p>Network security refers to the <strong>protection of computer networks and data</strong> from unauthorized access, attacks, misuse, and failures.</p>
                <p>It ensures that <strong>data transmitted over a network is safe and reliable</strong>.</p>
            </div>
        `)}
        ${section('Key Objectives of Network Security', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Confidentiality</span>
                <p>Prevents unauthorized users from reading data</p>
                <p>👉 Example: Encrypted online banking data</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Integrity</span>
                <p>Ensures data is not altered during transmission</p>
                <p>👉 Example: Message not modified by hacker</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Availability</span>
                <p>Network services should be available when needed</p>
                <p>👉 Example: Email server always accessible</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Authentication</span>
                <p>Confirms identity of users</p>
                <p>👉 Example: Login username & password</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">5. Non-Repudiation</span>
                <p>Sender cannot deny sending data</p>
                <p>👉 Example: Online transaction proof</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Network security protects data, users, and services from cyber threats.</p>
            </div>
        `)}
    `;
}

function renderISM5Q2() {
    return `
        ${header('Question 9b: Network Threats', 'Discuss different types with real-world examples (5 Marks)', 'theory')}
        ${section('What are Network Threats?', `
            <div class="info-box info-box-blue">
                <p>Network threats are <strong>attacks that target network resources and communication</strong>.</p>
            </div>
        `)}
        ${section('Types of Network Threats', `
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Malware</span>
                <p>Virus, worm, trojan spreading through network</p>
                <p>👉 Example: WannaCry ransomware</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Phishing</span>
                <p>Fake websites or emails stealing login data</p>
                <p>👉 Example: Fake bank login pages</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Denial of Service (DoS)</span>
                <p>Overloading servers to crash services</p>
                <p>👉 Example: Website unavailable during attack</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Man-in-the-Middle Attack</span>
                <p>Attacker intercepts communication</p>
                <p>👉 Example: Public Wi-Fi data sniffing</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">5. Spoofing</span>
                <p>Fake IP or identity</p>
                <p>👉 Example: Fake email sender address</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Network threats cause data loss, service failure, and financial damage.</p>
            </div>
        `)}
    `;
}

function renderISM5Q3() {
    return `
        ${header('Question 10a: Risk Analysis', 'Explain steps and how they help reduce security risks (10 Marks)', 'theory')}
        ${section('Risk Analysis Definition', `
            <div class="info-box info-box-blue">
                <p>Risk analysis is the process of <strong>identifying, analyzing, and reducing security risks</strong> in an organization.</p>
            </div>
        `)}
        ${section('Steps in Risk Analysis', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Asset Identification</span>
                <p>Identify valuable assets</p>
                <p>👉 Example: Servers, databases, user data</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Threat Identification</span>
                <p>Identify possible threats</p>
                <p>👉 Example: Hackers, malware, insiders</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Vulnerability Analysis</span>
                <p>Find system weaknesses</p>
                <p>👉 Example: Weak passwords</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Risk Assessment</span>
                <p>Measure impact and likelihood of threats</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">5. Risk Control / Mitigation</span>
                <p>Apply controls like firewalls, encryption</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">6. Monitoring and Review</span>
                <p>Continuous checking and updates</p>
            </div>
        `)}
        ${section('How Risk Analysis Helps', `
            <div class="answer-box">
                <ul>
                    <li>Prevents security incidents</li>
                    <li>Reduces financial loss</li>
                    <li>Improves system reliability</li>
                </ul>
            </div>
        `)}
    `;
}

function renderISM5Q4() {
    return `
        ${header('Question 10b: Organizational Security Policy', 'Discuss main elements and justify its importance (10 Marks)', 'theory')}
        ${section('What is Organizational Security Policy?', `
            <div class="info-box info-box-blue">
                <p>A security policy is a <strong>written document</strong> that defines <strong>rules and responsibilities</strong> for protecting information assets.</p>
            </div>
        `)}
        ${section('Main Elements of Security Policy', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Purpose and Scope</span>
                <p>Defines objectives and coverage</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Access Control Policy</span>
                <p>Who can access what</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Password Policy</span>
                <p>Strong password rules</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Data Protection Policy</span>
                <p>Handling sensitive data</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">5. Incident Response Policy</span>
                <p>Steps during security breach</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">6. User Responsibilities</span>
                <p>Do's and don'ts for employees</p>
            </div>
            <div class="info-box info-box-yellow">
                <span class="info-box-title">7. Compliance and Enforcement</span>
                <p>Penalties for violations</p>
            </div>
        `)}
        ${section('Importance of Security Policy', `
            <div class="answer-box">
                <ul>
                    <li>Prevents misuse of systems</li>
                    <li>Ensures legal compliance</li>
                    <li>Improves employee awareness</li>
                    <li>Protects organization reputation</li>
                </ul>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>A strong security policy is essential for <strong>safe, controlled, and lawful system usage</strong>.</p>
            </div>
        `)}
    `;
}
