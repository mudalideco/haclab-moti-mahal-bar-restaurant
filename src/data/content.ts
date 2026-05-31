// ─── Business Info ────────────────────────────────
export const business = {
  name: "Moti Mahal Bar & Restaurant",
  tagline: "Authentic Indian Cuisine in Jinja",
  heroHeadline: "Authentic Indian Flavors. Right Here in Jinja.",
  heroSubtitle: "Since 1947 | Thali Specialists | Dine-In & Takeaway",
  address: "46 Iganga Rd, Jinja, Uganda",
  phone: "+256 757 879048",
  whatsappUrl: "https://wa.me/256757879048?text=Hi%20Moti%20Mahal!%20I'd%20like%20to%20place%20an%20order.",
  hours: "Mon - Sun: 11:00 AM - 10:00 PM",
  landmark: "Located near the Jinja source of the Nile, opposite the main taxi park",
  parking: "Street parking available",
  email: "info@motimahaljinja.com",
  founded: "1947",
  facebook: "https://facebook.com/motimahaljinja",
}

// ─── Navigation ──────────────────────────────────
export const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

// ─── Menu Categories ─────────────────────────────
export interface MenuItem {
  name: string
  description: string
  price: string
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    items: [
      { name: "Vegetable Samosa (2 pcs)", description: "Crispy pastry filled with spiced potatoes and peas", price: "12,000 UGX" },
      { name: "Onion Bhaji", description: "Crispy chickpea flour fritters with onions and spices", price: "10,000 UGX" },
      { name: "Chicken Pakora", description: "Tender chicken pieces in spiced gram flour batter, deep fried", price: "18,000 UGX" },
      { name: "Paneer Tikka", description: "Grilled cottage cheese marinated in yogurt and spices", price: "20,000 UGX" },
      { name: "Chicken Tikka", description: "Marinated chicken pieces roasted in tandoor", price: "22,000 UGX" },
      { name: "Seekh Kebab", description: "Minced lamb with herbs and spices, grilled on skewers", price: "24,000 UGX" },
    ],
  },
  {
    id: "main-course",
    label: "Main Course",
    items: [
      { name: "Butter Chicken", description: "Our signature — tender chicken in rich, creamy tomato gravy", price: "28,000 UGX" },
      { name: "Chicken Curry", description: "Traditional Punjabi-style chicken curry with aromatic spices", price: "25,000 UGX" },
      { name: "Lamb Rogan Josh", description: "Slow-cooked lamb in a Kashmiri-style gravy with aromatic spices", price: "32,000 UGX" },
      { name: "Dal Makhani", description: "Slow-cooked black lentils in creamy tomato gravy", price: "18,000 UGX" },
      { name: "Palak Paneer", description: "Cottage cheese in a creamy spinach gravy", price: "20,000 UGX" },
      { name: "Chana Masala", description: "Chickpeas simmered in a spiced tomato-onion gravy", price: "16,000 UGX" },
      { name: "Vegetable Korma", description: "Mixed vegetables in a mild, creamy cashew sauce", price: "18,000 UGX" },
      { name: "Fish Curry", description: "Fresh fish cooked in a tangy Goan-style coconut curry", price: "30,000 UGX" },
    ],
  },
  {
    id: "tandoori",
    label: "Tandoori Specials",
    items: [
      { name: "Tandoori Chicken (Half)", description: "Whole chicken leg marinated in yogurt and spices, clay oven roasted", price: "28,000 UGX" },
      { name: "Tandoori Chicken (Full)", description: "Double portion of our signature tandoori chicken", price: "48,000 UGX" },
      { name: "Chicken Tikka", description: "Boneless chicken marinated in tandoori spices and grilled", price: "22,000 UGX" },
      { name: "Seekh Kebab (4 pcs)", description: "Spiced minced lamb skewers grilled to perfection", price: "24,000 UGX" },
      { name: "Tandoori Paneer Tikka", description: "Marinated cottage cheese and capsicum grilled in tandoor", price: "20,000 UGX" },
      { name: "Tandoori Fish Tikka", description: "Fish fillet marinated in mild spices and grilled", price: "32,000 UGX" },
    ],
  },
  {
    id: "thali",
    label: "Thali Meals",
    items: [
      { name: "Vegetarian Thali", description: "Dal makhani, veg curry, rice, naan, raita, salad, and dessert", price: "35,000 UGX" },
      { name: "Non-Vegetarian Thali", description: "Butter chicken, dal makhani, rice, naan, raita, salad, and dessert", price: "45,000 UGX" },
      { name: "Special Thali", description: "Butter chicken, lamb curry, dal makhani, biryani, naan, raita, salad, and dessert", price: "55,000 UGX" },
    ],
  },
  {
    id: "biryani",
    label: "Biryani & Rice",
    items: [
      { name: "Chicken Biryani", description: "Fragrant basmati layered with spiced chicken and saffron", price: "28,000 UGX" },
      { name: "Lamb Biryani", description: "Aromatic basmati with tender lamb and traditional spices", price: "35,000 UGX" },
      { name: "Vegetable Biryani", description: "Basmati rice with mixed vegetables and delicate spices", price: "20,000 UGX" },
      { name: "Egg Biryani", description: "Basmati rice with boiled eggs and light spices", price: "22,000 UGX" },
      { name: "Steamed Rice", description: "Plain basmati rice — perfect with any curry", price: "5,000 UGX" },
      { name: "Jeera Rice", description: "Basmati rice tempered with cumin seeds", price: "7,000 UGX" },
    ],
  },
  {
    id: "breads",
    label: "Breads",
    items: [
      { name: "Tandoori Roti", description: "Whole wheat bread baked in clay oven", price: "3,000 UGX" },
      { name: "Butter Naan", description: "Soft leavened bread brushed with butter", price: "4,000 UGX" },
      { name: "Garlic Naan", description: "Naan topped with fresh garlic and butter", price: "5,000 UGX" },
      { name: "Cheese Naan", description: "Naan stuffed with melted cheese", price: "7,000 UGX" },
      { name: "Onion Kulcha", description: "Stuffed bread with spiced onions", price: "6,000 UGX" },
      { name: "Aloo Paratha", description: "Whole wheat bread stuffed with spiced potatoes", price: "7,000 UGX" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Gulab Jamun (2 pcs)", description: "Deep-fried milk dumplings soaked in rose syrup", price: "8,000 UGX" },
      { name: "Kulfi Milkshake", description: "Our famous thick, creamy Indian ice cream milkshake", price: "12,000 UGX" },
      { name: "Mango Lassi", description: "Refreshing yogurt drink with sweet mango pulp", price: "8,000 UGX" },
      { name: "Rice Pudding (Kheer)", description: "Creamy rice pudding with cardamom and nuts", price: "7,000 UGX" },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    items: [
      { name: "Masala Chai", description: "Traditional Indian spiced tea", price: "5,000 UGX" },
      { name: "Sweet Lassi", description: "Creamy yogurt drink", price: "6,000 UGX" },
      { name: "Salt Lassi", description: "Savory yogurt drink with roasted cumin", price: "6,000 UGX" },
      { name: "Soft Drinks", description: "Coke, Sprite, Fanta, Mirinda", price: "3,500 UGX" },
      { name: "Fresh Lime Soda", description: "Fresh lime juice with soda — sweet or salted", price: "5,000 UGX" },
      { name: "Mineral Water (1L)", description: "Purified drinking water", price: "3,000 UGX" },
    ],
  },
]

// ─── Testimonials ────────────────────────────────
export interface Testimonial {
  quote: string
  name: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    quote: "The Kulfi milkshake alone is worth the trip! Best Indian food in Jinja — authentic flavors, generous portions, and a warm atmosphere.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    quote: "Love their Thali — so much variety and flavor. The complimentary papadums and ginger juice are a really nice touch. I'm a regular now!",
    name: "David K.",
    rating: 5,
  },
  {
    quote: "Authentic Indian taste! Reminds me of home. The butter chicken is incredible — rich, creamy, and perfectly spiced. Highly recommended.",
    name: "Priya S.",
    rating: 5,
  },
  {
    quote: "Great atmosphere, generous portions, reasonable prices. My go-to for Indian food in Jinja. The staff are always friendly and welcoming.",
    name: "James O.",
    rating: 4,
  },
  {
    quote: "We catered our office lunch from Moti Mahal and everyone raved about it. The biryani was exceptional. Will definitely order again!",
    name: "Grace N.",
    rating: 5,
  },
]

