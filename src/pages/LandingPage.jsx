import React, { useRef } from 'react'
import HeroSection from '../components/LandingPage/HeroSection'
import FeaturesPage from '../components/LandingPage/FeaturesPage';
import Working from '../components/LandingPage/Working';
import GettingStarted from '../components/LandingPage/GettingStarted';

const LandingPage = () => {
    const workingRef = useRef(null);

    const scrollToWorking = () => {
        workingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <HeroSection onScrollClick={scrollToWorking}/>
            <FeaturesPage/>
            <div ref={workingRef}>
                <Working />
            </div>
            <GettingStarted/>
        </div>
    )
}

export default LandingPage;