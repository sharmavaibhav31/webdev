# Hack 'n Seek - Tech Event Launch Page

A modern, visually engaging launch page for the upcoming tech event "Hack 'n Seek" featuring a cyberpunk theme with hacking, puzzle-solving, and adventure elements.

## 🚀 Features

### Visual Effects
- **Main content hidden until animation completes**
- **10-second animated intro** with flickering code lines and digital map
- **Glitchy cyberpunk-style typography** for the event title
- **Matrix-style code rain** background animation
- **Floating particles** with neon effects
- **Smooth parallax scrolling** effects
- **Responsive design** optimized for desktop and mobile

### Interactive Elements
- **Live countdown timer** to the event date
- **Registration modal** with form validation
- **Hover effects** on buttons and cards
- **Keyboard navigation** support
- **Accessibility features** (ARIA labels, focus management)

### Color Palette
- **Neon Blue** (#00ffff) - Primary accent
- **Neon Purple** (#ff00ff) - Secondary accent
- **Neon Green** (#00ff00) - Matrix effects
- **Dark backgrounds** (#0a0a0a, #1a1a2e, #16213e)

## 📁 File Structure

```
hack-n-seek/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Customization Guide

### Changing the Event Date
Edit the `eventDate` variable in `script.js`:

```javascript
// Set your event date here
const eventDate = new Date('2024-12-31T18:00:00');
```

### Modifying Colors
Update the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #00ffff;    /* Neon Blue */
    --secondary-color: #ff00ff;  /* Neon Purple */
    --accent-color: #00ff00;     /* Neon Green */
    --bg-dark: #0a0a0a;          /* Dark background */
    --bg-medium: #1a1a2e;        /* Medium background */
    --bg-light: #16213e;         /* Light background */
}
```

### Adjusting Animation Timing
Modify animation durations in `styles.css`:

```css
.intro-overlay {
    animation: fadeOut 0.5s ease-in-out 10s forwards; /* Change 10s to adjust intro duration */
}
```

### Customizing Content
Update the HTML content in `index.html`:

- **Event title**: Change "HACK 'N SEEK" in the hero section
- **Tagline**: Modify "Decode. Discover. Dominate."
- **Event details**: Update the mission, challenge, and rewards sections
- **Registration form**: Add/remove form fields as needed

### Adding New Animations
Create new keyframe animations in `styles.css`:

```css
@keyframes yourAnimation {
    0% { /* initial state */ }
    50% { /* middle state */ }
    100% { /* final state */ }
}
```

## 🛠️ Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Optimizations
- **Throttled scroll events** for smooth performance
- **Intersection Observer** for efficient animations
- **CSS transforms** for hardware acceleration
- **Optimized animations** with proper easing

### Accessibility Features
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Focus management** in modals
- **High contrast** color scheme
- **Semantic HTML** structure

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **Customize** the content and styling as needed
4. **Deploy** to your web server

### Local Development
For local development, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

## 📱 Responsive Design

The page is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Key Features Explained

### Intro Animation Sequence
1. **Code Lines** (0-2s): Typewriter effect with system messages
2. **Digital Map** (2.5-4.5s): Nodes lighting up in sequence
3. **Event Logo** (4.5s+): Glitchy title appears with pulse effect
4. **Fade Out** (10s): Smooth transition to main content

### Countdown Timer
- Updates every second
- Includes pulse effect on seconds change
- Graceful error handling with fallback values
- Responsive design for all screen sizes

### Matrix Code Rain
- Random characters generated every 3 seconds
- Multiple columns with staggered timing
- Green neon effect with glow
- Performance optimized with CSS animations

### Registration Modal
- Form validation with visual feedback
- Keyboard navigation (Tab, Enter, Escape)
- Focus management for accessibility
- Smooth animations and transitions

## 🔧 Advanced Customization

### Adding Sound Effects
Uncomment the sound effect code in `script.js`:

```javascript
// Uncomment to enable hover sounds
function playHoverSound() {
    const audio = new Audio('path/to/sound.mp3');
    audio.volume = 0.1;
    audio.play().catch(() => {});
}
```

### Custom Fonts
Replace Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

### Adding More Sections
Extend the HTML structure with new sections:

```html
<section class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**: Check browser support and CSS compatibility
2. **Countdown not updating**: Verify JavaScript is enabled
3. **Modal not opening**: Check for JavaScript errors in console
4. **Responsive issues**: Test on different screen sizes

### Performance Tips

1. **Reduce particle count** for better performance on mobile
2. **Disable matrix rain** on slower devices
3. **Optimize images** if adding custom graphics
4. **Minify CSS/JS** for production deployment

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the project.

---

**Created for Hack 'n Seek Tech Event**  
*Decode. Discover. Dominate.*

