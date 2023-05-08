import Layout from "@/components/_Layout"
import AuditConfContext from "@/utils/context/AuditConfContext"
import { useContext, useEffect } from "react"

const Result = (props) => {
    const auditConfValue = useContext(AuditConfContext)

    const {
        emissions,
        auditConfig
    } = auditConfValue || {}

    useEffect(()=>{
        console.log('estimate complete', emissions)
    }, [emissions])

    return (
        <Layout>
            <h1>Results.</h1>

            <div className="">
                {emissions ? (
                    <>
                        <ul className="mt-8">
                            <li>Per visit: {emissions.perVisit}</li>
                            <li>Per 100 visits: {emissions.per100}</li>
                            <li>Per 1,000 visits: {emissions.per1000}</li>
                            <li>Per 10,000 visits: {emissions.per10000}</li>
                        </ul>
                        <ul className="mt-8">
                            <li>Per 100 visits/year: {emissions.annual.per100}</li>
                            <li>Per 1,000 visits/year: {emissions.annual.per1000}</li>
                            <li>Per 10,000 visits/year: {emissions.annual.per10000}</li>
                        </ul>
                    </>
                ) : ''}
            </div>
        </Layout>
    )
}

export default Result