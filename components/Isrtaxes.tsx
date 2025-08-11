export default function IsrTaxes() {

    return (
        <div className="max-w-4xl bg-white rounded-2xl p-6 mr-10">
            <form className="space-y-6">
                <span className="text-[#757575] text-sm">
                    Adjust your ISR Taxes Rate
                </span>

                <div className="flex flex-col items-start gap-2">
                    <label className="w-48 text-sm text-gray-700 mt-2">ISR Tax Rate</label>
                    <input
                        type="text"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </form>
        </div>
    )
}
