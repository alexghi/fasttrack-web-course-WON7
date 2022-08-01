import React, { useContext } from 'react';
import SettingsContext from './contexts/SettingsContext';


class CompanySettings extends React.Component {
    render() {
        return <SettingsContext.Consumer>
            {(settings) => {
                return <div>
                    <h1>company</h1>
                    <div>{settings.timeFormat}</div>
                </div>
        
            }}
        </SettingsContext.Consumer>
        

    }
}

export default CompanySettings;