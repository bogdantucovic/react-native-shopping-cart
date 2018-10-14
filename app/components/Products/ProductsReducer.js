const fakeData = [
  {
    id: 1,
    title: "Smartphone 1",
    price: "450000",
    category: "smartphones",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481631/1.jpg",
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481633/0.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 2,
    title: "Smartphone 2",
    price: "173000",
    category: "smartphones",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481629/2.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 3,
    title: "Laptop 1",
    price: "223000",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481664/3.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 4,
    title: "Laptop 2",
    price: "323444",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481629/4.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 5,
    title: "Laptop 2",
    price: "37644",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481625/5.jpg",
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481623/6.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 6,
    title: "Smartphone XY",
    price: "67000",
    category: "smartphones",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481631/7.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 7,
    title: "Laptop A",
    price: "76444",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481630/8.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 8,
    title: "Laptop B",
    price: "100004",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481624/9.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 9,
    title: "Laptop C",
    price: "76444",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481633/10.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 10,
    title: "Laptop D",
    price: "100004",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481626/11.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 11,
    title: "Laptop LC",
    price: "200000",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481628/12.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 12,
    title: "Laptop D",
    price: "106004",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481631/13.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  },
  {
    id: 13,
    title: "Laptop D",
    price: "142004",
    category: "laptop",
    images: [
      "https://res.cloudinary.com/bogdan-fullstack-portfolio/image/upload/v1539481632/14.jpg"
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ligula urna, ut eleifend leo gravida quis. Aenean vehicula placerat odio, quis lacinia nisi. Morbi in lacus id quam facilisis rhoncus. Quisque vel dignissim lectus. Maecenas ligula justo, eleifend nec tincidunt eu, euismod vitae tellus. Nam interdum nibh non ex faucibus, sit amet dapibus mauris rhoncus. Phasellus et arcu nec lacus feugiat iaculis. Morbi nec faucibus dui, eu auctor ligula. Vestibulum eget arcu dui. Maecenas nec felis sit amet nisi condimentum gravida. Ut euismod eleifend velit at rhoncus. Cras et odio eget enim luctus gravida. Mauris ultricies eros tristique, aliquet. "
  }
];

const initialState = {
  data: fakeData
};

export default (state = initialState, action) => {
  return state;
};
