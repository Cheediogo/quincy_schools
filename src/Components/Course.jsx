import React from 'react';
import Courses from './Database';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar'

 
  
const Course = () => {
    const { id } = useParams();
  
    const oneCourse = Courses.filter(Courz => Courz.id === id);
    return (
      <Sidebar>
        {oneCourse.map(Courz => {
          const { name, details: { intro, branches }} = Courz;
          return (
            <div>
              <h3>Introduction to {name}</h3>
              <p py="4" textAlign="justify">{intro}</p>
              <h4 fontSize="20">Branches</h4>
              <div>
                {branches.map(branch => (
                  <div>
                    {branch}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Sidebar>
    );
  };
  
  export default Course;