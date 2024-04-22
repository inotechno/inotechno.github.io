// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'inotechno', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['inotechno/inotechno'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'inotechno/employee-management-system', 
          'inotechno/password-generator', 
          'inotechno/silink', 
          'inotechno/bukuzilla', 
          'inotechno/spk-kontruksi', 
          'inotechno/password-generator',
          'inotechno/asset-management-system',
          'inotechno/koperasi-santri', 
          'inotechno/broadcast-email-system', 
          'inotechno/SDLH'
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Live Portfolio',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'PsikotesDaring',
          description:
            'PsikotesDaring merupakan platform Psikotes berbasis online yang menyediakan layanan tes sesuai ranah kebutuhan yang ada di Indonesia',
          imageUrl:
            'https://i.ibb.co/3r0bWfs/Screenshot-2024-03-16-142415.png',
          link: 'https://psikotesdaring.com',
        },
        {
          title: 'Rumah Aplikasi',
          description:
            'Portfolio CMS Rumah Aplikasi',
          imageUrl:
            'https://rumahaplikasi.co.id/img/rumahaplikasi.png',
          link: 'https://rumahaplikasi.co.id',
        },
        {
          title: 'TPM Group',
          description:
            'Portfolio Web TPM Group',
          imageUrl:
            'https://tpmgroup.id/wp-content/uploads/2023/03/alogo-2.png',
          link: 'https://tpmgroup.id',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Inotechno',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '2ahmadfatoni0',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '2ahmadfatoni0',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '2inotechno0@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1AYloW6p1HVWd5ZjB-XxIshDPMpkYaqk_/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'Jquery',
    'MySQL',
    'Git',
    'Bootstrap',
    'Codeigniter',
    'Livewire',
    'Linux',
    'NGINX',
    'Rest API'
  ],
  experiences: [
    {
      company: 'BasisCoding',
      position: 'Fulstack Developer',
      from: 'September 2019',
      to: 'Januari 2022',
      companyLink: 'https://example.com',
    },
     {
      company: 'SMK Arrahman Cidadap',
      position: 'Kepala Laboratorium Komputer',
      from: 'Januari 2019',
      to: 'Januari 2020',
      companyLink: 'https://example.com',
    },
     {
      company: 'PT Fajar Pangan Lestari',
      position: 'Staff Accounting',
      from: 'April 2020',
      to: 'Agustus 2021',
      companyLink: 'https://example.com',
    },
     {
      company: 'PT Indo Prima Perkasa',
      position: 'IT Support',
      from: 'OKtober 2021',
      to: 'Desember 2021',
      companyLink: 'https://example.com',
    },
    {
      company: 'PT. Trimitra Data Komunikasi',
      position: 'Fullstack Developer',
      from: 'Maret 2022',
      to: 'Present',
      companyLink: 'https://rumahaplikasi.co.id',
    },
  ],
  certifications: [
    {
      name: 'Web Development',
      body: 'Junior Web Development',
      year: '2021',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Universitas Banten Jaya',
      degree: 'Bachelor',
      from: '2016',
      to: '2021',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 3, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: 'G-9903MCDYS7', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
