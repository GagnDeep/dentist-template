export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Charanjeet Dental Clinic",
  description: "Experience premium, super-advanced dental care in the heart of Patiala. Dr. Charanjeet Singh brings world-class dentistry with a gentle touch.",
  url: "https://charanjeetdental.com",
  ogImage: "https://charanjeetdental.com/og.jpg",
  theme: {
    colors: {
      light: {
        background: "bg-white",
        text: "text-gray-900",
        primary: "text-teal-600",
      },
      dark: {
        background: "bg-gray-950",
        text: "text-gray-50",
        primary: "text-teal-400",
      },
    },
  },
  links: {
    twitter: "https://twitter.com/charanjeetdental",
    github: "https://github.com/charanjeetdental",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "FAQ", href: "/faq" },
    { title: "Contact", href: "/contact" },
  ],
  footer: {
    solutions: [
      { title: "Implants", href: "/features#implants" },
      { title: "Cosmetic", href: "/features#cosmetic" },
      { title: "Orthodontics", href: "/features#ortho" },
      { title: "Root Canal", href: "/features#rct" },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Press", href: "/press" },
      { title: "News", href: "/news" },
    ],
    legal: [
      { title: "Privacy", href: "/legal/privacy" },
      { title: "Terms", href: "/legal/terms" },
    ],
    social: [
      { title: "Twitter", href: "https://twitter.com" },
      { title: "Instagram", href: "https://instagram.com" },
      { title: "Facebook", href: "https://facebook.com" },
    ],
  },
  pages: {
    home: {
      announcement: {
        text: "New in Patiala! Advanced Laser Dentistry now available.",
        linkText: "Learn more →",
        href: "/features",
      },
      hero: {
        badge: "Voted #1 Dental Clinic in Patiala",
        title: "World-Class Dentistry, Right Here in ",
        highlight: "Patiala",
        description: "Experience the future of dental care with Dr. Charanjeet. Painless, precise, and perfect. Your smile deserves the super advanced treatment.",
        primaryCta: "Book Appointment",
        secondaryCta: "View Services",
        trustedText: "Trusted by 5,000+ happy smiles in Punjab",
      },
      trustedBy: {
        title: "Recognized for Excellence by",
        logos: ["DentalAssoc", "HealthPunjab", "SmileCare", "OrthoWorld", "MediReview"],
      },
      socialProof: {
        avatarImages: [
          "/avatars/1.png",
          "/avatars/2.png",
          "/avatars/3.png",
          "/avatars/4.png",
        ],
        text: "Join 5,000+ patients who love their new smiles.",
        rating: 5.0,
      },
      featureOverview: {
        title: "Why Choose Charanjeet Dental?",
        description: "We combine cutting-edge technology with compassionate care to deliver the best dental experience in Punjab.",
        features: [
          {
            title: "Advanced Technology",
            description: "From 3D scanning to laser treatments, we use the latest tech.",
            icon: "Zap",
          },
          {
            title: "Painless Procedures",
            description: "Our sedation and gentle techniques ensure zero discomfort.",
            icon: "Heart",
          },
          {
            title: "Expert Team",
            description: "Led by Dr. Charanjeet, our specialists are top-tier.",
            icon: "UserCheck",
          },
          {
            title: "Hygiene First",
            description: "Sterilization protocols that exceed international standards.",
            icon: "Shield",
          },
        ],
      },
      featureDeepDive: {
        badge: "Signature Treatment",
        title: "The ",
        highlight: "Perfect Smile",
        titleSuffix: " Makeover",
        description: "Transform your smile in just 2 visits with our digital smile design process. Preview your new look before we even touch a tooth.",
        list: [
          "3D Digital Smile Design",
          "Ultra-thin Veneers",
          "Gum Contouring",
          "Teeth Whitening included",
        ],
        cta: "Start Your Transformation",
      },
      howItWorks: {
        title: "Your Journey to a Better Smile",
        steps: [
          {
            title: "Consultation",
            description: "Meet Dr. Charanjeet and discuss your goals.",
            step: "01",
          },
          {
            title: "Digital Scan",
            description: "We create a 3D model of your teeth in minutes.",
            step: "02",
          },
          {
            title: "Treatment",
            description: "Experience painless, efficient dental care.",
            step: "03",
          },
          {
            title: "Aftercare",
            description: "Comprehensive follow-ups to ensure lasting results.",
            step: "04",
          },
        ],
      },
      benefits: {
        title: "Unmatched Benefits",
        items: [
          { title: "0% Interest EMI", description: "Easy payment plans available." },
          { title: "Lifetime Warranty", description: "On implants and crowns." },
          { title: "Weekend Availability", description: "Open 7 days a week." },
          { title: "Central Location", description: "Easy parking in Patiala." },
        ],
      },
      productPreview: {
        badge: "Technology",
        title: "See Our Lab",
        description: "Our in-house lab ensures quality control and faster delivery for crowns, bridges, and dentures.",
      },
      creatorPreview: {
        title: "Meet Dr. Charanjeet Singh",
        role: "Chief Dentist & Implantologist",
        bio: "With over 15 years of experience and training from top global institutes, Dr. Charanjeet is dedicated to bringing the best of modern dentistry to Patiala.",
        image: "/dr-charanjeet.jpg",
      },
      testimonials: {
        title: "Stories from our Patients",
        items: [
          {
            quote: "I was terrified of dentists until I met Dr. Charanjeet. The laser treatment was completely painless!",
            author: "Simran K.",
            role: "Teacher",
          },
          {
            quote: "Best dental clinic in Patiala hands down. My veneers look so natural.",
            author: "Rajinder S.",
            role: "Businessman",
          },
          {
            quote: "The staff is so polite and the clinic is spotless. Highly recommended.",
            author: "Priya M.",
            role: "Student",
          },
        ],
      },
      useCases: {
        title: "Solutions for Everyone",
        cases: [
          { title: "For Kids", description: "Gentle care for little smiles." },
          { title: "For Seniors", description: "Implants and dentures made easy." },
          { title: "For Brides", description: "Wedding smile makeovers." },
        ],
      },
      comparison: {
        title: "Why We Are Different",
        ourName: "Charanjeet Dental",
        competitorName: "Others",
        features: [
          { name: "Digital Scanning", us: true, them: false },
          { name: "Painless Laser", us: true, them: false },
          { name: "In-House Lab", us: true, them: false },
          { name: "Lifetime Warranty", us: true, them: false },
        ],
      },
      integrations: {
        title: "Insurance Partners",
        description: "We work with all major insurance providers to make your treatment affordable.",
        partners: ["HDFC Ergo", "Star Health", "ICICI Lombard", "Bajaj Allianz"],
      },
      pricing: {
        title: "Transparent Pricing",
        description: "No hidden costs. Know exactly what you pay for.",
        cta: "See Full Price List",
        plans: [
          {
            name: "Consultation",
            price: "₹500",
            description: "Initial checkup and X-ray.",
            features: ["Digital X-Ray", "Oral Exam", "Treatment Plan"],
          },
          {
            name: "Cleaning",
            price: "₹1,500",
            description: "Full mouth scaling and polishing.",
            features: ["Ultrasonic Scaling", "Polishing", "Gum Health Check", "Stain Removal"],
            highlight: true,
          },
          {
            name: "Whitening",
            price: "₹8,000",
            description: "Laser teeth whitening session.",
            features: ["Laser Treatment", "1 Hour Session", "3-4 Shades Lighter"],
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Is the treatment painful?", a: "Not at all. We use advanced anesthesia and laser technology." },
          { q: "Do you offer installments?", a: "Yes, we have 0% EMI options available." },
          { q: "How long do implants last?", a: "With proper care, they can last a lifetime." },
        ],
      },
      finalCta: {
        title: "Ready for your best smile?",
        description: "Book your appointment today and get a free consultation.",
        cta: "Book Now",
      },
      newsletter: {
        title: "Get Dental Tips",
        description: "Subscribe to our newsletter for oral hygiene tips and offers.",
        placeholder: "Enter your email",
        button: "Subscribe",
      },
    },
    about: {
      title: "About Us",
      description: "Charanjeet Dental Clinic has been serving Patiala for over a decade.",
    },
    features: {
      title: "Our Services",
      description: "Comprehensive dental care under one roof.",
    },
    pricing: {
      title: "Treatment Costs",
      description: "Affordable premium care.",
    },
    contact: {
      title: "Contact Us",
      description: "Visit us in Patiala.",
      address: "123, Model Town, Patiala, Punjab, 147001",
      phone: "+91 98765 43210",
      email: "info@charanjeetdental.com",
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        content: "Your privacy is important to us...",
      },
      terms: {
        title: "Terms of Service",
        content: "By using our services, you agree...",
      },
    },
  },
} as const;
