// script.js will hold interactivity logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded and ready!");

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Case Studies Tab Logic
    const tabBtns = document.querySelectorAll('.cs-tab-btn');
    const tabContents = document.querySelectorAll('.cs-tab-content');

    function activateTab(tabId) {
        if (!tabId) return;
        
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the matched button and content
        const activeBtn = document.querySelector(`.cs-tab-btn[data-target="${tabId}"]`);
        const activeContent = document.getElementById(tabId);

        if (activeBtn && activeContent) {
            activeBtn.classList.add('active');
            activeContent.classList.add('active');
            
            // On mobile, scroll to top of content
            if (window.innerWidth < 768) {
                window.scrollTo({
                    top: document.querySelector('.cs-dashboard').offsetTop - 80,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetId = e.target.getAttribute('data-target');

                // If the data-target is an external URL, open it in a new tab
                if (targetId.startsWith('http')) {
                    window.open(targetId, '_blank');
                    return;
                }

                activateTab(targetId);
                // Update URL quietly
                history.pushState(null, null, '#' + targetId);
            });
        });

        // Check if there's a hash in the URL on load
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            activateTab(hash);
        }
    }

    // Copy Email to Clipboard
    const copyEmailEl = document.getElementById('copyEmail');
    if (copyEmailEl) {
        copyEmailEl.addEventListener('click', () => {
            const email = copyEmailEl.getAttribute('data-email');
            navigator.clipboard.writeText(email).then(() => {
                copyEmailEl.classList.add('copied');
                setTimeout(() => {
                    copyEmailEl.classList.remove('copied');
                }, 2000);
            });
        });
    }
});
