import styled from "styled-components";

export const PicturesWrapper = styled.div`
    > .pictures {
        display: flex;
        height: 600px;
        background-color: #000;
        cursor: pointer;
        &:hover {
            .cover {
                opacity: 1!important;
            }

            .item:hover {
                .cover {
                opacity: 0 !important;
                }
            }
        }
        .left,.right {
            width: 50%;
            height: 100%;
            .item {
                position: relative;
                overflow: hidden;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                 }
                 .cover {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: rgba(0,0,0,.3);
                    opacity: 0;
                    transition: opacity 400ms ease;
                 }
                &:hover {
                    img {
                    transform: scale(1.08);
                    }
                }
            }
        }
        .right {
            display: flex;
            flex-wrap: wrap;
            .item {
                width: 50%;
                height: 50%;
                box-sizing: border-box;
                border: 1px solid #000;
            }
        }
    }
        .show-btn {
            position: absolute;
            z-index: 99;
            right: 15px;
            bottom: 15px;
            line-height: 22px;
            padding: 6px 15px;
            border-radius: 4px;
            background-color: #fff;
            cursor: pointer;
        }
`