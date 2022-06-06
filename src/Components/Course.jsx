import React from 'react';
import Courses from './Database';
import { useParams } from 'react-router-dom';
 
  
const Course = () => {
    const { id } = useParams();
    console.log(id)
    const oneCourse = Courses.filter(Courz => Courz.id === id);
    console.log(oneCourse);
    return (
      <>
        {oneCourse.map(Courz => {
          const { name, details: { intro, branches }} = Courz;
          return (
            <div key={name}>
              <h3>Introduction to {name}</h3>
              <p py="4" textAlign="justify">{intro}</p>
              <h4 fontSize="20">Branches</h4>
              <div>
                {branches.map(branch => (
                  <div key={branch}>
                    {branch}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </>
    );
  };
  
  export default Course;

  // const singleCourse = course.filter(item => item.id === id);
  // return (
  //   <Layout>
  //     {singleCourse.map(item => {
  //       const {
  //         name,
  //         details: { intro, branches },
  //       } = item;
  //       return (
  //         <Box>
  //           <Heading color="blue">Introduction to {name}</Heading>
  //           <Text py="4" textAlign="justify">
  //             {intro}
  //           </Text>
  //           <Heading fontSize="20">Branches</Heading>
  //           <Box>
  //             {branches.map(element => (
  //               <Branch
  //                 key={element}
  //                 element={element}
  //                 intro={intro}
  //               />
  //             ))}