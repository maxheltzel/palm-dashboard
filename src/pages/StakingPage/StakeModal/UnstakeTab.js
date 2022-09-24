export default function UnstakeTab() {
  return (
    <>
      <div className="modal-body relative px-8">
        {/* Table */}
        <table className="min-w-full text-center">
          <thead className="bg-[#282828]">
            <tr className="text-md text-white">
              <th scope="col" className="font-light px-6 py-4 rounded-tl-xl rounded-bl-xl">
                Token
              </th>
              <th scope="col" className="font-light px-6 py-4">
                APY
              </th>
              <th scope="col" className="font-light px-6 py-4 rounded-tr-xl rounded-br-xl">
                Claimable Reward
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-white">
              <td className="text-md px-6 py-6">
                <div className="flex items-center">
                  <img src="/assets/images/fav_logo.png" alt="" width={20} />
                  <span className="ml-2">PLM</span>
                </div>
              </td>
              <td className="text-md px-6 py-6">
                277.05%
              </td>
              <td className="text-md px-6 py-6">
                5.92163
              </td>
            </tr>
          </tbody>
        </table>

        <button 
          className="rounded-xl border-2 border-[#006DEE] text-md text-[#006DEE] font-semibold w-full py-3 hover:bg-[#006DEE] hover:text-white transition-all"
          data-modal-toggle="stake-modal"
        >
          Claim Rewards
        </button>
      </div>

      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md">
        <button type="button"
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button>
      </div>
    </>
  );
}