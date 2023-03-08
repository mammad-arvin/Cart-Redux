import React from "react";

// style
import "./AboutUs.css";
import styled from "styled-components";

//image
import profile from "../assets/profile.jpg";

// styled components

const AbourContainer = styled.div`
    width: 90%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 0 auto;
    p {
        font-size: 17px;
        text-align: center;
        @media (max-width: 500px) {
            font-size: 14px;
        }
    }
`;

const GitStyle = {
    "--clr": "#9000ff",
};
const instagramStyle = {
    "--clr": "rgb(235, 51, 109)",
};
const twitterStyle = {
    "--clr": "#00ACED",
};
const mailStyle = {
    "--clr": "#0CA70C",
};

const AboutUs = () => {
    return (
        <AbourContainer>
            <div className="profileViewContiner">
                <div className="profileContiner">
                    <div className="circleEfect">
                        <div className="profileContent">
                            <img
                                src={profile}
                                loading="lazy"
                                alt="profile image"
                            />
                            <div className="profileInfo">
                                <h3>Mamad Arvin</h3>
                                <p>Front-End Developer</p>
                                <a
                                    href="https://ir.linkedin.com/in/mohammad-hadi-arvin-61a229248"
                                    target="_blank"
                                >
                                    HIRE ME
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p>I'm Mohammad Hadi Arvin and maked it for my CV .</p>
            <p>
                This website make by three diffrent APIs and diffrent structure.
            </p>
            <p>Developed with React.js and Redux.</p>

            <div className="socialSideContiner">
                <div className="socialSide">
                    <div className="mail socialS" style={GitStyle}>
                        <a
                            href="https://github.com/mammad-arvin"
                            target="_blank"
                        >
                            <i class="fa-brands fa-github forHover"></i>
                        </a>
                        <div className="socialInfoBox">
                            <p>Github</p>
                        </div>
                    </div>
                    <div className="twitter socialS" style={twitterStyle}>
                        <a
                            href="https://twitter.com/mamad_arvin"
                            target="_blank"
                        >
                            <i className="fa-brands fa-twitter forHover"></i>
                        </a>
                        <div className="socialInfoBox">
                            <p>twitter</p>
                        </div>
                    </div>
                    <div className="instagram socialS" style={instagramStyle}>
                        <a
                            href="https://www.instagram.com/mamad_arvin/"
                            target="_blank"
                        >
                            <i className="fa-brands fa-instagram forHover"></i>
                        </a>
                        <div className="socialInfoBox">
                            <p>instagram</p>
                        </div>
                    </div>
                    <div className="mail socialS" style={mailStyle}>
                        <a href="mailto:kiyaarvin@gmail.com" target="_blank">
                            <i className="fa-solid fa-envelope forHover"></i>
                        </a>
                        <div className="socialInfoBox">
                            <p>email</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </article> */}
        </AbourContainer>
    );
};

export default AboutUs;
