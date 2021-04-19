import { useCallback,useState } from 'react';
import { useHistory } from 'react-router';
import {useMutation} from "@apollo/client";
import {useSession} from '../../contexts/SessionContext'
import { CREATE_PRODUCT_MUTATION } from '../../graphql/createProduct'
import { CREATE_PROMOTION_PRODUCT_MUTATION} from '../../graphql/createPromotionProduct'
import { parse } from 'graphql';
const AddProductForm = () => {
    const { user } = useSession()
    const history = useHistory()
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        image: '',
        price: 0,
        count: 0,
        createdByUser: user?._id
    })
    const [type, setType] = useState('Product')
    const [PromotionProduct, setPromotionProduct] = useState({
        discount: 0,
        limit: 0
    })
    const [err, setErr] = useState('')
    const [[createProduct], [createPromotionProduct]] = [
        useMutation(CREATE_PRODUCT_MUTATION),
        useMutation(CREATE_PROMOTION_PRODUCT_MUTATION)
    ]

    const handleInputChange = useCallback((e) => {
        let { name, value } = e.target
        if (name === 'count') {value = parseInt(value)}
        if (name === 'price') {value = parseFloat(value)}
        console.log(e.target)
        setNewProduct((prev) =>(
        (
          {...prev, [name]:value })
          )
        )
    }, [])

    const handleTypeChange = useCallback((e) => {
        setType(e.target.value)
    }, [])

    const handlePromotionChange = useCallback((e) => {
        let {name, value} = e.target
        if (name === 'discount') {value = parseFloat(value)}
        if (name === 'limit') {value = parseInt(value)}
        setPromotionProduct((prev) => ({...prev, [name]:value}))
    }, [])
    const handleAddProduct = useCallback(
        async (e) => {
            e.preventDefault()
            try {
                console.log(JSON.stringify(newProduct))
                if (type === "Product")
                    await createProduct({variables: {record: newProduct}})
                else
                    await createPromotionProduct({variables: {record:{...newProduct, ...PromotionProduct}}})
                setErr('')
                history.push('/products')
            }catch (err) {
                console.log(JSON.stringify(err))
            }
        },
        [createProduct, createPromotionProduct, newProduct, PromotionProduct, type]
    )
    let PromotionProductForm =
        type === "PromotionProduct" ? (
            <>
                <input
                    className="h-10 rounded w-full border px-3 focus:text-black focus:border-blue-100 mb-3"
                    type="number"
                    name="discount"
                    value={PromotionProduct.discount}
                    onChange={handlePromotionChange}
                    placeholder="Percent of discount"
                    autoComplete="off"
                />
                <input
                    className="h-10 rounded w-full border px-3 focus:text-black focus:border-blue-100 mb-3"
                    type="number"
                    name="limit"
                    value={PromotionProduct.limit}
                    onChange={handlePromotionChange}
                    placeholder="Maximum item in one order"
                    autoComplete="off"
                />
            </>
        ) : null
    return (
    <div className="p-8 mt-20 bg-white rounded-lg max-w-md pb-10 m-4">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Add Product
        </h1>
      </div>
      <form onSubmit={handleAddProduct}>
        <div className="mt-4">
          <span className="text-gray-700">Please select product type:</span>
          <div className="mt-1 mb-3">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="type"
                value="Product"
                onChange={handleTypeChange}
                checked={type === 'Product'}
              />
              <span className="ml-1">Product</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="PromotionProduct"
                onChange={handleTypeChange}
                checked={type === 'PromotionProduct'}
              />
              <span className="ml-1">Promotion Product</span>
            </label>
          </div>
        </div>

        <input
          className="h-10 rounded w-full border px-3 focus:text-black focus:border-blue-100 mb-3"
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          autoComplete="off"
          required
        />
        <input
          className="h-10 rounded w-full border px-3 focus:text-black focus:border-blue-100 mb-3"
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Describe your product"
          required
        />

        <input
          className="h-10 rounded border w-full px-3 focus:text-black focus:border-blue-100 mb-3"
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="Your image link"
          autoComplete="off"
          required
        />
        <input
          className="h-10 rounded border w-full px-3 focus:text-black focus:border-blue-100 mb-3"
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          min='0'
          placeholder="Price of your product"
          autoComplete="off"
          required
        />
        <input
          className="h-10 rounded border w-full px-3 focus:text-black focus:border-blue-100 mb-3"
          type="number"
          name="count"
          value={newProduct.count}
          onChange={handleInputChange}
          min='0'
          placeholder="Your current product quantity"
          autoComplete="off"
          required
        />

        {PromotionProductForm}
        <p className="text-center mt-3 text-red-600 text-xs">{err}</p>
        <button
          className="uppercase h-10 mt-3 text-white w-full rounded bg-green-500 hover:bg-green-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    )
}
export default AddProductForm