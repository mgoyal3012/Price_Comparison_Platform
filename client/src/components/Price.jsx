import React from 'react'

export default function Price({abcd}) {
  return (
  //   <div className="flex ...">
  //     <div className="flex-none w-14 ...">
  //       {abcd.rating} stars
  //     </div>
  //     <div className="flex-none w-32 ...">
  //       Rs. {abcd.price}
  //     </div>
  //     <div className="flex-1 ...">
  //       <a href={abcd.link}>click here</a>
  //     </div>
  // </div>
  <div className="flex mb-4">
                                <td className="w-1/3 border-b border-gray-200 bg-white text-center text-sm">
            
                                        
                                        <div class="ml-3 " >
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {abcd.rating}
                                            </p>
                                        </div>
                                    
                                </td>
                                <td class="w-1/3 border-b border-gray-200 bg-white text-center text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">Rs. {abcd.price}</p>
                                </td>
                              
                                <td class="w-1/3 border-b border-gray-200 bg-white text-center text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight mb-3">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full "></span>
                                        <span class="relative"><a href={abcd.link} target='_blank'>click here</a></span>
                                    </span>
                                </td>
                            </div>
  
  )
}
