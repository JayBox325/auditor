import { useContext, useState } from 'react'
import AuditConfContext from '@/utils/context/AuditConfContext'

function GreenHostingField(props) {
    const auditConfValue = useContext(AuditConfContext)
    const [isChecked, setIsChecked] = useState(false)

    const {
        auditConfig,
        setAuditConfig
    } = auditConfValue || {}

    const {
        isBanner
    } = props || {}

    function handleChange(e) {
        const value = e.target.value.replace(/\D/g, "")
        // console.log('value', e.target.checked)
        setIsChecked(e.target.checked)

        // Set the value in the context config
        setAuditConfig({ ...auditConfig, 'greenHosting': e.target.checked })
    }

    return (
        <div className="relative flex flex-row items-start">
            <div className="relative">
                <input onChange={handleChange} className="w-8 h-8 p-0 relative z-10" type="checkbox" id="green-hosting" />
                <svg className="absolute w-8 h-8 pointer-events-none top-0 left-0 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <path className={`checkmark stroke-blue ${isChecked ? 'is-checked' : ''}`} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </div>
            <div htmlFor="green-hosting" className="pl-4">
                <label htmlFor='green-hosting' className="form__label h-8 block flex items-center">Using green hosting</label>
            </div>
        </div>
    )
}

export default GreenHostingField