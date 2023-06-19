

const products = [
  {
    name: "Smartphone",
    description:
      "A handheld device that allows you to make calls, send messages, browse the internet, and run various applications.",
    price: 509 ,
    title: "Smart phone",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdGli-VEcEABfST8nv-xLq_OATLAWif7Oig&usqp=CAU",
  },
  {
    name: "Laptop",
    description:
      "A portable computer that you can use for work, entertainment, and browsing the internet.",
    price: 1300,
    title: "Laptop",
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?cs=srgb&dl=pexels-karsten-madsen-18105.jpg&fm=jpg",
  },
  {
    name: "Electric guitar",
    description:
      "A musical instrument that uses electric pickups to convert string vibrations into an electrical signal.",
    price: 200,
    title: "Electric guitar",
    image:
      "https://t4.ftcdn.net/jpg/03/15/01/51/360_F_315015170_ZJ58g11t1mUdJZwpY3qJgAAbHYlzEYGd.jpg",
  },
  {
    name: "Electric toothbrush",
    description: "A toothbrush that uses electric power to move the bristles for more effective cleaning.",
    image: "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/global/article/colgate-electric-toothbrush.jpg",
    price: 29.99,
    title: "ABC Company"
  },
  {
    name: "Electric fan",
    description: "A device that circulates air in a room to provide cooling or ventilation.",
    image: "https://img.freepik.com/premium-vector/electric-fan-stand-fan-ventilatio_268834-215.jpg?w=2000",
    price: 49.99,
    title: "XYZ Corporation"
  }, {
    name: "Electric oven",
    description: "A kitchen appliance that uses electricity to cook or bake food.",
    image: "https://www.zilan.com.tr/Upload/Dosyalar/resim-jpg/gusto1-5ab24cd3-68e2-44d6-8198-0c8628a9ea45.jpg",
    price: 399.99,
    title: "123 Appliances"
  }
  
];

const cards = products.map((product, index) => {
  return (
    <div key={index} className="col-md-4 mb-5" >
      <div  className="card" style={{ width: "20rem", height: "29rem" , backgroundColor:'#eee' }}>
        <img src={product.image} className="card-img-top card-img-custom" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <hr />
          <p className="card-text">{product.description}</p>
          <hr />
          <a href="#">
            $ {product.price}
          </a>
        </div>
      </div>
    </div>
  );
});

function Main() {
  return (
    <div className="container pt-4">
      <div className="row">{cards}</div>
    </div>
  );
}

export default Main;
