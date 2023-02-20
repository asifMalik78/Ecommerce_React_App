import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { theme } from "./theme";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useUserContext } from "./context/userContext";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import ChangePassword from "./pages/ChangePassword";
import { PaymentCancel, PaymentSuccess } from "./pages/Payment";
import StripeContainer from "./stripe/StripeContainer";

function App() {
  const { user } = useUserContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          {/* <Header/> */}
          <StripeContainer/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={user ? <Home/> : <Register />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/profile" element={user ? <Profile /> : <Login/>} />
            <Route path="/profile/update" element={user ? <UpdateProfile /> : <Login/>} />
            <Route path="/profile/change_password" element={user ? <ChangePassword/> : <Login/>} />
            <Route path="/success" element={<PaymentSuccess/>}/>
            <Route path="/cancel" element={<PaymentCancel/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
          {/* <Footer/> */}

          <Routes></Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
