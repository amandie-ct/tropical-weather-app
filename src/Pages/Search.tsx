import React from "react";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import Title from "../Components/Title";
import { ICurrentConditions } from "../Types/ICurrentConditions";

interface SearchProps {
    currentConditions: ICurrentConditions
    setCurrentConditions: Function
    setLocalizedName: Function
}

const Search: React.FC<SearchProps> = ({
    currentConditions,
    setCurrentConditions,
    setLocalizedName
}) => {
    return (
        <main className="container">
            <section className="row-container">
                <section>
                    <Title />
                    <Input 
                currentConditions={currentConditions}
                setCurrentConditions={setCurrentConditions}
                setLocalizedName={setLocalizedName} />
                    <Footer />
                </section>
            </section>
        </main>
    )
}

export default Search;