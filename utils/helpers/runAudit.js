import { co2, CO2, averageIntensity } from '@tgwf/co2'

function runAudit(auditConfig, setEmissions) {
    const formula = new co2()

    console.log('Returning %', auditConfig.returning / 100)

    const perVisit = formula.perVisitTrace(
        (auditConfig.size * 1000),                          // file size
        auditConfig.greenHosting,                           // green hosting
        {
            gridIntensity: {
                device: auditConfig.intensity.value,        // Grid intensity value
                // dataCenter: { country: "TWN" },          // Grid intensity country code
            },
            firstVisitPercentage: ((100 - auditConfig.returning) / 100),
            returnVisitPercentage: auditConfig.returning / 100
        }
    )

    console.log('results', perVisit)

    const emissions = {
        // perVisit : (perVisit).toFixed(2),
        // per100: (perVisit * 100).toFixed(2),
        // per1000: (perVisit * 1000).toFixed(2),
        // per10000: (perVisit * 10000).toFixed(2)
        perVisit: (perVisit.co2),
        per100: (perVisit.co2 * 100),
        per1000: (perVisit.co2 * 1000),
        per10000: (perVisit.co2 * 10000),

        annual: {
            per100: ((perVisit.co2 * 100) * 12).toFixed(2),
            per1000: ((perVisit.co2 * 1000) * 12).toFixed(2),
            per10000: ((perVisit.co2 * 10000) * 12).toFixed(2)
        }
    }

    setEmissions(emissions)
}

export default runAudit