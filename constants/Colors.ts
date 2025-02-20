/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#333333',               // Primary text color for legibility on light backgrounds
    background: '#FFFFFF',         // Main background color for screens and containers
    tint: '#007AFF',               // Accent color for interactive elements (e.g., buttons, links)
    icon: '#666666',               // Default icon color for a balanced look
    tabIconDefault: '#999999',     // Color for inactive tab icons
    tabIconSelected: '#007AFF',    // Color for active tab icons, matching the tint for consistency
    primary: '#007AFF',            // Primary color for main actions and buttons
    secondary: '#34C759',          // Secondary actions, useful for confirmations or positive feedback
    accent: '#FFCC00',             // Accent color for emphasis (e.g., calls-to-action, highlights)
    border: '#E5E5E5',             // Subtle borders/dividers to separate UI components
    card: '#F8F8F8',               // Background color for cards or panels to provide contrast
    disabled: '#D3D3D3',           // Color for disabled states ensuring clear feedback
    placeholder: '#A9A9A9',        // Placeholder text in inputs for readability without distraction
    error: '#FF3B30',              // Error messages or indicators to draw immediate attention
    success: '#34C759',            // Success states or confirmations, mirroring the secondary action
  },
  dark: {
    text: '#F2F2F2',               // Primary text color for high readability on dark backgrounds
    background: '#1C1C1E',         // Main dark background color for screens
    tint: '#0A84FF',               // Accent color for interactive elements in dark mode
    icon: '#A6A6A6',               // Default icon color for clarity on dark backgrounds
    tabIconDefault: '#8E8E93',     // Color for inactive tab icons in dark mode
    tabIconSelected: '#0A84FF',    // Active tab icon color, keeping consistency with the tint
    primary: '#0A84FF',            // Primary button and action color in dark mode
    secondary: '#32D74B',          // Secondary actions and positive feedback indicators
    accent: '#FF9F0A',             // Accent color for emphasis, offering a warm contrast
    border: '#3A3A3C',             // Darker borders and dividers to subtly define sections
    card: '#2C2C2E',               // Card backgrounds for content panels ensuring proper contrast
    disabled: '#5A5A5C',           // Disabled element color with enough contrast to signal inactivity
    placeholder: '#8E8E93',        // Placeholder text in input fields for unobtrusive guidance
    error: '#FF453A',              // Error states or messages that immediately draw attention
    success: '#32D74B',            // Success messages or confirmations, reinforcing positive feedback
  },
};
