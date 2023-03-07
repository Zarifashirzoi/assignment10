Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zarifasherzoi 
Iamzarifasherzoi
/
zarifasherzoi-portfolio
Public
Fork your own copy of Iamzarifasherzoi/zarifa sherzoi-portfolio
Code
Issues
Pull requests
Actions
Projects
Security
Insights
zarifasherzoi-portfolio/js/scripts.js /
@Iamzarifasherzoi
Iamzarifasherzoi Add files via upload
Latest commit a78e0d5 on Aug 31, 2022
 History
 1 contributor
47 lines (38 sloc)  1.37 KB



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
zarifasherzoi-portfolio/scripts.js at main · Iamzarifasherzoi-zarifasherzoi-portfolio