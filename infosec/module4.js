// Information Security Module 4: Database Security & Ethical Issues

function renderISM4Q1() {
    return `
        ${header('Question 7a: Database Security Requirements', 'Explain requirements and how reliability/integrity affect performance (7 Marks)', 'theory')}
        ${section('What is Database Security?', `
            <div class="info-box info-box-blue">
                <p>Database security refers to <strong>protecting databases from unauthorized access, misuse, modification, or destruction</strong>.</p>
            </div>
        `)}
        ${section('Database Security Requirements', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Confidentiality</span>
                <p>Only authorized users should access data</p>
                <p>👉 Example: Bank account details</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Integrity</span>
                <p>Data should be <strong>accurate and consistent</strong></p>
                <p>👉 Example: Marks should not be changed illegally</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Availability</span>
                <p>Database should be accessible when required</p>
                <p>👉 Example: ATM database must work 24/7</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Authentication</span>
                <p>Verify user identity before access</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">5. Authorization</span>
                <p>Different access levels for users</p>
            </div>
        `)}
        ${section('Reliability and Integrity Impact on Performance', `
            <div class="info-box info-box-purple">
                <ul>
                    <li><strong>Reliability</strong> ensures system works without failure</li>
                    <li><strong>Integrity</strong> ensures correct data is stored</li>
                </ul>
                <p>📌 If integrity checks are weak → wrong data</p>
                <p>📌 If reliability is poor → frequent database crashes</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Strong security requirements improve <strong>trust, performance, and accuracy</strong> of databases.</p>
            </div>
        `)}
    `;
}

function renderISM4Q2() {
    return `
        ${header('Question 7b: Securing Sensitive Data', 'Discuss the importance in information systems (7 Marks)', 'theory')}
        ${section('What is Sensitive Data?', `
            <div class="info-box info-box-blue">
                <p>Sensitive data includes:</p>
                <ul>
                    <li>Passwords</li>
                    <li>Bank details</li>
                    <li>Aadhaar numbers</li>
                    <li>Medical records</li>
                </ul>
            </div>
        `)}
        ${section('Importance of Securing Sensitive Data', `
            <div class="info-box info-box-green">
                <ol>
                    <li><strong>Prevents financial loss</strong></li>
                    <li><strong>Protects user privacy</strong></li>
                    <li><strong>Avoids identity theft</strong></li>
                    <li><strong>Maintains company reputation</strong></li>
                    <li><strong>Complies with laws and regulations</strong></li>
                </ol>
                <p>👉 <em>Example:</em> Data breach in banks leads to huge loss and legal action.</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Securing sensitive data is essential for <strong>trust, safety, and legal compliance</strong>.</p>
            </div>
        `)}
    `;
}

function renderISM4Q3() {
    return `
        ${header('Question 7c: Computer Crimes & Database Breaches', 'Explain types and how they result in breaches (6 Marks)', 'theory')}
        ${section('Types of Computer Crimes Causing Database Breaches', `
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Hacking</span>
                <p>Unauthorized access to databases</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. SQL Injection</span>
                <p>Malicious SQL queries used to steal data</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Insider Attacks</span>
                <p>Employees misusing access</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Malware Attacks</span>
                <p>Viruses and trojans stealing data</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">5. Phishing</span>
                <p>Stealing database login credentials</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Computer crimes directly lead to <strong>data leakage, corruption, and loss</strong>.</p>
            </div>
        `)}
    `;
}

function renderISM4Q4() {
    return `
        ${header('Question 8a: Ethical Issues in Database Security', 'Discuss ethical issues involved (10 Marks)', 'theory')}
        ${section('What are Ethics?', `
            <div class="info-box info-box-blue">
                <p>Ethics refers to <strong>moral principles</strong> followed while handling data.</p>
            </div>
        `)}
        ${section('Major Ethical Issues', `
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Privacy Violation</span>
                <p>Misuse of personal data</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Unauthorized Data Sharing</span>
                <p>Selling user data illegally</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Data Accuracy</span>
                <p>Maintaining correct records</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Access Misuse</span>
                <p>Employees abusing privileges</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">5. Surveillance Misuse</span>
                <p>Tracking users without consent</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Ethical practices ensure <strong>fair, lawful, and responsible data usage</strong>.</p>
            </div>
        `)}
    `;
}

function renderISM4Q5() {
    return `
        ${header('Question 8b: Database Protection Methods', 'Describe methods for protecting data and preventing unauthorized disclosure (10 Marks)', 'theory')}
        ${section('Methods to Protect Database Data', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Access Control</span>
                <p>Role-based permissions</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Encryption</span>
                <p>Encrypt stored and transmitted data</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Authentication</span>
                <p>Passwords, biometrics, OTP</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Audit Logs</span>
                <p>Track user activities</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">5. Backup & Recovery</span>
                <p>Protect data from loss</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">6. Firewalls</span>
                <p>Prevent external attacks</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Using multiple protection methods ensures <strong>strong database security</strong>.</p>
            </div>
        `)}
    `;
}
