# ServicesGrid Component

A highly customizable and reusable React component for displaying service cards in a grid layout with beautiful animations and hover effects.

## Features

- ✨ **Smooth GSAP Animations** - Configurable entrance animations
- 🎨 **Beautiful Hover Effects** - Glass-morphism cards with shimmer effects
- 📱 **Fully Responsive** - Adapts to all screen sizes
- 🔧 **Highly Customizable** - Multiple props for customization
- ⚡ **Performance Optimized** - Efficient animations and rendering
- 🎯 **Click Handlers** - Optional click functionality for service cards

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `services` | Array | Default services | Array of service objects |
| `animationDelay` | Number | 1 | Initial delay before animations start (seconds) |
| `staggerDelay` | Number | 0.15 | Delay between each card animation (seconds) |
| `className` | String | "" | Additional CSS classes |
| `columns` | Number | 2 | Number of columns in the grid |
| `maxWidth` | String | "500px" | Maximum width of the grid |
| `showAnimation` | Boolean | true | Whether to show entrance animations |
| `animationEffect` | String | "slide-up" | Type of animation effect |
| `onServiceClick` | Function | null | Click handler for service cards |

## Service Object Structure

```javascript
{
  title: "Service Title",
  description: "Service description text",
  icon: "🌐" // Emoji or icon
}
```

## Animation Effects

Available animation effects:
- `slide-up`
- `slide-down`
- `slide-left`
- `slide-right`
- `zoom-in`
- `fade`

## Usage Examples

### Basic Usage
```jsx
import ServicesGrid from '@/components/services/ServicesGrid'

<ServicesGrid />
```

### Custom Services
```jsx
const myServices = [
  {
    title: "Web Development",
    description: "Custom websites and applications",
    icon: "🌐"
  },
  // ... more services
]

<ServicesGrid services={myServices} />
```

### With Click Handler
```jsx
const handleServiceClick = (service, index) => {
  console.log(`Clicked on ${service.title}`)
  // Navigate to service page, open modal, etc.
}

<ServicesGrid 
  services={myServices}
  onServiceClick={handleServiceClick}
/>
```

### Custom Layout
```jsx
<ServicesGrid 
  services={myServices}
  columns={3}
  maxWidth="800px"
  animationEffect="slide-left"
  animationDelay={0.5}
  staggerDelay={0.2}
/>
```

### Without Animation
```jsx
<ServicesGrid 
  services={myServices}
  showAnimation={false}
/>
```

## Styling

The component uses CSS modules for styling. You can override styles by:

1. **Using className prop:**
```jsx
<ServicesGrid className="my-custom-grid" />
```

2. **CSS Custom Properties:**
The component respects the following CSS variables:
- `--white` - Text color
- `--parawhite` - Description text color
- `--black` - Background color

## Responsive Behavior

- **Desktop (>968px):** Full grid layout
- **Tablet (768px-968px):** Adjusted spacing and sizing
- **Mobile (<768px):** Single column layout for 2+ column grids
- **Small Mobile (<480px):** Optimized padding and font sizes

## Browser Support

- Modern browsers with CSS Grid support
- Requires GSAP for animations
- Supports all major mobile browsers

## Dependencies

- React 18+
- GSAP (for animations)
- CSS Modules support

## Performance Notes

- Uses `will-change` CSS property for smooth animations
- Animations are optimized with proper cleanup
- Responsive images and lazy loading ready
- Minimal re-renders with React best practices
