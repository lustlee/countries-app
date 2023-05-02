import * as C from './styles';
import Input from "../../components/Input";
import {useEffect, useState} from "react";
import { api } from '../../api';
import {ICountries} from "../../types/Countries";
import {CountryItem} from "../../components/CountryItem";
import {CountriesArea} from "./styles";

const Countries = () => {
    const [countries, setCountries] = useState<ICountries[]>([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getAllCountries();
    }, []);

    const getAllCountries = async () => {
        setLoading(true);
        let countries = api.getCountries();
        setCountries(await countries);
        console.log(countries)
        setLoading(false);

    }

    return (
        <C.CountriesArea>
            <Input />
            <div className='countries'>
                {loading &&
		                <div className=''>Loading...</div>
                }{!loading &&
		            countries.map((item, index) => (
                        <CountryItem
                            key={index}
                            name={item.name}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            flag={item.flags.png}
                        />
                    ))
            }
            </div>
        </C.CountriesArea>
    );
};

export default Countries;
