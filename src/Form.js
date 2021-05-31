import React from 'react';
import {useForm} from 'react-hook-form';

function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form className="form" id="form" onSubmit={handleSubmit(onSubmit)}>
            Voornaam <input type="text" {...register("Voornaam", {required: true, maxLength: 80})} />
            Achternaam <input type="text" {...register("Achternaam", {required: true, maxLength: 100})} />
            Leeftijd <input type="text"  {...register("Leeftijd", {
            required: true,
            min: 18,
            pattern: /^\S+@\S+$/i
        })} />
            Postcode <input type="text"  {...register("Postcode", {required: true, maxLength: 12})} />
            Huisnummer <input type="text" {...register("Huisnummer zonder toevoeging", {
            required: true,
            min: 1
        })} />
            <br/>
            <br/>
            <div id="radio">
                Bezorgfrequentie
                <br/>
                <input {...register("Bezorgfrequentie", {required: true})} type="radio" value="Iedere week"/>
                Iedere week
                <br/>
                <input {...register("Bezorgfrequentie", {required: true})} type="radio" value="Om de week"/>
                Om de week
                <br/>
                <input {...register("Bezorgfrequentie", {required: true})} type="radio" value="Iedere maand"/>
                Iedere maand
                <br/>
                <input {...register("Bezorgfrequentie", {required: true})} type="radio" value="Anders"/>
                Anders
            </div>
            <br/>
            Opmerking
            <br/>
            <br/>
            <textarea rows="10" cols="50" {...register("Opmerkingen", {})} />
            <br/>
            <br/>
            <div id="conditions">
                <input type="checkbox"
                       {...register("Ik ga akkoord met de voorwaarden", {})}/>
                Ik ga akkoord met de algemene voorwaarden
                <br/>
                <br/>
                <button className="submit" input type="submit">Verzenden</button>
            </div>
        </form>
    );
}

export default Form;