import { useState } from 'react';
import Button from '../buttons/Button'
import { useForm } from 'react-hook-form';

const SearchBar = ({ onSubmit }) => {
    const [inputText, setInputText] = useState('');
    const { handleSubmit } = useForm();


    const handleSearch = () => {
        onSubmit(inputText);
    }

    return (
        <form onSubmit={handleSubmit(handleSearch)} className='flex pt-4'>
            <input
                id="search"
                name="search"
                aria-label="Buscar"
                type="text"
                className="bg-whiteText w-full h-[3rem] pl-6 rounded-md border border-primary border-r-0 text-secondary placeholder-secondary rounded-r-none "
                placeholder="¿Qué quieres ver?"
                value={inputText}
                onChange={(e)=>setInputText(e.target.value)}
            />
            <Button type={'submit'} text="Buscar" color="primary" styles="rounded-l-none basis-[45%]"/>
        </form>
    );
};

export default SearchBar;
