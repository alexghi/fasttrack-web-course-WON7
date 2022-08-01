import { createContext } from 'react'

export const defaultConfig = {
	userSettings: {
		time_format: 'H:i',
		date_format: 'M d yy'
	},
}

export default createContext(defaultConfig)
