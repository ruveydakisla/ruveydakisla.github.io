export const projects = [
  {
    name: "Music App",
    description:
      "Music App is a feature-rich music application built with React Native and Expo, offering smooth UI interactions, advanced audio playback, and efficient playlist management. Designed for both iOS and Android, the app ensures an immersive and seamless music experience.",
    features: [
      "Responsive Design: Fully functional on both mobile platforms with a smooth and engaging UI.",
      "Audio Playback: Built with react-native-track-player for seamless music streaming and playback control.",
      "Navigation: Utilizes @react-navigation/native-stack and expo-router for intuitive screen transitions.",
      "Custom UI Elements: Powered by react-native-reanimated, react-native-gesture-handler, and expo-linear-gradient for fluid animations and polished aesthetics.",
      "Image Processing: react-native-fast-image and react-native-image-colors optimize artwork loading and UI theming.",
      "State Management: zustand provides a lightweight and efficient global state management solution.",
    ],
    project_icon: "music",
    techs: ["Expo", "zustand", "typescript"],
    url: "https://github.com/ruveydakisla/music-app",
    image: "player",
  },
  {
    name: "My Portfolio",
    project_icon: "portfolio",
    description:
      "The Portfolio Project is a responsive web application built with Next.js and Tailwind CSS, designed to be fully functional on both mobile and web platforms. It features an email sender implemented with Email.js, a contact form with validations handled by React-Toastify, and animations powered by React-Typed, React-Fast-Marquee, and Lottie-React libraries. Most of the icons are sourced from the React-Icons library.",
    url: "https://github.com/ruveydakisla/ruveydakisla.github.io",
    techs: ["NextJS", "TailwindCSS"],
    features: [
      "Responsive Design : Fully functional on both mobile and web platforms, ensuring a seamless user experience across all devices.",
      "Next.js Framework : Utilizes Next.js for server-side rendering and optimized performance.",
      "Tailwind CSS : Styled with Tailwind CSS for a modern, responsive, and customizable design.",
      "Email Sender : Integrated Email.js for sending emails directly from the contact form.",
      "Form Validation : Validations handled by React-Toastify to ensure proper input and user feedback.",
      "Animations : Implemented animations using React-Typed, React-Fast-Marquee, and Lottie-React for an engaging user experience.",
      "Icon Library : Most icons are sourced from the React-Icons library, providing a wide range of customizable icons.",
    ],
  },
  {
    name: "Word Wonderland",
    project_icon: "vocabulary",

    description:
      "Word Wonderland is a mobile application developed using Flutter to enhance children's English vocabulary. The app features four mini-games that focus on improving writing, speaking, listening, and matching skills.",
    techs: ["Flutter", "firebase"],
    url: "https://github.com/ruveydakisla/EnglishLearningGameForChildren",
    features: [
      " Mini-Games : Four interactive mini-games to enhance different language skills. (Speaking, Listening, Writing, Matching)",
      " Authentication : Implemented Firebase for user authentication.",
      "Database : Utilized Firestore to store user data and game progress.",
      "Engaging Gameplay : Designed to be both educational and entertaining.",
      " User Testing : Conducted extensive user testing to ensure an intuitive and user-friendly experience.",
    ],
    image: "ekran",
  },
  {
    name: "OnLib",
    project_icon: "onlib",

    description:
      "The Online Library Project is a comprehensive online library application developed using .NET, designed to facilitate easy access to a vast collection of books. Built on an n-layer architecture, the application employs Entity Framework for database interactions and PostgreSQL (pgAdmin) for data management. The platform offers seamless user authentication through session auth, ensuring secure access to the system.",
    url: "https://github.com/ruveydakisla/OnlineLibraryProject1.Web",
    techs: ["csharp", "Asp.Net", "postgresql", "html", "Bootstrap"],
    features: [
      "User Authentication : Secure login using session authentication, ensuring that user data and sessions are protected.",
      "Book Search : Users can easily search for books by title, author, or genre, enabling quick access to the desired content.",
      "Book Information : Detailed book information is available, including author details, publication year, genre, and a brief summary.",
      "Admin Management : Admin users have the capability to perform CRUD (Create, Read, Update, Delete) operations on the book database directly from the system.",
      "Database Integration : Efficient data management using PostgreSQL, with Entity Framework facilitating seamless database operations.",
      "User-Friendly Interface : An intuitive and easy-to-navigate interface ensures that both users and admins can interact with the system effortlessly.",
    ],
  },
  {
    name: "EstateDapp",
    project_icon: "estate",
    description:
      "estateDapp is a cutting-edge rental application that combines the power of React for the frontend with the security and decentralization of the Ethereum blockchain for the backend. This innovative platform utilizes smart contracts written in Solidity, enabling secure and transparent rental transactions. The connection to the Ethereum network is facilitated through Infura and Truffle API, while authentication is handled via the MetaMask wallet application. Users can browse available properties and create rental agreements seamlessly.",
    url: "https://github.com/ruveydakisla/Estate_dApp",
    techs: ["solidity", "ethereum", "ReactJS", "metamask"],
    features: [
      "Decentralized Authentication : Secure login and user authentication using the MetaMask wallet, ensuring that all transactions are protected and decentralized.",
      "Smart Contract Integration : Rental agreements are managed through smart contracts on the Ethereum blockchain, providing transparency and security.",
      "Property Listings : Users can view detailed listings of available rental properties, including descriptions, images, and rental terms.",
      "Rental Agreement Creation:  Easy creation of rental agreements directly through the application, facilitated by Ethereum smart contracts.",
      "Blockchain Connectivity : Seamless integration with the Ethereum blockchain via Infura and Truffle API, ensuring reliable and efficient interactions.",
      "User-Friendly Interface : A modern and intuitive interface built with React, offering a smooth and engaging user experience.",
    ],
  },
  {
    name: "WallpaperApp",
    project_icon: "wallpaper",
    description:
      "WallpaperApp is a modern and responsive mobile application built with Expo and React Native. It allows users to explore, search, download, and share high-quality wallpapers fetched from the Pixabay API. The app features a smooth and interactive UI with category-based filtering, a bottom sheet modal for image previews, and fast performance thanks to optimized libraries like FlashList.",
    url: "https://github.com/ruveydakisla/wallpaper-app",
    techs: [
      "Expo","ReactJS"
    ],
    image: "wallpaper-img",
    features: [
      "High-Quality Wallpaper Fetching: Retrieves stunning wallpapers via the Pixabay API with search and category filters.",
      "Save and Share: Allows users to download wallpapers to their device and share them easily.",
      "Bottom Sheet for Image Preview: Interactive bottom sheet modal for smooth and elegant image previews.",
      "Optimized Performance: Uses Shopify's FlashList for faster and more memory-efficient list rendering.",
      "Modern Navigation: Smooth navigation experience with React Navigation.",
      "User Notifications: Toast messages for feedback and interactions using react-native-toast-message.",
      "Custom Assets: Beautiful and consistent design with custom icons, placeholders, and splash screen stored in the assets folder.",
    ],
  },
];
