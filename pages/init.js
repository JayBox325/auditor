import DataAuditForm from "@/components/DataAuditForm"
import Layout from "@/components/_Layout"
import Image from "next/image"

const Init = (props) => {
    return (
        <Layout>
            <section className="relative">

                <div className="h-full bg-white min-h-screen flex items-center justify-center py-10 md:py-14 lg:py-16 xl:py-0">

                    <div className="hidden sm:block absolute z-10 top-0 left-0 w-full h-full">
                        <Image src={'/assets/images/background.jpg'} className="w-full h-full absolute top-0 left-0 object-cover z-10 " alt="" width="1000" height="1000" />
                    </div>

                    <div className="relative z-20 w-full xl:flex xl:justify-end xl:h-full xl:min-h-screen">
                        <div className="mx-auto bg-white text-gray-900 backdrop-blur-lg bg-opacity-75 p-6 sm:rounded-lg sm:max-w-sm sm:p-8 md:max-w-md md:px-10 md:py-12 xl:w-5/12 xl:max-w-full xl:m-0 xl:h-full xl:min-h-screen xl:rounded-none xl:flex xl:items-center xl:px-20">
                            <div className="xl:max-w-md xl:mx-auto">
                                <DataAuditForm />
                            </div>
                        </div>
                    </div>

                </div>

                

                {/* <div className="container relative z-20">
                    <div className="relative">
                        <div className="absolute text-center top-0 left-0 bottom-0">

                            <h1 className="text-[20vh] leading-none uppercase font-black absolute top-1/2 left-0 -translate-x-5/12 -translate-y-1/2 -rotate-90">Auditor</h1>
                        </div>
                        <div className="py-10 relative z-20 w-full lg:py-12 xl:py-16 flex min-h-screen items-center h-full justify-center">
                            <div className="grid w-full grid-cols-6 md:grid-cols-12 xl:grid-cols-24">
                                <div className="col-span-6 md:col-span-8 md:col-start-4 lg:col-span-6 lg:col-start-6 xl:col-span-9 xl:col-start-14">
                                    <div className="max-w-sm lg:max-w-md mx-auto md:ml-auto md:mr-0 md:bg-gray-900 md:text-white md:p-6 rounded-md lg:p-8 xl:p-10">
                                        <DataAuditForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </section>
        </Layout>
    )
}

export default Init