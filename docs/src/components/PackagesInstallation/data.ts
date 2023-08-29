export const PACKAGES_DATA = [
  {
    package: '@reactgets/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@reactgets/hooks'],
  },
  {
    package: '@reactgets/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@reactgets/hooks', '@reactgets/core'],
  },
  {
    package: '@reactgets/form',
    description: 'Form management library',
    dependencies: ['@reactgets/form'],
  },
  {
    package: '@reactgets/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@reactgets/hooks', '@reactgets/core', '@reactgets/dates', 'dayjs'],
  },
  {
    package: '@reactgets/notifications',
    description: 'Notifications system',
    dependencies: ['@reactgets/hooks', '@reactgets/core', '@reactgets/notifications'],
  },
  {
    package: '@reactgets/prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@reactgets/hooks', '@reactgets/core', '@reactgets/prism'],
  },
  {
    package: '@reactgets/tiptap',
    description: 'Rich text editor based on Tiptap',
    dependencies: [
      '@reactgets/hooks',
      '@reactgets/core',
      '@reactgets/tiptap',
      '@tabler/icons-react',
      '@tiptap/react',
      '@tiptap/extension-link',
      '@tiptap/starter-kit',
    ],
  },
  {
    package: '@reactgets/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@reactgets/hooks', '@reactgets/core', '@reactgets/dropzone'],
  },
  {
    package: '@reactgets/carousel',
    description: 'Embla based carousel component',
    dependencies: ['@reactgets/hooks', '@reactgets/core', '@reactgets/carousel', 'embla-carousel-react'],
  },
  {
    package: '@reactgets/spotlight',
    description: 'Overlay command center',
    dependencies: ['@reactgets/hooks', '@reactgets/core', '@reactgets/spotlight'],
  },
  {
    package: '@reactgets/modals',
    description: 'Centralized modals manager',
    dependencies: ['@reactgets/hooks', '@reactgets/core', '@reactgets/modals'],
  },
  {
    package: '@reactgets/nprogress',
    description: 'Navigation progress',
    dependencies: ['@reactgets/hooks', '@reactgets/core', '@reactgets/nprogress'],
  },
];
