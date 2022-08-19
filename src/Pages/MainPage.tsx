import React, { useState } from "react";
import Title from "./Title";
import Input from "./Input";
import Output from "./Output";
import Daytime from "./Daytime";
import Footer from './Footer';

const MainPage: React.FC = () => {

    return <main className="container">
                <div className="row row-container">
                    <div className="responsive-test core-div col-11-xs col-10-sm col-8-md col-5-lg">
                        <Title/>
                        <Input />
                        <Daytime/>
                        <Output/>
                        <Footer/>
                    </div>
                </div>
            </main>
}

export default MainPage;