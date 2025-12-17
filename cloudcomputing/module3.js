// Cloud Computing Module 3: Programming Model

function renderCCM3Q1() {
    return `
        ${header('Question 5a: Parallel Computing', '08 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>Parallel Computing</strong> is the process of using multiple processing elements (CPUs or Cores) simultaneously to solve a single problem.</p>
            <div class="info-box info-box-blue">
                <span class="info-box-title">How it works</span>
                <p>A large problem is broken down into smaller parts. These parts are processed at the <strong>exact same time</strong> by different processors within a single computer system.</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">Goal</span>
                <p>To solve problems faster (<strong>Speedup</strong>).</p>
            </div>
        `)}
        ${section('Parallel vs Distributed Computing', `
            ${table(['Feature', 'Parallel Computing', 'Distributed Computing'], [
        ['Architecture', 'Multiple processors within one single computer (Tightly Coupled)', 'Multiple autonomous computers connected via a network (Loosely Coupled)'],
        ['Memory', 'Processors usually share the same memory (RAM)', 'Each computer has its own private memory. They cannot see each other\'s RAM directly.'],
        ['Communication', 'Communication happens via the system bus (very fast)', 'Communication happens via the network/internet (slower, message passing)'],
        ['Goal', 'Performance (Speed)', 'Resource Sharing and Scalability'],
        ['Example', 'A Supercomputer or a Multicore Laptop', 'The World Wide Web (Internet) or a Cloud Data Center']
    ])}
        `)}
    `;
}

function renderCCM3Q2() {
    return `
        ${header('Question 5b: Aneka Platform', '06 Marks', 'theory')}
        ${section('Overview', `
            <p><strong>Aneka</strong> is a cloud application platform designed specifically for the <strong>.NET environment (Windows)</strong>. While most cloud tools are Linux-based, Aneka allows developers to build clouds using Microsoft technologies.</p>
        `)}
        ${section('Key Features', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. PaaS Solution</span>
                <p>It provides a runtime environment for developing and deploying applications.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Flexible Programming Models</span>
                <p>Unlike other platforms that might only support one method, Aneka supports multiple ways to write code:</p>
                <ul>
                    <li><strong>Task Programming:</strong> For independent tasks</li>
                    <li><strong>Thread Programming:</strong> For applications that use threads</li>
                    <li><strong>MapReduce:</strong> For data-intensive processing</li>
                </ul>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">3. Enterprise Use</span>
                <p>It is often used to build private or enterprise clouds where companies want to utilize their idle desktop computers to create a "desktop grid."</p>
            </div>
        `)}
    `;
}

function renderCCM3Q3() {
    return `
        ${header('Question 5c: AWS (Amazon Web Services)', '06 Marks', 'theory')}
        ${section('Overview', `
            <p><strong>AWS (Amazon Web Services)</strong> is the world's most comprehensive and broadly adopted cloud platform. It primarily offers <strong>Infrastructure as a Service (IaaS)</strong> but also provides PaaS and SaaS tools.</p>
        `)}
        ${section('Key Components', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. EC2 (Elastic Compute Cloud)</span>
                <p>This is the core service. It allows users to rent virtual machines (instances). You can choose the OS (Windows/Linux) and power (CPU/RAM) you need.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. S3 (Simple Storage Service)</span>
                <p>A service for storing files (objects). It offers <strong>unlimited storage</strong> that is highly durable (data doesn't get lost).</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">3. SDKs (Software Development Kits)</span>
                <p>AWS provides tools for almost every programming language (Java, Python, .NET) so developers can control the cloud using code instead of just clicking buttons on a website.</p>
            </div>
        `)}
    `;
}

function renderCCM3Q4() {
    return `
        ${header('Question 6a: Hadoop Framework', '10 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>Apache Hadoop</strong> is an open-source software framework used for storing and processing massive datasets (<strong>Big Data</strong>). It is based on the MapReduce programming model.</p>
        `)}
        ${section('Architecture', `
            <p>Hadoop follows a <strong>Master-Slave Architecture</strong>:</p>
            <div class="grid-2">
                <div class="info-box info-box-blue">
                    <span class="info-box-title">Master Node</span>
                    <p>The "Boss." It manages the file system namespace and schedules jobs.</p>
                </div>
                <div class="info-box info-box-green">
                    <span class="info-box-title">Slave Nodes</span>
                    <p>The "Workers." They do the actual work of storing data and running computations.</p>
                </div>
            </div>
        `)}
        ${section('Key Components', `
            <div class="info-box info-box-purple" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. HDFS (Hadoop Distributed File System)</span>
                <p><strong>Function:</strong> This is the storage layer.</p>
                <p><strong>How it works:</strong> When you save a large file, HDFS chops it into smaller "blocks." These blocks are distributed across many different machines.</p>
                <p><strong>Fault Tolerance:</strong> It makes copies (replicas) of every block. If one server crashes, the data is safe on another server.</p>
            </div>
            <div class="info-box info-box-yellow" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. MapReduce</span>
                <p><strong>Function:</strong> This is the processing layer.</p>
                <p><strong>Logic:</strong> It processes data in two steps:</p>
                <ul>
                    <li><strong>Map:</strong> Breaks the task into smaller sub-tasks</li>
                    <li><strong>Reduce:</strong> Collects the results and combines them into a final answer</li>
                </ul>
            </div>
            <div class="info-box info-box-blue">
                <span class="info-box-title">3. YARN (Yet Another Resource Negotiator)</span>
                <p><strong>Function:</strong> This is the resource management layer.</p>
                <p><strong>Role:</strong> It acts like an operating system for the cluster. It allocates CPU and RAM to different applications running on the system.</p>
            </div>
        `)}
        ${section('Architecture Diagram', `
            <div class="calc-step">
                <pre style="font-family: monospace; font-size: 0.8rem; overflow-x: auto;">
                    ┌─────────────────────────────────────────┐
                    │            HADOOP CLUSTER               │
                    ├─────────────────────────────────────────┤
                    │              MASTER NODE                │
                    │    ┌────────────┬────────────────┐      │
                    │    │ NameNode   │ ResourceManager│      │
                    │    │  (HDFS)    │    (YARN)      │      │
                    │    └────────────┴────────────────┘      │
                    ├─────────────────────────────────────────┤
                    │             SLAVE NODES                 │
                    │  ┌──────────┐┌──────────┐┌──────────┐   │
                    │  │DataNode  ││DataNode  ││DataNode  │   │
                    │  │NodeMgr   ││NodeMgr   ││NodeMgr   │   │
                    │  └──────────┘└──────────┘└──────────┘   │
                    └─────────────────────────────────────────┘
                </pre>
            </div>
        `)}
    `;
}

function renderCCM3Q5() {
    return `
        ${header('Question 6b: Google App Engine', '10 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>Google App Engine (GAE)</strong> is a <strong>Platform as a Service (PaaS)</strong> product offered by Google. It allows developers to build and host web applications on Google's own infrastructure.</p>
            <div class="info-box info-box-blue">
                <span class="info-box-title">Core Concept</span>
                <p>The developer focuses only on writing code. Google handles the servers, operating systems, and scaling.</p>
            </div>
        `)}
        ${section('Key Features', `
            <div class="grid-2">
                <div class="info-box info-box-green">
                    <span class="info-box-title">1. Automatic Scaling</span>
                    <p>If your app goes from 10 users to 10 million users overnight, GAE <strong>automatically adds more resources</strong> to handle it. You don't have to touch anything.</p>
                </div>
                <div class="info-box info-box-purple">
                    <span class="info-box-title">2. Datastore</span>
                    <p>It uses a <strong>NoSQL database</strong> that is highly scalable, rather than a traditional SQL database.</p>
                </div>
                <div class="info-box info-box-yellow">
                    <span class="info-box-title">3. Language Support</span>
                    <p>It supports popular languages like <strong>Python, Java, Go, and PHP</strong>.</p>
                </div>
            </div>
        `)}
        ${section('Advantages', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Zero Maintenance</span>
                <p>You never have to patch a server or configure a firewall. Google does it all.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Pay-as-you-go</span>
                <p>You only pay for the resources your app actually uses. If no one visits your site, the cost is near zero.</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">3. High Reliability</span>
                <p>Your app runs in Google's data centers (the same ones that run YouTube and Search), so it is very unlikely to go down.</p>
            </div>
        `)}
    `;
}
