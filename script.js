// Data for Services, Solutions, and Compliance Standards
const services = [
    {
        title: "Vulnerability Identification",
        description: "Proactively identify and address vulnerabilities within your systems, applications, and network infrastructure.",
        features: [
            "Automated Vulnerability Scanning",
            "Manual Assessments",
            "Threat Modeling",
            "Comprehensive Reporting"
        ]
    },
    {
        title: "Risk Assessment",
        description: "Evaluate potential threats and their business impact to provide tailored mitigation strategies.",
        features: [
            "Asset, Threat, and Vulnerability Identification",
            "Quantitative and Qualitative Risk Analysis",
            "Customized Risk Profiles",
            "Mitigation Strategy Development"
        ]
    },
    {
        title: "Authentication and Authorization",
        description: "Implement robust authentication and authorization mechanisms to ensure secure system access.",
        features: [
            "Multi-Factor Authentication (MFA)",
            "Role-Based Access Control (RBAC)",
            "Single Sign-On (SSO) Integration",
            "Adaptive Authentication"
        ]
    },
    {
        title: "Penetration Testing",
        description: "Simulate real-world attacks to assess the resilience of your systems and identify weaknesses.",
        features: [
            "Black Box/White Box/Grey Box Testing",
            "Detailed Exploitation and Attack Simulation",
            "Continuous Testing",
            "In-depth Reporting with Actionable Recommendations"
        ]
    },
    {
        title: "Security Consulting",
        description: "Provide expert guidance to help organizations improve their security posture, address vulnerabilities, and meet compliance requirements.",
        features: [
            "Security Risk Assessment",
            "Security Strategy Development",
            "Regulatory Compliance Advisory",
            "Incident Response Planning"
        ]
    },
    {
        title: "Cloud Security",
        description: "Comprehensive solutions to secure cloud infrastructure, applications, and data across multiple platforms, ensuring a robust defense against cloud-based threats.",
        features: [
            "Cloud Security Architecture",
            "Cloud Access Security Broker (CASB)",
            "Cloud Security Configuration Reviews",
            "Cloud Data Protection and Encryption"
        ]
    },
    {
        title: "Application Security",
        description: "Safeguard applications from security vulnerabilities with proactive measures and ongoing testing, ensuring secure software development and deployment.",
        features: [
            "Secure Software Development Lifecycle (SDLC) Integration",
            "Static and Dynamic Code Analysis",
            "Vulnerability Scanning and Patching",
            "Security Code Reviews"
        ]
    },
    {
        title: "End-Point Security",
        description: "Implement robust solutions to protect endpoints, including desktops, laptops, and mobile devices, from cyber threats and unauthorized access.",
        features: [
            "Anti-malware Protection",
            "Device Encryption and Management",
            "Endpoint Detection and Response (EDR)",
            "Mobile Device Management (MDM)"
        ]
    }

];

