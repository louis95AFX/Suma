/**
 * =====================================================
 * SCRIPT.JS - INFINITY STRANDS E-COMMERCE LOGIC
 * =====================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize custom components (Simulated functionality)
    // NOTE: For real use, you'd load components/navbar.js and components/footer.js here.
    initializeComponents();

    // 2. Implement Shop Filters
    setupProductFiltering();

    // 3. Implement Newsletter Popup Logic
    setupNewsletterPopup();

    // 4. Implement Form Submission Feedback
    setupFormFeedback();

    // 5. Enhance Hover/Quick View (UX improvement)
    setupQuickViewListeners();
});

/**
 * =====================================================
 * 1. COMPONENT INITIALIZATION (SIMULATED)
 * =====================================================
 */
function initializeComponents() {
    // Placeholder for custom-navbar and custom-footer component logic
    // This is where you would typically use Web Components or a framework.
    console.log("Custom Navbar and Footer components initialized.");
    
    // Example: Replace the placeholder tags with actual HTML elements for testing
    // document.querySelector('custom-navbar').innerHTML = '';
    // document.querySelector('custom-footer').innerHTML = '';
}


/**
 * =====================================================
 * 2. PRODUCT FILTERING LOGIC
 * (Handles filtering the product grid by category)
 * =====================================================
 */
function setupProductFiltering() {
    const filterButtons = document.querySelectorAll('.filters button');
    const productGrid = document.querySelector('.products-grid');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state for buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Loop through products and show/hide based on filter
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block'; // Show product
                    // Optional: Add an animation class for smooth transition
                    card.classList.add('fade-in-product'); 
                } else {
                    card.style.display = 'none'; // Hide product
                    card.classList.remove('fade-in-product');
                }
            });
        });
    });
}

/**
 * =====================================================
 * 3. NEWSLETTER POPUP LOGIC
 * (Handles delayed appearance and closing)
 * =====================================================
 */
function setupNewsletterPopup() {
    const popupContainer = document.querySelector('.newsletter-popup-container');
    const closeButton = document.querySelector('.close-popup');
    const newsletterForm = document.getElementById('newsletter-form');

    // Show the popup after 5 seconds (Delayed Engagement)
    setTimeout(() => {
        // Only show if the user hasn't seen it (e.g., check local storage)
        if (!localStorage.getItem('infinitystrands_popup_shown')) {
            popupContainer.style.display = 'flex';
        }
    }, 5000); 

    // Close on button click
    closeButton.addEventListener('click', () => {
        popupContainer.style.display = 'none';
        // Set a flag so the user doesn't see it again soon
        localStorage.setItem('infinitystrands_popup_shown', 'true');
    });

    // Close on outside click
    popupContainer.addEventListener('click', (e) => {
        if (e.target === popupContainer) {
            popupContainer.style.display = 'none';
            localStorage.setItem('infinitystrands_popup_shown', 'true');
        }
    });

    // Handle form submission (Client-side validation/feedback)
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Simulate API call success
        alert(`Thank you for subscribing, ${email}! Your 10% off code has been sent.`);
        
        // Hide popup after submission
        popupContainer.style.display = 'none';
        localStorage.setItem('infinitystrands_popup_shown', 'true'); 
        
        // In a real app, you'd send data to your server here.
        newsletterForm.reset();
    });
}

/**
 * =====================================================
 * 4. FORM SUBMISSION FEEDBACK (Booking Form)
 * =====================================================
 */
function setupFormFeedback() {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate a delay for server processing
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending Request...';
        submitButton.disabled = true;

        setTimeout(() => {
            alert('Your consultation appointment request has been submitted! A stylist will contact you within 24 hours to confirm the date.');
            bookingForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500); // 1.5 second delay
    });
}

/**
 * =====================================================
 * 5. QUICK VIEW LISTENER (Better UX for product cards)
 * =====================================================
 */
function setupQuickViewListeners() {
    const quickViewButtons = document.querySelectorAll('.quick-view');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;

            // In a real e-commerce scenario, this would load a modal 
            // with more product images, size options, and detailed specs.
            alert(`Opening Quick View for: ${productName} \n\n (This is where a product modal would appear to streamline your shopping experience!)`);
        });
    });
}

