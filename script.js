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

// Sample photo data for different photographers/models
const photoData = {
    'sarah-johnson': {
        name: 'Sarah Johnson',
        specialty: 'Fashion & Portrait Photography',
        photos: [
            {
                id: 1,
                title: 'Urban Fashion',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=600&fit=crop',
                category: 'fashion'
            },
            {
                id: 2,
                title: 'Portrait Session',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop',
                category: 'portrait'
            },
            {
                id: 3,
                title: 'Studio Fashion',
                image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
                category: 'fashion'
            },
            {
                id: 4,
                title: 'Natural Light Portrait',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
                category: 'portrait'
            },
            {
                id: 5,
                title: 'Fashion Editorial',
                image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop',
                category: 'fashion'
            },
            {
                id: 6,
                title: 'Close-up Portrait',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop',
                category: 'portrait'
            }
        ]
    },
    'mike-chen': {
        name: 'Mike Chen',
        specialty: 'Street Photography',
        photos: [
            {
                id: 1,
                title: 'City Streets',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
                category: 'street'
            },
            {
                id: 2,
                title: 'Urban Life',
                image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
                category: 'street'
            },
            {
                id: 3,
                title: 'Street Art',
                image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
                category: 'street'
            },
            {
                id: 4,
                title: 'City Architecture',
                image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
                category: 'street'
            }
        ]
    },
    'emma-davis': {
        name: 'Emma Davis',
        specialty: 'Nature & Landscape',
        photos: [
            {
                id: 1,
                title: 'Mountain Landscape',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
                category: 'nature'
            },
            {
                id: 2,
                title: 'Forest Path',
                image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
                category: 'nature'
            },
            {
                id: 3,
                title: 'Ocean Waves',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
                category: 'nature'
            },
            {
                id: 4,
                title: 'Sunset Sky',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
                category: 'nature'
            }
        ]
    },
    'alex-wong': {
        name: 'Alex Wong',
        specialty: 'Portrait Photography',
        photos: [
            {
                id: 1,
                title: 'Professional Portrait',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
                category: 'portrait'
            },
            {
                id: 2,
                title: 'Creative Portrait',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop',
                category: 'portrait'
            },
            {
                id: 3,
                title: 'Studio Portrait',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
                category: 'portrait'
            }
        ]
    },
    'lisa-park': {
        name: 'Lisa Park',
        specialty: 'Fashion Photography',
        photos: [
            {
                id: 1,
                title: 'Fashion Editorial',
                image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
                category: 'fashion'
            },
            {
                id: 2,
                title: 'Runway Fashion',
                image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop',
                category: 'fashion'
            },
            {
                id: 3,
                title: 'Street Fashion',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=600&fit=crop',
                category: 'fashion'
            }
        ]
    },
    'david-kim': {
        name: 'David Kim',
        specialty: 'Street Photography',
        photos: [
            {
                id: 1,
                title: 'Urban Scene',
                image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
                category: 'street'
            },
            {
                id: 2,
                title: 'City Life',
                image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
                category: 'street'
            }
        ]
    }
};

// Function to get photo count for a specific model
function getPhotoCount(modelId) {
    return photoData[modelId] ? photoData[modelId].photos.length : 0;
}

// Generate gallery data dynamically with actual photo counts
const galleryData = [
    {
        id: 1,
        name: 'Sarah Johnson',
        specialty: 'Fashion & Portrait',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
        category: 'fashion',
        modelId: 'sarah-johnson'
    },
    {
        id: 2,
        name: 'Mike Chen',
        specialty: 'Street Photography',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
        category: 'street',
        modelId: 'mike-chen'
    },
    {
        id: 3,
        name: 'Emma Davis',
        specialty: 'Nature & Landscape',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
        category: 'nature',
        modelId: 'emma-davis'
    },
    {
        id: 4,
        name: 'Alex Wong',
        specialty: 'Portrait Photography',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
        category: 'portrait',
        modelId: 'alex-wong'
    },
    {
        id: 5,
        name: 'Lisa Park',
        specialty: 'Fashion Photography',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop',
        category: 'fashion',
        modelId: 'lisa-park'
    },
    {
        id: 6,
        name: 'David Kim',
        specialty: 'Street Photography',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=300&fit=crop',
        category: 'street',
        modelId: 'david-kim'
    }
];

// Function to create photo card with dynamic photo count
function createPhotoCard(photo) {
    const photoCount = getPhotoCount(photo.modelId);
    return `
        <div class="photo-card scroll-reveal" data-category="${photo.category}" data-model="${photo.modelId}">
            <div class="photo-image">
                <img src="${photo.image}" alt="${photo.name}">
            </div>
            <div class="photo-info">
                <h3 class="photo-title">${photo.name}</h3>
                <p class="photo-photographer">${photo.specialty}</p>
                <div class="photo-details">
                    <span class="photo-count-badge">${photoCount} Photo${photoCount !== 1 ? 's' : ''}</span>
                    <button class="view-btn">View Gallery</button>
                </div>
            </div>
        </div>
    `;
}

