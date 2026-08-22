/* ============================================================
   EUREX FITNESS: SITE CONTENT
   ============================================================
   ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT FOR TEXT & LINKS.
   Change any text between the quotes " ... " and re-upload
   the site to Netlify. Nothing here requires coding skill.

   To change IMAGES: put your image file inside the /assets
   folder, then type its path here, e.g. "assets/my-photo.jpg"
   ============================================================ */

const SITE = {

  /* ---------- BRAND ---------- */
  brand: {
    name: "Eurex Fitness",
    owner: "Dania Eunice",
    tagline: "Weight loss & wellness, done right.",
    logo: "assets/logo.svg",
    whatsapp: "https://wa.me/2340000000000",
    instagram: "https://instagram.com/eurexfitness",
    email: "hello@eurexfitness.com",
    phone: "+234 000 000 0000",
  },

  /* ---------- POP-UP ---------- */
  popup: {
    enabled: true,
    title: "New here? Start strong.",
    text: "Join the Eurex Fitness community and get a free wellness starter guide, plus class schedules and weight-loss tips straight from Dania.",
    image: "assets/popup.jpg",
    buttonText: "Join Now",
    buttonLink: "join.html",
    showOncePerVisit: true,
  },

  /* ---------- HOME PAGE ---------- */
  home: {
    heroEyebrow: "Eurex Fitness · Weight Loss & Wellness",
    heroTitle: "Lose the weight.\nKeep the life.",
    heroText: "Coaching, classes and real-food plans by Dania Eunice, built for lasting results, not crash diets.",
    heroButton1: { text: "Join Now", link: "join.html" },
    heroButton2: { text: "See Plans & Classes", link: "plans.html" },
    heroImage: "assets/hero.jpg",

    stats: [
      { number: "500+", label: "Clients coached" },
      { number: "8", label: "Years experience" },
      { number: "97%", label: "Would recommend" },
      { number: "12kg", label: "Avg. 4-month loss" },
    ],

    marquee: [
      "500+ WOMEN COACHED", "REAL FOOD, REAL RESULTS", "NO CRASH DIETS",
      "8 YEARS OF COACHING", "SUSTAINABLE WEIGHT LOSS", "JOIN THE COMMUNITY",
    ],

    pillarsEyebrow: "What we do",
    pillarsTitle: "Four ways to start",
    pillars: [
      { mark: "01", title: "Weight-loss coaching", text: "One-on-one guidance with weekly check-ins, realistic targets and honest accountability." },
      { mark: "02", title: "Group classes",        text: "High-energy sessions that burn fat and build community, online and in person." },
      { mark: "03", title: "Meal & lifestyle plans", text: "Simple, affordable food plans built around what you already eat. No starving." },
      { mark: "04", title: "Wellness education",   text: "Courses, books and articles that teach you how your body actually works." },
    ],

    howItWorksEyebrow: "How it works",
    howItWorksTitle: "Three steps to your first result",
    howItWorks: [
      { step: "1", title: "Book a free consult", text: "Tell us your goal, your schedule and your budget: no pressure, no sales pitch." },
      { step: "2", title: "Get your custom plan", text: "Dania builds a plan around your real life: your kitchen, your calendar, your body." },
      { step: "3", title: "Train & transform", text: "Classes, check-ins and community keep you accountable until the results show." },
    ],

    testimonialEyebrow: "Real results",
    testimonialTitle: "Proof, not promises",
    testimonials: [
      { quote: "I lost 14kg in five months and never felt like I was punishing myself. Dania changed how I think about food completely.", name: "Chioma A.", result: "−14kg in 5 months", initials: "CA" },
      { quote: "The classes are addictive. I came for weight loss and stayed for the energy and the community.", name: "Tolu B.", result: "−9kg in 4 months", initials: "TB" },
      { quote: "Her plan fit my budget and my real schedule. That's exactly why it worked when every diet before it failed.", name: "Amara O.", result: "−11kg in 6 months", initials: "AO" },
      { quote: "I stopped seeing food as the enemy. Two years later the weight is still off, and so are my old habits.", name: "Ifeoma K.", result: "−18kg, kept off", initials: "IK" },
    ],
  },

  /* ---------- ABOUT PAGE ---------- */
  about: {
    eyebrow: "Meet the coach",
    title: "About Eurex Fitness",
    intro: "Eurex Fitness was founded by Dania Eunice with one belief: sustainable weight loss comes from knowledge, community and consistency, not punishment.",
    image: "assets/dania.jpg",
    story: [
      "Dania Eunice started Eurex Fitness after her own wellness journey showed her how much bad advice was out there: extreme diets, impossible routines, and programs designed for bodies and budgets that didn't match real life.",
      "Today, Eurex Fitness coaches hundreds of clients through weight-loss programs, group classes, meal planning and wellness education. Every plan is built around your life: your schedule, your kitchen, your budget.",
      "Whether you join a class, buy a book, take a course or sign up for coaching, the goal is the same. Results you can keep.",
    ],
    credentialsTitle: "Credentials & focus",
    credentials: [
      "Certified weight-loss & wellness coach",
      "8+ years coaching Nigerian clients",
      "Specialist in sustainable, food-based programs",
      "500+ client transformations",
    ],
    valuesEyebrow: "How we work",
    values: [
      { title: "Sustainable, not extreme", text: "If you can't do it for a year, we won't ask you to do it for a week." },
      { title: "Community first",          text: "You're joining a family that celebrates every kilo lost and every habit gained." },
      { title: "Education over dependence", text: "We teach you the why, so you never need a coach forever." },
    ],
  },

  /* ---------- PLANS & CLASSES PAGE ---------- */
  plans: {
    eyebrow: "Choose your path",
    title: "Plans & Classes",
    intro: "Pick the level of support that fits your goal and your budget. Every plan can be paid monthly.",
    items: [
      {
        name: "Group Classes",
        price: "₦15,000",
        period: "/ month",
        featured: false,
        features: [
          "3 live classes every week",
          "Fat-burn, strength & dance sessions",
          "Online and in-person options",
          "Community WhatsApp group",
        ],
        buttonText: "Join Classes",
        buttonLink: "join.html",
      },
      {
        name: "Weight-Loss Program",
        price: "₦45,000",
        period: "/ month",
        featured: true,
        badge: "Most popular",
        features: [
          "Personal weight-loss plan",
          "Custom meal plan (Nigerian-food friendly)",
          "Weekly one-on-one check-ins",
          "All group classes included",
          "Progress tracking & accountability",
        ],
        buttonText: "Start My Program",
        buttonLink: "join.html",
      },
      {
        name: "VIP Coaching",
        price: "₦120,000",
        period: "/ month",
        featured: false,
        badge: "",
        features: [
          "Daily direct access to Dania",
          "Fully personalised training & meals",
          "Home or gym session options",
          "Monthly body composition review",
        ],
        buttonText: "Apply for VIP",
        buttonLink: "join.html",
      },
    ],
    note: "Not sure which is right for you? Fill the Join form and we'll recommend one, free.",
  },

  /* ---------- BOOKS PAGE ---------- */
  books: {
    eyebrow: "Read & learn",
    title: "Books",
    intro: "Guides written by Dania Eunice: practical, honest, and built for everyday life.",
    items: [
      {
        title: "The Real-Food Weight Loss Guide",
        price: "₦7,500",
        image: "assets/book1.jpg",
        description: "Lose weight eating the food already in your kitchen. Includes 30 days of meal ideas.",
        buttonText: "Buy this book",
        buttonLink: "join.html",
      },
      {
        title: "Wellness Habits That Stick",
        price: "₦6,000",
        image: "assets/book2.jpg",
        description: "The small daily habits behind every long-term transformation: sleep, water, movement, mindset.",
        buttonText: "Buy this book",
        buttonLink: "join.html",
      },
    ],
  },

  /* ---------- COURSES PAGE ---------- */
  courses: {
    eyebrow: "Learn anywhere",
    title: "Courses",
    intro: "Learn at your own pace. Lifetime access, watch on any device.",
    items: [
      {
        title: "Weight Loss Foundations",
        price: "₦25,000",
        image: "assets/course1.jpg",
        lessons: "12 video lessons · 3 workbooks",
        description: "Everything you need to start losing weight the right way: nutrition basics, movement, and mindset.",
        buttonText: "Enroll now",
        buttonLink: "join.html",
      },
      {
        title: "Meal Planning Masterclass",
        price: "₦18,000",
        image: "assets/course2.jpg",
        lessons: "8 video lessons · meal templates",
        description: "Plan a week of healthy, affordable meals in 30 minutes. Nigerian and international food options.",
        buttonText: "Enroll now",
        buttonLink: "join.html",
      },
      {
        title: "Home Workout Bootcamp",
        price: "₦15,000",
        image: "assets/course3.jpg",
        lessons: "20 follow-along workouts",
        description: "No gym, no equipment. Follow-along fat-burning workouts you can do in your living room.",
        buttonText: "Enroll now",
        buttonLink: "join.html",
      },
    ],
  },

  /* ---------- JOIN PAGE ---------- */
  join: {
    eyebrow: "Start today",
    title: "Join Now",
    intro: "Fill this short form and we'll get back to you within 24 hours with the perfect plan for your goal.",
  },

  /* ---------- FOOTER ---------- */
  footer: {
    text: "Weight loss & wellness coaching by Dania Eunice.",
    links: [
      { text: "Home", link: "index.html" },
      { text: "About", link: "about.html" },
      { text: "Plans & Classes", link: "plans.html" },
      { text: "Blog", link: "blog.html" },
      { text: "Books", link: "books.html" },
      { text: "Courses", link: "courses.html" },
      { text: "Join Now", link: "join.html" },
    ],
  },
};
