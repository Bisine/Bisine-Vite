import React, { useState } from 'react';
import Cart from './components/CartList';
import NavBar from '../../CommonComponets/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { setProductList } from '../../redux/features/cart';

const products = [
  {
    id: 1,
    title: 'Apple Smart Watch',
    price: 10.0,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  },
  {
    id: 2,
    title: 'Samsung Smart Warch',
    price: 15.0,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  // Add more products as needed
];

const App = () => {
  const [cart, setCart] = useState(products);
  const productList = useSelector(e => e.cart.productList);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return productList.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleIncrement = (productId) => {
    const updatedCart = productList.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    dispatch(setProductList(updatedCart))
  };

  const handleDecrement = (productId) => {
    const updatedCart = productList.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    dispatch(setProductList(updatedCart))
  };

  const handleRemove = (productId) => {
    const updatedCart = productList.filter((product) => product.id !== productId);
    dispatch(setProductList(updatedCart))
  };

  return (
    <section className="min-h-screen flex flex-col bg-blue-50 items-center ">
      <NavBar/>
    <div className="container mx-auto py-20 px-8">
      <Cart
        cart={productList}
        total={calculateTotal()}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
      />
    </div>
    </section>
  );
};

export default App;
