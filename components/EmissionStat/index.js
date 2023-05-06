function EmissionStat(props) {

    const {
        label,
        value,
        unit = 'kgCO2e'
    } = props || {}

    // Get a formatted figure with 2 decimal places and rounded up into KG from Grams.
    const formattedValue = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value/1000)

    return (
        <div className={`panel`}>
            <h3 className="text-base leading-tight text-neutral-300 font-medium mb-1 md:text-xs">{label}:</h3>
            <p className="flex flex-row justify-between items-end md:block lg:flex">
                <span className="text-green-500 leading-none font-medium text-[12vw] md:text-[5vw] lg:text-[8vw] xl:text-[3.2vw]">{formattedValue}</span>
                <span className="text-neutral-400 md:block text-xs ml-1">{unit}</span>
            </p>
        </div>
    )
}

export default EmissionStat