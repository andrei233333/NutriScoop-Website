
export interface Product {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "carrot",
    title: "Carrot Flavor",
    description: "A bitter-sweet flavor beneficial for regulating sugar levels, rich in beta-carotene and vitamin A.",
    fullDescription: "A bitter-sweet flavor of our ice cream. This combination is beneficial because the fiber in carrots can help regulate sugar levels.",
    benefits: [
      "Rich in beta-carotene and vitamin A",
      "Can help reduce the risk of diabetes",
      "Natural fiber content helps regulate sugar levels"
    ],
    image: "/lovable-uploads/b69cb426-7044-4e47-b671-b143a711ae53.png"
  },
  {
    id: "corn",
    title: "Corn Flavor",
    description: "A milky sweet flavor rich in vitamins, minerals, and antioxidants that aid digestion and eye health.",
    fullDescription: "A milky sweet flavor of our ice cream. Corn is rich in several vitamins, minerals, and antioxidants that help protect against diseases and aid digestion.",
    benefits: [
      "Rich in vitamins and minerals",
      "Aids digestion",
      "Benefits eye health",
      "Promotes a healthy gut"
    ],
    image: "/lovable-uploads/a75b79cf-b1c6-4c63-a7c9-712b7dc21b05.png"
  },
  {
    id: "cucumber",
    title: "Cucumber Flavor",
    description: "A mild lightly sweet flavor high in water content, helping with blood sugar and weight management.",
    fullDescription: "A mild lightly sweet flavor of our ice cream. Cucumber is a nutritious fruit with high water content.",
    benefits: [
      "High water content",
      "Helps lower blood sugar",
      "Prevents constipation",
      "Supports weight loss"
    ],
    image: "/lovable-uploads/0028a7e4-8e05-4512-84a0-db6121abfa18.png"
  },
  {
    id: "sweet-potato",
    title: "Sweet Potato Flavor",
    description: "A naturally sweet flavor packed with antioxidants, great for gut health and immune system.",
    fullDescription: "A naturally sweet flavor of our ice cream. Sweet potatoes are a healthy root vegetable packed with antioxidants that protect your cells from damage.",
    benefits: [
      "Packed with antioxidants",
      "Great for gut health",
      "Supports immune system",
      "Promotes eye health"
    ],
    image: "/lovable-uploads/874888b1-3b5d-4a85-8386-850df3571cda.png"
  }
];

