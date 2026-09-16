export const categories = [
    {
        id: "birthday",
        name: "Birthday Cake",
        slug: "birthday-cake",
        description: "Special cakes for birthday celebrations",
        image: "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    {
        id: "wedding",
        name: "Wedding Cake",
        slug: "wedding-cake",
        description: "Beautiful cakes for your special wedding day",
        image: "https://images.pexels.com/photos/11653895/pexels-photo-11653895.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    {
        id: "chocolate",
        name: "Chocolate Cake",
        slug: "chocolate-cake",
        description: "Rich and delicious chocolate cakes",
        image: "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    {
        id: "red-velvet",
        name: "Red Velvet Cake",
        slug: "red-velvet-cake",
        description: "Soft and creamy classic red velvet cakes",
        image: "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    {
        id: "vanilla",
        name: "Vanilla Cake",
        slug: "vanilla-cake",
        description: "Light and delicious vanilla flavored cakes",
        image: "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];


export const products = [

    // =========================
    // Birthday Cakes - 6
    // =========================

    {
        id: "birthday-01",
        name: "Classic Birthday Cake",
        slug: "classic-birthday-cake",
        category: "birthday",
        flavour: "Lemon",
        description: "A delicious cream cake perfect for birthday celebrations.",
        price: 25,
        image: "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "birthday-02",
        name: "Rainbow Birthday Cake",
        slug: "rainbow-birthday-cake",
        category: "birthday",
        flavour: "Vanilla",
        description: "A colorful and fun cake for memorable birthdays.",
        price: 30,
        image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "birthday-03",
        name: "Vanilla Birthday Cake",
        slug: "vanilla-birthday-cake",
        category: "birthday",
        flavour: "Vanilla",
        description: "Soft vanilla sponge layered with delicious cream.",
        price: 22,
        image: "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/2323206/pexels-photo-2323206.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "birthday-04",
        name: "Celebration Cake",
        slug: "celebration-cake",
        category: "birthday",
        flavour: "Strawberry",
        description: "A beautiful decorated cake for special celebrations.",
        price: 35,
        image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "birthday-05",
        name: "Strawberry Birthday Cake",
        slug: "strawberry-birthday-cake",
        category: "birthday",
        flavour: "Strawberry",
        description: "A soft strawberry cake topped with fresh cream.",
        price: 28,
        image: "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/2323206/pexels-photo-2323206.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "birthday-06",
        name: "Chocolate Birthday Cake",
        slug: "chocolate-birthday-cake",
        category: "birthday",
        flavour: "Chocolate",
        description: "A rich chocolate cake specially decorated for birthdays.",
        price: 32,
        image: "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },


    // =========================
    // Wedding Cakes - 3
    // =========================

    {
        id: "wedding-01",
        name: "Elegant Wedding Cake",
        slug: "elegant-wedding-cake",
        category: "wedding",
        flavour: "Vanilla",
        description: "An elegant multi-layered cake for beautiful wedding celebrations.",
        price: 80,
        image: "https://images.pexels.com/photos/11653895/pexels-photo-11653895.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/11653895/pexels-photo-11653895.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "wedding-02",
        name: "White Rose Wedding Cake",
        slug: "white-rose-wedding-cake",
        category: "wedding",
        flavour: "Vanilla",
        description: "A beautiful white cake decorated with elegant cream roses.",
        price: 95,
        image: "https://images.pexels.com/photos/11653895/pexels-photo-11653895.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/11653895/pexels-photo-11653895.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "wedding-03",
        name: "Royal Wedding Cake",
        slug: "royal-wedding-cake",
        category: "wedding",
        flavour: "Chocolate",
        description: "A luxurious wedding cake designed for grand celebrations.",
        price: 110,
        image: "https://images.pexels.com/photos/11653895/pexels-photo-11653895.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/11653895/pexels-photo-11653895.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },


    // =========================
    // Chocolate Cakes - 10
    // =========================

    {
        id: "chocolate-01",
        name: "Classic Chocolate Cake",
        slug: "classic-chocolate-cake",
        category: "chocolate",
        flavour: "Chocolate",
        description: "Rich chocolate sponge covered with creamy chocolate frosting.",
        price: 28,
        image: "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "chocolate-02",
        name: "Dark Chocolate Cake",
        slug: "dark-chocolate-cake",
        category: "chocolate",
        flavour: "Dark Chocolate",
        description: "A rich and intense dark chocolate cake.",
        price: 32,
        image: "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "chocolate-03",
        name: "Chocolate Fudge Cake",
        slug: "chocolate-fudge-cake",
        category: "chocolate",
        flavour: "Chocolate Fudge",
        description: "Moist chocolate cake covered with smooth fudge.",
        price: 35,
        image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "chocolate-04",
        name: "Chocolate Truffle Cake",
        slug: "chocolate-truffle-cake",
        category: "chocolate",
        flavour: "Chocolate Truffle",
        description: "Decadent chocolate cake finished with rich truffle cream.",
        price: 40,
        image: "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "chocolate-05",
        name: "Chocolate Hazelnut Cake",
        slug: "chocolate-hazelnut-cake",
        category: "chocolate",
        flavour: "Hazelnut Chocolate",
        description: "A creamy chocolate cake filled with delicious hazelnut flavor.",
        price: 42,
        image: "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "chocolate-06",
        name: "Chocolate Coffee Cake",
        slug: "chocolate-coffee-cake",
        category: "chocolate",
        flavour: "Coffee Chocolate",
        description: "A rich chocolate cake blended with smooth coffee flavor.",
        price: 38,
        image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/2323206/pexels-photo-2323206.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "chocolate-07",
        name: "Chocolate Caramel Cake",
        slug: "chocolate-caramel-cake",
        category: "chocolate",
        flavour: "Caramel Chocolate",
        description: "A smooth chocolate cake finished with rich caramel cream.",
        price: 39,
        image: "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "chocolate-08",
        name: "Chocolate Oreo Cake",
        slug: "chocolate-oreo-cake",
        category: "chocolate",
        flavour: "Oreo Chocolate",
        description: "A creamy chocolate cake loaded with delicious Oreo flavor.",
        price: 41,
        image: "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "chocolate-09",
        name: "Chocolate Nut Cake",
        slug: "chocolate-nut-cake",
        category: "chocolate",
        flavour: "Mixed Nut Chocolate",
        description: "A rich chocolate cake topped with crunchy mixed nuts.",
        price: 44,
        image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "chocolate-10",
        name: "Premium Chocolate Cake",
        slug: "premium-chocolate-cake",
        category: "chocolate",
        flavour: "Premium Chocolate",
        description: "A premium chocolate cake made for special celebrations.",
        price: 48,
        image: "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },


    // =========================
    // Red Velvet Cakes - 1
    // =========================

    {
        id: "red-velvet-01",
        name: "Classic Red Velvet Cake",
        slug: "classic-red-velvet-cake",
        category: "red-velvet",
        flavour: "Red Velvet",
        description: "Soft red velvet sponge layered with creamy cheese frosting.",
        price: 35,
        image: "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },


    // =========================
    // Vanilla Cakes - 5
    // =========================

    {
        id: "vanilla-01",
        name: "Classic Vanilla Cake",
        slug: "classic-vanilla-cake",
        category: "vanilla",
        flavour: "Vanilla",
        description: "A light and fluffy vanilla cake covered with fresh cream.",
        price: 22,
        image: "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/2323206/pexels-photo-2323206.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "vanilla-02",
        name: "Vanilla Strawberry Cake",
        slug: "vanilla-strawberry-cake",
        category: "vanilla",
        flavour: "Vanilla Strawberry",
        description: "A soft vanilla sponge layered with strawberry cream.",
        price: 28,
        image: "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "vanilla-03",
        name: "Vanilla Mango Cake",
        slug: "vanilla-mango-cake",
        category: "vanilla",
        flavour: "Mango",
        description: "A refreshing vanilla cake filled with delicious mango cream.",
        price: 30,
        image: "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "vanilla-04",
        name: "Vanilla Almond Cake",
        slug: "vanilla-almond-cake",
        category: "vanilla",
        flavour: "Almond Vanilla",
        description: "A soft vanilla cake enriched with delicious almond flavor.",
        price: 34,
        image: "https://images.pexels.com/photos/2323206/pexels-photo-2323206.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/2323206/pexels-photo-2323206.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    },

    {
        id: "vanilla-05",
        name: "Premium Vanilla Cream Cake",
        slug: "premium-vanilla-cream-cake",
        category: "vanilla",
        flavour: "Vanilla Cream",
        description: "A premium vanilla sponge finished with smooth creamy frosting.",
        price: 36,
        image: "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
        shape: [
            "https://images.pexels.com/photos/30177790/pexels-photo-30177790.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/2323206/pexels-photo-2323206.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
    }
];