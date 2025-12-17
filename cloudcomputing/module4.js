// Cloud Computing Module 4: Virtualization Technology

function renderCCM4Q1() {
    return `
        ${header('Question 7a: Hypervisors', '10 Marks', 'theory')}
        ${section('Definition', `
            <p>A <strong>Hypervisor</strong> (or Virtual Machine Monitor - VMM) is the software that creates and runs Virtual Machines (VMs). It sits between the physical hardware and the virtual machines, managing resources like CPU, RAM, and Storage so multiple operating systems can run on one computer at the same time.</p>
        `)}
        ${section('Type-1 vs Type-2 Hypervisors', `
            ${table(['Feature', 'Type-1 (Bare-Metal / Native)', 'Type-2 (Hosted)'], [
        ['Design', 'Installs directly on the physical hardware. It replaces the Host Operating System.', 'Installs as a software application on top of an existing OS (like Windows or Linux).'],
        ['Performance', 'High Performance. It talks directly to the hardware without a "middleman."', 'Lower Performance. Requests must pass through the Host OS first, which slows things down.'],
        ['Usage', 'Used in Enterprise Data Centers and Cloud Providers (AWS, Google Cloud).', 'Used on Personal Computers for testing, learning, or labs.'],
        ['Examples', 'VMware ESXi, Microsoft Hyper-V, Xen', 'Oracle VirtualBox, VMware Workstation']
    ])}
        `)}
        ${section('Visual Comparison', `
            <div class="calc-step">
                <pre style="font-family: monospace; font-size: 0.8rem; overflow-x: auto;">
    TYPE-1 (BARE-METAL)                    TYPE-2 (HOSTED)
    
┌─────────────────────────┐          ┌─────────────────────────┐
│  VM 1  │  VM 2  │  VM 3 │          │  VM 1  │  VM 2  │  VM 3 │
├─────────────────────────┤          ├─────────────────────────┤
│      HYPERVISOR         │          │      HYPERVISOR         │
├─────────────────────────┤          ├─────────────────────────┤
│                         │          │    HOST OS (Windows)    │
│      HARDWARE           │          ├─────────────────────────┤
│                         │          │      HARDWARE           │
└─────────────────────────┘          └─────────────────────────┘
                </pre>
            </div>
        `)}
    `;
}

