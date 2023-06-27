import React, { useState } from "react";
import { CustomPieChart } from './PieChart';
import { DropdownMenu } from './DropdownMenu';
import user from './user.png';
import award from './award.png';
import Picture1 from './Picture1.png';
import Picture2 from './Picture2.png';
import Picture3 from './Picture3.png';
import gift4 from './gift4.png';
import Stock1 from './Stock1.png';
import Stock2 from './Stock2.png';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/Learning1");
    }

    return (
        <div className="home">

            <DropdownMenu />
            <img src={Logo} className="logo"/>

            <div class="line-horizontal"></div>
            <div class="line-vertical"></div>

            <p><span class="welcome-note">Welcome back, <b>Savvy Sadie</b>!</span></p>
            
            <div className="section1-container">
                <p><span class="section-head">Goal Meter</span></p>
                <span class="pie"><CustomPieChart /></span>
                <p><span class="sub1">You are 90% away from completing your goal.</span></p>
            </div>

            <div className="section2-container">
                <p><span class="section-head">Learning Modules in Progress</span></p>
                <p><span class="sub2">You're almost there! Click below to continue training.</span></p>
                <div className="module-1" onClick={(e)=>handleClick()}>
                    <p><span class="module-name"><strong>401K Investing Module</strong></span></p>
                    <div className="pb-container">
                        <div className="progress-bar">
                            <div className="progress-bar-fill-1"></div>
                        </div>
                        <div className="progress-label"><strong>80%</strong></div>
                    </div>
                </div>
                <div className="module-2">
                    <p><span class="module-name"><strong>Types of Investments</strong></span></p>
                    <div className="pb-container">
                        <div className="progress-bar">
                            <div className="progress-bar-fill-2"></div>
                        </div>
                        <div className="progress-label"><strong>0%</strong></div>
                    </div>
                </div>
                <div className="module-3">
                    <p><span class="module-name"><strong>Growth Stocks/Passive Income </strong></span></p>
                    <div className="pb-container">
                        <div className="progress-bar">
                            <div className="progress-bar-fill-2"></div>
                        </div>
                        <div className="progress-label"><strong>0%</strong></div>
                    </div>
                </div>
                <div className="module-4">
                    <p><span class="module-name"><strong>Credit</strong></span></p>
                    <div className="pb-container">
                        <div className="progress-bar">
                            <div className="progress-bar-fill-2"></div>
                        </div>
                        <div className="progress-label"><strong>0%</strong></div>
                    </div>
                </div>
            </div>

            <div className="section3-container">
                <p><span class="section-head">Market Simulator Game</span></p>
                <div className="portfolio-container">
                    <p><span class="subtitle"><strong>Portfolio Value</strong></span></p>
                </div>

                <div className="balance-container">
                    <p><span class="bal">Balance</span></p>
                    <p><span class="mon"><strong>+ $5359.6</strong></span></p>
                </div>

                <div className="overview-container">
                    <p><span class="subtitle"><strong>Overview</strong></span></p>
                    <div className="profile-1">
                        <img src={Stock1} className="user-image"/>
                        <p><span class="t1"><strong>NASDAQ: MSFT</strong></span></p>
                        <p><span class="t2">ETH/USD</span></p>
                        <p><span class="t3"><strong>$336.86</strong></span></p>
                        <p><span class="t4">+3.30(0.99%)today</span></p>
                    </div>
                    <div className="profile-2">
                        <img src={Stock2} className="user-image"/>
                        <p><span class="t5"><strong>NASDAQ: AAPL</strong></span></p>
                        <p><span class="t6">ETH/USD</span></p>
                        <p><span class="t7"><strong>$187.00</strong></span></p>
                        <p><span class="t8">+3.04(1.65%)today</span></p>
                    </div>
                    <button> <strong>Manage Your Portfolio</strong></button>
                </div>
            </div>

            <div className="section4-container">
                <p><span class="section-head"><strong>Wishlist</strong></span></p>
                <div class="sqaures">
                <div class="square1">
                    <img src={Picture1} className="award-image"/>
                    <p class = "text1">Amazon Gift Card</p>
                    <p class = "text2">$500</p>
                </div>
                <div class="square2">
                    <img src={Picture2} className="award-image"/>
                    <p class = "text1">Apple Watch</p>
                    <p class = "text2">$799</p>
                </div>
                <div class="square3">
                    <img src={Picture3} className="award-image"/>
                    <p class = "text1">Airpods Pro 2nd Gen</p>
                    <p class = "text2">$300</p>
                </div>
                <div class="square4">
                    <img src={gift4} className="award-image"/>
                    <p class = "text1">Bose Speakers</p>
                    <p class = "text2">$699</p>
                </div>
                </div>
            </div>
        </div>
    )
}
