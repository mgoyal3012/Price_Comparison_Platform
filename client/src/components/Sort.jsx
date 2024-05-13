
import React from 'react'
import styled from "styled-components";

const Sort = () => {
  return ( 
  <Wrapper className="sort-section">
    <div className="sort-selection">
        <form action="#">
            <label htmlFor="sort"></label>
            <select 
            name="sort" 
            id="sort" 
            className="sort-selection--style" 
            >
                <option value="Lowest">Price(lowest)</option>
                <option value="Highest">Price(highest)</option>
                <option value="Lowest">Rating(lowest)</option>
                <option value="Highest">Rating(Highest)</option>
            </select>
        </form>
    </div>

  </Wrapper>
  );
};
const Wrapper =styled.section`
    display:flex;
    justify-content: space-between;
    margin-top: 5rem;

    .sorting-list--grid{
        display: flex;
        gap: 2rem;

    .sort-btn{
        padding: 0.2rem 1 rem;
        border: none
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
}
    .sort-selection .sort-selection--style{
        padding: 0.5rem;
        cursor: pointer;
    
    .sort-select--option {
        padding: 0.5rem 0;
        cursor: pointer;
        height: 2rem;
        padding: 10px;
    }
}
    `;
export default Sort