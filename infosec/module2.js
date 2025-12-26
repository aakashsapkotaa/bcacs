// Information Security Module 2: Cryptography & Data Security Concepts

function renderISM2Q1() {
    return `
        ${header('Question 3a: Confusion and Diffusion', 'Explain with suitable examples (4 Marks)', 'theory')}
        ${section('Introduction', `
            <div class="info-box info-box-blue">
                <p>In cryptography, <strong>Confusion</strong> and <strong>Diffusion</strong> are two important principles introduced by <strong>Claude Shannon</strong> to make encryption strong.</p>
            </div>
        `)}
        ${section('1. Confusion', `
            <div class="info-box info-box-purple">
                <span class="info-box-title">Definition</span>
                <p>Confusion hides the <strong>relationship between the key and the ciphertext</strong>.</p>
                <ul>
                    <li>Makes it difficult for attackers to guess the key</li>
                    <li>Achieved using <strong>substitution techniques</strong></li>
                </ul>
                <p>👉 <strong>Example:</strong> Replacing letters using a substitution cipher: A → X, B → M, C → Q</p>
                <p>Even if attacker sees ciphertext, they <strong>cannot understand the key</strong>.</p>
                <p>📌 <em>Real-life example:</em> ATM PIN → numbers shown as ****</p>
            </div>
        `)}
        ${section('2. Diffusion', `
            <div class="info-box info-box-green">
                <span class="info-box-title">Definition</span>
                <p>Diffusion spreads the <strong>influence of one plaintext character over many ciphertext characters</strong>.</p>
                <ul>
                    <li>Small change in plaintext → large change in ciphertext</li>
                    <li>Achieved using <strong>transposition and permutation</strong></li>
                </ul>
                <p>👉 <strong>Example:</strong> Changing one letter in password changes the whole encrypted output.</p>
                <p>📌 <em>Real-life example:</em> Changing one letter in WhatsApp message changes entire encrypted data.</p>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Confusion hides the key relation, diffusion spreads data changes—both together make encryption secure.</p>
            </div>
        `)}
    `;
}

function renderISM2Q2() {
    return `
        ${header('Question 3b: Symmetric vs Asymmetric Cryptography', 'Compare with suitable example (10 Marks)', 'theory')}
        ${section('Introduction', `
            <div class="info-box info-box-blue">
                <p>Cryptography is classified into <strong>Symmetric Key</strong> and <strong>Asymmetric Key</strong> cryptography.</p>
            </div>
        `)}
        ${section('Symmetric Key Cryptography', `
            <div class="info-box info-box-green">
                <span class="info-box-title">Definition</span>
                <p>Uses <strong>one single key</strong> for both encryption and decryption.</p>
                <p><strong>Features:</strong></p>
                <ul>
                    <li>Fast</li>
                    <li>Less computational power</li>
                    <li>Key distribution problem</li>
                </ul>
                <p><strong>Examples:</strong> DES, AES</p>
                <p>📌 <em>Real-life example:</em> Door lock – same key to lock and unlock.</p>
            </div>
        `)}
        ${section('Asymmetric Key Cryptography', `
            <div class="info-box info-box-purple">
                <span class="info-box-title">Definition</span>
                <p>Uses <strong>two different keys</strong>:</p>
                <ul>
                    <li>Public Key (shared)</li>
                    <li>Private Key (secret)</li>
                </ul>
                <p><strong>Features:</strong></p>
                <ul>
                    <li>More secure</li>
                    <li>Slower than symmetric</li>
                    <li>No key distribution problem</li>
                </ul>
                <p><strong>Examples:</strong> RSA, ECC</p>
                <p>📌 <em>Real-life example:</em> Email system – anyone can send mail (public key), only receiver can read (private key).</p>
            </div>
        `)}
        ${section('Comparison Table', `
            ${table(['Feature', 'Symmetric Key', 'Asymmetric Key'], [
        ['Keys used', 'One key', 'Two keys'],
        ['Speed', 'Fast', 'Slow'],
        ['Security', 'Less secure', 'More secure'],
        ['Key sharing', 'Required', 'Not required'],
        ['Example', 'AES', 'RSA']
    ])}
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Symmetric is fast, asymmetric is secure. Modern systems use <strong>both together</strong>.</p>
            </div>
        `)}
    `;
}

