const ObjectId = require("mongodb").ObjectId;

// reviews
const reviews = [
  {
    comment:
      "Review 1, Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    rating: 5,
    user: { _id: ObjectId(), name: "Jane Doe" },
  },
  {
    comment: "Review 2 exercitationem autem porro esse",
    rating: 3,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment:
      "Review 3 dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto",
    rating: 2,
    user: { _id: ObjectId(), name: "Jane Doe" },
  },
  {
    comment: "Review 4 explicabo id accusantium",
    rating: 4,
    user: { _id: ObjectId(), name: "Steve Jobs" },
  },
];

module.exports = reviews;
