import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCheckBoxValue } from "../redux/CheckBoxSlice";

export const CheckBox = () => {

    const [checkBoxValue, setCheckBoxValue] = useState([]);
    const [showMenu, setShoMenu] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const flag = e.target.checked;
        const value = e.target.value;
        if (flag) {
            setCheckBoxValue([...checkBoxValue, value])

        } else {
            setCheckBoxValue(checkBoxValue.filter((e) => e != value))

        }
    }

    const applySettings = () => {
        dispatch(getCheckBoxValue(checkBoxValue))
        setShoMenu(!showMenu);

    }

    return (
        <>
            <button onClick={() => setShoMenu(!showMenu)} id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 md:py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Filter<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>
            {
                showMenu &&
                <div id="dropdownDefaultCheckbox" className="mt-2 z-20 no-scrollbar overflow-y-auto h-[400px]  absolute right-[2px] md:right-6 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-900 dark:divide-gray-600">
                    <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                        <li>
                            <div className="flex items-center">
                                <h1 className="font-bold">Movie Genre</h1>
                            </div>
                        </li>
                        <hr></hr>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-1" type="checkbox" value="Action" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Action</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-2" type="checkbox" value="Thriller" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thriller</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-3" type="checkbox" value="Drama" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Drama</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-4" type="checkbox" value="Adventure" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-4" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adventure</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-5" type="checkbox" value="Romance" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-5" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Romance</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-6" type="checkbox" value="Comedy" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-6" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Comedy</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-7" type="checkbox" value="Horror" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-7" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Horror</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-8" type="checkbox" value="Crime" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-8" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Crime</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-9" type="checkbox" value="Animation" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-9" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Animation</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-10" type="checkbox" value="Sci-Fi" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-10" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sci-Fi</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-11" type="checkbox" value="Biography" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-11" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Biography</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-12" type="checkbox" value="History" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-12" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">History</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-13" type="checkbox" value="Sport" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-13" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sport</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-14" type="checkbox" value="Family" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-14" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Family</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-15" type="checkbox" value="Mystery" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-15" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mystery</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-16" type="checkbox" value="Family" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-16" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Family</label>
                            </div>
                        </li>

                        <hr></hr>
                        <li>
                            <div className="flex items-center">
                                <h1 className="font-bold">Language</h1>
                            </div>
                        </li>
                        <hr></hr>

                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-17" type="checkbox" value="Hindi" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-17" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hindi</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-18" type="checkbox" value="English" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-18" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">English</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-19" type="checkbox" value="Malayalam" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-19" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Malayalam</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-20" type="checkbox" value="Kannada" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-20" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kannada</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-21" type="checkbox" value="Tamil" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-21" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tamil</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-22" type="checkbox" value="Japanese" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-22" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Japanese</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-23" type="checkbox" value="Telugu" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-23" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telugu</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-24" type="checkbox" value="Chinese" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-24" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chinese</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-25" type="checkbox" value="Spanish" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-25" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Spanish</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-26" type="checkbox" value="Korean" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-26" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Korean</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-27" type="checkbox" value="Bengali" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-27" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bengali</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-28" type="checkbox" value="Sinhala" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-28" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sinhala</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-29" type="checkbox" value="Oriya" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-29" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Oriya</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-30" type="checkbox" value="Assamese" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-30" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assamese</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-31" type="checkbox" value="Urdu" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-31" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Urdu</label>
                            </div>
                        </li>
                        <hr></hr>
                        <li>
                            <div className="flex items-center">
                                <h1 className="font-bold">Country</h1>
                            </div>
                        </li>
                        <hr></hr>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-32" type="checkbox" value="India" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-32" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">India</label>
                            </div>
                        </li><li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-33" type="checkbox" value="United States" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-33" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">United States</label>
                            </div>
                        </li><li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-34" type="checkbox" value="United Arab Emirates" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-34" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">United Arab Emirates</label>
                            </div>
                        </li><li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-35" type="checkbox" value="United Kingdom" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-35" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">United Kingdom</label>
                            </div>
                        </li><li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-36" type="checkbox" value="Australia" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-36" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Australia</label>
                            </div>
                        </li><li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-37" type="checkbox" value="Canada" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-37" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Canada</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-38" type="checkbox" value="France" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-38" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">France</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-39" type="checkbox" value="Kuwait" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-39" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kuwait</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-40" type="checkbox" value="Singapore" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-40" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Singapore</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-41" type="checkbox" value="Germany" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-41" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Germany</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-42" type="checkbox" value="Finland" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-42" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Finland</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input onChange={handleChange} id="checkbox-item-43" type="checkbox" value="Mexico" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="checkbox-item-43" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mexico</label>
                            </div>
                        </li>
                        <li>
                            <button onClick={applySettings} className="text-white w-full  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</button>
                        </li>
                    </ul>
                </div>
            }
        </>
    )
}
