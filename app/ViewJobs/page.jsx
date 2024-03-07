"use client"

import React, {useState, useEffect} from 'react';
import testData from "/libs/MOCK_DATA.json";

const ViewJobs = () => {

    const [Data] = useState(() => testData, []);

    useEffect(() => {

        fetch('http://localhost:3000/MOCK_DATA.json')
            .then (res => res.json())
            .then (jsonData => SVGMetadataElement(jsonData));
    })
  return (
    <>
    <h1><center>Current Jobs</center></h1>
   <form>
       <label>
           Jobs <br />
           <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Genders</th>
                        <th>Current Job</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((Data, item) =>(
                            <tr key={item}>
                                <td>{Data.id}</td>
                                <td>{Data.genders}</td>
                                <td>{Data.current_job}</td>
                                <td>{Data.duration}</td>

                            </tr>
                        ))

                    }
                    
                </tbody>
           </table>
                
                         

       </label>
   </form>
</>
  )
};


export default ViewJobs;
 