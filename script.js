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
    // Add other services here
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
    // Add other solutions here
];

const complianceStandards = [
    {
        title: "ISO 27001",
        description: "Establishing and maintaining an Information Security Management System (ISMS) to manage and mitigate risks effectively."
    },
    // Add other compliance standards here
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

    // Touchscreen Interaction for Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.classList.add('touched');
        });
        card.addEventListener('touchend', () => {
            setTimeout(() => card.classList.remove('touched'), 300);
        });
    });
});