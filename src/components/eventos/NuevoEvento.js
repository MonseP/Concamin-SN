import React from 'react';
import {TextField ,DatePicker, TimePicker} from 'material-ui';
import Toggle from 'material-ui/Toggle';

const toggle = {
    marginBottom: 16,
};

const block = {
    maxWidth: 200,
    marginLeft: 50
};
const NuevoEvento = ({}) => {
    return (
        <div >
            <div style={block}>
                <Toggle label="Evento Privado" style={toggle}/>
            </div>
            <div className="root-nuevo-evento">
                <TextField
                    className="textfield-event"
                    floatingLabelText="Nombre del evento"
                    hintText="TLCAN protecters"
                />
                <TextField
                    className="textfield-event"
                    floatingLabelText="Ubicación"
                    hintText="TLCAN protecters"
                />
            </div>
            <div className="root-nuevo-evento">
                <DatePicker
                    className="textfield-event"
                    floatingLabelText="Fecha"
                    autoOk={true}
                />
                <TimePicker
                    className="textfield-event"
                    floatingLabelText="Hora"
                    autoOk={true}
                />
            </div>
        </div>
    );
};

export default NuevoEvento;