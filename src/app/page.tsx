import { Breadcrumb } from '~/components/Breadcrumb'
import { Product } from '~/components/Product'
import { getProducts } from '~/services/functions/getProducts'

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="flex h-auto w-full max-w-7xl flex-col gap-5 p-3 md:p-5">
      <Breadcrumb routes={[{ name: 'Home', url: '/' }]} />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:px-16 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} data={product} productType={'home'} />
        ))}
      </div>
    </div>
  )
}
