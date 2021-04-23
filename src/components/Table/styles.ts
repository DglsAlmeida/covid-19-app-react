import styled from 'styled-components';

export const Container = styled.div`
  margin: 110px 30px 0 30px ;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  .paginationBttns{
    width: 100%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    a {
      padding: 10px;
      margin: 3px;
      border-radius: 5px;
      border: 0;
      color: var(--gray-900);
      cursor: pointer;
      transition: filter 0.2s;
      background: #fff;
    }

    a:hover {
      filter: brightness(0.8);
    }
  }
`;

export const TableContent = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  table-layout: fixed;

  th {
    width: 50px;
    font-weight: 400;
    text-align: left;
    line-height: 50px;
    font-size: 20px;
  }

  td {
    width: 50px;
    border: 0;
    background: var(--gray-300);
    padding: 20px 2px;
    font-size: 16px;
  }
`;

