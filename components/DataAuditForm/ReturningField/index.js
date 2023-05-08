import { useContext } from 'react'
import AuditConfContext from '@/utils/context/AuditConfContext'

function ReturningField(props) {
    const auditConfValue = useContext(AuditConfContext)

    const {
        auditConfig,
        setAuditConfig
    } = auditConfValue || {}

    const {
        isBanner
    } = props || {}

    function handleChange(e) {
        const value = e.target.value.replace(/\D/g, "")
        let tempValue = value

        // Resetting any number above 100
        if (Number(value) > 100) {
            tempValue = 100
        }

        // Set the value in the context config
        setAuditConfig({ ...auditConfig, 'returning': tempValue })


    }

    return (
        <div className="relative grid grid-cols-6 gap-y-3">
            <div className="col-span-6">
                <label htmlFor="returning-visitors" className="form__label">Returning Visitors:</label>
            </div>

            <div className="col-span-6 md:col-span-4 flex justify-between items-center">
                <div className="w-full">
                    <input
                        id="returning-visitors"
                        className="range-slider px-1 relative z-10 w-full rounded-md appearance-none rounded-t-md rounded-b-none md:rounded-l-md md:rounded-r-none"
                        type="range"
                        min="0"
                        max="100"
                        defaultValue={auditConfig.returning}
                        value={auditConfig.returning}
                        step="1"
                        onChange={handleChange}
                    />
                </div>
                {/* <div className="w-16 text-right">
                    <span className="text-green-500 font-medium text-xl">{auditConfig.returning}%</span>
                </div>  */}
            </div>

            <div className="col-span-6 md:col-span-2">
                <div className="w-full h-12 xl:h-14 rounded-b-md md:rounded-r-md md:rounded-l-none bg-neutral-300 inline-flex items-center justify-center">
                    <div className="w-full inline-flex relative items-end justify-between">
                        <input onChange={handleChange} className="relative z-10 text-neutral-800 bg-transparent" type="tel" maxLength="3" defaultValue={auditConfig.returning} value={auditConfig.returning}/>
                        <span className="pointer-events-none text-xs text-neutral-500 inline-block absolute bottom-4 right-4 z-20">%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReturningField