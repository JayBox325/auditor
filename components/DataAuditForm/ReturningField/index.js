import { useContext } from 'react'
import AuditConfContext from '@/utils/context/AuditConfContext'

function ReturningField(props) {
    const auditConfValue = useContext(AuditConfContext)

    const {
        auditConfig,
        setAuditConfig
    } = auditConfValue || {}

    const {
        returningField
    } = props || {}

    function handleChange(e) {
        const value = e.target.value.replace(/\D/g, "")

        // Set the value in the context config
        setAuditConfig({ ...auditConfig, 'returning': value })
    }

    return (
        <div className="relative ">
            <div className="flex justify-between">
                <label htmlFor="returning-visitors" className="block mb-2">Returning visitors</label>
                <span className="text-green-500">{auditConfig.returning}%</span> 
            </div>
            <input
                id="returning-visitors"
                className="range-slider relative z-10 w-full h-3 rounded-md appearance-none"
                type="range"
                ref={returningField}
                min="0"
                max="100"
                defaultValue="25"
                step="1"
                onChange={handleChange}
            />
        </div>
    )
}

export default ReturningField