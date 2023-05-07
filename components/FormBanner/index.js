import GreenHostingField from "../DataAuditForm/GreenHostingField"
import IntensityField from "../DataAuditForm/IntensityField"
import ReturningField from "../DataAuditForm/ReturningField"
import SizeField from "../DataAuditForm/SizeField"

function FormBanner(props) {
    return (
        <div className="sticky bg-black py-4 z-[99] top-0 left-0 right-0">
            <div className="container">
                <div className="grid grid-cols-12 gap-6 md:grid-cols-12">

                    <div className="col-span-6 md:col-span-3">
                        <SizeField isBanner={true} />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <IntensityField isBanner={true} />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <ReturningField isBanner={true} />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <GreenHostingField isBanner={true} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormBanner