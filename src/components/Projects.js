import React from 'react'
import { Link } from 'react-router-dom'
import smartCard from  '../img/smartcard_ua.png'
import cypher from '../img/cypher.png'
import todolist from '../img/todolist.png'
const Projects = ({t}) => {
  return (
    <div className='max-w-screen-xl flex flex-col mt-8 pb-20 m-auto items-center justify-center dark:text-white'>
        <div className='w-2/4 flex flex-col items-center'>
            <span className='text-3xl font-semibold mt-6 tracking-wide'>{t("Projects")}</span>
            <span className='text-xl font-thin mt-2 tracking-wide'>{t("prj_page_subtitle")}</span>
        </div>

        <hr className="w-2/4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className='flex flex-col items-left w-2/4'>
            <span className='text-3xl font-semibold mt-2 tracking-wide'>{t("Main projects")}</span>
            <span className='text-lg font-thin mt-2 tracking-wide break-words'>{t("main_prj_subtitle")}</span>

            <a href='https://smartcard-frontend.vercel.app/' target="_blank">
                <div className='mt-8 flex flex-col items-center'>
                    <img src={smartCard} alt="Link" className='w-3/4'/>
                    <span className='text-xl font-semibold tracking-wide'>SmartCard</span>
                    <span className='text-lg font-thin tracking-wide text-center'>{t("smartcard_subtitle")}</span>
                </div>
            </a>
        </div>

        <hr className="w-2/4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className='flex flex-col items-left w-2/4'>
            <span className='text-3xl font-semibold mt-2 tracking-wide'>{t("Secondary projects")}</span>
            <span className='text-lg font-thin mt-2 tracking-wide break-words'>{t("sec_prj_subtitle")}</span>

            <a href='https://todo-chi-eosin.vercel.app/' target="_blank">
                <div className='mt-8 flex flex-col items-center'>
                    <img src={todolist} alt="Link" className='w-3/4'/>
                    <span className='text-xl font-semibold tracking-wide mt-4'>TodoList</span>
                    <span className='text-lg font-thin tracking-wide'>{t("todo_subtitle")}</span>
                </div>
            </a>
            <a href='https://egnys.github.io/cypher/' target="_blank">
                <div className='mt-8 flex flex-col items-center'>
                    <img src={cypher} alt="Link" className='w-3/4'/>
                    <span className='text-xl font-semibold tracking-wide mt-4'>Cypher</span>
                    <span className='text-lg font-thin tracking-wide text-center'>{t("cypher_subtitle")}</span>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Projects