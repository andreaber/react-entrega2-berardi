import DirectoryItem from '../directory-item/directory-item'

import './directory.scss'

const categories = [
  {
    id: 1,
    title: "deportivos",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: 'shop/deportivos'
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "gorras & sombreros",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: 'shop/gorras & sombreros'
  },
  {
    id: 4,
    title: "chicas",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: 'shop/chicas'
  },
  {
    id: 5,
    title: "chicos",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: 'shop/chicos'
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory