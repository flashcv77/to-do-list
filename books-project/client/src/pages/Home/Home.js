import React from "react";
import styled from 'styled-components'
import homepageImg from '../../assets/images/2881532.jpg'
import homepageImg2 from '../../assets/images/book-collection-seamless-vector-pattern-260nw-307986071.jpg'

const ImgContainer = styled.div`
    min-height: calc(100vh - 134px);
    // background-image: url(${homepageImg});
    // background-image: url(${homepageImg2});
    
    // background-repeat:repeat;
    // background-size:cover;
    filter: grayscale(100%);
    `
const Home = () => (
    <>
        <ImgContainer>
            <h1 >Welcome to the Book club!</h1>
        </ImgContainer>
    </>
)

export default Home;