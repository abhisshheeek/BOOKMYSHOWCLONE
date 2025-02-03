// Mobile menu toggle
        const menuIcon = document.querySelector('.fa-bars');
const secNav = document.querySelector('.sec-nav');

menuIcon.addEventListener('click', () => {
    secNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
        });
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.menu-toggle'); // Menu button
            const sidebar = document.querySelector('.sidebar'); // Sidebar menu
            const overlay = document.querySelector('.overlay'); // Background overlay
            const closeBtn = document.querySelector('.close-btn'); // Close button
        
            // Open sidebar
            hamburger.addEventListener('click', () => {
                sidebar.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        
            // Close sidebar
            const closeSidebar = () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            };
        
            overlay.addEventListener('click', closeSidebar);
            closeBtn.addEventListener('click', closeSidebar);
        });
        // Image hover effect
        document.querySelectorAll('.card img').forEach(img => {
            img.addEventListener('mouseover', () => {
                img.style.transform = 'scale(1.05)';
            });
            
            img.addEventListener('mouseout', () => {
                img.style.transform = 'scale(1)';
            });
        });
        // Form validation
        const searchInput = document.querySelector('.left input');
searchInput.addEventListener('input', (e) => {
    e.target.parentElement.classList.toggle('active', e.target.value.length > 0);
});