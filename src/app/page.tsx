import { Breadcrumb } from '~/components/Breadcrumb'
import { ProductList } from '~/components/ProductList'
import { getProducts } from '~/services/functions/getProducts'

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="flex h-auto w-full max-w-7xl flex-col gap-5 p-3 md:p-5">
      <Breadcrumb routes={['Home']} />

      <ProductList data={products} />
    </div>
  )
}
