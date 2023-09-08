import React from 'react'
import { Button, Container } from 'reactstrap'
import './style.scss'
import { HiArrowCircleRight } from "react-icons/hi";

const Banner = () => {
    return (
        <div className='banner_main_container '>
            <Container className='d-flex justify-content-center align-items-center text-light'>
                <Container className='text-center'>
                    <h2>Project Manager</h2>
                    <p>Your Projects, Our Expertise</p>
                    <p>Bringing Your Projects to Life</p>
                    <p>Crafting Success Stories Through Projects</p>
                    <p>Where Strategy Meets Execution</p>
                    <Button color='warning' size='lg'>Explore<HiArrowCircleRight color='#02393E'/></Button>
                </Container>
            </Container>
            <Container className='d-flex justify-content-center align-items-center' >
                <div className='banner-img'>
                </div>
            </Container>

        </div>
    )
}

export default Banner