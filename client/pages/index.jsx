import Layout from '../components/layout';
import Product from '../components/product';
import axios from 'axios';

export default function Home({ products }) {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(`http://localhost:5000/api/products`);
  return {
    props: {
      products: data,
    },
  };
}
