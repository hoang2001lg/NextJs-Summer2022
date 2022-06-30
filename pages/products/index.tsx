import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import Notfound from '../404'

type ProductsProps = {
  products:any[]
}

const Product = ({products}: ProductsProps) => {
  return (
    <div>
    {products.map((item) => (
         <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
    ))}
</div>

  )
}
export const getStaticProps: GetStaticProps<ProductsProps> = async (
  context: GetStaticPropsContext
) => {
  const data = await (await fetch(`http://localhost:3004/products`)).json();
  console.log('data', data);
  if(!data){
    return {
      notFound: true
    }
  }
  return {
      props: {
          products: data,
      },
  };
};
export default Product