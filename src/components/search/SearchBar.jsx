import { useState, useEffect } from 'react';
import Button from '../buttons/Button'
import { useForm } from 'react-hook-form';
import useApi  from '../../services/useAPI'
import { URL_SEARCH_BY_TITLE } from '../../config/urls';

const SearchBar = ({ onSubmit }) => {
    const [inputText, setInputText] = useState('');
    const [searchUrl, setSearchUrl] = useState(null);
    const { data, loading, error } = useApi(searchUrl);
    const { handleSubmit } = useForm();

    useEffect(() => {
        if (error) {
            console.log(error);
        } else {
            onSubmit({ data, loading }); 
        }
    }, [data, loading, error, onSubmit]);

    const handleSearch = () => {
        setSearchUrl(`${URL_SEARCH_BY_TITLE}${inputText}`);
    }

    return (
        <form onSubmit={handleSubmit(handleSearch)} className='flex'>
            <input
                id="search"
                name="search"
                aria-label="Buscar"
                type="text"
                className="bg-whiteText w-full h-[3rem] pl-6 rounded-md border border-primary border-r-0 text-secondary placeholder-secondary rounded-r-none "
                placeholder="¿Qué quieres ver?"
                onChange={(e)=>setInputText(e.target.value)}
            />
            <Button type={'submit'} text="Buscar" color="primary" styles="rounded-l-none basis-[45%]"/>
        </form>
    );
};

export default SearchBar;
