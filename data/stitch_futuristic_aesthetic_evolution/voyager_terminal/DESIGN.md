---
name: Voyager Terminal
colors:
  surface: '#13131b'
  surface-dim: '#13131b'
  surface-bright: '#393842'
  surface-container-lowest: '#0d0d16'
  surface-container-low: '#1b1b23'
  surface-container: '#1f1f27'
  surface-container-high: '#292932'
  surface-container-highest: '#34343d'
  on-surface: '#e4e1ed'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e4e1ed'
  inverse-on-surface: '#302f39'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ebb2ff'
  on-secondary: '#520071'
  secondary-container: '#ce5dff'
  on-secondary-container: '#480064'
  tertiary: '#fff6e4'
  on-tertiary: '#3a3000'
  tertiary-container: '#ffd81d'
  on-tertiary-container: '#715e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ebb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#13131b'
  on-background: '#e4e1ed'
  surface-variant: '#34343d'
  space-void: '#050508'
  nebula-blue: '#161B33'
  terminal-green: '#4AF626'
  warning-amber: '#FFD700'
  error-red: '#FF3131'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

This design system is a high-fidelity fusion of a command-line interface and futuristic aerospace instrumentation. It is designed for developers who want to project a persona of deep technical mastery, precision, and forward-thinking innovation.

The aesthetic direction is **Advanced Glassmorphism**. It combines the raw, logical structure of a terminal with the sophisticated visual layers of a holographic "Heads-Up Display" (HUD). Key characteristics include:
- **Atmospheric Depth:** A sense of vast, cosmic space created through varying levels of transparency and background blurs.
- **Holographic Details:** Subtle scan-lines, glowing chromatic aberrations, and light-bleed effects on borders to simulate a projection.
- **Precision Engineering:** Sharp execution of data visualization, monospaced typography for code, and geometric sans-serifs for interface navigation.

## Colors

The palette is rooted in the "Space Void" — an ultra-deep black that serves as the canvas for high-energy light.

- **Primary (Cyan):** Used for the most critical interactive elements, cursor highlights, and primary data streams. It represents the "active" state of the system.
- **Secondary (Electric Purple):** Reserved for accentuating depth, decorative glow effects, and secondary call-to-actions that require a more sophisticated, "alien" tech feel.
- **Tertiary/Warning (Gold):** Used sparingly for terminal headers, critical system warnings, and "Special" command highlights.
- **Neutral (Cosmic Navy/Black):** The structural foundation. Surfaces should use a gradient from `#0A0A12` to `#161B33` to prevent the UI from looking flat.

All chromatic colors should be applied with an "Emission" mindset — they are light sources, not just pigments. Use high saturation and accompany them with soft glows (shadows with large blur and low opacity).

## Typography

This system employs a dual-typeface strategy to balance editorial elegance with technical precision.

- **Sora (Headings):** A geometric sans-serif that feels engineered yet modern. Use it for high-level page titles and section headers. Large headings should often be set in Uppercase with expanded letter-spacing to mimic aerospace signage.
- **JetBrains Mono (Body/Data):** The workhorse of the system. It conveys the "Terminal" aspect of the brand. Use it for all content descriptions, code blocks, terminal prompts, and metadata labels.

**Styling Note:** To enhance the sci-fi feel, apply a very subtle text-shadow (glow) to primary cyan text to simulate screen bleed.

## Layout & Spacing

The layout philosophy follows a **Modular HUD** approach. Content is housed within "Terminal Windows" or "Modules" that appear to float over a background grid.

- **Grid:** Use a 12-column fluid grid for desktop with 24px gutters. Elements should snap to the grid to maintain an "instrument panel" feel.
- **Atmospheric Margins:** Use generous outer margins (64px+) on desktop to allow the background cosmic gradients and scan-line patterns to breathe.
- **Scanning Pattern:** Implement a global overlay of horizontal scan-lines (1px lines with 3px gaps at 5% opacity) to unify the layout components.
- **Responsive Behavior:** On mobile, modules stack vertically. The "Terminal" window becomes the primary container, occupying 100% of the width with reduced internal padding (16px).

## Elevation & Depth

Depth is not achieved through traditional drop shadows, but through **Optical Layering** and **Transparency**:

1.  **The Void (Base):** The bottom-most layer. Solid `#050508` with a subtle radial gradient of Electric Purple in the corners.
2.  **The Grid (Environment):** A faint, dark-blue coordinate grid overlay.
3.  **Glass Containers (Surfaces):** Semi-transparent surfaces (Background: `rgba(10, 10, 18, 0.7)`) with a `backdrop-filter: blur(12px)`.
4.  **Holographic Strokes:** Instead of shadows, use 1px inner borders with a linear gradient (e.g., Cyan to Transparent) to define the edge of elevated elements.
5.  **Active Glow:** Elements that are "focused" or "active" emit a primary-colored outer glow (box-shadow: 0 0 15px rgba(0, 242, 255, 0.3)).

## Shapes

The design uses **Rounded Rectangles** to soften the technical edge, making the interface feel high-end rather than purely industrial.

- **Modules/Windows:** Use `rounded-lg` (1rem) for main terminal windows to create a "contained" feel.
- **Buttons/Chips:** Use `rounded-lg` (1rem) for a sleek, tactile appearance.
- **Selection Indicators:** Use sharp, 0px vertical bars for cursor mimics or "active line" indicators within lists to contrast against the rounded containers.

## Components

### Terminal Window
The core container. Includes a top "Status Bar" featuring the file path (e.g., `voyager ~ portfolio`) and window controls (three colored dots: red, yellow, green). The body should have a subtle inner-glow at the top edge.

### Command Chips (Interaction)
Instead of standard buttons, use "Chips" that look like terminal commands.
- **Style:** Border (1px) in `rgba(255, 255, 255, 0.1)`, mono text.
- **Hover:** Border shifts to Primary Cyan with a matching text glow and a 10% Cyan background fill.

### Input Fields
Terminal-style prompts. Start with a green `visitor@portfolio:~$` prefix followed by a blinking cyan block cursor. No background box; just a simple underline or a full-width transparent input area within the terminal module.

### Data Cards
For project displays, use glassmorphic cards with "Corner Accents" — small L-shaped brackets in the four corners that glow when the card is hovered.

### Status Indicators
Small circular LEDs. Use `terminal-green` for "Online/Success," `warning-amber` for "In Progress," and `error-red` for "Critical/Offline."