// ─── Gallery Images ──────────────────────────────
export const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Chicken Tikka dish with mint chutney", width: 800, height: 600 },
  { src: "/images/gallery-2.jpg", alt: "Indian thali meal with various curries and breads", width: 800, height: 900 },
  { src: "/images/gallery-3.jpg", alt: "Biryani rice dish with raita", width: 800, height: 600 },
  { src: "/images/gallery-4.jpg", alt: "Butter chicken curry in a bowl", width: 800, height: 700 },
  { src: "/images/gallery-5.jpg", alt: "Tandoori chicken on a platter", width: 800, height: 600 },
  { src: "/images/gallery-6.jpg", alt: "Indian desserts including gulab jamun and kulfi", width: 800, height: 800 },
]

// ─── Services ────────────────────────────────────
export const services = [
  {
    title: "Dine-In",
    description: "Join us at 46 Iganga Road. Warm ambiance, friendly service, and authentic flavors served fresh from our kitchen.",
    features: ["Warm Ambiance", "Family-Friendly", "Air-Cooled Dining", "Free Wi-Fi"],
    icon: "utensils-crossed",
    cta: "Visit Us",
  },
  {
    title: "Takeaway",
    description: "Call ahead or WhatsApp us your order. We'll have it ready when you arrive — fresh, hot, and packed with care.",
    features: ["Quick Service", "Call & Collect", "Freshly Packed", "No Minimum Order"],
    icon: "package",
    cta: "Order Now",
  },
  {
    title: "Catering",
    description: "Planning an event? We cater office lunches, family celebrations, parties, and gatherings of all sizes.",
    features: ["Custom Menus", "Corporate Events", "Family Celebrations", "Any Group Size"],
    icon: "chef-hat",
    cta: "Enquire Now",
  },
]

