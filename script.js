// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Gallery Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('gallery-grid');

// Sample NFT data
const nftData = [
    {
        id: 1,
        title: "Cosmic Dreams",
        artist: "Digital Artist",
        price: "2.5 ETH",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop",
        category: "art"
    },
    {
        id: 2,
        title: "Neon City",
        artist: "Cyber Artist",
        price: "1.8 ETH",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
        category: "art"
    },
    {
        id: 3,
        title: "Digital Harmony",
        artist: "Sound Designer",
        price: "3.2 ETH",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
        category: "music"
    },
    {
        id: 4,
        title: "Urban Photography",
        artist: "Street Photographer",
        price: "1.5 ETH",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=300&fit=crop",
        category: "photography"
    },
    {
        id: 5,
        title: "Gaming Character",
        artist: "Game Designer",
        price: "4.0 ETH",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=300&fit=crop",
        category: "gaming"
    },
    {
        id: 6,
        title: "Abstract Mind",
        artist: "Abstract Artist",
        price: "2.8 ETH",
        image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=300&h=300&fit=crop",
        category: "art"
    },
    {
        id: 7,
        title: "Electronic Beats",
        artist: "Music Producer",
        price: "1.9 ETH",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        category: "music"
    },
    {
        id: 8,
        title: "Nature's Beauty",
        artist: "Nature Photographer",
        price: "2.1 ETH",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
        category: "photography"
    },
    {
        id: 9,
        title: "Virtual World",
        artist: "VR Developer",
        price: "3.5 ETH",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
        category: "gaming"
    },
    {
        id: 10,
        title: "Digital Landscape",
        artist: "Digital Artist",
        price: "2.3 ETH",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
        category: "art"
    },
    {
        id: 11,
        title: "Symphony of Light",
        artist: "Light Artist",
        price: "2.7 ETH",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
        category: "art"
    },
    {
        id: 12,
        title: "Pixel Adventure",
        artist: "Pixel Artist",
        price: "1.6 ETH",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=300&fit=crop",
        category: "gaming"
    }
];

// Function to create NFT card
function createNFTCard(nft) {
    return `
        <div class="nft-card scroll-reveal" data-category="${nft.category}">
            <div class="nft-image">
                <img src="${nft.image}" alt="${nft.title}">
            </div>
            <div class="nft-info">
                <h3 class="nft-title">${nft.title}</h3>
                <p class="nft-artist">By ${nft.artist}</p>
                <div class="nft-price">
                    <span class="price-amount">${nft.price}</span>
                    <button class="bid-btn">Place Bid</button>
                </div>
            </div>
        </div>
    `;
}

// Function to render gallery
function renderGallery(filter = 'all') {
    const filteredNFTs = filter === 'all' 
        ? nftData 
        : nftData.filter(nft => nft.category === filter);
    
    galleryGrid.innerHTML = filteredNFTs.map(nft => createNFTCard(nft)).join('');
    
    // Trigger scroll reveal animation
    setTimeout(() => {
        document.querySelectorAll('.scroll-reveal').forEach(element => {
            element.classList.add('revealed');
        });
    }, 100);
}

// Initialize gallery
renderGallery();

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value and render gallery
        const filter = button.getAttribute('data-filter');
        renderGallery(filter);
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe all scroll-reveal elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Button click handlers
document.addEventListener('DOMContentLoaded', () => {
    // Explore Gallery button
    const exploreBtn = document.querySelector('.btn-primary');
    if (exploreBtn && exploreBtn.textContent.includes('Explore')) {
        exploreBtn.addEventListener('click', () => {
            document.querySelector('#gallery').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Connect Wallet button
    const connectBtn = document.querySelector('.btn-secondary');
    if (connectBtn && connectBtn.textContent.includes('Connect')) {
        connectBtn.addEventListener('click', () => {
            alert('Wallet connection feature coming soon!');
        });
    }
    
    // Bid buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('bid-btn')) {
            alert('Bidding feature coming soon!');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to featured cards
    const featuredCards = document.querySelectorAll('.featured-card');
    featuredCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn, .filter-btn, .bid-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Add a simple loading screen
const loadingScreen = document.createElement('div');
loadingScreen.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
`;

loadingScreen.innerHTML = `
    <div style="text-align: center; color: #fff;">
        <div style="font-size: 2rem; margin-bottom: 1rem;">
            <i class="fas fa-cube" style="color: #6366f1;"></i>
        </div>
        <div style="font-size: 1.5rem; font-weight: 600;">NFT Gallery</div>
        <div style="margin-top: 1rem; color: #a1a1aa;">Loading amazing artworks...</div>
    </div>
`;

document.body.appendChild(loadingScreen);

// Remove loading screen after page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1000);
});
