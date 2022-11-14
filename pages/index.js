import { useContext, useRef, useState } from "react";
import AuditConfContext from '@/utils/context/AuditConfContext'
import DataAuditForm from "@/components/DataAuditForm";
import EmissionStat from "@/components/EmissionStat";

const Index = (props) => {
    const auditConfValue = useContext(AuditConfContext)
    const {
        emissions
    } = auditConfValue || {}

    return (
        <div className="p-6 lg:p-[3vw] bg-neutral-900 text-neutral-300">
            
            <div className="grid grid-cols-6 lg:grid-cols-24 h-full gap-8">

                <div className="col-span-6 lg:col-span-10 xl:col-span-8">
                    <DataAuditForm />
                </div>

                <div className="col-span-6 lg:col-span-14 xl:col-span-16">
                    <div className="">
                        {emissions ? (
                            <div className="grid grid-cols-6 lg:grid-cols-12 gap-8">

                                <div className="col-span-6 lg:col-span-12">
                                    <div className={`panel`}>
                                        <div className="xl:flex flex-row justify-between items-center">
                                            <h3 className="text-base md:text-lg leading-tight text-neutral-400 font-medium text-neutral-200 mb-1 lg:mb-0">Emissions produced<br className="hidden lg:inline"/> for a single visit:</h3>
                                            <p className="flex flex-row justify-between items-end">
                                                <span className="text-indigo-500 leading-none font-medium text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw]">{new Intl.NumberFormat('en-US',{minimumFractionDigits: 6, maximumFractionDigits: 6}).format(emissions.perVisit)}</span>
                                                <span className="text-neutral-400 text-xs ml-1">gCO2e</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-6 lg:col-span-12">
                                    <div className="">
                                        <h2 className="text-2xl -mb-6 font-medium">Annual estimates</h2>
                                    </div>
                                </div>

                                <div className="col-span-6 md:col-span-2 lg:col-span-12 xl:col-span-4">
                                    <EmissionStat
                                        label="100 visits/month"
                                        value={emissions.annual.per100}
                                    />
                                </div>

                                <div className="col-span-6 md:col-span-2 lg:col-span-12 xl:col-span-4">
                                    <EmissionStat
                                        label="1,000 visits/month"
                                        value={emissions.annual.per1000}
                                    />
                                </div>

                                <div className="col-span-6 md:col-span-2 lg:col-span-12 xl:col-span-4">
                                    <EmissionStat
                                        label="10,000 visits/month"
                                        value={emissions.annual.per10000}
                                    />
                                </div>


                                <div className="col-span-6 lg:col-span-12">
                                    <div className="">
                                        <h2 className="text-2xl -mb-6 font-medium">What do these numbers translate to?</h2>
                                    </div>
                                </div>

                                <div className="col-span-6 md:col-span-3 lg:col-span-12 xl:col-span-6">
                                    <EmissionStat
                                        label="Distance in a regular gasoline-powered car (10,000 visits/month)"
                                        value={(emissions.annual.per10000*1000) / 217.6}
                                        unit='km'
                                    />
                                </div>

                                <div className="col-span-6 md:col-span-3 lg:col-span-12 xl:col-span-6">
                                    <EmissionStat
                                        label="Distance in a French TGV High Speed Train (10,000 visits/month)"
                                        value={(emissions.annual.per10000*1000) / 2.36}
                                        unit='km'
                                    />
                                </div>

                            </div>
                        ) : ''}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index