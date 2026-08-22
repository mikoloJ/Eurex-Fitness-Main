/* ============================================================
   EUREX FITNESS: BLOG POSTS
   ============================================================
   ✏️  TO ADD A NEW ARTICLE:
   1. Copy one whole block from  {  to  },  (including the comma)
   2. Paste it at the TOP of the list (newest first)
   3. Change the id (must be unique, no spaces, use-dashes),
      title, date, image, excerpt and body.
   4. In "body", each paragraph goes inside <p> ... </p>.
      You can also use <h2>Subheading</h2> and
      <ul><li>bullet point</li></ul> for lists.
   5. Save and re-upload the site to Netlify. Done!
   ============================================================ */

const POSTS = [
  {
    id: "5-weight-loss-myths",
    title: "5 Weight-Loss Myths Keeping You Stuck",
    date: "June 20, 2026",
    category: "Weight Loss",
    image: "assets/blog1.jpg",
    excerpt: "Skipping meals, cutting out swallow completely, endless cardio... let's talk about why these 'rules' are actually slowing you down.",
    body: `
      <p>If you've been trying to lose weight for a while, you've probably heard all kinds of rules. The problem? Many of them are myths, and some are actively working against you.</p>
      <h2>Myth 1: Skipping meals speeds up weight loss</h2>
      <p>Skipping meals usually leads to intense hunger later, which leads to overeating. Consistent, balanced meals keep your energy stable and your portions in control.</p>
      <h2>Myth 2: You must cut out your favourite foods completely</h2>
      <p>Total restriction almost always ends in a binge. Portion control and smart swaps beat elimination every time.</p>
      <h2>Myth 3: Cardio is the only way to burn fat</h2>
      <p>Strength training builds muscle, and muscle burns calories even at rest. The best results come from combining both.</p>
      <h2>Myth 4: Weight loss should be fast</h2>
      <p>Fast loss is usually water and muscle, and it comes back. 0.5–1kg per week is the pace that lasts.</p>
      <h2>Myth 5: You need expensive foods to eat healthy</h2>
      <p>Beans, eggs, vegetables, local grains: some of the healthiest foods are already in your market. It's about how you combine them.</p>
      <p><strong>Bottom line:</strong> sustainable habits beat harsh rules. That's the entire Eurex Fitness philosophy.</p>
    `,
  },
  {
    id: "drink-more-water",
    title: "The Simplest Wellness Habit: Water (Done Properly)",
    date: "June 5, 2026",
    category: "Wellness",
    image: "assets/blog2.jpg",
    excerpt: "Everyone says 'drink more water': here's how much you actually need, when to drink it, and how it helps weight loss.",
    body: `
      <p>Water is the cheapest wellness tool you own, and most people are still getting it wrong.</p>
      <h2>How much do you need?</h2>
      <p>A good starting point is 30–35ml per kg of body weight. For a 80kg person, that's roughly 2.5 litres a day, more if you train or live somewhere hot.</p>
      <h2>Why it matters for weight loss</h2>
      <ul>
        <li>Thirst is often mistaken for hunger: staying hydrated reduces unnecessary snacking.</li>
        <li>Water before meals naturally reduces portion sizes.</li>
        <li>Proper hydration keeps your energy up so workouts feel easier.</li>
      </ul>
      <h2>Make it automatic</h2>
      <p>Keep a bottle where you sit. Drink a glass when you wake up. Pair it with habits you already have: one glass with every meal.</p>
    `,
  },
  {
    id: "start-before-ready",
    title: "You Don't Have to Feel Ready to Start",
    date: "May 18, 2026",
    category: "Motivation",
    image: "assets/blog3.jpg",
    excerpt: "Waiting for Monday, for the new month, for motivation? Here's why starting small today beats starting perfectly someday.",
    body: `
      <p>The most common thing I hear from new clients: "I was waiting until I felt ready." Here's the truth: that feeling rarely comes first. Action comes first, and the feeling follows.</p>
      <h2>Start smaller than feels impressive</h2>
      <p>A 15-minute walk today is worth more than the perfect gym plan you'll start "next week". Small wins build the identity of someone who shows up.</p>
      <h2>Progress loves company</h2>
      <p>This is why our classes work. When the group shows up, you show up. Motivation is easier borrowed than manufactured.</p>
      <p>Whatever your starting point, start there. We'll meet you where you are.</p>
    `,
  },
];
