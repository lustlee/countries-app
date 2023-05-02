import * as C from './styles';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICountry} from "../../types/Country";
import {api} from "../../api";
import SingleCountry from "../../components/SingleCountry";
import {useForm} from "../../contexts/ThemeContext";
const CountryPage = () => {
    const {state} = useForm()
    const {name, code} = useParams()
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState<ICountry[]>([]);

    useEffect(() => {
        if (name) {
            getCountry(name);
        } else if (code) {
            getCountry(code);
        }
    }, [name, code])

    const getCountry = async (param: string) => {
        setLoading(true);
        let country = name ? await api.getCountry(param) : await api.getCountryByCode(param);
        setCountry(country);
        setLoading(false);
    }

    return (
        <C.CountryPage theme={state.theme}>
            <div className='container'>
                <Link to='/' className='back--button'>Back</Link>
                {loading &&
                    <div className='loading'>Loading...</div>
                }{!loading &&
		            country.map((item, index) => (
                        <SingleCountry
                            key={index}
                            flag={item.flags.png}
                            name={item.name}
                            nativeName={item.nativeName}
                            population={item.population}
                            region={item.region}
                            subregion={item.subregion}
                            capital={item.capital}
                            topLevelDomain={item.topLevelDomain[0]}
                            currencies={item.currencies && item.currencies}
                            languages={item.languages}
                            borders={item.borders}
                        />
                    ))
            }
            </div>
        </C.CountryPage>
    );
};

export default CountryPage;
