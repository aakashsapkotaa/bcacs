// Cloud Computing Module 5: Security

function renderCCM5Q1() {
    return `
        ${header('Question 9a: P2P Security Management', '08 Marks', 'theory')}
        ${section('Security Management in P2P', `
            <p>In a <strong>Peer-to-Peer (P2P)</strong> network, there is no central server. Every computer (node) acts as both a client and a server. Security management involves securing these direct connections to prevent the spread of bad data or viruses.</p>
        `)}
        ${section('Why Decentralized Protection is Required', `
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <span class="info-box-title">1. No Central Authority</span>
                    <p>Unlike a bank or a standard website, there is no "Main Server" to ban bad users or verify identities. Everyone is equal.</p>
                </div>
                <div class="info-box info-box-green">
                    <span class="info-box-title">2. Anonymous Users</span>
                    <p>Users can join the network anonymously. This makes it easy for attackers to hide.</p>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">3. Dynamic Network</span>
                    <p>Nodes join and leave instantly. A centralized firewall cannot protect a network that changes every second.</p>
                </div>
                <div class="info-box info-box-yellow">
                    <span class="info-box-title">4. Scalability</span>
                    <p>If millions of users had to check with one central security server, the system would crash. The security must be spread out (decentralized) across all nodes.</p>
                </div>
            </div>
        `)}
    `;
}

function renderCCM5Q2() {
    return `
        ${header('Question 9b: Cloud Security & Trust Management', '06 Marks', 'theory')}
        ${section('Cloud Security Definition', `
            <p><strong>Cloud security</strong> is a set of policies, controls, and technologies used to protect data, applications, and infrastructure involved in cloud computing. It focuses on:</p>
            <ul>
                <li><strong>Confidentiality:</strong> Keeping data private</li>
                <li><strong>Integrity:</strong> Keeping data safe from changes</li>
                <li><strong>Availability:</strong> Keeping data accessible</li>
            </ul>
        `)}
        ${section('Why Trust Management is Essential', `
            <p>In a <strong>multi-tenant environment</strong>, different companies (tenants) store their data on the same physical server.</p>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Lack of Physical Control</span>
                <p>You cannot see or touch the server holding your data. You must "trust" the provider is keeping it safe.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. No Peeking</span>
                <p>Trust management ensures that <strong>Tenant A cannot see Tenant B's data</strong>, even though they share the same hard drive.</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">3. Accountability</span>
                <p>If data is lost or stolen, trust management frameworks (like SLAs) define who is responsible—the customer or the provider.</p>
            </div>
        `)}
    `;
}

