import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styled from "styled-components";
import DummyDataImage from "../../assets/Images/dummy-table-td.png";
import Descending from "../../assets/SVG/Descending";
import Ascending from "../../assets/SVG/Ascending";
import Next from "../../assets/Images/next.png";
import Prev from "../../assets/Images/prev.png";

function valuetext(value) {
  return `${value}°C`;
}
export default function TableComponent() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TableStyled>
      <table>
        <thead>
          {" "}
          <tr>
            <th>Image</th>
            <th>
              <div className="flex-wrapper">
                Name
                <Descending />
              </div>
            </th>
            <th>
              <div className="flex-wrapper">
                Category
                <Ascending />
              </div>
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <Image
                src={DummyDataImage}
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </td>
            <td>Metabollite</td>
            <td>Amino Acids</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              {" "}
              <Image
                src={DummyDataImage}
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </td>
            <td>Metabollite</td>
            <td>Amino Acids</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              {" "}
              <Image
                src={DummyDataImage}
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </td>
            <td>Metabollite</td>
            <td>Amino Acids</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              {" "}
              <Image
                src={DummyDataImage}
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </td>
            <td>Metabollite</td>
            <td>Amino Acids</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Pagination>
        Per Page
        <input type="number" className="per-page" defaultValue={4} />
        <div className="pagination-container">
          <nav>
            <ul className="pagination">
              <li data-page="prev">
                <span>
                  {" "}
                  <span className="sr-only">
                    <Image
                      src={Next}
                      width={28}
                      height={28}
                      alt="Picture of the author"
                    />
                  </span>
                </span>
              </li>
              <li className="pages">
                <span className="active">1</span>
                <span>2</span>

                <span>3</span>
                <span>....</span>
                <span>10</span>
              </li>
              <li data-page="next" id="prev">
                <span>
                  {" "}
                  <span className="sr-only">
                    <Image
                      src={Prev}
                      width={28}
                      height={28}
                      alt="Picture of the author"
                    />
                  </span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </Pagination>
    </TableStyled>
  );
}

const TableStyled = styled.div`
  margin-bottom: 24px;
  .MuiSlider-root {
    color: #666666;
    height: 2px;
    span:last-child {
      color: #262626;
    }
  }
  .MuiSlider-thumb {
    width: 12px;
    height: 12px;
    color: #c9cacc;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    .flex-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
      svg {
        cursor: pointer;
      }
    }
    thead {
      tr {
        background: #e2e3e5 !important;
        th {
          height: 59px;
          :first-child {
            width: 200px;
          }
          :nth-child(2) {
            width: 250px;
          }
          :nth-child(3) {
            width: 250px;
            color: #000000;
          }
        }
      }
    }
    tr {
      font-size: 20px;
      :first-child {
        background: #e2e3e5;
        th {
          height: 59px;
        }
      }
      :nth-child(odd) {
        background-color: #f8f5f1;
      }
      td {
        text-align: center;
        height: 82px;
        padding: 5px 16px;
      }
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 10px;
  gap: 12px;
  align-items: center;
  .per-page {
    border: 1px solid #e2e3e5;
    height: 41px;
    width: 51px;
    font-size: 18px;
    color: #404040;
    text-align: center;
    border-radius: 4px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .pagination {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .pages {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    span {
      height: 29px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      padding: 0 7px;
      font-family: "open_sansregular";
      color: #5f96ac;
      &.active {
        color: #fff;
        background-color: #5f96ac;
      }
    }
  }
`;
