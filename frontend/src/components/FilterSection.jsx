import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";
import { Button } from "../styles/Button";
const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    clearFilters,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, type) => {
    let newVal = data.map((curr) => {
      return curr[type];
    });
    if (type !== "colors") {
      newVal = ["all", ...new Set(newVal)];
    } else {
      newVal = ["all", ...new Set([].concat(...newVal))];
      // newVal = newVal.flat();
    }

    return newVal;
  };
  // for unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="search..."
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curr, idx) => {
            return (
              <button
                key={idx}
                type="button"
                name="category"
                value={curr}
                onClick={updateFilterValue}
              >
                {curr}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((curr, idx) => {
              return (
                <option key={idx} value={curr} name="company">
                  {curr}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsOnlyData.map((curr, idx) => {
            if (curr === "all") {
              return (
                <button
                  key={idx}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}
                  value={curr}
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={idx}
                name="color"
                className={color === curr ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: `${curr}` , border:"1px solid black" }}
                onClick={updateFilterValue}
                value={curr}
              >
                {color === curr ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          value={price}
          min={minPrice}
          max={maxPrice}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button onClick={clearFilters} className="btn">
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
      border-radius: 0.8rem;
      border: 0.2rem solid ${({ theme }) => theme.colors.helper};
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    border: 0.2rem solid ${({ theme }) => theme.colors.helper};
    border-radius: 0.8rem;
  }
  .filter-color-style {
    display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #fff;
  }

  @media (max-width:${({theme}) => theme.media.mobile}){
    .filter-search input {
      width:100%;
    }
  }
`;

export default FilterSection;
