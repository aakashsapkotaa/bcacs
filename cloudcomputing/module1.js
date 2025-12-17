// Cloud Computing Module 1: Introduction to Cloud Computing

function renderCCM1Q1() {
    return `
        ${header('Question 1a: Define Cloud Computing', '08 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>Cloud computing</strong> is the delivery of computing services—like servers, storage, databases, and software—over the Internet ("the cloud"). Instead of buying and maintaining physical data centers, you rent access to these services from a provider (like AWS or Google Cloud) on a <strong>pay-as-you-go basis</strong>.</p>
            <div class="info-box info-box-blue">
                <span class="info-box-title">NIST Definition (Simplified)</span>
                <p>It is a model that allows convenient, on-demand network access to a shared pool of configurable computing resources (like networks, servers, and storage) that can be set up quickly with minimal effort.</p>
            </div>
        `)}
        ${section('Working Mechanism', `
            <p>Cloud computing works by connecting a user's device to the provider's data centers via the internet. It is divided into two main sections:</p>
            <div class="grid-2">
                <div class="info-box info-box-green">
                    <span class="info-box-title">1. Frontend (Client Side)</span>
                    <p>This is the side the user sees. It includes:</p>
                    <ul>
                        <li>User's computer</li>
                        <li>Network connection</li>
                        <li>Application used to access the cloud (like a web browser)</li>
                    </ul>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">2. Backend (Server Side)</span>
                    <p>This is the "cloud" itself. It consists of:</p>
                    <ul>
                        <li>Servers</li>
                        <li>Data storage systems</li>
                        <li>Software that runs the services</li>
                    </ul>
                </div>
            </div>
            <div class="info-box info-box-yellow" style="margin-top: 1rem;">
                <span class="info-box-title">3. The Internet</span>
                <p>Acts as the bridge connecting the Frontend to the Backend.</p>
            </div>
            <div class="info-box info-box-blue" style="margin-top: 1rem;">
                <span class="info-box-title">4. Central Server</span>
                <p>Manages the traffic and ensures everything runs smoothly by following specific rules (protocols).</p>
            </div>
        `)}
        ${section('Architecture Diagram', `
            <div class="calc-step">
                <pre style="font-family: monospace; font-size: 0.8rem; overflow-x: auto;">
┌─────────────────────┐                    ┌─────────────────────┐
│      FRONTEND       │                    │       BACKEND       │
│   User Computer /   │                    │   Cloud Data Center │
│       Mobile        │                    │                     │
├─────────────────────┤                    ├─────────────────────┤
│   Web Browser       │                    │     Servers         │
│   (Client App)      │◄───── INTERNET ────►│     Storage         │
│                     │                    │     Databases       │
│                     │                    │     Security        │
└─────────────────────┘                    └─────────────────────┘
                              │
                    ┌─────────────────────┐
                    │    CENTRAL SERVER   │
                    │  (Manages Traffic)  │
                    └─────────────────────┘
                </pre>
            </div>
        `)}
    `;
}

function renderCCM1Q2() {
    return `
        ${header('Question 1b: Goals of Cloud Computing', '06 Marks', 'theory')}
        ${section('Overview', `
            <p>The main goal of cloud computing is to make IT resources more efficient and accessible. There are <strong>five key goals (characteristics)</strong>:</p>
        `)}
        ${section('1. On-Demand Self-Service', `
            <div class="info-box info-box-blue">
                <p>Users can get computing power (like server time or network storage) <strong>automatically</strong> whenever they need it, without needing to talk to a human admin.</p>
            </div>
        `)}
        ${section('2. Broad Network Access', `
            <div class="info-box info-box-green">
                <p>Services are available over the network and can be accessed through <strong>standard devices</strong> like mobile phones, laptops, and tablets from anywhere.</p>
            </div>
        `)}
        ${section('3. Resource Pooling', `
            <div class="info-box info-box-purple">
                <p>The provider's resources serve multiple customers at the same time (<strong>Multi-tenancy</strong>). Physical and virtual resources are assigned and reassigned according to demand.</p>
            </div>
        `)}
        ${section('4. Rapid Elasticity', `
            <div class="info-box info-box-yellow">
                <p>Capabilities can scale outward (get bigger) and inward (get smaller) quickly. To the user, the resources often look <strong>unlimited</strong> and can be bought in any quantity at any time.</p>
            </div>
        `)}
        ${section('5. Measured Service', `
            <div class="info-box info-box-blue">
                <p>Cloud systems automatically control and optimize resource use. Usage is monitored and billed, so you only <strong>pay for what you actually use</strong> (like an electricity bill).</p>
            </div>
        `)}
    `;
}

function renderCCM1Q3() {
    return `
        ${header('Question 1c: Business Agility & Scalability', '06 Marks', 'theory')}
        ${section('Overview', `
            <p>Organizations use cloud computing to gain a competitive advantage in the following ways:</p>
        `)}
        ${section('1. Improving Agility (Speed)', `
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <span class="info-box-title">Faster Deployment</span>
                    <p>In a traditional setup, getting a new server might take <strong>weeks</strong>. In the cloud, developers can deploy resources in <strong>minutes</strong>.</p>
                </div>
                <div class="info-box info-box-green">
                    <span class="info-box-title">Time-to-Market</span>
                    <p>Because infrastructure is ready instantly, businesses can launch new products and updates much faster.</p>
                </div>
            </div>
            <div class="info-box info-box-purple" style="margin-top: 1rem;">
                <span class="info-box-title">Innovation</span>
                <p>It allows companies to experiment with new technologies (like AI or Big Data) without a huge risk or upfront cost.</p>
            </div>
        `)}
        ${section('2. Improving Scalability', `
            <div class="grid-2">
                <div class="info-box info-box-yellow">
                    <span class="info-box-title">Global Scale</span>
                    <p>You can deploy your application in multiple physical locations around the world with just a few clicks, putting your app closer to your customers.</p>
                </div>
                <div class="info-box info-box-blue">
                    <span class="info-box-title">Elasticity</span>
                    <p>If your website suddenly gets a million visitors (traffic spike), the cloud <strong>automatically adds more resources</strong> to handle it. When traffic drops, it reduces the resources to save money.</p>
                </div>
            </div>
        `)}
    `;
}

function renderCCM1Q4() {
    return `
        ${header('Question 2a: Benefits of Cloud Computing', '07 Marks', 'theory')}
        ${section('What is Cloud Computing?', `
            <p>It is accessing computing resources over the internet on a <strong>pay-as-you-go</strong> basis rather than owning physical hardware.</p>
        `)}
        ${section('Benefits of Cloud Computing', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Cost Savings</span>
                <p>You trade <strong>Capital Expense</strong> (fixed costs like buying servers) for <strong>Variable Expense</strong> (paying only for what you use).</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Agility & Speed</span>
                <p>Massive amounts of computing resources can be provisioned in <strong>minutes</strong>, giving businesses a lot of flexibility.</p>
            </div>
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">3. Global Scale</span>
                <p>You can expand to new geographic regions and deploy globally in minutes.</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">4. Productivity</span>
                <p>It removes the need for "racking and stacking"—physical chores like setting up hardware, software patching, and cabling. IT teams can focus on important business goals instead.</p>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">5. Reliability</span>
                <p>Cloud providers offer <strong>data backup, disaster recovery, and business continuity</strong>, which makes data safer and easier to recover.</p>
            </div>
        `)}
    `;
}

function renderCCM1Q5() {
    return `
        ${header('Question 2b: Total Cost of Ownership (TCO)', '07 Marks', 'calc')}
        ${section('Concept of TCO', `
            <p><strong>Total Cost of Ownership (TCO)</strong> is a financial estimate used to determine the direct and indirect costs of a product or system. In the cloud, TCO analysis helps a company decide if moving to the cloud is cheaper than staying on-premises (in their own building).</p>
        `)}
        ${section('Key Shift: CapEx vs. OpEx', `
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <span class="info-box-title">CapEx (Capital Expenditure)</span>
                    <p>Money spent <strong>upfront</strong> on physical infrastructure (buying servers, ACs, building data centers). This is the <strong>traditional model</strong>.</p>
                </div>
                <div class="info-box info-box-green">
                    <span class="info-box-title">OpEx (Operational Expenditure)</span>
                    <p>Money spent on services <strong>as they are used</strong> (monthly subscriptions). This is the <strong>Cloud model</strong>.</p>
                </div>
            </div>
        `)}
        ${section('TCO Calculation Factors', `
            ${table(['Cost Area', 'Traditional (On-Premises)', 'Cloud'], [
        ['Server Costs', 'Buying hardware', 'Renting instances'],
        ['Storage Costs', 'Buying hard drives/tape drives', 'Paying per GB of cloud storage'],
        ['Facility Costs', 'Paying for real estate, power, and cooling', '$0 facility costs'],
        ['Labor Costs', 'Salaries for staff to repair hardware', 'Staff focusing on strategy']
    ])}
        `)}
        ${section('Example', `
            <div class="answer-box">
                <div class="answer-box-title">TCO Comparison</div>
                <p>If a company buys a server for <strong>$10,000</strong> (CapEx), they pay for it whether they use it or not.</p>
                <p>If they move to the cloud, they might pay <strong>$0.50 per hour</strong> (OpEx).</p>
                <p>If they only need the server for 10 hours, the cloud cost is <strong>$5.00</strong> vs <strong>$10,000</strong> upfront.</p>
            </div>
        `)}
    `;
}

function renderCCM1Q6() {
    return `
        ${header('Question 2c: Cloud Deployment Models', '06 Marks', 'theory')}
        ${section('Overview', `
            <p>The deployment model determines where the hardware lives and who manages it. There are <strong>three major models</strong>:</p>
        `)}
        ${section('1. Public Cloud', `
            <div class="info-box info-box-blue">
                <span class="info-box-title">Definition</span>
                <p>The infrastructure is owned and managed by a <strong>third-party provider</strong> (like AWS or Azure) and is available to the general public over the internet.</p>
            </div>
            <p><strong>Characteristics:</strong></p>
            <ul>
                <li>Resources are shared among many organizations (<strong>Multi-tenancy</strong>)</li>
                <li>Low upfront costs</li>
            </ul>
            <p><strong>Best For:</strong> Startups, testing, and websites with fluctuating traffic.</p>
        `)}
        ${section('2. Private Cloud', `
            <div class="info-box info-box-green">
                <span class="info-box-title">Definition</span>
                <p>The infrastructure is used exclusively by a <strong>single organization</strong>. It can be located on-site or hosted by a third-party, but it is not shared with others.</p>
            </div>
            <p><strong>Characteristics:</strong></p>
            <ul>
                <li>Offers the <strong>highest level of security</strong> and control</li>
                <li>More expensive due to hardware and maintenance costs</li>
            </ul>
            <p><strong>Best For:</strong> Banks, government agencies, and companies with strict data privacy rules.</p>
        `)}
        ${section('3. Hybrid Cloud', `
            <div class="info-box info-box-purple">
                <span class="info-box-title">Definition</span>
                <p>A <strong>combination</strong> of Public and Private clouds. They remain unique entities but are connected by technology that allows data and applications to move between them.</p>
            </div>
            <p><strong>Characteristics:</strong></p>
            <ul>
                <li>Offers flexibility</li>
                <li>Keep sensitive data in the private cloud</li>
                <li>Use the public cloud for extra power during peak times (<strong>Cloud Bursting</strong>)</li>
            </ul>
            <p><strong>Best For:</strong> Organizations that need to balance security regulations with the flexibility of the public cloud.</p>
        `)}
    `;
}
