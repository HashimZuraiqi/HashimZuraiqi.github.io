export const projectsData = {
  swapshelf: {
    id: 'swapshelf',
    slug: 'swapshelf',
    title: 'SwapShelf',
    subtitle: 'Item Swapping & Listing Platform',
    
    overview: {
      description: 'SwapShelf is a full-stack web application built as part of the Amazon Engagement Program. The platform enables users to list items, swap items with others, and manage offers in a simple, intuitive dashboard. I built the complete system end-to-end including authentication, database design, API routes, UI templates, and deployment. The goal was to create a real-world, production-style swapping solution.',
      purpose: 'Enable users to exchange items sustainably without monetary transactions',
      target: 'Students, community members, and eco-conscious individuals',
      role: 'Full-Stack Developer — End-to-end implementation'
    },

    links: {
      github: 'https://github.com/HashimZuraiqi/SwapShelf',
      live: null // Add if deployed
    },

    screenshots: [
      {
        id: 1,
        title: 'Homepage',
        description: 'Landing page with featured items and search',
        url: '/images/projects/swapshelf/home.png'
      },
      {
        id: 2,
        title: 'Dashboard',
        description: 'User dashboard for managing items and offers',
        url: '/images/projects/swapshelf/dashboard.png'
      },
      {
        id: 3,
        title: 'My Library',
        description: 'Personal collection of listed items',
        url: '/images/projects/swapshelf/mylibrary.png'
      },
      {
        id: 4,
        title: 'Swap Matcher',
        description: 'Smart matching system for item swaps',
        url: '/images/projects/swapshelf/swapmatcher.png'
      },
      {
        id: 5,
        title: 'Login',
        description: 'Secure authentication system',
        url: '/images/projects/swapshelf/login.png'
      },
      {
        id: 6,
        title: 'Badges & Achievements',
        description: 'Gamification system with user badges',
        url: '/images/projects/swapshelf/badges.png'
      }
    ],

    features: [
      {
        icon: '🔐',
        title: 'User Authentication',
        description: 'Secure login, registration, and session management'
      },
      {
        icon: '📝',
        title: 'Item Management',
        description: 'Create, update, delete item listings with photos'
      },
      {
        icon: '📸',
        title: 'Photo Upload',
        description: 'Upload and manage multiple item images'
      },
      {
        icon: '🔍',
        title: 'Browse & Filter',
        description: 'Search and filter items by category, condition, location'
      },
      {
        icon: '🔄',
        title: 'Swap Offers',
        description: 'Send, receive, accept, or reject swap requests'
      },
      {
        icon: '🔔',
        title: 'Notifications',
        description: 'Real-time alerts for swap status updates'
      },
      {
        icon: '📱',
        title: 'Responsive Design',
        description: 'Mobile-first UI that works on all devices'
      },
      {
        icon: '✅',
        title: 'Server Validation',
        description: 'Robust input validation and error handling'
      }
    ],

    techStack: {
      frontend: [
        { name: 'EJS Templates', icon: '📄' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript (ES6+)', icon: '⚡' },
        { name: 'Bootstrap', icon: '🎨' }
      ],
      backend: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Mongoose ODM', icon: '📦' }
      ],
      tools: [
        { name: 'Git & GitHub', icon: '🔧' },
        { name: 'Postman', icon: '📬' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Render', icon: '☁️' }
      ]
    },

    responsibilities: [
      'Designed database schema for users, items, and swap requests with proper relationships',
      'Implemented full CRUD operations for all resources with RESTful API design',
      'Built secure authentication system using sessions and cookies',
      'Developed all UI templates using EJS with dynamic data rendering',
      'Created responsive item cards, dashboard layouts, and forms',
      'Connected front-end interactions with back-end API logic',
      'Implemented file upload functionality for item images',
      'Tested all API endpoints thoroughly using Postman',
      'Managed version control with Git, following proper branching strategy',
      'Deployed application to production environment'
    ],

    architecture: {
      description: 'SwapShelf follows a classic MVC (Model-View-Controller) architecture with a Node.js/Express backend, MongoDB database, and EJS templating for server-rendered views.',
      diagram: `
        [Client Browser]
             |
             ↓
        [EJS Views] ←→ [Express Router]
             |               |
             ↓               ↓
        [Controllers] → [Mongoose Models]
             |               |
             ↓               ↓
        [Business Logic] → [MongoDB Database]
      `
    },

    challenges: [
      {
        challenge: 'Managing complex swap request state',
        solution: 'Implemented a state machine with clear transitions (pending → accepted/rejected)'
      },
      {
        challenge: 'Preventing duplicate swap requests',
        solution: 'Added unique compound indexes in MongoDB on user-item pairs'
      },
      {
        challenge: 'Image upload performance',
        solution: 'Implemented file size validation and image compression before storage'
      }
    ],

    outcomes: [
      'Successfully delivered a production-ready swapping platform',
      'Gained hands-on experience with full-stack development',
      'Learned database design, authentication, and deployment best practices',
      'Received positive feedback from Amazon Engagement Program mentors'
    ]
  },

  'resume-maker': {
    id: 'resume-maker',
    slug: 'resume-maker',
    title: 'Resume-Maker',
    subtitle: 'Professional Resume Builder Web Application',
    
    overview: {
      description: 'Resume-Maker is a multi-page web application that empowers users to create professional, ATS-friendly resumes with export-ready templates. Built with PHP and MySQL, the platform guides users through a step-by-step form process to input their information, then generates a polished, downloadable resume in PDF format. The system includes template customization, real-time preview, and data persistence.',
      purpose: 'Simplify resume creation for job seekers with professional templates',
      target: 'Students, recent graduates, and professionals updating their resumes',
      role: 'Full-Stack Developer — Complete implementation from scratch'
    },

    links: {
      github: 'https://github.com/HashimZuraiqi/Resume-Maker',
      live: null
    },

    screenshots: [
      {
        id: 1,
        title: 'Landing Page',
        description: 'Welcome screen with template gallery',
        url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200'
      },
      {
        id: 2,
        title: 'Personal Info Form',
        description: 'Step 1: Enter basic contact details',
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200'
      },
      {
        id: 3,
        title: 'Experience Section',
        description: 'Add work experience with dynamic fields',
        url: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1200'
      },
      {
        id: 4,
        title: 'Live Preview',
        description: 'Real-time resume preview as you type',
        url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200'
      },
      {
        id: 5,
        title: 'Template Selection',
        description: 'Choose from multiple professional designs',
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200'
      },
      {
        id: 6,
        title: 'PDF Export',
        description: 'Download your polished resume instantly',
        url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200'
      }
    ],

    features: [
      {
        icon: '📝',
        title: 'Multi-Step Form',
        description: 'Guided workflow: Personal → Education → Experience → Skills'
      },
      {
        icon: '👁️',
        title: 'Live Preview',
        description: 'See your resume update in real-time as you type'
      },
      {
        icon: '🎨',
        title: 'Template Library',
        description: 'Multiple professional, ATS-friendly templates'
      },
      {
        icon: '💾',
        title: 'Auto-Save',
        description: 'Progress saved automatically to database'
      },
      {
        icon: '📄',
        title: 'PDF Export',
        description: 'Download high-quality, print-ready PDFs'
      },
      {
        icon: '✏️',
        title: 'Easy Editing',
        description: 'Update and regenerate your resume anytime'
      },
      {
        icon: '🔒',
        title: 'User Accounts',
        description: 'Secure login to manage multiple resumes'
      },
      {
        icon: '📱',
        title: 'Mobile Friendly',
        description: 'Build your resume on any device'
      }
    ],

    techStack: {
      frontend: [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript (ES6+)', icon: '⚡' },
        { name: 'Bootstrap', icon: '🎨' },
        { name: 'jQuery', icon: '📜' }
      ],
      backend: [
        { name: 'PHP', icon: '🐘' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'PDO', icon: '🔗' }
      ],
      tools: [
        { name: 'XAMPP / WAMP', icon: '🖥️' },
        { name: 'phpMyAdmin', icon: '🗃️' },
        { name: 'Git & GitHub', icon: '🔧' },
        { name: 'VS Code', icon: '💻' }
      ]
    },

    responsibilities: [
      'Designed relational database schema for users, resumes, and template configurations',
      'Built multi-step form with client-side and server-side validation',
      'Implemented user authentication with secure password hashing (bcrypt)',
      'Created dynamic form fields (add/remove experience, education entries)',
      'Developed real-time preview using JavaScript DOM manipulation',
      'Integrated PDF generation library (TCPDF/FPDF) for export functionality',
      'Designed responsive UI with Bootstrap framework',
      'Wrote SQL queries for CRUD operations using prepared statements',
      'Implemented session management for user state persistence',
      'Tested across browsers and devices for compatibility'
    ],

    architecture: {
      description: 'Resume-Maker uses a traditional LAMP-style architecture with PHP handling server-side logic, MySQL for data persistence, and JavaScript for interactive client features.',
      diagram: `
        [User Interface (HTML/CSS/JS)]
                |
                ↓
        [PHP Controllers & Form Handlers]
                |
                ↓
        [Business Logic & Validation]
                |
                ↓
        [MySQL Database (PDO)]
                |
                ↓
        [PDF Generation (TCPDF)]
      `
    },

    challenges: [
      {
        challenge: 'PDF generation with custom fonts and layouts',
        solution: 'Used TCPDF library with custom CSS to match template designs precisely'
      },
      {
        challenge: 'Handling dynamic form sections (add/remove)',
        solution: 'Implemented JavaScript to clone form elements and manage array-based inputs'
      },
      {
        challenge: 'Data validation across multi-step forms',
        solution: 'Combined client-side JS validation with server-side PHP checks at each step'
      }
    ],

    outcomes: [
      'Delivered a fully functional resume builder used by classmates and friends',
      'Learned PHP, MySQL, and server-side web development fundamentals',
      'Gained experience with form handling, authentication, and PDF generation',
      'Project showcased in university web development course'
    ]
  }
};

export default projectsData;
