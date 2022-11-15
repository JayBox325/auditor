import { useContext } from 'react'
import AuditConfContext from '@/utils/context/AuditConfContext'

function SizeField(props) {
    const auditConfValue = useContext(AuditConfContext)

    const {
        auditConfig,
        setAuditConfig
    } = auditConfValue || {}

    function validateNumbers(e) {
        console.log('on change')
        const value = e.target.value.replace(/\D/g, "")

        // Set the numeric value in the field
        e.target.value = value

        // Set the value in the context config
        setTimeout(function() {
            setAuditConfig({ ...auditConfig, 'size': value })
        }, 100)
    }

    return (
        <div className="relative">
            <label htmlFor="file-size" className="block leading-none mb-2">Data transfer size:</label>
            <div className="relative">
                <input
                    id="file-size"
                    placeholder="100"
                    className={`relative z-20 ${auditConfig.size ? '' : 'border-2 border-indigo-500'}`}
                    type="text"
                    inputMode="numeric"
                    onChange={validateNumbers}
                />
                <span className="pointer-events-none absolute z-30 right-4 bottom-2 text-neutral-300 text-xs">KB</span>
            </div>
        </div>
    )
}

export default SizeField