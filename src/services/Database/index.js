const Database = {
  users: [
    {
      userName: "Leapinho",
      userId: 1,
      posts: [],
    },

    {
      userName: "Victor",
      userId: 2,
      posts: [
        {
          title: "My first Post",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget blandit nulla. Nam pharetra vehicula risus. In a ultrices dui. Sed vitae libero eu magna tincidunt pulvinar. Nullam sed sem vel tellus eleifend pretium eget non est.",
          id: 1,
        },
      ],
    },

    {
      userName: "Isa",
      userId: 3,
      posts: [
        {
          title: "Hello World",
          content:
            "Lorem ipsum dolor sit amet. Donec eget blandit nulla. Nam pharetra vehicula risus. In a ultrices dui. Sed vitae libero eu magna tincidunt pulvinar. Nullam sed sem vel tellus eleifend pretium eget non est.",
          id: 1,
        },
      ],
    },
  ],
};

export default Database;
