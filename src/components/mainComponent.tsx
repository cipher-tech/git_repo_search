import React, { useState } from "react";
import { RepoCard } from ".";
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/images/svg/searchIcon.svg";
import routes from "../routes";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    width: 90%;
    max-height: 90vh;
    overflow-y: scroll;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }
    .leftSideBar {
        background: rgba(255, 255, 255, 0.03);
        @media only screen and (max-width: 900px) {
            display: none;
        }
    }
    .main {
        padding: 1rem 1rem;
        background: rgba(255, 255, 255, 0.17);
        overflow: scroll;
        max-height: 100vh;
        &-header {
            color: var(--colorPrimary);
        }
        &-searchBar {
            display: flex;
            justify-content: space-between;
            align-content: center;
            background-color: #fafafa;
            padding: 0.7rem;
            border-radius: 0.6rem;
            flex-direction: column;
            &__inputDiv {
                display: flex;
                justify-content: space-between;
                align-content: center;
                align-items: center;
                &--icon {
                    height: 1.5rem;
                    margin-right: 0.3rem;
                    color: var(--colorPrimary);
                }
                &--input {
                    width: 100%;
                    border: none;
                    background-color: none;
                    font-size: 1.5rem;
                    :focus {
                        outline: none;
                        border: none;
                    }
                    ::placeholder {
                        color: #cccccc;
                    }
                }
                &--button {
                    border: none;
                    border-radius: 5px;
                    background-image: linear-gradient(
                        to left,
                        #667eea,
                        #764ba2
                    );
                    padding: 0.6rem 0.9rem;
                    color: white;
                    font-size: 1.1rem;
                    font-weight: 400;
                }
            }
            &__info {
                display: flex;
                align-content: center;
                vertical-align: middle;
                align-items: center;
                flex-wrap: wrap;
                width: 100%;
                padding: 0.3rem 0;
                margin: 0.5rem 0 0;
                font-size: 1.1rem;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                span {
                    padding: 0.3rem 0.5rem;
                    margin: 0.2rem;
                    color: white;
                    border-radius: 0.29rem;
                    background-color: var(--colorPrimary);
                }
            }
        }
        .stats {
            /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
            padding: 0.7rem 0.5rem;
            text-align: center;
            color: var(--colorSecondary);
            margin: 1rem 0;
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-radius: 10px;
            font-size: 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .results {
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0.5rem 0;
            width: 100%;
            overflow-y: scroll;
        }
    }
    .rightSideBar {
        background: rgba(255, 255, 255, 0.05);
        @media only screen and (max-width: 900px) {
            display: none;
        }
    }
`;

interface IProps {
    setShowReadme: Function;
}
export const MainComponent = ({ setShowReadme }: IProps) => {
    type stats = {
        total: number;
        name: string;
    };

    const [searchInput, setSearchInput] = useState("");
    const [repos, setRepos] = useState([]) as any;
    const [stat, setStat] = useState({
        total: 0,
        name: searchInput || "",
    });

    const handleSearch = () => {
        if (searchInput === "cipher-tech") {
            axios.get(routes.getRepos).then(({ data }) => {
                setRepos(data.data);
                const statsToShow: stats = {
                    total: data.data.length,
                    name: searchInput,
                };
                setStat(statsToShow);
            });
        }
    };
    return (
        <Container>
            <div className="leftSideBar"></div>
            <div className="main">
                <h2 className="main-header">Welcome To Git Search</h2>
                <div className="main-searchBar">
                    <div className="main-searchBar__inputDiv">
                        <SearchIcon className="main-searchBar__inputDiv--icon" />
                        <input
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            list="suggestions"
                            type="text"
                            className="main-searchBar__inputDiv--input"
                            placeholder="Enter Repo(E.g cipher-tech)"
                        />
                        <datalist id="suggestions">
                            <option value="cipher-tech" />
                            <option value="cipher-tech" />
                        </datalist>
                        <button
                            onClick={handleSearch}
                            className="main-searchBar__inputDiv--button"
                        >
                            Submit
                        </button>
                    </div>
                    <p className="main-searchBar__info">
                        <span>Tab</span>
                        or <span>&#8593;</span> <span>&#8595;</span> to navigate
                        <span>Return</span> to select <span>Esc</span> to cancel
                    </p>
                </div>
                {repos.length > 0 ? (
                    <div className="stats">
                        Search result: {stat.total} Repositories found on
                        cipher-tech
                    </div>
                ) : null}
                <div>
                    <div className="results">
                        {repos.map((repo: any) => (
                            <RepoCard
                                key={repo.id}
                                name={repo.name}
                                user={repo.owner.login}
                                setShowReadme={setShowReadme}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="rightSideBar"></div>
        </Container>
    );
};
