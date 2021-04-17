import ProductCard from '../components/Product/ProductCard'

const ProductPage = () => {
    return (
        <>
            <div className="grid grid-cols-3">
                <ProductCard/>
                
            </div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Add Product
            </button>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Button
            </button>
        </>
    )
}

export default ProductPage