const solutions = [
    {
        title: "Enterprise Security",
        description: "Comprehensive security solutions for large organizations to protect critical assets and ensure resilience.",
        features: [
            "Enterprise Risk Management",
            "Security Architecture Design",
            "Compliance Management"
        ]
    },
    {
        title: "Banking & Finance",
        description: "Specialized cybersecurity solutions for financial institutions to protect sensitive data and transactions.",
        features: [
            "Payment Security",
            "Fraud Prevention",
            "Regulatory Compliance (PCI DSS, SOX, AML)"
        ]
    },
    {
        title: "Cloud Security",
        description: "Comprehensive solutions to secure your cloud infrastructure, applications, and data across multiple platforms.",
        features: [
            "Cloud Security Assessment",
            "Cloud Configuration Review",
            "Cloud Access Security"
        ]
    },
    {
        title: "Data Protection",
        description: "Comprehensive security solutions for large organizations to protect critical assets and ensure resilience.",
        features: [
            "Enterprise Risk Management",
            "Security Architecture Design",
            "Compliance Management"
        ]
    },
    {
        title: "Security Analytics",
        description: "Leverage advanced analytics to gain real-time insights into threats, vulnerabilities, and overall security posture to make informed decisions.",
        features: [
            "Threat Intelligence and Detection",
            "Real-time Security Monitoring",
            "Behavioral Analytics",
            "Automated Incident Response"
        ]
    },
    {
        title: "End-Point Protection",
        description: "Comprehensive solutions to safeguard endpoints from cyber threats and unauthorized access, ensuring the protection of devices across the network.",
        features: [
            "Endpoint Detection and Response (EDR)",
            "Anti-malware and Antivirus Solutions",
            "Device Control and Encryption",
            "Incident Response Integration"
        ]
    },
    {
        title: "Identity & Access Management (IAM)",
        description: "Implement robust authentication and access control mechanisms to ensure that only authorized users can access sensitive systems and data.",
        features: [
            "Single Sign-On (SSO)",
            "Multi-Factor Authentication (MFA)",
            "Role-Based Access Control (RBAC)",
            "User Provisioning and De-provisioning"
        ]
    },
    {
        title: "Incident Response",
        description: "Enable swift detection, containment, and resolution of security incidents, minimizing the impact of breaches and ensuring business continuity.",
        features: [
            "Incident Detection and Response Workflow",
            "Forensic Analysis and Investigation",
            "Threat Containment and Remediation",
            "Post-Incident Reporting and Lessons Learned"
        ]
    }

];

const complianceStandards = [
    {
        title: "ISO 27001",
        description: "Establishing and maintaining an Information Security Management System (ISMS) to manage and mitigate risks effectively."
    },
    {
        title: "GDPR",
        description: "Ensure compliance with the General Data Protection Regulation for safeguarding personal data and ensuring privacy rights."
    },
    {
        title: "PCI DSS",
        description: "Achieving Payment Card Industry Data Security Standard compliance to protect cardholder data and secure payment transactions."
    },
    {
        title: "HIPAA",
        description: "Adhere to the Health Insurance Portability and Accountability Act, ensuring healthcare data security and privacy compliance."
    },
    {
        title: "ISO 27002",
        description: "Establish guidelines for organizational security practices and controls for information security management, safeguarding data and maintaining resilience against cyber threats."
    },
    {
        title: "SOC-2",
        description: "Ensure compliance with SOC 2 standards to provide assurance about the security, availability, processing integrity, confidentiality, and privacy of your systems and data."
    }

];

// Function to Create Cards
function createCard(item, section) {
    const card = document.createElement('div');
    card.className = 'card ' + section;
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        ${item.features ? `
            <h4>Key Features:</h4>
            <ul>
                ${item.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        ` : ''}
    `;
    return card;
}

// Function to Populate Grids
function populateGrid(items, gridId, section) {
    const grid = document.getElementById(gridId);
    items.forEach(item => {
        grid.appendChild(createCard(item, section));
    });
}

// On DOM Load
document.addEventListener('DOMContentLoaded', () => {
    populateGrid(services, 'services-grid', 'services');
    populateGrid(solutions, 'solutions-grid', 'solutions');
    populateGrid(complianceStandards, 'compliance-grid', 'compliance');

    // Download PDF Functionality
    document.getElementById('download-btn').addEventListener('click', () => {
        const element = document.getElementById('content');
        const opt = {
            margin: 0.5,
            filename: 'Matrica_Networks_E_Brochure.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            pagebreak: { mode: 'avoid-all', before: '#page2el' }
        };

        // Clone the content to avoid modifying the original
        const clonedElement = element.cloneNode(true);

        // Add logo and footer to the cloned element
        const logo = document.querySelector('.logo').cloneNode(true);
        const footer = document.querySelector('footer').cloneNode(true);

        clonedElement.insertBefore(logo, clonedElement.firstChild);
        clonedElement.appendChild(footer);

        html2pdf().set(opt).from(clonedElement).save();
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
});