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

        // Set the value in the context config
        setAuditConfig({ ...auditConfig, 'returning': value })
    }

    return (
        <div className="relative ">
            <div className="pb-4">
                <label htmlFor="returning-visitors" className="form__label">Returning Visitors:</label>
                {!isBanner ? (
                    <p className="form__desc">Dolor dolor veniam esse reprehenderit nostrud voluptate dolor amet exercitation. Et est dolor quis proident dolor cillum.</p>
                ) : ''}
            </div>

            <div className="flex justify-between items-center">
                <div className="pr-4 w-full">
                    <input
                        id="returning-visitors"
                        className="range-slider px-1 relative z-10 w-full h-3 rounded-md appearance-none"
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="25"
                        step="1"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-20 text-right">
                    <span className="text-green-500 font-black text-xl">{auditConfig.returning}%</span>
                </div> 
            </div>
        </div>
    )
}

export default ReturningField