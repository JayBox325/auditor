import '@/styles/globals.scss'
import AuditConfContext from '@/utils/context/AuditConfContext'
import { useState } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    const [auditConfig, setAuditConfig] = useState({
        size: null,
        intensity: {
            name: 'Global',
            value: 442
        },
        greenHosting: false,
        returning: 0.25
    })
    const [emissions, setEmissions] = useState(null)

    return (
        <AuditConfContext.Provider value={{
            auditConfig: auditConfig,
            setAuditConfig: setAuditConfig,
            emissions: emissions,
            setEmissions: setEmissions
        }}>
            <Head>
                <title>Another auditor</title>
                <meta name="description" content="This is another website auditor" />
            </Head>
            <Component {...pageProps} />
        </AuditConfContext.Provider>
    )
}

export default MyApp
