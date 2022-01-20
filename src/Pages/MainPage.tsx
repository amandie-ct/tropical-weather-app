import React, { useState } from "react";
import Title from "./Title";
import Input from "./Input";
import Output from "./Output";
import Daytime from "./Daytime";

const MainPage: React.FC = () => {

    return <main className="main-bg">
            <div className="row">
                <div className="col-12-xs col-8-sm col-6-md col-4-xl">
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