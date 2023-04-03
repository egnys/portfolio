import React from 'react'
import avatar from "../img/Screenshot_3.png"
import { Link } from 'react-router-dom'

export const Main = ({t}) => {
  return (
    <div className='max-w-screen-xl flex flex-col mt-8 pb-20 m-auto items-center justify-center dark:text-white'>
        <div className='flex flex-col items-center'>
            <img src={avatar} alt='avatar' className='w-64 rounded-full'/>
            <span className='text-3xl font-semibold mt-6 tracking-wide'>{t("name")}</span>
            <span className='text-lg font-thin mt-2 tracking-wide'>Front-end JS / React developer</span>
        </div>

        <hr className="w-2/4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className='flex flex-col items-left w-2/4'>
            <span className='text-3xl font-semibold mt-2 tracking-wide'>{t("About")}</span>
            <span className='text-lg font-thin mt-2 tracking-wide break-words'>{t("about_subtitle")}</span>
        </div>

        <hr className="w-2/4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className='flex flex-row justify-between w-2/4 max-sm:flex-col'>
            <div>
                <span className='text-3xl font-semibold mt-2 tracking-wide'>Hard skills</span>
                <div className='flex flex-row mt-6'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p>React, Redux</p>
                </div>
                <div className='flex flex-row mt-6'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p>JavaScript, HTML, CSS, Tailwind</p>
                </div>
                <div className='flex flex-row mt-6'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p>Git</p>
                </div>
                <div className='flex flex-row mt-6'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p>REST API</p>
                </div>
                <div className='flex flex-row mt-6'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p>SQL, MongoDB</p>
                </div>
            </div>

            <div className='max-sm:mt-8'>
                <span className='text-3xl font-semibold mt-2 tracking-wide'>Soft skills</span>
                <div className='flex flex-row mt-6'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <p>{t("Responsible")}</p>
                </div>
                <div className='flex flex-row mt-6'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <p>{t("Punctual")}</p>
                </div>
                <div className='flex flex-row mt-6'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <p>{t("Organised")}</p>
                </div>
                <div className='flex flex-row mt-6'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <p>{t("Open")}</p>
                </div>
                <div className='flex flex-row mt-6'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <p>{t("Help")}</p>
                </div>
            </div>
        </div>

        <hr className="w-2/4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className='flex justify-between w-2/4 flex-col'>
            <span className='text-3xl font-semibold mt-2 tracking-wide'>{t("My projects")}</span>
            <span className='mt-6 font-thin text-lg'>{t("prj_subtitle")}</span>
            <Link to='/projects'
                className="block w-36 pt-1 pb-1 text-lg mt-4 text-center font-semibold text-fuchsia-50 bg-emerald-500 border border-gray-200 rounded-lg shadow hover:bg-emerald-400 dark:bg-emerald-500 dark:border-emerald-700 dark:hover:bg-emerald-400">
                {t("My portfolio")}
            </Link>
        </div>

        <hr className="w-2/4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className='flex justify-between w-2/4 flex-col'>
            <span className='text-3xl font-semibold mt-2 tracking-wide'>{t("Links")}</span>
            <span className='mt-6 font-thin text-lg'>{t("links_subtitle")}</span>
            <Link to='/links'
                className="block w-32 pt-1 pb-1 text-lg mt-4 text-center font-semibold text-fuchsia-50 bg-purple-500 border border-gray-200 rounded-lg shadow hover:bg-purple-400 dark:bg-purple-500 dark:border-gray-700 dark:hover:bg-purple-400">
                {t("Contact")}
            </Link>
        </div>
    </div>
  )
}
