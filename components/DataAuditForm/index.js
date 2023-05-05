import IntensityField from "./IntensityField"
import ReturningField from "./ReturningField"
import SizeField from "./SizeField"
import { useContext } from "react";
import AuditConfContext from '@/utils/context/AuditConfContext'
import runAudit from "@/utils/helpers/runAudit";
import GreenHostingField from "./GreenHostingField";

function DataAuditForm(props) {
    const auditConfValue = useContext(AuditConfContext)

    // Get context data
    const {
        auditConfig,
        setEmissions
    } = auditConfValue || {}

    // Run the audit
    function submitAudit(e) {
        e.preventDefault()
        if(auditConfig.size) {
            runAudit(auditConfig, setEmissions, )
        }
    }

    return (
        <div className="panel h-auto lg:h-[calc(100vh_-_6vw)] sticky top-[3vw] flex flex-col">
            <div className="h-full">

                <form onSubmit={submitAudit} className="flex flex-col justify-between h-full">
                    <div>
                        <div className="mb-8 ">
                            <h1 className="font-medium text-3xl mb-4 leading-none">Auditor</h1>
                            <p>Consectetur aute tempor minim eiusmod proident ea nulla ex.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-6 md:grid-cols-12">

                            <div className="col-span-6 md:col-span-5 lg:col-span-12">
                                <SizeField/>
                            </div>
                            <div className="col-span-6 md:col-span-7 lg:col-span-12">
                                <IntensityField />
                            </div>
                            <div className="col-span-6 md:col-span-7 lg:col-span-12">
                                <ReturningField />
                            </div>
                            <div className="col-span-6 md:col-span-7 lg:col-span-12">
                                <GreenHostingField />
                            </div>

                        </div>
                    </div>

                    <div className="text-sm leading-tight text-gray-500">

                        {/* <ul>
                            <li>Size: {auditConfig.size}</li>
                            <li>Grid Intensity: {auditConfig.intensity.name} ({auditConfig.intensity.value})</li>
                            <li>Returning: {auditConfig.returning}%</li>
                            <li>Green Hosting: {auditConfig.greenHosting ? 'True' : 'False'}</li>
                        </ul> */}

                        <div className="mt-6">
                            <button
                                disabled={auditConfig.size ? false : true}
                                className={`btn ${auditConfig.size ? 'bg-indigo-500' : 'bg-indigo-900 border-indigo-900'}`}
                            >
                                <div className="h-10 overflow-hidden relative">
                                    <div className={`transition h-20 relative ${auditConfig.size ? 'translate-y-0' : '-translate-y-1/2'}`}>
                                        <span className={`inline-flex transition items-center justify-center w-full h-10 ${auditConfig.size ? 'opacity-100' : 'opacity-0'}`}>Calculate estimate</span>
                                        <span className={`inline-flex transition items-center justify-center w-full h-10 ${auditConfig.size ? 'opacity-0' : 'opacity-100'}`}>Data required to estimate</span>
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default DataAuditForm