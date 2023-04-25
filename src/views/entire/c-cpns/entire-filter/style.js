import styled from "styled-components";

export const FilterWrapper = styled.div`
position: fixed;
z-index: 9;
top: 80px;
left: 0;
right: 0;
display: flex;
align-items: center;
height: 48px;
padding: 0 20px;
border-bottom: 1px solid #f2f2f2;
background-color: #fff;
    .filter {
        display: flex;
        .item {
        margin: 0 4px 8px 0;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 18px;
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid rgb(220, 224, 224);

        &:hover {
            color: #000;
            background-color: #f5f5f5;
        }

        &.active {
            color: #fff;
            background-color: ${props => props.theme.color.secondaryColor};
        }
    }
    }



` 