import React from 'react';
import {useForm} from 'react-hook-form';

function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form className="form" id="form" onSubmit={handleSubmit(onSubmit)}>
            Voornaam <input type="text" {...register("Voornaam", {required: true, maxLength: 80})} />
            <br/>
            <br/>
            Achternaam <input type="text" {...register("Achternaam", {required: true, maxLength: 100})} />
            <br/>
            <br/>
            Leeftijd <input type="text"  {...register("Leeftijd", {
            required: true,
            min: 18,
            pattern: /^\S+@\S+$/i
        })} />
            <br/>
            <br/>
            Postcode <input type="text"  {...register("Postcode", {required: true, maxLength: 12})} />
            <br/>
            <br/>
            Huisnummer <input type="text" {...register("Huisnummer zonder toevoeging", {
            required: true,
            min: -1
        })} />
            <br/>
            <br/>
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
            <br/>
            <br/>
            <input type="submit"/>
            <br/>
            <br/>
            {/*dit deel is nog niet dmv react-hook geschreven*/}
            <textarea name="remarks" id="remarks" cols="30" rows="10"></textarea>
            <br/>
            <br/>
            <label htmlFor="terms">
                <input type="checkbox"/>Ik ga akkoord met de voorwaarden</label>
            <br/>
            <br/>
            <button className="submit">Verzenden</button>
        </form>
    );
}

export default Form;