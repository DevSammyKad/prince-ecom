import React from 'react'

const ProductCard = () => {
  return (
    <div>
        <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
    </div>
  )
}

export default ProductCard