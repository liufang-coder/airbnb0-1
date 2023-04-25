import styled from "styled-components";

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 24px;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};
    .btns {
        display: flex;
        justify-content: space-around;
        color: ${props => props.theme.isAlpha ? "#fff":props.theme.text.primaryColor};
        span,svg {
            height: 18px;
            line-height: 18px;
            padding: 12px 15px;
            border-radius: 22px;
            cursor: pointer;
            box-sizing: content-box;
            margin-right: 8px;
            &:hover {
              background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)":"#f5f5f5"};
              /* color: ${props => props.theme.isAlpha ? "#333":props.theme.text.primaryColor}; */

            }
        }
    }

    .profile {
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 77px;
        height: 42px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        color: ${props => props.theme.text.primaryColor};
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow}
        /* transition: box-shadow 200ms ease;
        &:hover {
            box-shadow: 0 2px 4px rgba(0,0,0,.18);
        } */
        .panel {
            position: absolute;
            top: 54px;
            right: 0;
            width: 240px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 6px rgba(0,0,0,0.18);
            color: #666;
            .top,.bottom {
                padding: 10px 0;
                .item {
                    height: 40px;
                    line-height: 40px;
                    padding: 0 16px;
                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
            }
            .top {
                border-bottom: 1px solid #ddd;
            }

        }
    }
`