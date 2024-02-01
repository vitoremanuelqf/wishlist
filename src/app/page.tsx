import { Breadcrumb } from '~/components/Breadcrumb'
import { Product } from '~/components/Product'
import { getProducts } from '~/services/functions/getProducts'

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="flex h-auto w-full justify-center bg-white">
      <div className="flex h-auto w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 pb-10 pt-2 sm:gap-4 sm:px-8">
        <Breadcrumb routes={[{ name: 'Home', url: '/' }]} />

        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Product key={product.id} data={product} productType={'home'} />
          ))}
        </div>
      </div>
    </main>
  )
}
