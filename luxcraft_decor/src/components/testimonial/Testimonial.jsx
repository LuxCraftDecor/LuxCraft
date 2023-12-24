import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
      <div>

<div className="flex flex-wrap mb-5">
  <div className="w-full  px-3 mb-6  mx-auto">
    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-blue-600 bg-white m-5">
    
      <div className="flex-auto block py-8 px-9 justify-center ">
        <div>
          <div className=" flex flex-col mb-9 justify-center items-center">
            <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">Our Executive Team</h1>
            <span className="text-[1.15rem] font-medium text-muted"> Meet our talented team, a dynamic group of experts driven by passion and innovation. </span>
          </div>
          <div className="flex flex-wrap lg:space-x-16 w-full justify-center">
            <div className="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div className="text-center">
                <a href="" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Samantha Reynolds</a>
                <span className="block font-medium text-muted">Marketing Manager</span>
              </div>
            </div>
            <div className="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div className="text-center">
                <a href="" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Benjamin Martinez</a>
                <span className="block font-medium text-muted">Sales Executive</span>
              </div>
            </div>
            <div className="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div className="text-center">
                <a href="" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Emily Turner</a>
                <span className="block font-medium text-muted">Customer Support</span>
              </div>
            </div>
            <div className="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div className="text-center">
                <a href="" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Jason Anderson</a>
                <span className="block font-medium text-muted">Development Engineer</span>
              </div>
            </div>
            <div className="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div className="text-center">
                <a href="" className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Olivia Carter</a>
                <span className="block font-medium text-muted">Creative Director</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>



    )
}

export default Testimonial