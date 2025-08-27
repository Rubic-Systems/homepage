# Jotwell Design Schema
## Visual Design System Documentation

### Brand Overview
Jotwell is a modern, educational application with a clean, professional aesthetic that adapts seamlessly between light and dark modes. The design emphasizes clarity, readability, and user comfort across extended study sessions.

---

## Color Palette

### Light Mode

#### Primary Colors
- **Primary Blue**: `#5D6DF7` (RGB: 86, 109, 247)
  - Light variant: `#8A9FF7` (RGB: 137, 160, 247)
  - Dark variant: `#3C54F5` (RGB: 60, 84, 245)
  - Text on primary: White

#### Secondary Colors
- **Secondary Red**: `#F57876` (RGB: 245, 120, 118)
  - Light variant: `#FA9291` (RGB: 250, 146, 145)
  - Dark variant: `#DB5E5D` (RGB: 219, 94, 93)
  - Text on secondary: White

#### Background Colors
- **Primary Background**: `#FBFCFD` (RGB: 251, 252, 253) - Near white
- **Secondary Background**: `#F7F8FA` (RGB: 247, 248, 250)
- **Tertiary Background**: `#F2F4F7` (RGB: 242, 244, 247)
- **Elevated Surface**: Pure White `#FFFFFF`

#### Text Colors
- **Primary Text**: `#111620` (RGB: 17, 22, 32) - Deep navy
- **Secondary Text**: `#667085` (RGB: 102, 112, 133) - Medium gray
- **Tertiary Text**: `#99A3B8` (RGB: 153, 163, 184) - Light gray
- **Disabled Text**: `#CCD6EB` (RGB: 204, 214, 235)

#### System State Colors
- **Error**: `#F34444` (RGB: 243, 68, 68)
- **Warning**: `#F39944` (RGB: 243, 153, 68)
- **Success**: `#44BB77` (RGB: 68, 187, 119)
- **Info**: `#4499F3` (RGB: 68, 153, 243)

#### UI Elements
- **Divider**: `#E9ECEF` (RGB: 233, 236, 239)
- **Overlay**: Black at 50% opacity

#### Annotation/Highlight Colors
- **Yellow**: `#FFF2CC` (RGB: 255, 242, 204)
- **Pink**: `#FFE0EC` (RGB: 255, 224, 236)
- **Green**: `#E0F7E0` (RGB: 224, 247, 224)
- **Blue**: `#E0ECFF` (RGB: 224, 236, 255)
- **Purple**: `#ECE0FF` (RGB: 236, 224, 255)
- **Orange**: `#FFECE0` (RGB: 255, 236, 224)

---

### Dark Mode

#### Primary Colors
- **Primary Gold**: `#FFD700` (RGB: 255, 215, 0)
  - Light variant: `#FFE433` (RGB: 255, 228, 51)
  - Dark variant: `#DAA520` (RGB: 218, 165, 32)
  - Text on primary: Black

#### Secondary Colors
- **Secondary White**: Pure White `#FFFFFF`
  - Dark variant: `#E6E6E6` (RGB: 230, 230, 230)
  - Text on secondary: Black

#### Background Colors
- **Primary Background**: Pure Black `#000000`
- **Secondary Background**: `#0D0D0D` (RGB: 13, 13, 13)
- **Tertiary Background**: `#1A1A1A` (RGB: 26, 26, 26)
- **Elevated Surface**: `#262626` (RGB: 38, 38, 38)

#### Text Colors
- **Primary Text**: Pure White `#FFFFFF`
- **Secondary Text**: `#E6E6E6` (RGB: 230, 230, 230)
- **Tertiary Text**: `#B3B3B3` (RGB: 179, 179, 179)
- **Disabled Text**: `#666666` (RGB: 102, 102, 102)

#### System State Colors
- **Error**: `#FF3333` (RGB: 255, 51, 51) - Bright red
- **Warning**: `#FFD700` (RGB: 255, 215, 0) - Gold
- **Success**: `#00CC00` (RGB: 0, 204, 0) - Bright green
- **Info**: White
- **Disabled**: `#4D4D4D` (RGB: 77, 77, 77)

#### UI Elements
- **Divider**: `#333333` (RGB: 51, 51, 51)
- **Overlay**: Black at 85% opacity

#### Annotation/Highlight Colors (with transparency)
- **Yellow**: Gold at 40% opacity
- **Pink**: Light gold-pink at 40% opacity
- **Green**: Light green at 40% opacity
- **Blue**: White at 20% opacity
- **Purple**: Gray at 40% opacity
- **Orange**: Gold at 30% opacity

---

## Spacing System

The app uses a consistent spacing scale based on 4px increments:

- **xxxs**: 2px
- **xxs**: 4px
- **xs**: 8px
- **sm**: 12px
- **md**: 16px (base unit)
- **lg**: 24px
- **xl**: 32px
- **xxl**: 48px
- **xxxl**: 64px

---

## Corner Radius

Rounded corners create a friendly, modern appearance:

- **xs**: 4px - Subtle rounding for small elements
- **sm**: 8px - Standard buttons and inputs
- **md**: 12px - Cards and containers
- **lg**: 16px - Modal dialogs
- **xl**: 20px - Large panels
- **full**: 999px - Completely rounded (pills, circular buttons)

