import React, { useContext, useState } from 'react';
import SettingsContext from './contexts/SettingsContext';

const UserClock= () => {
    const [date, setDate] = useState(new Date());
    const settingsContext = useContext(SettingsContext);

    console.log(settingsContext);
    // console.log(date);
    return <div>{date.toString()}</div>
}

export default UserClock;