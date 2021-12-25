import React from 'react'

function SubcribeForm() {
    return (
        <div className={'flex flex-col border-l-2 pl-4 border-blue_pink_set-blue_2'}>
            <form>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email </label>
                <div className={'flex'}>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="address@xxx.com"></input>
                    <div>
                        <button className="shadow bg-gradient-to-r  from-pink-400 via-red-500 to-yellow-500  hover: focus:shadow-outline focus:outline-none text-white font-thin py-2 px-4 rounded mx-1" type="button">Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SubcribeForm
