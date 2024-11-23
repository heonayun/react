import React, { useContext } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { RouteContext } from '../../context/RouteContext';
import { useSelector } from 'react-redux'

const Job = () => {
    // const [ searchParams ] = useSearchParams()
    // const title = searchParams.get('title')

    const {table} = useContext(RouteContext);
    const {title} = useParams();
    // title === developer
    const jobs = useSelector((state) => state.jobs)
    // const skillList = skills.map((skill, i) => (
    //     <tr><td key={i}>{skill}</td></tr>
    // ))

    // redux에 있는 jobs

    return (
        <div>
            {title && jobs[title] ? (
            <table style={table}>
                <thead>
                    <tr>
                        <th>기술</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{title}</th>
                    </tr>
                    <tr>{jobs.name}</tr>
                    {/* {skillList} */}
                    {jobs[title].skills.map((skill, i) => (
                        <tr><td key={i}>{skill}</td></tr>
                    ))}
                </tbody>
            </table>
            ) : (
                <h1>존재하지 않는 페이지 입니다.</h1>
            )}
        </div>
    ); 
};

export default Job;