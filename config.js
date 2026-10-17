/* ==========================================================
   EDIT EVERYTHING HERE — names, text, links and images.
   You never need to touch index.html, styles.css or script.js.
   To swap a picture: drop the new file into /images and change
   its filename below. To add one: add a new line to `gallery`.
   ========================================================== */
window.SITE = {
  // ---- Identity -------------------------------------------------
  name: "Amber",
  tagline: "Private. Personal. Unfiltered.",
  handle: "@amber",                       // shown in the footer / nav
  domain: "yourdomain.com",               // purely cosmetic, shown in footer

  // ---- The button that goes to your page -------------------------
  onlyfansUrl: "https://onlyfans.com/YOUR_USERNAME",
  ctaText: "Join My OnlyFans",
  ctaSubtext: "Subscribe for exclusive daily content",

  // ---- Optional social links (leave "" to hide) -------------------
  socials: {
    instagram: "",
    twitter: "",
    tiktok: "",
  },

  // ---- Age gate (recommended for adult-content sites) -------------
  ageGate: true,
  ageGateTitle: "Adults only",
  ageGateText: "This website is intended for visitors aged 18 or over.",
  ageGateEnter: "I am 18 or older — Enter",
  ageGateLeave: "Leave",
  ageGateLeaveUrl: "https://www.google.com",

  // ---- Hero -------------------------------------------------------
  hero: {
    image: "images/photo-05.jpg",
    eyebrow: "Welcome to my world",
    title: "Hi, I’m Amber.",
    text: "Step behind the curtain for exclusive photos, behind-the-scenes moments and personal messages you won’t find anywhere else.",
  },

  // ---- About ------------------------------------------------------
  about: {
    title: "About Me",
    image: "images/photo-04.jpg",
    paragraphs: [
      "I’m Amber — a lover of slow mornings, good coffee, golden-hour light and a little bit of mischief.",
      "My page is where I share the sides of me that never make it to Instagram: curated sets, candid moments and a real connection with the people who support me.",
      "Subscribe, say hello, and tell me what you’d like to see next.",
    ],
    stats: [
      { value: "Daily", label: "New posts" },
      { value: "100%", label: "Personal replies" },
      { value: "Weekly", label: "Exclusive sets" },
    ],
  },

  // ---- What subscribers get --------------------------------------
  perksTitle: "What You’ll Get",
  perks: [
    { title: "Exclusive Content", text: "Photo sets and videos you can only find on my page." },
    { title: "Direct Messages", text: "Chat with me personally — I read and reply to every message." },
    { title: "Behind the Scenes", text: "Shoot days, outfit picks and the moments in between." },
    { title: "Custom Requests", text: "Tell me what you’d love to see and I’ll consider it." },
  ],

  // ---- Gallery (add / remove / reorder freely) --------------------
  galleryTitle: "A Little Preview",
  gallery: [
    { src: "images/photo-01.jpg", caption: "Matcha run" },
    { src: "images/photo-06.jpg", caption: "Evening out" },
    { src: "images/photo-05.jpg", caption: "Golden hour" },
    { src: "images/photo-03.jpg", caption: "After dark" },
    { src: "images/photo-02.jpg", caption: "On the road" },
    { src: "images/photo-07.jpg", caption: "Lazy Sunday" },
    { src: "images/photo-04.jpg", caption: "Quiet mood" },
  ],

  // ---- FAQ --------------------------------------------------------
  faqTitle: "Good to Know",
  faq: [
    { q: "How do I subscribe?", a: "Click the button on this page. You’ll be taken to my official OnlyFans page where you can create an account and subscribe securely." },
    { q: "Is my payment private?", a: "Yes. Billing is handled entirely by OnlyFans and appears discreetly on your statement." },
    { q: "How often do you post?", a: "New content goes up regularly — check my page for the latest schedule." },
    { q: "Can I message you?", a: "Absolutely. Subscribers can message me directly on the platform." },
  ],

  // ---- Footer / legal --------------------------------------------
  footerNote: "All models and content are 18+. This website does not host adult content; it links to my official page.",
  copyrightName: "Amber",

  // ---- Look & feel (colours) --------------------------------------
  theme: {
    background: "#0d0b0a",
    surface: "#161312",
    text: "#f3ece4",
    muted: "#a89d92",
    accent: "#c9a46a",   // gold
  },
};
