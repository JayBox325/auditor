import GRID_INTENSITIES from "@/utils/data/gridIntensities"
import { useState, useContext, Fragment, useRef } from "react"
import AuditConfContext from '@/utils/context/AuditConfContext'
import IntensityItem from "@/components/IntensityItem"

function IntensityField(props) {
    const [currValue, setCurrValue] = useState()
    const auditConfValue = useContext(AuditConfContext)
    const intensityField = useRef(null)

    const {
        auditConfig,
        setAuditConfig
    } = auditConfValue || {}

    const {
        isBanner
    } = props || {}

    function handleChange(e) {
        const selected = e.target.value.split('||')

        const gridLocation = selected[0]
        const gridValue = parseInt(selected[1])

        setCurrValue(gridValue)

        // // Updating the config
        setAuditConfig({
            ...auditConfig, 'intensity': {
                name: gridLocation,
                value: gridValue
            }
        })
    }

    function reset() {
        intensityField.current.selectedIndex = 0
        const selected = intensityField.current.value.split('||')

        const gridLocation = selected[0]
        const gridValue = parseInt(selected[1])

        setCurrValue(gridValue)

        // // Updating the config
        setAuditConfig({
            ...auditConfig, 'intensity': {
                name: gridLocation,
                value: gridValue
            }
        })
    }

    const grids = GRID_INTENSITIES
    const defaultGrid = grids[0].items[0]
    const defaultValue = `${defaultGrid.name}||${defaultGrid.emissions_intensity_gco2_per_kwh}`

    return (
        <div className="grid gap-y-3 grid-cols-6 items-end w-full">

            <div className="col-span-6 flex flex-row items-end justify-between">
                <label htmlFor="carbon-intensity" className="form__label">Carbon Intensity:</label>
                {/* <div className="">
                    <button onClick={() => { reset() }} className="underline text-xxs underline-offset-2 text-neutral-400 hover:text-neutral-800 focus-visible:border-amber-500 focus-visible:border-b-2 transition-color">Reset to global</button>
                </div> */}
            </div>

            <div className="col-span-6 md:col-span-4">
                <div className="relative">
                    <div className="relative">
                        <select
                            id="carbon-intensity"
                            className="relative z-10 rounded-t-md rounded-b-none md:rounded-l-md md:rounded-r-none px-4"
                            ref={intensityField}
                            onChange={handleChange}
                            defaultValue={defaultValue}
                        >

                            {grids.map((group, n) => {

                                if (!group.label) {
                                    const item = group.items[0]

                                    return (
                                        <Fragment key={n}>
                                            <IntensityItem item={item} />
                                        </Fragment>
                                    )
                                } else {

                                    return (
                                        <optgroup key={n} label={group.label}>
                                            {group.items.map((item, n) => (
                                                <IntensityItem key={n} item={item} />
                                            ))}
                                        </optgroup>
                                    )
                                }
                            })}
                        </select>
                        <span className="pointer-events-none absolute z-20 right-3 h-11/12 top-1/2 -translate-y-1/2 flex items-center justify-center pr-1 pl-4 text-neutral-800 text-sm bg-gradient-to-l from-neutral-200 via-neutral-200">&darr;</span>
                    </div>
                </div>
            </div>

            <div className="col-span-6 md:col-span-2">
                <div className="w-full h-12 xl:h-14 rounded-b-md md:rounded-r-md md:rounded-l-none px-4 bg-neutral-300 inline-flex items-center justify-center">
                    <div className="w-full inline-flex items-end justify-between">
                        <span className="text-neutral-800">{auditConfig.intensity.value}</span>
                        <span className="text-xs text-neutral-500 inline-block ml-1">kWh</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default IntensityField