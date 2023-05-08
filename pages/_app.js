import '@/styles/globals.scss'
import AuditConfContext from '@/utils/context/AuditConfContext'
import { useState } from 'react'
import Head from 'next/head'
import runAudit from '@/utils/helpers/runAudit'
import { useRouter } from 'next/router'
import DataAuditForm from '@/components/DataAuditForm'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    const [auditConfig, setAuditConfig] = useState({
        size: null,
        intensity: {
            name: 'Global',
            value: 442
        },
        greenHosting: false,
        returning: 25
    })
    const [emissions, setEmissions] = useState(null)

    // Run the audit
    function submitAudit(e) {
        e.preventDefault()
        router.push('/result')
        if (auditConfig.size) {
            runAudit(auditConfig, setEmissions,)
        }
    }

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

            <div id='top'>
                <main className={`relative z-20 bg-gray-900 text-white min-h-screen flex flex-col justify-between`}>
                    <div className="grid grid-cols-6 h-full min-h-screen lg:grid-cols-12 xl:grid-cols-24">

                        <div className="col-span-6 lg:col-span-6 xl:col-span-15">

                            <div className="bg-gradient-to-br to-blue via-blue from-blue-950 w-full h-full px-6 py-16 sm:px-8 lg:p-10 xl:p-16 flex flex-col justify-between">
                                <Component {...pageProps} />
                            </div>

                        </div>

                        <div className="col-span-6 lg:col-span-6 xl:col-span-9">

                            <form onSubmit={submitAudit} className="bg-gray-100 sticky top-0 h-screen text-gray-800 w-full flex flex-col justify-between">
                                <div className="overflow-y-scroll">
                                    <div className="px-6 py-10 sm:px-8 sm:py-10 lg:p-10 xl:p-16">
                                        <DataAuditForm />
                                        <ul className="mt-8 text-gray-400">
                                            <li>Size: {auditConfig.size}</li>
                                            <li>Grid Intensity: {auditConfig.intensity.name} ({auditConfig.intensity.value})</li>
                                            <li>Returning: {auditConfig.returning}%</li>
                                            <li>Green Hosting: {auditConfig.greenHosting ? 'True' : 'False'}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        disabled={auditConfig.size > 0 ? false : true}
                                        className={`w-full text-blue uppercase transition-colors tracking-widest h-16 lg:h-20 xl:h-24 ${auditConfig.size > 0 ? 'bg-green hover:bg-green-600' : 'bg-gray-200 border-blue'}`}
                                    >
                                        <div className="h-10 overflow-hidden relative">
                                            <div className={`transition h-20 relative ${auditConfig.size > 0 ? 'translate-y-0' : '-translate-y-1/2'}`}>
                                                <span className={`inline-flex transition items-center justify-center w-full h-10 ${auditConfig.size > 0 ? 'opacity-100' : 'opacity-0'}`}>Calculate estimate</span>
                                                <span className={`inline-flex transition items-center justify-center w-full h-10 ${auditConfig.size > 0 ? 'opacity-0' : 'opacity-100'}`}>Data required to estimate</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </form>

                        </div>

                    </div>
                </main>
            </div>

        </AuditConfContext.Provider>
    )
}

export default MyApp
