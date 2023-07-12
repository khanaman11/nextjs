'use client'
import Navebar from '@/components/Navebar'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [mrp, setMrp] = useState('');
  const [calculation, setCalculation] = useState('');
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')

  const submit = () => {
    if (operation == '+') {
      setResult(+mrp + +calculation)
    } else if (operation == '-') {
      setResult(mrp - calculation)

    } else if (operation == '*') {
      setResult(mrp * calculation)

    } else if (operation == '/') {
      setResult(mrp / calculation)

    } else if (operation == '%') {
      setResult((mrp * calculation) / 100)

    }
  }
  return (
    <>
      <Navebar />

      <div className='w-2/4 mx-auto text-black mt-5'>
        <div className='flex p-4 space-x-3'>
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">mrp</label>
            <input onChange={(e) => setMrp(e.target.value)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">discount</label>
            <input onChange={(e) => setCalculation(e.target.value)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>

            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select onChange={(e) => setOperation(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a operation</option>
              <option value='+'>+</option>
              <option value='-'>-</option>
              <option value='*'>*</option>
              <option value='/'>/</option>
              <option value='%'>%</option>

            </select>

          </div>
          <div className='mt-6'>
            <button type='button' onClick={() => submit()} className=' px-4 py-3 text-white rounded-md  bg-green-700 hover:bg-green-900'> submit</button>
          </div>
        </div>
      </div>

      <div className='w-1/4 mx-auto text-black mt-5 '>
        <div className=' border-1 border-blue-500 rounded-md'>

          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    MRP
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {mrp}
                  </th>
                </tr>


                <tr>
                  <th scope="col" class="px-6 py-3">
                    calculation
                  </th>
                  <td class="px-6 py-4">
                    {calculation}
                  </td>
                </tr>
                <tr>
                  <th scope="col" class="px-6 py-3">
                    operation
                  </th>
                  <td class="px-6 py-4">

                    {
                      operation
                    }

                  </td>
                </tr>

                <tr>
                  <th scope="col" class="px-6 py-3">
                    result
                  </th>
                  <td class="px-6 py-4">

                    {
                      result
                    }

                  </td>
                </tr>



              </thead>
             
            </table>
          </div>

        </div>
      </div>
    </>
  )
}
