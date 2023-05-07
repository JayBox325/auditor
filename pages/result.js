import DataAuditForm from "@/components/DataAuditForm"
import FormBanner from "@/components/FormBanner"
import Layout from "@/components/_Layout"
import Image from "next/image"

const Result = (props) => {
    return (
        <Layout>
            
            <FormBanner />

            <section className="row row--black">
                <div className="container">
                    <h1 className="font-black uppercase tracking-widest lg:text-[7vw]">100mb</h1>
                    <div className="rich max-w-2xl mt-6 text-xl">
                        <p>Enim incididunt dolore adipisicing officia consectetur amet nostrud reprehenderit eu mollit. Anim ex officia ex culpa elit. Cupidatat ex aliqua est in labore nisi amet sint cillum.</p>
                    </div>
                </div>

            </section>

            <section className="row row--black">
                <div className="container">
                    <div className="-ml-6 w-screen md:mx-auto md:w-auto max-w-3xl mx-auto bg-gray-800 md:rounded-lg px-6 py-16 sm:px-8 md:p-12 lg:p-14 xl:p-20">
                        <DataAuditForm />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Result