# Loading Component Documentation

A reusable React Loading component with multiple animation types and customization options.

## Features

- ✅ Multiple animation types (spinner, dots, pulse, bars, ripple, code)
- ✅ Customizable sizes (small, medium, large)
- ✅ Multiple color themes (primary, secondary, white, gray)
- ✅ Optional overlay mode for full-screen loading
- ✅ Custom loading text support
- ✅ Framer Motion animations
- ✅ Tailwind CSS styling
- ✅ TypeScript-friendly props
- ✅ Responsive design

## Installation

The component is already included in your project at `src/components/Loading.js`.

## Basic Usage

```jsx
import Loading from './components/Loading';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Loading loading={isLoading} />
      {/* Your content */}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | `false` | Controls whether the loading animation is shown |
| `type` | `string` | `'spinner'` | Animation type: `'spinner'`, `'dots'`, `'pulse'`, `'bars'`, `'ripple'`, `'code'` |
| `size` | `string` | `'medium'` | Size of the loader: `'small'`, `'medium'`, `'large'` |
| `color` | `string` | `'primary'` | Color theme: `'primary'`, `'secondary'`, `'white'`, `'gray'` |
| `overlay` | `boolean` | `false` | Whether to show as full-screen overlay |
| `text` | `string` | `''` | Optional loading text to display |

## Animation Types

### 1. Spinner (Default)
```jsx
<Loading loading={true} type="spinner" />
```
Classic rotating spinner with transparent top border.

### 2. Dots
```jsx
<Loading loading={true} type="dots" />
```
Three bouncing dots with staggered animation.

### 3. Pulse
```jsx
<Loading loading={true} type="pulse" />
```
Pulsing circle that scales and fades.

### 4. Bars
```jsx
<Loading loading={true} type="bars" />
```
Five vertical bars with wave-like animation.

### 5. Ripple
```jsx
<Loading loading={true} type="ripple" />
```
Expanding ripple circles effect.

### 6. Code
```jsx
<Loading loading={true} type="code" />
```
Developer-themed loader with rotating code icon and animated brackets.

## Size Options

```jsx
// Small loader
<Loading loading={true} size="small" />

// Medium loader (default)
<Loading loading={true} size="medium" />

// Large loader
<Loading loading={true} size="large" />
```

## Color Themes

```jsx
// Primary color (cyan)
<Loading loading={true} color="primary" />

// Secondary color (pink/purple)
<Loading loading={true} color="secondary" />

// White (for dark backgrounds)
<Loading loading={true} color="white" />

// Gray
<Loading loading={true} color="gray" />
```

## Overlay Mode

```jsx
// Full-screen overlay with backdrop blur
<Loading 
  loading={isLoading} 
  overlay={true}
  text="Loading your data..."
  type="code"
  size="large"
/>
```

## With Custom Text

```jsx
<Loading 
  loading={isLoading}
  text="Please wait while we process your request..."
  type="dots"
  color="primary"
/>
```

## Real-World Examples

### API Data Fetching
```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <div>
      <Loading 
        loading={loading} 
        text="Loading user profile..."
        type="pulse"
      />
      {user && <UserDetails user={user} />}
    </div>
  );
}
```

### Form Submission
```jsx
function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    try {
      await submitForm(formData);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={submitting}>
        Submit
      </button>
      
      <Loading 
        loading={submitting}
        overlay={true}
        text="Submitting your message..."
        type="code"
        size="large"
      />
    </form>
  );
}
```

### Page Loading
```jsx
function App() {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => setPageLoading(false), 2000);
  }, []);

  return (
    <>
      <Loading 
        loading={pageLoading}
        overlay={true}
        text="Initializing application..."
        type="code"
        size="large"
        color="primary"
      />
      {!pageLoading && <MainApp />}
    </>
  );
}
```

## Styling Customization

The component uses Tailwind CSS classes. You can customize the appearance by:

1. **Modifying the color configurations** in the component
2. **Adding custom CSS classes** via the className prop (if extended)
3. **Using CSS custom properties** for theme colors

## Performance Notes

- The component uses `AnimatePresence` for smooth enter/exit animations
- Returns `null` when `loading={false}` for optimal performance
- Animations are optimized with `transform` and `opacity` properties
- Uses `will-change` CSS property for better animation performance

## Accessibility

- Uses semantic HTML elements
- Provides proper ARIA labels (can be extended)
- Keyboard navigation friendly
- Screen reader compatible

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Requires Framer Motion for animations
- Tailwind CSS for styling