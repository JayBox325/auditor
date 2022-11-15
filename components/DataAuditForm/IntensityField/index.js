import GRID_INTENSITIES from "@/utils/data/gridIntensities"
import { useState, useContext } from "react"
import AuditConfContext from '@/utils/context/AuditConfContext'

function IntensityField(props) {
    const [currValue, setCurrValue] = useState()
    const auditConfValue = useContext(AuditConfContext)

    const {
        auditConfig,
        setAuditConfig
    } = auditConfValue || {}

    const {
        intensityField
    } = props || {}

    function handleChange(e) {
        const selected = e.target.value.split('||')

        const gridLocation = selected[0]
        const gridValue = parseInt(selected[1])

        setCurrValue(gridValue)

        // // Updating the config
        setAuditConfig({ ...auditConfig, 'intensity': {
            name: gridLocation,
            value: gridValue
        } })
    }

    const grids = GRID_INTENSITIES

    const defaultGrid = grids.find((e) => e.name == 'World')
    const defaultValue = `${defaultGrid.name}||${defaultGrid.emissions_intensity_gco2_per_kwh}`

    return (
        <div className="grid grid-cols-6 items-end w-full">

            <div className="col-span-6">
                <label htmlFor="carbon-intensity" className="leading-none block mb-2 w-full">Carbon intensity:</label>
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
                            {grids.map((grid, n) => {
                                const {
                                    name,
                                    short_name,
                                    emissions_intensity_gco2_per_kwh
                                } = grid || {}

                                const value = `${name}||${emissions_intensity_gco2_per_kwh}`

                                return (
                                    <option key={n} value={value}>{short_name ?? name}</option>
                                )
                            })}
                        </select>
                        <span className="pointer-events-none absolute z-20 right-3 h-11/12 top-1/2 -translate-y-1/2 flex items-center justify-center pr-1 pl-4 text-neutral-300 text-sm bg-gradient-to-l from-neutral-700 via-neutral-700">&darr;</span>
                    </div>
                </div>
            </div>

            <div className="col-span-6 md:col-span-2">
                <div className="w-full h-12 xl:h-14 rounded-b-md md:rounded-r-md md:rounded-l-none px-4 bg-neutral-600 inline-flex items-center justify-center">
                    <div className="w-full inline-flex items-end justify-between">
                        <span>{auditConfig.intensity.value}</span>
                        <span className="text-xs text-neutral-300 inline-block ml-1">kWh</span>
                    </div>
                </div>
            </div>
        </div>
    )
        
}

export default IntensityField