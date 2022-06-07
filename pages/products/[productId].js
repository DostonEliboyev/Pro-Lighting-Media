import styles from '../../styles/Products.module.css';
import ProductData from '../../public/lang/products.json'

export default function Product({ productId, title, data }) {
  console.log(ProductData)
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <h1 className={styles.title}>{ProductData.product1[productId].title}</h1>
        <h4 className={styles.title}>{ProductData.product1[productId].description}</h4>
      
        <p>Product ID: {productId}</p>
      </main>
    </div>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      productId: params.productId,
      title: `Product ${params.productId}`,
      data: `${params.data}`
    }
  }
}

export async function getStaticPaths() {
  const paths = ProductData.product1.map((i, index) => {
    return {
      params: {
        productId: `${index + 1}`
      }
    };
  }
  );
  console.log('paths',paths)
  return {
    paths,
    fallback: false,
  };
}