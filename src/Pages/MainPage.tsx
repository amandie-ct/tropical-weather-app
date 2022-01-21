import React, { useState } from "react";
import Title from "./Title";
import Input from "./Input";
import Output from "./Output";
import Daytime from "./Daytime";

const MainPage: React.FC = () => {

    return <main className="main-bg">
        <div className="container">
                <div className="responsive-test">
                    <div className="container">
                        <Title/>
                        <section className="main-info">
                            <Input/>
                            <Daytime/>
                            <Output/>
                        </section>
                    </div>
                </div>
            </div>
    </main>
}

export default MainPage;