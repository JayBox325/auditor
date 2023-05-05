function IntensityItem(item) {
    const i = item.item

    // console.log('item', i)

    return (
        <option value={ `${i.name}||${i.emissions_intensity_gco2_per_kwh}`}>{i.short_name ?? i.name}</option>
    )
}

export default IntensityItem