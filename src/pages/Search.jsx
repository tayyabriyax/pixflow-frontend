import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { getSearchedUsersAsync } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE_URL } from '../store/constants';

const Search = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const users = useSelector(state => state.user.searchedUsers);

    const dispatch = useDispatch();

    const handleQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        dispatch(getSearchedUsersAsync(searchQuery));
    }, [searchQuery])


    return (
        <div className="flex min-h-screen bg-white cursor-auto">

            <div className="w-96 mx-auto py-8">

                <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
                    <FiSearch className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleQueryChange}
                        className="flex-1 bg-transparent outline-none px-2 py-1"
                    />
                </div>

                <div className="mt-4">
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <div key={index} className="flex items-center justify-between p-2 
                                                hover:bg-gray-100 rounded-lg cursor-pointer">
                                <div className='flex gap-3'>
                                    <img
                                        src={`${IMAGE_URL}${user.profilePic}`}
                                        alt={user.userName}
                                        className="w-10 h-10 rounded-full object-cover" />

                                    <div>
                                        <p className="font-semibold">{user.userName}</p>
                                        <p className="text-gray-500 text-sm">{user.email}</p>
                                    </div>
                                </div>

                                <button
                                    className="ml-2 px-4 py-2 bg-white border hover:text-white text-sm rounded hover:bg-purple-600"
                                >
                                    Follow
                                </button>
                            </div>
                        ))
                    ) : searchQuery ? (
                        <p className="text-gray-500 text-center mt-4">No results found</p>
                    ) : (
                        <p className="text-gray-500 text-center mt-4">Start typing to search...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search