function renderCCM4Q2() {
    return `
        ${header('Question 7b: Virtual Clusters', '05 Marks', 'theory')}
        ${section('Definition', `
            <p>A <strong>Virtual Cluster</strong> is a group of Virtual Machines (VMs) connected together to work as a single, powerful system (like a Supercomputer). These VMs can be located on the same physical server or spread across different physical servers, but they act as one unit.</p>
        `)}
        ${section('How They Support Distributed Workloads', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. High Availability</span>
                <p>If one VM in the cluster fails, the others <strong>automatically take over</strong> the work. This ensures the application never goes down.</p>
            </div>
            <div class="info-box info-box-green" style="margin-bottom: 1rem;">
                <span class="info-box-title">2. Load Balancing</span>
                <p>The cluster distributes the workload <strong>evenly</strong> across all VMs. If a complex task (like processing big data) comes in, the cluster splits the job so it finishes faster.</p>
            </div>
            <div class="info-box info-box-purple">
                <span class="info-box-title">3. Dynamic Scaling</span>
                <p>You can add more VMs to the cluster <strong>instantly</strong> when the workload increases, without buying new physical hardware.</p>
            </div>
        `)}
    `;
}

function renderCCM4Q3() {
    return `
        ${header('Question 7c: Data Center Automation', '05 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>Data Center Automation</strong> is the use of software and scripts to perform IT tasks—like installing servers, configuring networks, and patching software—<strong>without human intervention</strong>.</p>
        `)}
        ${section('How Virtualization Enables Automation', `
            <div class="info-box info-box-blue" style="margin-bottom: 1rem;">
                <span class="info-box-title">1. Automated Provisioning (Creation)</span>
                <p>Since a Virtual Machine is just a software file, automation tools can "copy and paste" it. A script can create <strong>100 new servers in minutes</strong>, whereas a human would take weeks to plug in 100 physical servers.</p>
            </div>
            <div class="info-box info-box-green">
                <span class="info-box-title">2. Automated Scaling</span>
                <p>Virtualization allows software to change hardware specs instantly. If a server is slow, an automated script can <strong>increase its RAM or CPU allocation on the fly</strong> without turning off the machine.</p>
            </div>
        `)}
    `;
}

function renderCCM4Q4() {
    return `
        ${header('Question 8a: Virtualization Architecture', '10 Marks', 'theory')}
        ${section('Definition', `
            <p><strong>Virtualization</strong> is the process of creating a software-based (virtual) representation of a physical resource, such as a server, storage device, or network. It allows one physical computer to run multiple isolated operating systems (VMs) simultaneously.</p>
        `)}
        ${section('Virtualization Architecture', `
            <p>The architecture relies on the <strong>Hypervisor</strong> to trick the Guest OS into thinking it has real hardware.</p>
        `)}
        ${section('1. CPU Virtualization', `
            <div class="info-box info-box-blue">
                <p>The Hypervisor schedules "time slots" on the physical CPU.</p>
                <p>It intercepts instructions from the Guest OS. If a VM asks to process data, the hypervisor passes it to the real CPU, gets the result, and hands it back to the VM. The VM believes it has its own dedicated processor.</p>
            </div>
        `)}
        ${section('2. Memory Virtualization', `
            <div class="info-box info-box-green">
                <p>The Hypervisor manages a map called "<strong>Page Tables</strong>."</p>
                <p>It maps the Virtual Memory (what the Guest OS sees) to the Physical Memory (real RAM). It ensures that VM A cannot read the memory addresses assigned to VM B, keeping them <strong>secure and isolated</strong>.</p>
            </div>
        `)}
        ${section('3. I/O Virtualization (Input/Output)', `
            <div class="info-box info-box-purple">
                <p>This handles devices like <strong>Hard Drives and Network Cards</strong>.</p>
                <p>The Hypervisor creates "Virtual Drivers." When a VM tries to save a file, the hypervisor takes that request and sends it to the real hard drive. It acts like a traffic cop, managing data flow for multiple VMs sharing the same network cable.</p>
            </div>
        `)}
    `;
}

function renderCCM4Q5() {
    return `
        ${header('Question 8b: Implementation Levels', '05 Marks', 'theory')}
        ${section('Overview', `
            <p>Virtualization can be implemented at different layers of a computer system:</p>
        `)}
        ${section('1. Hardware Level (Server Virtualization)', `
            <div class="info-box info-box-blue">
                <p>Virtualization happens <strong>directly on the hardware</strong> using a Hypervisor. This creates full Virtual Machines.</p>
                <p><strong>Example:</strong> VMware ESXi, Microsoft Hyper-V</p>
            </div>
        `)}
        ${section('2. Operating System Level (Containerization)', `
            <div class="info-box info-box-green">
                <p>The Host OS kernel is shared. Instead of creating full VMs, it creates <strong>lightweight isolated spaces called "Containers."</strong></p>
                <p><strong>Example:</strong> Docker, Kubernetes</p>
            </div>
        `)}
        ${section('3. Application Level', `
            <div class="info-box info-box-purple">
                <p>Virtualization happens inside a specific application environment. The app runs on a "Virtual Machine" created by the programming language, not the OS.</p>
                <p><strong>Example:</strong> Java Virtual Machine (JVM) runs Java code on any computer.</p>
            </div>
        `)}
        ${section('Comparison', `
            ${table(['Level', 'What is Virtualized', 'Example'], [
        ['Hardware Level', 'Full Virtual Machines with own OS', 'VMware ESXi, Hyper-V'],
        ['OS Level', 'Lightweight Containers sharing kernel', 'Docker, Kubernetes'],
        ['Application Level', 'Application runtime environment', 'Java JVM, .NET CLR']
    ])}
        `)}
    `;
}

function renderCCM4Q6() {
    return `
        ${header('Question 8c: Virtualization Tools', '05 Marks', 'theory')}
        ${section('Overview', `
            <p>Four popular virtualization tools used in cloud computing:</p>
        `)}
        ${section('1. VMware vSphere (ESXi)', `
            <div class="info-box info-box-blue">
                <p><strong>Type:</strong> Type-1 Hypervisor</p>
                <p><strong>Key Feature:</strong> High Stability & Reliability. It is the industry standard for large enterprise data centers.</p>
            </div>
        `)}
        ${section('2. Oracle VirtualBox', `
            <div class="info-box info-box-green">
                <p><strong>Type:</strong> Type-2 Hypervisor</p>
                <p><strong>Key Feature:</strong> Free & Open Source. It is excellent for students and developers testing software on their personal laptops.</p>
            </div>
        `)}
        ${section('3. Docker', `
            <div class="info-box info-box-purple">
                <p><strong>Type:</strong> Container Engine</p>
                <p><strong>Key Feature:</strong> Lightweight. It starts up in milliseconds because it doesn't need to load a full Operating System for every app.</p>
            </div>
        `)}
        ${section('4. Microsoft Hyper-V', `
            <div class="info-box info-box-yellow">
                <p><strong>Type:</strong> Type-1 Hypervisor</p>
                <p><strong>Key Feature:</strong> Windows Integration. It comes built-in with Windows Server and Windows 10/11 Pro, making it easy for Windows users to adopt.</p>
            </div>
        `)}
    `;
}
