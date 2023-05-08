import IntensityField from "./IntensityField"
import ReturningField from "./ReturningField"
import SizeField from "./SizeField"
import GreenHostingField from "./GreenHostingField"

function DataAuditForm(props) {

    return (

        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="grid grid-cols-6 gap-6 xl:gap-8 md:grid-cols-12">

                    <div className="col-span-6 md:col-span-12">
                        <SizeField/>
                    </div>
                    <div className="col-span-6 md:col-span-12">
                        <IntensityField />
                    </div>
                    <div className="col-span-6 md:col-span-12">
                        <ReturningField />
                    </div>
                    <div className="col-span-6 md:col-span-12">
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

                {/* <div className="mt-6">
                    <button
                        disabled={auditConfig.size ? false : true}
                        className={`btn ${auditConfig.size ? 'bg-green-500' : 'bg-green-900 border-green-900'}`}
                    >
                        <div className="h-10 overflow-hidden relative">
                            <div className={`transition h-20 relative ${auditConfig.size ? 'translate-y-0' : '-translate-y-1/2'}`}>
                                <span className={`inline-flex transition items-center justify-center w-full h-10 ${auditConfig.size ? 'opacity-100' : 'opacity-0'}`}>Calculate estimate</span>
                                <span className={`inline-flex transition items-center justify-center w-full h-10 ${auditConfig.size ? 'opacity-0' : 'opacity-100'}`}>Data required to estimate</span>
                            </div>
                        </div>
                    </button>
                </div> */}

            </div>
        </div>
    )
}

export default DataAuditForm