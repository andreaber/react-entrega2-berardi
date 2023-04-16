import Directory from "./components/directory/directory";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "deportivos",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "gorras & sombreros",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 4,
      title: "chicas",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "chicos",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <Directory categories={categories} />
  )
}

export default App;
