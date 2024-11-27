function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let content of tabContents) {
        content.classList.remove("active");
    }

    const tabs = document.getElementsByClassName("tab");
    for (let tab of tabs) {
        tab.classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Update all CTA buttons to link to the application form
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.href = "https://airtable.com/apptd9PipPIX7aWon/pagjBHac1C8uH7RFs/form";
        button.target = "_blank"; // This will open the form in a new tab
    });
}); 