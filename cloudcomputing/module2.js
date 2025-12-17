// Cloud Computing Module 2: Cloud Services

function renderCCM2Q1() {
    return `
        ${header('Question 3a: SaaS Model', '10 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>SaaS (Software as a Service)</strong> is a software distribution model where a third-party provider hosts applications and makes them available to customers over the Internet.</p>
            <div class="info-box info-box-blue">
                <span class="info-box-title">How it works</span>
                <p>You don't install software on your computer (like a CD-ROM). Instead, you access it via a <strong>web browser</strong>.</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">Management</span>
                <p>The user manages <strong>nothing</strong>. The provider manages everything: the network, servers, operating systems, storage, and application updates.</p>
            </div>
        `)}
        ${section('Advantages', `
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <span class="info-box-title">1. Lower Upfront Cost</span>
                    <p>You don't need to buy expensive software licenses or servers.</p>
                </div>
                <div class="info-box info-box-green">
                    <span class="info-box-title">2. Accessibility</span>
                    <p>You can access the software from anywhere (home, office, coffee shop) as long as you have the internet.</p>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">3. Automatic Updates</span>
                    <p>The provider handles all patches and upgrades. You always have the latest version.</p>
                </div>
                <div class="info-box info-box-yellow">
                    <span class="info-box-title">4. Scalability</span>
                    <p>You can easily add more users (licenses) as your company grows.</p>
                </div>
            </div>
        `)}
        ${section('Disadvantages', `
            <div class="grid-2">
                <div class="alert alert-warning">
                    <strong>1. Security Risks:</strong> Your data is stored on someone else's server, which raises privacy concerns.
                </div>
                <div class="alert alert-warning">
                    <strong>2. Vendor Lock-in:</strong> It can be difficult to switch to a different provider or move your data out.
                </div>
                <div class="alert alert-warning">
                    <strong>3. Internet Dependence:</strong> If your internet goes down, you cannot work.
                </div>
                <div class="alert alert-warning">
                    <strong>4. Limited Customization:</strong> It is a "one-size-fits-all" solution. You often cannot change the software to fit your specific business needs perfectly.
                </div>
            </div>
        `)}
        ${section('Real-World Applications', `
            ${table(['Application', 'Use Case'], [
        ['Google Workspace (Gmail, Docs)', 'Email and document creation'],
        ['Salesforce', 'Managing customer relationships (CRM)'],
        ['Dropbox', 'File storage'],
        ['Microsoft Office 365', 'Productivity tools (Word, Excel online)']
    ])}
        `)}
    `;
}

function renderCCM2Q2() {
    return `
        ${header('Question 3b: SaaS vs IaaS vs PaaS', '10 Marks', 'theory')}
        ${section('Comparison Table', `
            ${table(['Feature', 'SaaS', 'PaaS', 'IaaS'], [
        ['Definition', 'Provider delivers fully functional software over the internet', 'Provider gives a framework (tools/runtime) for developers to build apps', 'Provider gives raw hardware (VMs, Storage) over the internet'],
        ['User Role', 'End User (Just uses the app)', 'Developer (Writes code, builds apps)', 'IT Admin / Architect (Manages OS & Network)'],
        ['Advantages', 'No installation needed, Automatic updates, Accessible anywhere', 'Faster coding (pre-built tools), No server maintenance, Easy scaling', 'Full control over the OS, Highest flexibility, Pay only for resources used'],
        ['Disadvantages', 'Limited customization, Data security concerns, Vendor lock-in', 'Vendor lock-in (code might not work elsewhere), Less control than IaaS', 'Complex to manage (needs experts), Must patch/secure the OS yourself'],
        ['Examples', 'Gmail, Netflix, Salesforce', 'Google App Engine, Heroku', 'AWS EC2, Microsoft Azure VMs']
    ])}
        `)}
        ${section('Visual Representation', `
            <div class="calc-step">
                <pre style="font-family: monospace; font-size: 0.8rem; overflow-x: auto;">
┌─────────────────────────────────────────────────────────────────────────┐
│                           YOU MANAGE                                     │
├─────────────────────┬─────────────────────┬─────────────────────────────┤
│       ON-PREM       │        IaaS         │    PaaS    │     SaaS       │
├─────────────────────┼─────────────────────┼────────────┼────────────────┤
│   Applications      │   Applications      │  Apps      │  ████████████  │
│   Data              │   Data              │  Data      │  (Provider)    │
│   Runtime           │   Runtime           │  ████████  │  ████████████  │
│   Middleware        │   Middleware        │  (Provider)│  ████████████  │
│   O/S               │   O/S               │  ████████  │  ████████████  │
│   Virtualization    │   ██████████████████│  ████████  │  ████████████  │
│   Servers           │   (Provider)        │  (Provider)│  ████████████  │
│   Storage           │   ██████████████████│  ████████  │  ████████████  │
│   Networking        │   ██████████████████│  ████████  │  ████████████  │
└─────────────────────┴─────────────────────┴────────────┴────────────────┘
</pre>
            </div>
        `)}
    `;
}

function renderCCM2Q3() {
    return `
        ${header('Question 4a: IaaS Model & Components', '05 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>IaaS (Infrastructure as a Service)</strong> provides virtualized computing resources over the internet. It is like renting the raw hardware (servers) rather than buying it.</p>
            <div class="info-box info-box-blue">
                <span class="info-box-title">Control Level</span>
                <p>The user has the <strong>highest level of control</strong>. The provider manages the physical hardware, but the user manages the Operating System (OS), middleware, and applications.</p>
            </div>
        `)}
        ${section('Key Components', `
            <div class="grid-2">
                <div class="info-box info-box-green">
                    <span class="info-box-title">1. Virtual Machines (VMs)</span>
                    <p>The main computing unit (like a virtual CPU and RAM).</p>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">2. Storage</span>
                    <p>Places to store data, either as "Block storage" (like a hard drive) or "Object storage" (for files).</p>
                </div>
                <div class="info-box info-box-yellow">
                    <span class="info-box-title">3. Network</span>
                    <p>Virtual networks (VLANs), IP addresses, and firewalls to connect the VMs.</p>
                </div>
                <div class="info-box info-box-blue">
                    <span class="info-box-title">4. Load Balancers</span>
                    <p>Tools to distribute traffic across multiple servers.</p>
                </div>
            </div>
        `)}
        ${section('Example', `
            <div class="answer-box">
                <div class="answer-box-title">Amazon EC2 (Elastic Compute Cloud)</div>
                <p>A user rents a virtual Linux server, installs their own database software on it, and manages the security settings themselves.</p>
            </div>
        `)}
    `;
}

function renderCCM2Q4() {
    return `
        ${header('Question 4b: Virtualization', '05 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>Virtualization</strong> is the process of creating a software-based (virtual) representation of something, such as a server, storage device, or network. It allows a single physical computer to run multiple "Virtual Machines" (VMs) at the same time.</p>
        `)}
        ${section('Key Characteristics', `
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <span class="info-box-title">1. Partitioning</span>
                    <p>You can split one physical server into many smaller, safe virtual servers.</p>
                </div>
                <div class="info-box info-box-green">
                    <span class="info-box-title">2. Isolation</span>
                    <p>If one VM crashes or gets a virus, the others are safe. They do not affect each other.</p>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">3. Encapsulation</span>
                    <p>A complete VM (OS + Apps + Data) is saved as a single file. This makes it easy to move or copy.</p>
                </div>
                <div class="info-box info-box-yellow">
                    <span class="info-box-title">4. Hardware Independence</span>
                    <p>A VM can run on any physical server. It doesn't care what brand of hardware is underneath.</p>
                </div>
            </div>
        `)}
    `;
}

function renderCCM2Q5() {
    return `
        ${header('Question 4c: VM Migration Types', '05 Marks', 'theory')}
        ${section('Overview', `
            <p><strong>VM Migration</strong> is moving a Virtual Machine from one physical server to another.</p>
        `)}
        ${section('1. Cold Migration', `
            <div class="info-box info-box-blue">
                <span class="info-box-title">Process</span>
                <p>The VM is <strong>powered off</strong>. The files are moved to the new server, and then the VM is turned back on.</p>
            </div>
            <p><strong>Impact:</strong> There is <strong>significant downtime</strong> (the service stops working during the move).</p>
            <p><strong>Use Case:</strong> Maintenance windows where downtime is allowed.</p>
        `)}
        ${section('2. Warm Migration (Suspend/Resume)', `
            <div class="info-box info-box-yellow">
                <span class="info-box-title">Process</span>
                <p>The VM is <strong>suspended (paused)</strong>. The state (memory) is saved to disk, moved, and then resumed on the new server.</p>
            </div>
            <p><strong>Impact:</strong> <strong>Short downtime</strong> (seconds to minutes), but open network connections might drop.</p>
        `)}
        ${section('3. Live Migration', `
            <div class="info-box info-box-green">
                <span class="info-box-title">Process</span>
                <p>The VM moves <strong>while it is still running</strong>. The memory is copied page-by-page while the user is still using the app.</p>
            </div>
            <p><strong>Impact:</strong> <strong>Zero downtime</strong>. The user doesn't even notice the move happened.</p>
            <p><strong>Use Case:</strong> Load balancing or critical server maintenance.</p>
        `)}
        ${section('Comparison Table', `
            ${table(['Type', 'VM State', 'Downtime', 'Use Case'], [
        ['Cold Migration', 'Powered Off', 'Significant', 'Scheduled maintenance'],
        ['Warm Migration', 'Suspended', 'Short (seconds-minutes)', 'Quick moves'],
        ['Live Migration', 'Running', 'Zero', 'Critical systems']
    ])}
        `)}
    `;
}

function renderCCM2Q6() {
    return `
        ${header('Question 4d: Multi-Cloud Model', '05 Marks', 'theory')}
        ${section('Definition', `
            <p>A <strong>Multi-Cloud model</strong> is a strategy where an organization uses cloud services from <strong>two or more different public cloud providers</strong> (e.g., using both AWS and Google Cloud) at the same time.</p>
        `)}
        ${section('Why Use Multi-Cloud?', `
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <span class="info-box-title">1. Avoid Vendor Lock-in</span>
                    <p>If one provider raises prices or has technical issues, you are not stuck with them because you have another provider ready.</p>
                </div>
                <div class="info-box info-box-green">
                    <span class="info-box-title">2. Best-of-Breed Services</span>
                    <p>You might use Google Cloud for its excellent AI tools, but use Microsoft Azure because it works well with your Office 365. You pick the best tool from each provider.</p>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">3. Reliability (Redundancy)</span>
                    <p>If AWS goes down in a specific region, your application can keep running on Azure.</p>
                </div>
                <div class="info-box info-box-yellow">
                    <span class="info-box-title">4. Compliance</span>
                    <p>Some data might need to be stored in specific countries. Using different providers helps meet these local laws.</p>
                </div>
            </div>
        `)}
    `;
}
