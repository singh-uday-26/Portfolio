
/**
 * portfolio.js - Main JavaScript file for Uday Singh's portfolio
 * This file handles all interactive elements and animations on the webpage
 */

// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * NAVBAR FUNCTIONALITY
     * Handles navbar appearance on scroll and mobile menu toggle
     */
    
    // Get DOM elements 
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to handle scroll events and change navbar appearance
    function handleScroll() {
        // If scrolled past 100px, make navbar solid, otherwise transparent
        if (window.scrollY > 100) {
            navbar.setAttribute('data-nav-transparent', 'false');
        } else {
            navbar.setAttribute('data-nav-transparent', 'true');
        }
    }
    
    // Function to toggle mobile menu visibility
    function toggleMobileMenu() {
        // Toggle the 'active' class on both the menu button and the nav menu
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
    
    // Function to close mobile menu when a link is clicked
    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Add event listeners for scroll and mobile menu interactions
    window.addEventListener('scroll', handleScroll);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Add click event to each navigation link to close mobile menu when clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    /**
     * SMOOTH SCROLLING
     * Enables smooth scrolling to sections when clicking navigation links
     */
    
    // Get all links that have hash (#) references
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event to each link for smooth scrolling
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default link behavior
            e.preventDefault();
            
            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href');
            
            // Skip if the href is just "#" (no specific target)
            if (targetId === '#') return;
            
            // Get the target element
            const targetElement = document.querySelector(targetId);
            
            // If target exists, scroll to it smoothly
            if (targetElement) {
                // Calculate the position to scroll to (accounting for navbar height)
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                // Use smooth scrolling
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    /**
     * SECTION ANIMATIONS
     * Adds animation effects to sections as they come into view
     */
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            // Element is at least partially visible in the viewport
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle the scroll animation effect
    function handleScrollAnimation() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('fade-in');
            }
        });
    }
    
    // Add event listener for scroll to trigger animations
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Trigger once on page load to animate visible sections
    handleScrollAnimation();
    
    /**
     * YEAR UPDATE
     * Automatically updates the copyright year in the footer
     */
    
    // Find the footer copyright text
    const footerCopyright = document.querySelector('.footer p');
    
    // If found, update the year to current year
    if (footerCopyright) {
        const currentYear = new Date().getFullYear();
        footerCopyright.textContent = `© ${currentYear} Uday Singh. All rights reserved.`;
    }
    
    /**
     * INIT FUNCTION
     * Run initial setup when page loads
     */
    function init() {
        // Run the scroll handler once at page load to set initial navbar state
        handleScroll();
        
        // Trigger animations for visible sections
        handleScrollAnimation();
        
        console.log('Portfolio initialization complete');
    }
    
    // Initialize the page
    init();
});