---

## Shadow System

Shadows provide depth and hierarchy:

- **Small (sm)**: 4px blur, 2px Y-offset, 5% opacity
- **Medium (md)**: 8px blur, 4px Y-offset, 8% opacity
- **Large (lg)**: 16px blur, 8px Y-offset, 12% opacity
- **Extra Large (xl)**: 24px blur, 12px Y-offset, 16% opacity

---

## Animation Timing

All animations respect accessibility settings (reduce motion):

- **Very Fast**: 0.1 seconds
- **Fast**: 0.2 seconds
- **Normal**: 0.3 seconds
- **Slow**: 0.5 seconds
- **Spring**: Responsive spring animation with natural dampening

---

## Typography Guidelines

### Font Stack Recommendations
- **Primary**: System UI font (San Francisco on iOS, follows platform conventions)
- **Monospace**: For code or data display

### Text Hierarchy
- **Headings**: Use primary text color, increase size for hierarchy
- **Body**: Use primary text color for main content
- **Secondary**: Use secondary text color for supporting information
- **Tertiary**: Use tertiary text color for metadata, timestamps
- **Disabled**: Use disabled color for inactive elements

---

## Icon System

Icons adapt to context and theme:

### Light Mode Icons
- **Primary Actions**: Blue `#5D6DF7`
- **Secondary**: Gray `#667085`
- **Active State**: Blue `#5D6DF7`
- **Inactive**: Light gray `#99A3B8`
- **Favorites/Stars**: Gold `#FFD700`
- **Navigation**: Blue `#5D6DF7`
- **Folders**: Blue `#5D6DF7`

### Dark Mode Icons
- **Primary Actions**: Gold `#FFD700`
- **Secondary**: Gray `#B3B3B3`
- **Active State**: Gold `#FFD700`
- **Inactive**: Dark gray `#666666`
- **Favorites/Stars**: Gold `#FFD700`
- **Navigation**: Gold `#FFD700`
- **Folders**: Gold `#FFD700`

---

## Quiz & Educational Features

### Difficulty Indicators
- **Easy**: Green
- **Medium**: Orange
- **Hard**: Red
- **Expert**: Purple

### Answer States
- **Correct**: Green
- **Incorrect**: Red
- **Skipped**: Orange

### Matching Question Colors
A palette of distinct colors for matching exercises:
- Blue, Green, Orange, Purple, Pink, Cyan (adjusted for each theme)

---

## Component Patterns

### Cards & Surfaces
- Use elevated surface colors for cards
- Apply medium shadow (md) for lifted appearance
- Use medium corner radius (12px)
- Maintain consistent padding (16px standard)

### Buttons
- Primary actions: Primary color background with white text
- Secondary actions: Secondary background with primary text
- Destructive actions: Error color
- Disabled state: Disabled color with reduced opacity

### Forms & Inputs
- Border: Divider color
- Background: Surface secondary
- Focus state: Primary color border
- Error state: Error color border
- Corner radius: Small (8px)

### Navigation
- Top bar: Primary background color
- Tab bar: Surface elevated with divider
- Active states: Primary color for icons and text

---

## Accessibility Considerations

1. **Color Contrast**: All text colors meet WCAG AA standards against their backgrounds
2. **Focus Indicators**: Clear visual focus states using primary colors
3. **Motion**: All animations can be disabled via system settings
4. **Touch Targets**: Minimum 44x44pt touch areas
5. **Text Size**: Supports dynamic type scaling

---

## Theme Switching

The app supports three theme modes:
1. **Light Mode**: Clean, bright interface ideal for daytime use
2. **Dark Mode**: High-contrast black background with gold accents for night study
3. **System Mode**: Automatically follows device appearance settings

### Dark Mode Philosophy
- Pure black background for OLED optimization
- Gold as primary accent for warmth and visibility
- White as secondary for high contrast
- Reduced brightness for comfortable night reading

---

## Usage Guidelines for Web Designer

### Landing Page Recommendations

1. **Hero Section**: Use primary blue (#5D6DF7) as accent with light backgrounds
2. **Feature Cards**: Elevated white surfaces with medium shadows
3. **Call-to-Action**: Primary blue buttons with white text
4. **Screenshots**: Show both light and dark modes to demonstrate adaptability
5. **Typography**: Maintain the clean, hierarchical text system
6. **Spacing**: Use the defined spacing scale for consistency
7. **Animations**: Subtle, professional transitions (0.3s standard)

### Brand Voice
- Professional yet approachable
- Educational and trustworthy
- Modern and clean
- Accessible and inclusive

### Key Differentiators to Highlight
- Seamless light/dark mode switching
- Thoughtful color system for extended reading
- Quiz and study features with clear visual feedback
- Annotation system with multiple highlight colors
- Clean, distraction-free interface

---

## File Export Notes

When creating web assets:
- Export logos/icons in SVG format when possible
- Use the exact hex values provided
- Maintain the shadow specifications for depth
- Follow the corner radius system for consistency
- Test color contrast for accessibility compliance

---

*This design schema is based on the native iOS app implementation and should guide the creation of a cohesive web presence that accurately represents the Jotwell brand and user experience.*