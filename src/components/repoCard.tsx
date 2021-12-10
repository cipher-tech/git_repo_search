import React from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../assets/images/svg/githubIcon.svg";
import { ReactComponent as BranchIcon } from "../assets/images/svg/branchIcon.svg";
import { ReactComponent as StarIcon } from "../assets/images/svg/starIcon.svg";
import { ReactComponent as GitIcon } from "../assets/images/svg/gitIcon.svg";
import { ReactComponent as UsersIcon } from "../assets/images/svg/usersIcon.svg";

const Container = styled.div`
    background-color: var(--colorWhite);
    padding: 0.5rem 0.8rem;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 1rem 0;
    .header {
        display: flex;
        justify-content: space-between;
        color: var(--colorDark);
        align-items: center;
        margin: 0 0 .6rem;
        
        &-icon {
            height: 1.5rem;
            margin-right: 0.3rem;
            color: var(--colorPrimary);
        }
        &-title {
            font-size: 1.1rem;
            display: flex;
            flex-direction: column;
            margin: 0;
            button{
                cursor: pointer;
                font-size: 1.2rem;
                border: none;
                background: none;
                :hover {
                    color: var(--colorPrimary);
                }
            }
            &-sub {
                font-size: 0.8rem;
                color: var(--colorSecondary);
                display: flex;
                justify-content: space-between;
                span {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
        &-figure {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: var(--colorDark);
            font-size: 1.3rem;
            &__icon{
                height: 1rem;
                margin-right: 0.3rem;
                color: var(--colorPrimary);
            }
            span {

                display: flex;
                font-size: 0.8rem;
                color: var(--colorBlack);
            }
        }
    }
    .content {
    }
    .tag {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        &-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.3rem 0.5rem;
            margin: 0.2rem;
            color: white;
            border-radius: 0.29rem;
            background-color: var(--colorPrimary);

            &__icon {
                height: 1rem;
                margin-right: 0.3rem;
                color: var(--colorWhite);
            }
        }
    }
`;

interface IProps{
    name: string
    setShowReadme: Function
    user: string
}
export const RepoCard = ({name, setShowReadme, user}: IProps) => {
    const toggleShowReadme = () => {
        setShowReadme({
            shouldShowReadme: true,
            user: user,
            repoName: name
        })
    }
    return (
        <Container className="repoCard">
            <div className="header">
                <GithubIcon className="header-icon" />
                <h3 className="header-title">
                    <button onClick={(e) =>toggleShowReadme()}> {name}</button>
                   
                    {/* <span className="header--title-sub">
                <span> sub header</span>
                <span>sub header</span>
            </span> */}
                </h3>
                <span className="header-figure">
                    <span>
                        <UsersIcon className="header-figure__icon" />
                        56
                    </span>
                    <span>followers</span>
                </span>
            </div>
            {/* <p className="content">
    I want to write a Script using the package Phpspreadsheet. I am not experience in php.
     I am trying to add the reference to my script through sudo composer require
    </p> */}
            <div className="tag">
                <span className="tag-container">
                    <BranchIcon className="tag-container__icon" />8 branches
                </span>
                <span className="tag-container">
                    <GitIcon className="tag-container__icon" />
                    36 commits
                </span>
                <span className="tag-container">
                    <StarIcon className="tag-container__icon" />
                    16 stars
                </span>
            </div>
        </Container>
    );
};
