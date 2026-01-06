import EcommTitle from "./EcommTitle";

export default function SingleInvoice() {
  return (
    <div className="bg-[#F9FAFB] pb-20 ">
      <EcommTitle title="Single Invoice" />
      <div className="m-7 bg-white border border-gray-200 rounded-2xl">
        <div className="  text-bold  p-5 flex justify-between ">
          <p className="font-medium text-xl text-gray-800">Invoice</p>
          <p className="text-gray-700 font-medium">ID : #348</p>
        </div>
        <hr className="border-gray-200" />

        <div className="m-7">
          {/* from and to block  */}
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <span className="mb-1 text-sm font-medium text-gray-700">
                From
              </span>
              <h5 className="mb-2 text-base font-semibold text-gray-800 ">
                Pimjo LLC
              </h5>
              <p className="mb-4 text-sm text-gray-500">
                1280, Clair Street,
                <br />
                Massachusetts, New York - 02543
              </p>
              <p className="mb-1.5 block text-sm font-medium text-gray-700 ">
                Issued On:
              </p>
              <p className="block text-sm text-gray-500">11 March, 2027</p>
            </div>
            <div className="h-px w-full bg-gray-200  sm:h-40 sm:w-px"></div>
            <div className="md:text-end">
              <span className="mb-1 text-sm font-medium text-gray-700">To</span>
              <h5 className="mb-2 text-base font-semibold text-gray-800 ">
                Albert Word
              </h5>
              <p className="mb-4 text-sm text-gray-500">
                355, Shobe Lane
                <br />
                Colorado, Fort Collins - 80543
              </p>
              <p className="mb-1.5 block text-sm font-medium text-gray-700 ">
                Due On:
              </p>
              <p className="block text-sm text-gray-500">16 March, 2027</p>
            </div>
          </div>

          {/* table */}
          <div className="overflow-x-auto mt-10  border border-gray-200 rounded-2xl">
            <table class="  w-full text-center text-sm text-gray-700 bg-white">
              <thead class="text-xs     bg-gray-50 text-gray-600">
                <tr>
                  <th class="px-6 py-4">S.No.#</th>
                  <th class="px-6 py-4">Products</th>
                  <th class="px-6 py-4 ">Quantity</th>
                  <th class="px-6 py-4 ">Unit Cost</th>
                  <th class="px-6 py-4 ">Discount</th>
                  <th class="px-6 py-4 ">Total</th>
                </tr>
              </thead>
              <tbody class="">
                <tr class=" text-center text-sm text-gray-500">
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4 font-medium text-gray-900">
                    Macbook pro 13”
                  </td>
                  <td class="px-6 py-4 ">1</td>
                  <td class="px-6 py-4 ">$48</td>
                  <td class="px-6 py-4 ">0%</td>
                  <td class="px-6 py-4">$1,200</td>
                </tr>
                <tr class=" text-center text-sm text-gray-500">
                  <td class="px-6 py-4">2</td>
                  <td class="px-6 py-4 font-medium text-gray-900">
                    Apple Watch Ultra
                  </td>
                  <td class="px-6 py-4 ">1</td>
                  <td class="px-6 py-4 ">$300</td>
                  <td class="px-6 py-4 ">50%</td>
                  <td class="px-6 py-4">$150</td>
                </tr>
                <tr class=" text-center text-sm text-gray-500">
                  <td class="px-6 py-4">3</td>
                  <td class="px-6 py-4 font-medium text-gray-900">
                    iPhone 15 Pro Max
                  </td>
                  <td class="px-6 py-4 ">3</td>
                  <td class="px-6 py-4 ">$800</td>
                  <td class="px-6 py-4 ">0%</td>
                  <td class="px-6 py-4">$1,600</td>
                </tr>
                <tr class=" text-center text-sm text-gray-500">
                  <td class="px-6 py-4">4</td>
                  <td class="px-6 py-4 font-medium text-gray-900">
                    iPad Pro 3rd Gen
                  </td>
                  <td class="px-6 py-4 ">1</td>
                  <td class="px-6 py-4 ">$900</td>
                  <td class="px-6 py-4 ">0%</td>
                  <td class="px-6 py-4">$900</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-end mt-5 ">
            <p className="mb-2 text-sm text-gray-500 ">
              Sub Total amount: $3,098
            </p>
            <p className="mb-2 text-sm text-gray-500 ">Vat (10%): $312</p>
            <p className="text-lg  font-semibold text-gray-800">
              Total : $3,410
            </p>
          </div>
          <hr className="border-gray-100 my-5" />
          
          <div className="text-sm flex flex-wrap gap-3 justify-end">
            <button className="bg-white rounded-lg px-6 py-3 border border-gray-300">
              Proceed to Payment
            </button>
            <button className="text-white bg-blue-600 px-6 py-3  rounded-md">
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