// Function to render gallery
function renderGallery(filter = 'all') {
    const filteredPhotos = filter === 'all' 
        ? galleryData 
        : galleryData.filter(photo => photo.category === filter);
    
    galleryGrid.innerHTML = filteredPhotos.map(photo => createPhotoCard(photo)).join('');
    
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

// Modal functionality
const modal = document.getElementById('photo-modal');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalGallery = document.getElementById('modal-gallery');
const closeBtn = document.querySelector('.close');

// Lightbox functionality
let currentPhotos = [];
let currentPhotoIndex = 0;

// Create lightbox element
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <button class="lightbox-nav lightbox-prev">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="lightbox-nav lightbox-next">
            <i class="fas fa-chevron-right"></i>
        </button>
        <div class="lightbox-image-container">
            <img class="lightbox-image" src="" alt="">
        </div>
        <div class="lightbox-info">
            <h3 class="lightbox-title"></h3>
            <p class="lightbox-counter"></p>
        </div>
    </div>
`;
document.body.appendChild(lightbox);

// Function to open lightbox
function openLightbox(photos, index) {
    currentPhotos = photos;
    currentPhotoIndex = index;
    
    const photo = photos[index];
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    
    lightboxImage.src = photo.image;
    lightboxImage.alt = photo.title;
    lightboxTitle.textContent = photo.title;
    lightboxCounter.textContent = `${index + 1} / ${photos.length}`;
    
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Function to navigate lightbox
function navigateLightbox(direction) {
    if (direction === 'next') {
        currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotos.length;
    } else {
        currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
    }
    
    const photo = currentPhotos[currentPhotoIndex];
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    
    lightboxImage.src = photo.image;
    lightboxImage.alt = photo.title;
    lightboxTitle.textContent = photo.title;
    lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${currentPhotos.length}`;
}

// Lightbox event listeners
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox('prev'));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox('next'));

// Close lightbox when clicking outside
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (lightbox.style.display === 'flex') {
            closeLightbox();
        } else if (modal.style.display === 'block') {
            closeModal();
        }
    }
    
    // Navigate lightbox with arrow keys
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            navigateLightbox('prev');
        } else if (e.key === 'ArrowRight') {
            navigateLightbox('next');
        }
    }
});

// Function to open modal with photo collection
function openPhotoModal(modelId) {
    const modelData = photoData[modelId];
    if (modelData) {
        modalTitle.textContent = modelData.name;
        modalSubtitle.textContent = modelData.specialty;
        
        // Render photos in modal with data attributes for lightbox
        modalGallery.innerHTML = modelData.photos.map((photo, index) => `
            <div class="modal-photo" data-photo-index="${index}">
                <img src="${photo.image.replace('w=800&h=600', 'w=400&h=400')}" alt="${photo.title}">
            </div>
        `).join('');
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add click event to modal photos for lightbox
        modalGallery.querySelectorAll('.modal-photo').forEach((photoElement, index) => {
            photoElement.addEventListener('click', () => {
                openLightbox(modelData.photos, index);
            });
        });
    }
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners for modal
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Event delegation for photo cards and featured cards
document.addEventListener('click', (e) => {
    // Handle gallery photo cards
    if (e.target.closest('.photo-card')) {
        const photoCard = e.target.closest('.photo-card');
        const modelId = photoCard.getAttribute('data-model');
        openPhotoModal(modelId);
    }
    
    // Handle featured cards
    if (e.target.closest('.featured-card')) {
        const featuredCard = e.target.closest('.featured-card');
        const modelId = featuredCard.getAttribute('data-model');
        openPhotoModal(modelId);
    }
    
    // Handle view buttons
    if (e.target.classList.contains('view-btn')) {
        e.stopPropagation();
        const photoCard = e.target.closest('.photo-card');
        const modelId = photoCard.getAttribute('data-model');
        openPhotoModal(modelId);
    }
});

// Update featured cards with actual photo counts
document.addEventListener('DOMContentLoaded', () => {
    // Update featured cards photo counts
    const featuredCards = document.querySelectorAll('.featured-card');
    featuredCards.forEach(card => {
        const modelId = card.getAttribute('data-model');
        if (modelId) {
            const photoCount = getPhotoCount(modelId);
            const photoCountElement = card.querySelector('.photo-count');
            if (photoCountElement) {
                photoCountElement.textContent = `${photoCount} Photo${photoCount !== 1 ? 's' : ''}`;
            }
        }
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
    
    // View Collections button
    const collectionsBtn = document.querySelector('.btn-secondary');
    if (collectionsBtn && collectionsBtn.textContent.includes('Collections')) {
        collectionsBtn.addEventListener('click', () => {
            document.querySelector('#gallery').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
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
    const buttons = document.querySelectorAll('.btn, .filter-btn, .view-btn');
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
            <i class="fas fa-camera" style="color: #6366f1;"></i>
        </div>
        <div style="font-size: 1.5rem; font-weight: 600;">Photo Gallery</div>
        <div style="margin-top: 1rem; color: #a1a1aa;">Loading amazing photos...</div>
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
