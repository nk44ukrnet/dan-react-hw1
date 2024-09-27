import Hero from "../containers/Hero/Hero.jsx";
import Heading from "../components/Heading/Heading.jsx";
import ProductList from "../containers/ProductList/ProductList.jsx";
import CategoryCard from "../containers/ProductList/CategoryCard.jsx";
import BrandDeals from "../containers/BrandDeals/BrandDeals.jsx";
import ProductCard from "../containers/ProductList/ProductCard.jsx";

export default function Home(props) {
    const {
        categoryOneProducts,
        categoryTwoProducts,
        categorySaleProducts,
        cartItems,
        favoritesItems,
        currentProduct,
        modalCart,
        handleFavoriteToggle,
        handleProductToCartToggle
    } = props;
 return (
  <>
      {/*HERO*/}
      <Hero/>
      {/*HERO END*/}

      <Heading>Categories For Men</Heading>

      {categoryOneProducts && <ProductList>
          {categoryOneProducts.map((product, index) => {
              return (
                  <CategoryCard
                      key={index}
                      product={product}
                      favoritesItems={favoritesItems}
                      cartItems={cartItems}
                      handleFavoriteToggle={handleFavoriteToggle}
                      handleProductToCartToggle={handleProductToCartToggle}/>
              )
          })}
      </ProductList>}


      <Heading>Categories For Women</Heading>

      {categoryOneProducts && <ProductList>
          {categoryTwoProducts.map((product, index) => {
              return (
                  <CategoryCard
                      key={index}
                      product={product}
                      favoritesItems={favoritesItems}
                      cartItems={cartItems}
                      handleFavoriteToggle={handleFavoriteToggle}
                      handleProductToCartToggle={handleProductToCartToggle}/>
              )
          })}
      </ProductList>}

      {/*brand deals*/}
      <BrandDeals/>
      {/*brand deals END*/}


      <Heading>In The Limelight</Heading>

      {categoryOneProducts && <ProductList>
          {categorySaleProducts.map((product, index) => {
              return (
                  <ProductCard
                      key={index}
                      product={product}
                      favoritesItems={favoritesItems}
                      cartItems={cartItems}
                      handleFavoriteToggle={handleFavoriteToggle}
                      handleProductToCartToggle={handleProductToCartToggle}/>
              )
          })}
      </ProductList>}
  </>
 );
};