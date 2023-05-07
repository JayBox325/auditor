import { useContext } from 'react'
import AuditConfContext from '@/utils/context/AuditConfContext'

function SizeField(props) {
    const auditConfValue = useContext(AuditConfContext)

    const {
        auditConfig,
        setAuditConfig
    } = auditConfValue || {}

    const {
        isBanner = false
    } = props || {}

    function validateNumbers(e) {
        // console.log('on change')
        const value = e.target.value.replace(/\D/g, "")

        // Set the numeric value in the field
        e.target.value = value

        // Set the value in the context config
        setTimeout(function () {
            setAuditConfig({ ...auditConfig, 'size': value })
        }, 100)
    }

    return (
        <div className="grid grid-cols-6">

            <div className="col-span-6 pb-4">
                {!isBanner ? (
                    <>
                        <label htmlFor="file-size" className="form__label">Data transfer size:</label>
                        <p className="form__desc">Dolor dolor veniam esse reprehenderit nostrud voluptate dolor amet exercitation. Et est dolor quis proident dolor cillum.</p>
                    </>
                ) : ''}
            </div>

            <div className="relative col-span-4">
                <div className="relative pr-4">
                    <input
                        id="file-size"
                        placeholder="100"
                        className={`relative z-20 ${auditConfig.size ? '' : 'border-2 border-green-500'}`}
                        type="text"
                        inputMode="numeric"
                        onChange={validateNumbers}
                    />
                    {/* <span className="pointer-events-none absolute z-30 right-4 bottom-2 text-neutral-300 text-xs">KB</span> */}
                </div>
            </div>

            <div className="col-span-2">
                <div className="relative">
                    <select
                        id="carbon-intensity"
                        className="relative z-10 rounded-md px-4"
                    >
                        <option value="kb">KB</option>
                        <option value="mb">MB</option>
                        <option value="gb">GB</option>
                    </select>
                    <span className="pointer-events-none absolute z-20 right-3 h-11/12 top-1/2 -translate-y-1/2 flex items-center justify-center pr-1 pl-4 text-neutral-800 text-sm bg-gradient-to-l from-neutral-200 via-neutral-200">&darr;</span>
                </div>
            </div>

        </div>
    )
}

export default SizeField