function renderCCM5Q3() {
    return `
        ${header('Question 9c: Distributed Intrusion Detection', '06 Marks', 'theory')}
        ${section('Definition', `
            <p>A standard <strong>Intrusion Detection System (IDS)</strong> watches one computer for hackers. A <strong>Distributed IDS</strong> watches the entire cloud. It consists of sensors placed on many different servers that talk to each other.</p>
        `)}
        ${section('How Agents Cooperate', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Local Agents</span>
                <p>Small software programs (agents) sit on every server in the cloud. They monitor local traffic for suspicious activity (like a virus or a hacker scanning ports).</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Central Analysis</span>
                <p>These agents send their logs to a central brain (<strong>Analysis Engine</strong>).</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">3. Collective Immunity</span>
                <p>If an agent on Server A sees a new attack, it tells the central brain. The brain then <strong>instantly updates Server B, C, and D</strong> to block that attack. The whole cloud learns from one attack.</p>
            </div>
        `)}
        ${section('Architecture Diagram', `
            <div class="calc-step">
                <pre style="font-family: monospace; font-size: 0.8rem; overflow-x: auto;">
                         ┌──────────────────────┐
                         │   ANALYSIS ENGINE    │
                         │   (Central Brain)    │
                         └──────────┬───────────┘
                                    │
           ┌────────────────────────┼────────────────────────┐
           │                        │                        │
    ┌──────▼──────┐          ┌──────▼──────┐          ┌──────▼──────┐
    │  Server A   │          │  Server B   │          │  Server C   │
    │   [Agent]   │◄────────►│   [Agent]   │◄────────►│   [Agent]   │
    └─────────────┘          └─────────────┘          └─────────────┘
                </pre>
            </div>
        `)}
    `;
}

function renderCCM5Q4() {
    return `
        ${header('Question 10a: PowerTrust', '10 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>PowerTrust</strong> is a reputation management system designed for P2P networks. It is built to separate the "good" reliable nodes from the "bad" malicious nodes effectively.</p>
        `)}
        ${section('How It Improves Accuracy', `
            <p>It uses the concept of "<strong>Power Nodes</strong>" based on the Power-Law Distribution (the 80/20 rule).</p>
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Identifying Power Nodes</span>
                <p>In any network, a small number of users (<strong>Power Nodes</strong>) are very active and honest. They do most of the good work.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Aggregation</span>
                <p>Instead of asking random strangers if a user is trustworthy, the system asks these <strong>highly reputable Power Nodes</strong>.</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">3. Speed & Accuracy</span>
                <p>Because Power Nodes have more history and data, their feedback is more accurate. Relying on them makes calculating trust scores <strong>faster</strong> and reduces the chance of fake reviews.</p>
            </div>
        `)}
        ${section('Visual Representation', `
            <div class="calc-step">
                <pre style="font-family: monospace; font-size: 0.8rem; overflow-x: auto;">
    Power-Law Distribution in P2P Networks:
    
    Trust Score
         ▲
         │ ████
         │ ████ ▄▄
         │ ████ ████ ▄▄
         │ ████ ████ ████ ▄▄ ▄▄ ▄▄ ▄▄
         └────────────────────────────► Nodes
           Power    Regular Nodes
           Nodes    (Many, low trust)
          (Few, high trust)
                </pre>
            </div>
        `)}
    `;
}

function renderCCM5Q5() {
    return `
        ${header('Question 10b: Data Encryption', '05 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>Data Encryption</strong> is the process of scrambling data into a code (ciphertext) so that it looks like gibberish to anyone who does not have the "key" (password) to read it.</p>
        `)}
        ${section('Why It Is Essential in Cloud Storage', `
            <div class="answer-box">
                <div class="answer-box-title">Privacy from the Provider</div>
                <p>Even if the cloud provider (like Google or Amazon) has access to the physical hard drive, they <strong>cannot read your files</strong> if they are encrypted. It ensures only you know what is in your data.</p>
            </div>
        `)}
        ${section('Types of Encryption', `
            ${table(['Type', 'Description', 'Use Case'], [
        ['Encryption at Rest', 'Data is encrypted when stored on disk', 'Database storage, file storage'],
        ['Encryption in Transit', 'Data is encrypted while being transferred', 'HTTPS, SSL/TLS connections'],
        ['End-to-End Encryption', 'Only sender and receiver can read data', 'Messaging apps, secure email']
    ])}
        `)}
    `;
}

function renderCCM5Q6() {
    return `
        ${header('Question 10c: Virtualization Security', '05 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>Virtualization Security</strong> refers to the security measures taken to protect the Virtual Machines (VMs) and the Hypervisor software that manages them. It ensures that the software layer separating the VMs remains strong.</p>
        `)}
        ${section('One Major Threat: VM Escape', `
            <div class="alert alert-warning">
                <strong>VM Escape Attack</strong>
            </div>
            <div class="info-box info-box-blue" style="margin-top: 1rem;">
                <span class="info-box-title">Description</span>
                <p>"VM Escape" is an attack where a hacker crashes out of the Virtual Machine they are renting and gains access to the underlying <strong>Host Server (Hypervisor)</strong>.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-top: 1rem;">
                <span class="info-box-title">Danger</span>
                <p>If they "escape," they can potentially <strong>control or spy on ALL other Virtual Machines</strong> running on that same physical server.</p>
            </div>
        `)}
        ${section('Other Virtualization Threats', `
            ${table(['Threat', 'Description'], [
        ['VM Sprawl', 'Too many unmanaged VMs creating security gaps'],
        ['Hypervisor Attack', 'Directly attacking the hypervisor software'],
        ['Inter-VM Attack', 'One VM attacking another on the same host'],
        ['Resource Starvation', 'One VM consuming all resources, affecting others']
    ])}
        `)}
    `;
}
