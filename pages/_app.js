import '@/styles/globals.scss'
import AuditConfContext from '@/utils/context/AuditConfContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
    const [auditConfig, setAuditConfig] = useState({
        size: null,
        intensity: {
            name: 'World',
            value: 442
        },
        returning: 25
    })
    const [emissions, setEmissions] = useState(null)

    return (
        <AuditConfContext.Provider value={{
            auditConfig: auditConfig,
            setAuditConfig: setAuditConfig,
            emissions: emissions,
            setEmissions: setEmissions
        }}>
            <Component {...pageProps} />
        </AuditConfContext.Provider>
    )
}

export default MyApp
