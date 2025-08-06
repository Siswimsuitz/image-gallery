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
        instagram: 'sarahjohnson_photography',
        photos: [
            {
                id: 1,
                title: 'Fashion Portrait 1',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_944344d2b40df06c051b69fc14213c074c532667888c4e80.jpg',
                category: 'fashion'
            },
            {
                id: 2,
                title: 'Fashion Portrait 2',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_1cd03cb30abdd8e1e244a40b8e71857aa8a6ee8afff03437.jpg',
                category: 'fashion'
            },
            {
                id: 3,
                title: 'Fashion Portrait 3',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_6a7fbf3ce44c8b59989354a182b4c6d96380d7ca25426b36.jpg',
                category: 'fashion'
            },
            {
                id: 4,
                title: 'Fashion Portrait 4',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_8cf5a03be373272daef411ae76f8467e2cb5766b583a5674.jpg',
                category: 'fashion'
            },
            {
                id: 5,
                title: 'Fashion Portrait 5',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_61b449b4f2451e6fb92ebb8968e708f9beae25c2151308ae.jpg',
                category: 'fashion'
            },
            {
                id: 6,
                title: 'Fashion Portrait 6',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_3066eb7f5356dd8c3a898154fcb10c7d457e253d2a09f30d.jpg',
                category: 'fashion'
            },
            {
                id: 7,
                title: 'Fashion Portrait 7',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_a9366b113fb1367eee8f0f0f185a3ebb718e2f1a6648b739.jpg',
                category: 'fashion'
            },
            {
                id: 8,
                title: 'Fashion Portrait 8',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_b03094cd4da5d8dd0086b32c30b525d9de08b6b8606d272d.jpg',
                category: 'fashion'
            },
            {
                id: 9,
                title: 'Fashion Portrait 9',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_c36e1a617213dafe16a981f6531406b55cc857a64fea40ef.jpg',
                category: 'fashion'
            },
            {
                id: 10,
                title: 'Fashion Portrait 10',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_c783e4db4437f8a9547c79a9a9eb6639bf2e33b522246e16.jpg',
                category: 'fashion'
            },
            {
                id: 11,
                title: 'Fashion Portrait 11',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_db841f9a9f54b044ef98c490986087201b725ba6cbeab191.jpg',
                category: 'fashion'
            },
            {
                id: 12,
                title: 'Fashion Portrait 12',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_f05c81ff245d7e7fcdd33a63113f044fe557ad5c2af6b8ae.jpg',
                category: 'fashion'
            },
            {
                id: 13,
                title: 'Fashion Portrait 13',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_1c2dfe131a42e469df80551c108c8dad802782af4ee7c83d.jpg',
                category: 'fashion'
            },
            {
                id: 14,
                title: 'Fashion Portrait 14',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_7d8b7886854cf1367ba31eb38a72898d34d138d3f5421876.jpg',
                category: 'fashion'
            },
            {
                id: 15,
                title: 'Fashion Portrait 15',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_8f35d4498590fa846c51e88b9dd277b05ab4d76d32961d67.jpg',
                category: 'fashion'
            },
            {
                id: 16,
                title: 'Fashion Portrait 16',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_33ed129171a05c7eb33c8737f44107592dd4b6ca6fe6deb2.jpg',
                category: 'fashion'
            },
            {
                id: 17,
                title: 'Fashion Portrait 17',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_74d54a9ed6e335d638805a37df7022931cce397e7a757f7f.jpg',
                category: 'fashion'
            },
            {
                id: 18,
                title: 'Fashion Portrait 18',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_237617dc61e1ef364ca96af6926e597921502181fc55c85c.jpg',
                category: 'fashion'
            },
            {
                id: 19,
                title: 'Fashion Portrait 19',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_e970258d4fd715322a11ee9714ca7861e6a0e424c2d2e7b1.jpg',
                category: 'fashion'
            },
            {
                id: 20,
                title: 'Fashion Portrait 20',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_f25c65844541e960254e5d54bf833fc6e04996a9084e210f.jpg',
                category: 'fashion'
            },
            {
                id: 21,
                title: 'Fashion Portrait 21',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_7676a4ff4bfb3208aef225f01446250d7d0b5eecf22d760c.jpg',
                category: 'fashion'
            },
            {
                id: 22,
                title: 'Fashion Portrait 22',
                image: 'https://simp6.selti-delivery.ru/images3/3024x4032_84743f78897a2945f988dd9b1dbf8a5681439f5211745e59.jpg',
                category: 'fashion'
            }
        ]
    },
    'mike-chen': {
        name: 'Mike Chen',
        specialty: 'Street Photography',
        instagram: 'mikechen_street',
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
        instagram: 'emmadavis_nature',
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
        instagram: 'alexwong_portraits',
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
        instagram: 'lisapark_fashion',
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
        instagram: 'davidkim_urban',
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

// Function to get Instagram handle for a specific model
function getInstagramHandle(modelId) {
    return photoData[modelId] ? photoData[modelId].instagram : null;
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

// Function to create photo card with dynamic photo count and Instagram button
function createPhotoCard(photo) {
    const photoCount = getPhotoCount(photo.modelId);
    const instagramHandle = getInstagramHandle(photo.modelId);
    
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
                ${instagramHandle ? `
                    <div class="instagram-section">
                        <a href="https://www.instagram.com/${instagramHandle}" target="_blank" class="instagram-btn">
                            <i class="fab fa-instagram"></i>
                            <span>@${instagramHandle}</span>
                        </a>
                    </div>
                ` : ''}
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
                <img src="${photo.image}" alt="${photo.title}">
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
    
    // Handle Instagram buttons
    if (e.target.closest('.instagram-btn')) {
        e.stopPropagation();
        // Let the link open naturally in new tab
    }
});

// Update featured cards with actual photo counts and Instagram buttons
document.addEventListener('DOMContentLoaded', () => {
    // Update featured cards photo counts
    const featuredCards = document.querySelectorAll('.featured-card');
    featuredCards.forEach(card => {
        const modelId = card.getAttribute('data-model');
        if (modelId) {
            const photoCount = getPhotoCount(modelId);
            const instagramHandle = getInstagramHandle(modelId);
            
            // Update photo count
            const photoCountElement = card.querySelector('.photo-count');
            if (photoCountElement) {
                photoCountElement.textContent = `${photoCount} Photo${photoCount !== 1 ? 's' : ''}`;
            }
            
            // Add Instagram button if handle exists
            if (instagramHandle) {
                const cardInfo = card.querySelector('.card-info');
                if (cardInfo && !card.querySelector('.instagram-btn')) {
                    const instagramSection = document.createElement('div');
                    instagramSection.className = 'instagram-section';
                    instagramSection.innerHTML = `
                        <a href="https://www.instagram.com/${instagramHandle}" target="_blank" class="instagram-btn">
                            <i class="fab fa-instagram"></i>
                            <span>@${instagramHandle}</span>
                        </a>
                    `;
                    cardInfo.appendChild(instagramSection);
                }
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