// ─── FAQ ─────────────────────────────────────────
export interface FAQItem {
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    question: "Do you offer vegetarian options?",
    answer: "Absolutely! We have an extensive vegetarian menu including paneer dishes, dal makhani, vegetable curries, and a dedicated vegetarian Thali. Most of our main courses are available in vegetarian versions.",
  },
  {
    question: "Can I order for delivery?",
    answer: "We offer takeaway — simply call us or send a WhatsApp message with your order, and we'll have it ready for pickup. We're working on delivery options, so watch this space!",
  },
  {
    question: "Do you cater events?",
    answer: "Yes! We cater parties, office events, family gatherings, and celebrations. Contact us for customized menus and pricing based on your group size and preferences.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, street parking is available on Iganga Road. There's also additional parking nearby, just a short walk from the restaurant.",
  },
  {
    question: "Do you serve alcohol?",
    answer: "Yes, we have a fully stocked bar with a selection of beers, wines, and spirits to complement your meal.",
  },
  {
    question: "What is your most popular dish?",
    answer: "Our Thali meals are the most popular — they offer a complete tasting experience with multiple dishes. The Kulfi Milkshake is also a crowd favorite and a must-try!",
  },
]

// ─── Stats ───────────────────────────────────────
export const stats = [
  { value: 75, suffix: "+", label: "Years of Heritage", prefix: "" },
  { value: 1947, suffix: "", label: "Year Founded", prefix: "" },
  { value: 100, suffix: "+", label: "Dishes on Menu", prefix: "" },
  { value: 5, suffix: "K+", label: "Happy Customers", prefix: "" },
]
