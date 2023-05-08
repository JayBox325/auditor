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
        <div className="grid grid-cols-6 gap-y-3">

            <div className="col-span-6">
                <label htmlFor="file-size" className="form__label">Data transfer size:</label>
            </div>

            <div className={`col-span-6 relative grid grid-cols-6`}>

                {/* <div className={`absolute pointer-events-none transition-colors block z-20 top-1/2 left-1/2 -translate-x-1/2 duration-500 -translate-y-1/2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] rounded-xl z-10 ${auditConfig.size ? 'bg-transparent' : 'bg-blue'}`} /> */}

                <div className={`relative z-20 col-span-4`}>
                    <div className="relative">
                        <input
                            id="file-size"
                            placeholder="100"
                            className={`relative z-20 rounded-t-md rounded-b-none md:rounded-l-md md:rounded-r-none`}
                            type="text"
                            inputMode="numeric"
                            onChange={validateNumbers}
                        />
                        {/* <span className="pointer-events-none absolute z-30 right-4 bottom-2 text-neutral-300 text-xs">KB</span> */}
                    </div>
                </div>

                <div className="col-span-6 relative z-20 md:col-span-2">
                    <div className="w-full h-12 xl:h-14 rounded-b-md md:rounded-r-md md:rounded-l-none bg-neutral-300 inline-flex items-center justify-center overflow-hidden">
                        <div className="w-full inline-flex relative items-end justify-between">
                            <select
                                id="carbon-intensity"
                                className="relative text-neutral-800 z-10 rounded-none bg-transparent px-4"
                            >
                                <option value="kb">KB</option>
                                <option value="mb">MB</option>
                                <option value="gb">GB</option>
                            </select>
                            <span className="pointer-events-none absolute z-20 right-3 h-11/12 top-1/2 -translate-y-1/2 flex items-center justify-center pr-1 pl-4 text-neutral-500 text-sm">&darr;</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SizeField