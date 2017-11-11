/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {CircularProgress} from 'material-ui';

const defaultImg = "https://fthmb.tqn.com/cD0PNhMM0BxevlBvAgD1ntpQLac=/3558x2363/filters:fill(auto,1)/Cat-rolling-GettyImages-165893132-58ac5ef05f9b58a3c90a144f.jpg";
const defaultPortada = "https://wallpaperclicker.com/storage/wallpaper/hd-wallpaper-beautiful-art-full-hd-89223888.jpg";


export const ProfileDisplay = ({onChange, fetched, changePic, changeCover, onSubmit, photoURL, title, displayName, fullName, email, age, sex, facebook, twitter, github, linkedIn, bio}) => {
    if(!fetched) return <CircularProgress />
    return (
        <div>

            <div className="profile-portada" style={{backgroundImage:`url('${defaultPortada}')`}}>
                <button onClick={changeCover} >Cambiar Portada</button>
                <figure>
                    <div onClick={changePic}>
                        <span>Cambiar Foto</span>
                    </div>
                    <img src={photoURL ? photoURL:defaultImg} alt="user"/>
                </figure>
            </div>

            <form onSubmit={onSubmit} className="profile-form">
                <h2>Tus datos:  <input value="Guardar" type="submit"/></h2>

                <label>
                    <h5>Título</h5>
                    <input
                        name="title"
                        onChange={onChange}
                        value={title}
                        placeholder="Dr., Lic., Ing., Hacker" type="text"/>
                </label>

                <label>
                    <h5>Tu Nombre de usuario</h5>
                    <input
                        name="displayName"
                        onChange={onChange}
                        value={displayName}
                        placeholder="@BlisS" type="text"/>
                </label>

                <label>
                    <h5>Tu Nombre completo</h5>
                    <input
                        name="fullName"
                        onChange={onChange}
                        value={fullName}
                        type="text"/>
                </label>

                <label>
                    <h5>Tu Correo Electrónico</h5>
                    <input
                        name="email"
                        onChange={onChange}
                        value={email}
                        type="text"/>
                </label>

                <label>
                    <h5>Tu Edad</h5>
                    <input
                        name="age"
                        onChange={onChange}
                        value={age}
                        type="text"/>
                </label>

                <label>
                    <h5>Tu Genero</h5>
                    <input
                        name="sex"
                        onChange={onChange}
                        value={sex}
                        type="text"/>
                </label>

                <label>
                    <h5>Tu Facebook</h5>
                    <input
                        name="facebook"
                        onChange={onChange}
                        value={facebook}
                        type="text"/>
                </label>

                <label>
                    <h5>Tu Twitter</h5>
                    <input
                        name="twitter"
                        onChange={onChange}
                        value={twitter}
                        type="text"/>
                </label>

                <label>
                    <h5>Tu LinkedIn</h5>
                    <input
                        name="linkedIn"
                        onChange={onChange}
                        value={linkedIn}
                        type="text"/>
                </label>

                <label>
                    <h5>Tu Github</h5>
                    <input
                        name="github"
                        onChange={onChange}
                        value={github}
                        type="text"/>
                </label>
                <label>
                    <h5>Mini Bio</h5>
                    <textarea
                        name="bio"
                        onChange={onChange}
                    >{bio}</textarea>
                </label>


            </form>

        </div>
    );
};

