export default function Message_List(messages) {
    return (
        <ul className='space-y-2 block align-top h-[90%] overflow-auto'>
        {
          messages.map((message, index) => {
            return (
              <li key={index} className='w-full p-2 bg-gray-500 rounded-md border-black border-2
                                        odd:text-right odd:pl-[100px] 
                                        even:text-left even:pr-[100px]'>
                {message}
              </li>
            )
          })
        }
      </ul>
    )
}