import React from "react";
import Daytime from "../Components/Daytime";
import Footer from "../Components/Footer";
import Output from "../Components/Output";
import Title from "../Components/Title";
import { ICurrentConditions } from "../Types/ICurrentConditions";

interface ResultProps {
    currentConditions: ICurrentConditions
    localizedName: string
}

const Result: React.FC<ResultProps> = ({currentConditions, localizedName}) => {
    return (
        <main className="container">
            <section className="row-container">
                <Title />
                <Daytime currentConditions={currentConditions}/>
                <Output currentConditions={currentConditions}
                    localizedName={localizedName} />
                <Footer />
            </section>
        </main>
    )
}

export default Result;