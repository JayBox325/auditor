import DataAuditForm from "@/components/DataAuditForm"
import Layout from "@/components/_Layout"
import Link from "next/link"

const Blocks = (props) => {
    return (
        <Layout>
            <>
                <h1 className="uppercase font-light title-4 leading-[0.8] block tracking-widest">
                    Impact <span className="text-green">Analyser</span>
                </h1>
                <div className="rich max-w-md mt-3 lg:mt-4 xl:mt-6 text-white opacity-50">
                    <p>Aute irure mollit non excepteur pariatur dolore veniam incididunt do non nulla reprehenderit. Do occaecat exercitation Lorem in nostrud ipsum dolor minim nostrud esse.</p>
                    <Link href="/result">Preview change</Link>
                </div>
            </>
        </Layout>
    )
}

export default Blocks