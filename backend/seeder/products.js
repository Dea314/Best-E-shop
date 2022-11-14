// products from backend to mongodb
const products = [
  {
    name: "Lenovo ThinkPad X1 Nano",
    description:
      "Lenovo ThinkPad X1 Nano Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 2700,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/lenovo.png" },
      { path: "/images/lenovo2.png" },
      { path: "/images/laptops-category.png" },
    ],
    rating: 4.5,
    reviewsNumber: 7,
    reviews: [],
    attrs: [{ key: "color", value: "black" }],
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    description:
      "Lenovo ThinkPad X1 Carbon Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 3100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/lenovo2.png" },
      { path: "/images/lenovo.png" },
      { path: "/images/laptops-category.png" },
    ],
    rating: 4.5,
    reviewsNumber: 15,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "2 TB" },
    ],
  },
  {
    name: "Dell Alienware M15",
    description:
      "Dell Alienware M15 Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 12,
    price: 4000,
    category: "Computers/Laptops/Dell",
    images: [
      { path: "/images/alien.png" },
      { path: "/images/alien2.png" },
      { path: "/images/laptops-category.png" },
    ],
    rating: 5,
    reviewsNumber: 3,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "4 TB" },
    ],
  },
  {
    name: "Tablet Huawei MatePad Pro",
    description:
      "Tablet Huawei MatePad Pro Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 17,
    price: 1000,
    category: "Tablets",
    images: [
      { path: "/images/huawei.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/electronic-category.png" },
    ],
    rating: 3.5,
    reviewsNumber: 12,
    reviews: [],
  },
  {
    name: "Tablet Samsung Galaxy Tab S7",
    description:
      "Tablet Samsung Galaxy Tab S7 Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 1450,
    category: "Tablets",
    images: [
      { path: "/images/samsung.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/electronic-category.png" },
    ],
    rating: 4,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Tablet Lenovo Smart Tab M10",
    description:
      "Tablet Lenovo Smart Tab M10 Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 70,
    category: "Tablets",
    images: [
      { path: "/images/electronic-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/tablet3.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "color", value: "red" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Tablet Xiaomi Mi Pad 5",
    description:
      "Tablet Xiaomi Mi Pad 5 Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 430,
    category: "Tablets",
    images: [
      { path: "/images/tablet3.png" },
      { path: "/images/electronic-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "color", value: "silver" },
      { key: "RAM", value: "2 TB" },
    ],
  },
  {
    name: "Tablet Logitech Slim Folio Pro",
    description:
      "Tablet Logitech Slim Folio Pro Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 80,
    category: "Tablets",
    images: [
      { path: "/images/electronic-category.png" },
      { path: "/images/tablet3.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "4 TB" },
    ],
  },
  {
    name: "Toys/Construction/Lego Technic Transform vehicle",
    description:
      "Toys/Construction/Lego Technic Transform vehicle Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 75,
    price: 90,
    category: "Toys",
    images: [
      { path: "/images/lego.png" },
      { path: "/images/lego2.png" },
      { path: "/images/toys-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "Age", value: "7-12 y" },
      { key: "Type", value: "Construction" },
    ],
  },
  {
    name: "Toys/Construction/Lego Technic Transform car",
    description:
      "Toys/Construction/Lego Technic Transform car Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 120,
    category: "Toys",
    images: [
      { path: "/images/lego2.png" },
      { path: "/images/lego.png" },
      { path: "/images/toys-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      { key: "Age", value: "7-12 y" },
      { key: "Type", value: "Construction" },
    ],
  },
  {
    name: "Toys/Educational/Wooden alphabet blocks",
    description:
      "Toys/Educational/Wooden alphabet blocks Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 15,
    category: "Toys",
    images: [
      { path: "/images/edu.png" },
      { path: "/images/edu2.png" },
      { path: "/images/toys-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [
      { key: "Age", value: "3-7 y" },
      { key: "Type", value: "Educational" },
    ],
  },
  {
    name: "Toys/Educational/Wooden clock",
    description:
      "Toys/Educational/Wooden clock Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 25,
    category: "Toys",
    images: [
      { path: "/images/edu2.png" },
      { path: "/images/toys-category.png" },
      { path: "/images/edu.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Age", value: "7-12 y" },
      { key: "Type", value: "Educational" },
    ],
  },
  {
    name: "Monitor Iiyama 27 144Hz",
    description:
      "Monitor Iiama 27 144Hz Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 180,
    category: "Monitors",
    images: [
      { path: "/images/iiyama2.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/iiyama.png" },
    ],
    rating: 4,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Game Mario Kart 8 Deluxe",
    description:
      "Game Mario Kart 8 Deluxe Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 35,
    price: 40,
    category: "Games",
    images: [
      { path: "/images/mario.png" },
      { path: "/images/games-category.png" },
      { path: "/images/mario2.png" },
    ],
    rating: 4,
    reviewsNumber: 33,
    reviews: [],
  },
  {
    name: "Game Crash Bandicoot 4",
    description:
      "Game Crash Bandicoot 4 Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 41,
    price: 42,
    category: "Games",
    images: [
      { path: "/images/crash.png" },
      { path: "/images/crash2.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 5,
    reviewsNumber: 36,
    reviews: [],
  },
  {
    name: "Angels and Demons",
    description:
      "Angels and Demons Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 35,
    price: 42,
    category: "Books",
    images: [
      { path: "/images/angels.png" },
      { path: "/images/angels2.png" },
      { path: "/images/books.png" },
    ],
    rating: 4.5,
    reviewsNumber: 27,
    reviews: [],
    attrs: [
      { key: "Genre", value: "Crime" },
      { key: "Author", value: "Dan Brown" },
    ],
  },
  {
    name: "Gone girl",
    description:
      "Gone girl Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 37,
    category: "Books",
    images: [
      { path: "/images/gone.png" },
      { path: "/images/books2.png" },
      { path: "/images/gone2.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
    attrs: [
      { key: "Genre", value: "Mystery" },
      { key: "Author", value: "Gillian Flynn" },
    ],
  },
  {
    name: "Tom Gates #15",
    description:
      "Tom Gates #15 Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 15,
    category: "eBooks",
    images: [
      { path: "/images/tom2.png" },
      { path: "/images/tom.png" },
      { path: "/images/ebooks-category.png" },
    ],
    rating: 4,
    reviewsNumber: 9,
    reviews: [],
    attrs: [
      { key: "Genre", value: "Comics" },
      { key: "Author", value: "Liz Pitchon" },
    ],
  },
  {
    name: "Toys/Animals/Teddy bear",
    description:
      "Toys/Animals/Teddy bear Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 15,
    category: "Toys",
    images: [
      { path: "/images/teddy2.png" },
      { path: "/images/teddy.png" },
      { path: "/images/toys-category.png" },
    ],
    rating: 4,
    reviewsNumber: 18,
    reviews: [],
    attrs: [
      { key: "Age", value: "3-7 y" },
      { key: "Type", value: "Plush toys" },
    ],
  },
  {
    name: "Toys/Puzzle/Puzzle Dog",
    description:
      "Toys/Puzzle/Puzzle Dog Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 25,
    category: "Toys",
    images: [
      { path: "/images/puzzle2.png" },
      { path: "/images/puzzle.png" },
      { path: "/images/toys-category.png" },
    ],
    rating: 4,
    reviewsNumber: 28,
    reviews: [],
    attrs: [
      { key: "Age", value: "7-12 y" },
      { key: "Type", value: "Puzzle" },
    ],
  },
  {
    name: "Cameras digital/Canon",
    description:
      "Cameras/Canon - Compact, light and small, our interchangeable lens mirrorless cameras distil the best of Canon compacts and DSLRs to deliver superb quality photos and movies. They range from APS-C models with smaller lenses to full-frame powerhouses where creativity is at the core.",
    count: 20,
    price: 950,
    category: "Cameras digital",
    images: [
      { path: "/images/cams2.png" },
      { path: "/images/cams.png" },
      { path: "/images/cams-category.png" },
    ],
    rating: 4,
    reviewsNumber: 28,
    reviews: [],
  },
  {
    name: "Cameras digital/Leica",
    description:
      "Cameras/Leica - With the Leica you have the choice to express your creativity uncompromisingly, precisely and passionately. Combined with the new Leica Vario-Elmarit-SL 24-70 f/2.8 ASPH. for photos and videos in legendary picture quality and for even more exciting changes of perspective.",
    count: 20,
    price: 850,
    category: "Cameras digital",
    images: [
      { path: "/images/leica.png" },
      { path: "/images/leica2.png" },
      { path: "/images/cams-category.png" },
    ],
    rating: 4,
    reviewsNumber: 28,
    reviews: [],
  },
  {
    name: "Computers/Laptops/Dell",
    description:
      "Computers/Laptops/Dell Alienware M15- Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    count: 20,
    price: 1250,
    category: "Computers",
    images: [
      { path: "/images/alien.png" },
      { path: "/images/alien2.png" },
      { path: "/images/laptops-category.png" },
    ],
    rating: 4.5,
    reviewsNumber: 18,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "128 GB" },
    ],
  },
  {
    name: "Computers/PC/AMD",
    description: "Computer gaming PC with AMD Ryzen 7",
    count: 16,
    price: 1350,
    category: "Computers",
    images: [
      { path: "/images/pc-category.png" },
      { path: "/images/intel.png" },
      { path: "/images/pc-category.png" },
    ],
    rating: 4,
    reviewsNumber: 38,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "512 GB" },
    ],
  },
  {
    name: "Computers/PC/Intel",
    description: "Computer gaming PC with Intel i9",
    count: 30,
    price: 950,
    category: "Computers",
    images: [
      { path: "/images/intel.png" },
      { path: "/images/pc-category.png" },
      { path: "/images/intel.png" },
    ],
    rating: 3.5,
    reviewsNumber: 27,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "64 GB" },
    ],
  },
];

module.exports = products;
