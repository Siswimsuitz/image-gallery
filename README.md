# Photo Gallery - Models & Photographers

A modern, responsive photo gallery website built with HTML, CSS, and JavaScript. This project showcases photo collections from talented photographers and models with an interactive gallery experience.

## 🌟 Features

### Design & UI
- **Modern Dark Theme**: Sleek dark design with purple gradient accents
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions

### Functionality
- **Navigation**: Fixed navigation with smooth scrolling
- **Gallery Filtering**: Filter by category (Fashion, Portrait, Street, Nature)
- **Modal Photo Collections**: Click on any photographer/model to view their full photo collection
- **Dynamic Content**: JavaScript-powered photo card generation
- **Contact Form**: Interactive contact form with validation
- **Mobile Menu**: Responsive mobile navigation

### Sections
1. **Hero Section**: Eye-catching introduction with statistics
2. **Featured Collections**: Highlighted photographer/model cards
3. **Gallery**: Filterable photo grid with detailed cards
4. **About**: Platform information and features
5. **Contact**: Contact form and social links
6. **Footer**: Additional links and information

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website will load with all functionality intact

### File Structure
```
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Dark theme (#0a0a0a, #111111)
- **Accent**: Purple gradient (#6366f1, #8b5cf6)
- **Text**: White and gray variations
- **Background**: Gradient backgrounds with subtle patterns

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

### Animations
- **Scroll Reveal**: Elements animate in as they come into view
- **Hover Effects**: Cards and buttons have interactive hover states
- **Loading Screen**: Smooth loading animation
- **Modal Transitions**: Smooth modal open/close animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with grid layouts
- **Tablet**: Adapted layouts with maintained functionality
- **Mobile**: Mobile-first design with touch-friendly interactions

## 🔧 Customization

### Adding New Photographers/Models
To add new photographers or models, modify the `photoData` object in `script.js`:

```javascript
'new-photographer': {
    name: 'Photographer Name',
    specialty: 'Photography Specialty',
    photos: [
        {
            id: 1,
            title: 'Photo Title',
            image: 'image-url',
            category: 'fashion' // or 'portrait', 'street', 'nature'
        }
        // ... more photos
    ]
}
```

### Adding to Main Gallery
Add entries to the `galleryData` array in `script.js`:

```javascript
{
    id: 7,
    name: 'Photographer Name',
    specialty: 'Photography Specialty',
    photoCount: 30,
    image: 'thumbnail-image-url',
    category: 'fashion',
    modelId: 'photographer-id'
}
```

### Styling Changes
- Modify colors in `style.css`
- Adjust animations and transitions
- Customize layout grids and spacing

### Content Updates
- Update text content in `index.html`
- Modify hero statistics
- Change featured collections

## 🖼️ Photo Gallery Features

### Modal Gallery
- Click on any photographer/model card to open their photo collection
- Modal displays all photos in a responsive grid
- Close with X button, clicking outside, or pressing Escape
- Smooth animations and transitions

### Filtering System
- Filter by photography categories
- Dynamic content loading
- Smooth transitions between filters

### Interactive Elements
- Hover effects on all cards
- Click animations on buttons
- Smooth scrolling navigation

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue in the project repository.

---

**Built with ❤️ for photographers and models**