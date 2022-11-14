import { co2, averageIntensity } from '@tgwf/co2'

function runAudit(auditConfig, setEmissions) {
    const swd = new co2()
    const perVisit = swd.perVisit((auditConfig.size * 1000), auditConfig.intensity.value)

    const emissions = {
        // perVisit : (perVisit).toFixed(2),
        // per100: (perVisit * 100).toFixed(2),
        // per1000: (perVisit * 1000).toFixed(2),
        // per10000: (perVisit * 10000).toFixed(2)
        perVisit : (perVisit),
        per100: (perVisit * 100),
        per1000: (perVisit * 1000),
        per10000: (perVisit * 10000),

        annual: {
            per100: ((perVisit * 100) * 12).toFixed(2),
            per1000: ((perVisit * 1000) * 12).toFixed(2),
            per10000: ((perVisit * 10000) * 12).toFixed(2)
        }
    }

    setEmissions(emissions)

    // console.log('✅ Audit complete', emissions)
}

export default runAudit