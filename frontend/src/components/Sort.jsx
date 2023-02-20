import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView , sorting} =
    useFilterContext();
  return (
    <Wrapper className="sorting-section">
      {/* first column */}
      <div className="sorting-list--grid">
        <button
          className={grid_view === true ? "sort-btn active" : "sort-btn"}
          onClick={() => setGridView()}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={grid_view === false ? "sort-btn active" : "sort-btn"}
          onClick={() => setListView()}
        >
          <BsList className="icon" />
        </button>
      </div>

      {/* second column */}
      <div className="product-data">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>

      {/* third column */}
      <div className="sort-selection">
        <form action="">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.4rem 0.8rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 0.4rem;
    }

    .icon {
      font-size: 1.6rem;
    }

    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    border:2px solid ${({theme}) => theme.colors.helper};
    border-radius:0.8rem;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 10px;
      padding: 10px;
    }
  }

  @media (max-width:${({theme}) => theme.media.mobile}){
    .sorting-list--grid{
      display: none;
    }
  }
`;
export default Sort;
