import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type ProductDeatailsProps = {
  product: any,
}

const ProductDeatails = ({product}: ProductDeatailsProps) => {
  if(!product) return null;
  return (
    <div>ProductDetail : {product.name}</div>
  ) 
}
export const getStaticPaths:GetStaticPaths= async()=>{
  const data = await(await fetch(`http://localhost:3004/products`)).json();
  const paths = data.map((item: { id: any }) =>{
    return {
      params: {id:item.id}
    }
  })
  return{
    paths,
    fallback:false
  }

}
export const getStaticProps:GetStaticProps<ProductDeatailsProps> = async(context: GetStaticPropsContext)=>{
  
  console.log('GET statics props');
  console.log('context', context.params?.id);
  
  const data = await ( await fetch(`http://localhost:3004/products/${context.params.id}`)).json()
  if(!data){
    return {
      notFound: true
    }
  }

  return {
      props: {
          product: data,
      },
  };
}
export default ProductDeatails