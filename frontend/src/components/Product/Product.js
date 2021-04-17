import ProductCard from './ProductCard'

const Product = (props) => {
    const {product} = props
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{product?.name}</div>
                <p class="text-gray-700 text-base">
                    {product?.price}
                </p>
                </div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to cart</span>
            </div>
      </div>
    )
}
export default Product