function renderISM2Q3() {
    return `
        ${header('Question 3c: Digital Certificates & Signatures', 'Explain their role in secure communication (6 Marks)', 'theory')}
        ${section('Digital Certificate', `
            <div class="info-box info-box-blue">
                <span class="info-box-title">Definition</span>
                <p>A digital certificate is an <strong>electronic document</strong> that verifies the <strong>identity of a user or website</strong>.</p>
                <p><strong>Issued by:</strong> Certificate Authority (CA)</p>
                <p><strong>Contains:</strong></p>
                <ul>
                    <li>Owner name</li>
                    <li>Public key</li>
                    <li>Expiry date</li>
                    <li>CA signature</li>
                </ul>
                <p>📌 <em>Example:</em> HTTPS websites (🔒 icon in browser)</p>
            </div>
        `)}
        ${section('Digital Signature', `
            <div class="info-box info-box-green">
                <span class="info-box-title">Definition</span>
                <p>A digital signature ensures:</p>
                <ul>
                    <li>Authentication</li>
                    <li>Integrity</li>
                    <li>Non-repudiation</li>
                </ul>
                <p><strong>How it works:</strong></p>
                <ul>
                    <li>Sender signs data using private key</li>
                    <li>Receiver verifies using public key</li>
                </ul>
                <p>📌 <em>Example:</em> Online banking transactions</p>
            </div>
        `)}
        ${section('Role in Secure Communication', `
            <div class="answer-box">
                <ul>
                    <li>Prevents impersonation</li>
                    <li>Ensures data is not modified</li>
                    <li>Confirms sender identity</li>
                </ul>
            </div>
        `)}
    `;
}

function renderISM2Q4() {
    return `
        ${header('Question 4a: DES Algorithm', 'Explain the working with a neat flowchart (10 Marks)', 'calc')}
        ${section('DES (Data Encryption Standard)', `
            <div class="info-box info-box-blue">
                <p>DES is a <strong>symmetric key block cipher</strong>.</p>
            </div>
        `)}
        ${section('Basic Features', `
            <div class="grid-2">
                <div class="info-box info-box-green">
                    <span class="info-box-title">Block Size</span>
                    <p>64 bits</p>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">Key Size</span>
                    <p>56 bits</p>
                </div>
            </div>
            <div class="info-box info-box-yellow" style="margin-top: 1rem;">
                <span class="info-box-title">Number of Rounds</span>
                <p>16 rounds</p>
            </div>
        `)}
        ${section('Working Steps of DES', `
            <div class="calc-step">
                <div class="calc-step-title">Step-by-Step Process</div>
                <ol>
                    <li>Plaintext (64 bits) is taken</li>
                    <li>Initial Permutation (IP)</li>
                    <li>Divided into Left (L) and Right (R)</li>
                    <li>16 rounds of processing:
                        <ul>
                            <li>Expansion</li>
                            <li>XOR with key</li>
                            <li>Substitution (S-boxes)</li>
                            <li>Permutation</li>
                        </ul>
                    </li>
                    <li>Final Permutation</li>
                    <li>Ciphertext produced</li>
                </ol>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>DES provides confidentiality but is now replaced by AES due to small key size.</p>
            </div>
        `)}
    `;
}

function renderISM2Q5() {
    return `
        ${header('Question 4b: Hash Function', 'Define and discuss its importance in data security (10 Marks)', 'theory')}
        ${section('Hash Function Definition', `
            <div class="info-box info-box-blue">
                <p>A hash function converts <strong>input data of any size</strong> into a <strong>fixed-length output</strong> called hash value.</p>
            </div>
        `)}
        ${section('Characteristics', `
            <div class="info-box info-box-purple">
                <ul>
                    <li>One-way function</li>
                    <li>Same input → same output</li>
                    <li>Small change → completely different hash</li>
                </ul>
            </div>
        `)}
        ${section('Importance of Hash Functions', `
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Data Integrity</span>
                <p>Detects data modification</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Password Protection</span>
                <p>Passwords stored as hashes</p>
            </div>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Digital Signatures</span>
                <p>Hash is signed instead of whole data</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">4. Authentication</span>
                <p>Verifies message integrity</p>
            </div>
        `)}
        ${section('Examples', `
            <div class="answer-box">
                <ul>
                    <li>MD5</li>
                    <li>SHA-1</li>
                    <li>SHA-256</li>
                </ul>
            </div>
        `)}
        ${section('Conclusion', `
            <div class="answer-box">
                <p>Hash functions are essential for <strong>integrity, authentication, and security</strong>.</p>
            </div>
        `)}
    `;
}
