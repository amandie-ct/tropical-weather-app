import React from "react";
import Title from "./Title";
import Input from "./Input";
import Output from "./Output";
import Day from "./Day";

const MainPage: React.FC = () => {
    const apiKey: string = 'f7JP84cluI08PJ11jGoppxhs74bl05sb';
    const baseURL: string = 'http://dataservice.accuweather.com/locations/v1/cities/search/';

    const queryParams: object = new URLSearchParams({
        apikey: apiKey,
        q: 'Natal',
        language: 'pt-br'
    });

    const queryString: string = queryParams.toString();

    const searchCity = (url: string, qstring: string): string => {
        return(url.concat('?', qstring));
    }

    return <main className="main-bg">
        <div className="container">
            <Title/>
            <section className="main-info">
                <Input/>
                <Day/>
                <Output/>
            </section>
        </div>
    </main>
}

export default MainPage;