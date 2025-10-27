// js/products.js
// Formal Ghana-market pharmacy catalog for Pharma Hub
const PRODUCTS = [
  // -------------------- PAIN RELIEF & FEVER --------------------
  {
    id: "panadol-extra",
    name: "Panadol Extra (Paracetamol 500mg + Caffeine 65mg)",
    price: 25.00,
    description: "Effective analgesic and antipyretic for relief of headache, toothache, and fever. 20 tablets.",
    image: "images/panadol-extra.jpg"
  },
  {
    id: "ibuprofen-400",
    name: "Ibuprofen 400mg Tablets",
    price: 28.00,
    description: "Non-steroidal anti-inflammatory drug for pain, inflammation, and fever. 20 tablets.",
    image: "images/ibuprofen-400.jpg"
  },
  {
    id: "diclofenac-gel",
    name: "Diclofenac Sodium 1% Gel",
    price: 35.00,
    description: "Topical anti-inflammatory gel for muscular pain, joint stiffness, and sprains.",
    image: "images/diclofenac-gel.jpg"
  },

  // -------------------- ANTIBIOTICS & PRESCRIPTION --------------------
  {
    id: "amoxil-250",
    name: "Amoxil 250mg Capsules",
    price: 45.00,
    description: "Broad-spectrum antibiotic for bacterial infections. 15 capsules. Prescription required.",
    image: "images/amoxil-250.jpg"
  },
  {
    id: "augmentin-625",
    name: "Augmentin 625mg Tablets",
    price: 95.00,
    description: "Combination antibiotic (Amoxicillin + Clavulanic Acid) for bacterial infections. 14 tablets. Prescription required.",
    image: "images/augmentin-625.jpg"
  },
  {
    id: "amlodipine-5",
    name: "Amlodipine 5mg Tablets",
    price: 48.00,
    description: "Antihypertensive medication for the management of high blood pressure. 30 tablets. Prescription required.",
    image: "images/amlodipine-5.jpg"
  },
  {
    id: "insulin-pen",
    name: "Insulin Pen (Disposable)",
    price: 220.00,
    description: "Pre-filled disposable insulin pen for diabetes management. Prescription required.",
    image: "images/insulin-pen.jpg"
  },

  // -------------------- CONTRACEPTIVES & SEXUAL HEALTH --------------------
  {
    id: "lydia-pill",
    name: "Lydia Oral Contraceptive Pills",
    price: 60.00,
    description: "Combined oral contraceptive for birth control and menstrual regulation. 21 tablets per pack.",
    image: "images/lydia-pill.jpg"
  },
  {
    id: "postinor-2",
    name: "Postinor-2 Emergency Contraceptive",
    price: 75.00,
    description: "Levonorgestrel 0.75mg emergency contraceptive tablets. To be taken within 72 hours of unprotected intercourse.",
    image: "images/postinor-2.jpg"
  },
  {
    id: "durex-condoms",
    name: "Durex Condoms (Pack of 12)",
    price: 45.00,
    description: "Premium latex condoms for safe and reliable protection. Electronically tested.",
    image: "images/durex-condoms.jpg"
  },

  // -------------------- VITAMINS & SUPPLEMENTS --------------------
  {
    id: "vitamin-c",
    name: "Vitamin C 1000mg Effervescent Tablets",
    price: 30.00,
    description: "Ascorbic acid supplement for immune system support. 20 effervescent tablets.",
    image: "images/vitamin-c.jpg"
  },
  {
    id: "ferobin",
    name: "Ferobin Iron + B-Complex Capsules",
    price: 65.00,
    description: "Iron and vitamin supplement to combat fatigue and anemia. 30 capsules.",
    image: "images/ferobin.jpg"
  },
  {
    id: "wellman",
    name: "Wellman Multivitamin Tablets",
    price: 85.00,
    description: "Comprehensive multivitamin supplement for men’s health. 30 tablets.",
    image: "images/wellman.jpg"
  },
  {
    id: "wellwoman",
    name: "Wellwoman Multivitamin Tablets",
    price: 85.00,
    description: "Multivitamin and mineral supplement formulated for women’s health. 30 tablets.",
    image: "images/wellwoman.jpg"
  },

  // -------------------- BABY & FAMILY CARE --------------------
  {
    id: "gripe-water",
    name: "Woodwards Gripe Water (100ml)",
    price: 25.00,
    description: "Gentle antacid and antispasmodic for relief of infant colic and wind. Alcohol-free formulation.",
    image: "images/gripe-water.jpg"
  },
  {
    id: "calpol-syrup",
    name: "Calpol Paracetamol Suspension (120mg/5ml)",
    price: 38.00,
    description: "Pain and fever relief for children aged 2 months and above. 100ml bottle.",
    image: "images/calpol-syrup.jpg"
  },

  // -------------------- FIRST AID & OTHERS --------------------
  {
    id: "savlon-antiseptic",
    name: "Savlon Antiseptic Liquid (250ml)",
    price: 35.00,
    description: "Antiseptic liquid for wound cleaning and household hygiene. Trusted brand for decades.",
    image: "images/savlon-antiseptic.jpg"
  },
  {
    id: "hydrocortisone-cream",
    name: "Hydrocortisone 1% Cream",
    price: 22.00,
    description: "Topical corticosteroid for itching, eczema, and skin inflammation. 30g tube.",
    image: "images/hydrocortisone-cream.jpg"
  },
  {
    id: "antacid-tablets",
    name: "Antacid Tablets",
    price: 18.00,
    description: "Chewable tablets for relief of heartburn, indigestion, and acid reflux. 30 tablets.",
    image: "images/antacid-tablets.jpg"
  }
];
