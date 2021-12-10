import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import routes from "../routes";

const Container = styled.div`
    padding: 0.6rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .backButton {
        cursor: pointer;
        font-size: 1.2rem;
        border: none;
        background: none;
        justify-self: flex-start;
        align-self: flex-start;
        :hover {
            color: var(--colorPrimary);
        }
    }
`;
interface IShowReadme {
    shouldShowReadme: boolean;
    user: string;
    repoName: string;
}
interface IProps {
    setShowReadme: Function;
    showReadme: IShowReadme;
}
export const DisplayReadme = ({
    setShowReadme,
    showReadme: { user, repoName },
}: IProps) => {
    const [readme, setReadme] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState("");

    console.log({ user, repoName });

    useEffect(() => {
        setLoading("Loading...");
        setErrorMessage("");
        axios
            .get(routes.getReadme + `/${user}/${repoName}`)
            .then((res) => {
                setLoading("");
                setReadme(res.data.data);
            })
            .catch((e) => {
                setLoading("");
                setErrorMessage("could not get Readme file");
            });
    }, [user, repoName]);

    return (
        <>
            <Container>
                {loading ? (
                    loading
                ) : (
                    <button
                        className="backButton"
                        onClick={() => {
                            setShowReadme(false);
                        }}
                    >
                        {`< Back `}
                    </button>
                )}
                {errorMessage ? errorMessage : null}
                <div
                    dangerouslySetInnerHTML={{
                        __html: readme,
                    }}
                ></div>
            </Container>
        </>
    );
};
