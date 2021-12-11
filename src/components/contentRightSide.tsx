import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    .header{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        justify-items: center;
        padding: 1rem .3rem;
        &-icon{
            color: white;
            display: flex;
            place-items: center;
            height: 3rem;
            width: 3rem;
            margin-right: 1rem;
            background: white;
            border-radius: 100%;
            place-items: center;
        }
        &-name{
            color: var(--colorSecondary);
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;
            font-weight: bold;
            margin: .5rem 0;
            span{
                font-size: .8rem;
                font-weight: normal;
            }
        }
    }
    .filter{
        padding: .7rem;
        color: var(--colorSecondary);
        &-title{
            border-bottom: 1px solid #65646638;
        }
        &-field{
            display: flex;
            flex-direction: column;
            &__item{
                display: flex;
                flex-wrap: nowrap;
                margin: .5rem 0;
                input{
                    margin-right: .8rem;
                }
            }
        }
    }
    @media only screen and (max-width: 900px) {
        display: none;
    }
`;
export const ContentRightSide = () => {
    return (
        <Container className="rightSideBar">
            <div className="header">
                <i className="header-icon">d</i>
                <h4 className="header-name">
                    Cipher-tech
                    <span>sub info</span>
                </h4>
            </div>
            <div className="filter">
                <h3 className="filter-title">Filter</h3>
                <div className="filter-fields">
                    <div className="filter-field__item">
                        <input id="filter-item" type="checkbox" />
                        <label htmlFor="filter-item"> 3+ Branches</label>
                    </div>
                    <div className="filter-field__item">
                        <input id="filter-item" type="checkbox" />
                        <label htmlFor="filter-item"> 10+ Commits</label>
                    </div>
                    <div className="filter-field__item">
                        <input id="filter-item" type="checkbox" />
                        <label htmlFor="filter-item"> 20+ Followers</label>
                    </div>
                </div>
            </div>
            <div className="filter">
                <h3 className="filter-title">Fields</h3>
                <div className="filter-fields">
                    <div className="filter-field__item">
                        <input id="filter-item" type="checkbox" checked />
                        <label htmlFor="filter-item"> Name</label>
                    </div>
                    <div className="filter-field__item">
                        <input id="filter-item" type="checkbox" checked />
                        <label htmlFor="filter-item"> Followers</label>
                    </div>
                    <div className="filter-field__item">
                        <input id="filter-item" type="checkbox" />
                        <label htmlFor="filter-item"> Commits</label>
                    </div>
                </div>
            </div>
        </Container>
    );
};
