import React, { useState } from 'react';
import { FiPlus, FiTrash2, FiUpload, FiX } from 'react-icons/fi';

const Product = () => {

  const [products, setProducts] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Men',
    price: '',
    sizes: [],
  });

  const [images, setImages] = useState([]);

  const categories = ['Men', 'Women', 'Kids'];

  const availableSizes = ['S', 'M', 'L', 'XL', 'XXL'];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image selection from computer
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const newImages = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((previous) => [...previous, ...newImages]);
  };

  // Remove selected image
  const removeImage = (index) => {
    URL.revokeObjectURL(images[index].preview);

    setImages((previous) =>
      previous.filter((_, i) => i !== index)
    );
  };

  // Handle sizes
  const handleSizeChange = (size) => {
    setFormData((previous) => ({
      ...previous,
      sizes: previous.sizes.includes(size)
        ? previous.sizes.filter((item) => item !== size)
        : [...previous.sizes, size],
    }));
  };

  // Create product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || images.length === 0) {
      alert('Please enter product name, price and select at least one image.');
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...formData,
      price: Number(formData.price),
      images: images.map((image) => ({
        file: image.file,
        preview: image.preview,
      })),
    };

    setProducts((previous) => [...previous, newProduct]);

    setFormData({
      name: '',
      description: '',
      category: 'Men',
      price: '',
      sizes: [],
    });

    setImages([]);
    setShowForm(false);

    alert('Product created successfully!');
  };

  // Delete product
  const deleteProduct = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this product?'
    );

    if (confirmDelete) {
      setProducts((previous) => {
        const productToDelete = previous.find(
          (product) => product.id === id
        );

        productToDelete?.images.forEach((image) => {
          URL.revokeObjectURL(image.preview);
        });

        return previous.filter((product) => product.id !== id);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-10">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Product Management
            </h1>

            <p className="text-gray-500 mt-2">
              Add, create and manage your store products.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            <FiPlus />
            Add Product
          </button>

        </div>

        {/* PRODUCT FORM */}

        {showForm && (

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-10">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Create New Product
              </h2>

              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <FiX size={25} />
              </button>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* PRODUCT NAME */}

                <div>
                  <label className="block mb-2 font-semibold">
                    Product Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
                    className="w-full border p-3 rounded-lg outline-orange-500"
                    required
                  />
                </div>

                {/* PRICE */}

                <div>
                  <label className="block mb-2 font-semibold">
                    Price ($)
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                    min="0"
                    step="0.01"
                    className="w-full border p-3 rounded-lg outline-orange-500"
                    required
                  />
                </div>

                {/* CATEGORY */}

                <div>
                  <label className="block mb-2 font-semibold">
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* DESCRIPTION */}

                <div>
                  <label className="block mb-2 font-semibold">
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter product description"
                    className="w-full border p-3 rounded-lg"
                    rows="3"
                  />
                </div>

              </div>

              {/* SIZES */}

              <div className="mt-6">

                <label className="block font-semibold mb-3">
                  Available Sizes
                </label>

                <div className="flex flex-wrap gap-3">

                  {availableSizes.map((size) => (

                    <button
                      type="button"
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      className={`px-5 py-2 border rounded-lg ${
                        formData.sizes.includes(size)
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-gray-700'
                      }`}
                    >
                      {size}
                    </button>

                  ))}

                </div>

              </div>

              {/* IMAGE UPLOAD */}

              <div className="mt-8">

                <label className="block font-semibold mb-3">
                  Product Images
                </label>

                <label className="flex flex-col items-center justify-center border-2 border-dashed border-orange-400 rounded-xl p-10 cursor-pointer hover:bg-orange-50 transition">

                  <FiUpload className="text-4xl text-orange-500 mb-3" />

                  <p className="font-semibold text-gray-700">
                    Click to select images
                  </p>

                  <p className="text-sm text-gray-400 mt-2">
                    Select images directly from your computer
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                  />

                </label>

                {/* IMAGE PREVIEW */}

                <div className="flex flex-wrap gap-4 mt-5">

                  {images.map((image, index) => (

                    <div
                      key={index}
                      className="relative w-28 h-28"
                    >

                      <img
                        src={image.preview}
                        alt="Product preview"
                        className="w-full h-full object-cover rounded-lg border"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full"
                      >
                        <FiX />
                      </button>

                    </div>

                  ))}

                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex gap-4 mt-10">

                <button
                  type="submit"
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600"
                >
                  Create Product
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        )}

        {/* PRODUCT LIST */}

        <div>

          <h2 className="text-2xl font-bold mb-6">
            All Products ({products.length})
          </h2>

          {products.length === 0 ? (

            <div className="bg-white rounded-xl p-12 text-center">

              <p className="text-gray-400 text-lg">
                No products available yet.
              </p>

              <p className="text-gray-400 mt-2">
                Click Add Product to create your first product.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
                >

                  <img
                    src={product.images[0]?.preview}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-5">

                    <div className="flex justify-between items-center">

                      <h3 className="font-bold text-lg">
                        {product.name}
                      </h3>

                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="text-red-500 hover:text-red-700"
                        title="Delete product"
                      >
                        <FiTrash2 size={20} />
                      </button>

                    </div>

                    <p className="text-gray-500 text-sm mt-2">
                      {product.description}
                    </p>

                    <p className="text-orange-500 font-bold text-xl mt-3">
                      ${product.price}
                    </p>

                    <p className="text-gray-500 text-sm mt-2">
                      Category: {product.category}
                    </p>

                    <p className="text-gray-500 text-sm mt-2">
                      Sizes: {product.sizes.join(', ') || 'Not specified'}
                    </p>

                    <p className="text-gray-400 text-sm mt-2">
                      {product.images.length} image(s)
                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Product;