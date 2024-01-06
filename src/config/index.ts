export const PRODUCT_CATEGORIES = [
  {
    label: "Services",
    value: "services" as const,
    featured: [
      {
        name: "Editor picks",
        href: `/products?category=services`,
        imageSrc: "/nav/services/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=services&sort=desc",
        imageSrc: "/nav/services/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "/products?category=services",
        imageSrc: "/nav/services/purple.jpg",
      },
    ],
  },
  {
    label: "Offers",
    value: "offers" as const,
    featured: [
      {
        name: "Favorite Icon Picks",
        href: `/products?category=offers`,
        imageSrc: "/nav/offers/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=offers&sort=desc",
        imageSrc: "/nav/offers/new.jpg",
      },
      {
        name: "Bestselling offers",
        href: "/products?category=offers",
        imageSrc: "/nav/offers/bestsellers.jpg",
      },
    ],
  },
];
