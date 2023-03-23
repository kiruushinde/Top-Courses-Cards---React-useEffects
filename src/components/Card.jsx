import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = (props) => {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;


    function clickHandler() {
        // what should be logic
        if (likedCourses.includes(course.id)) {
            // already liked so remove
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }
        else {
            // not liked, so add it 

            // if length is 0
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prevCourses) => [...prevCourses, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className='flex flex-col w-[300px] bg-gray-900 rounded-md bg-opacity-80 overflow-hidden'>
            <div className='relative'>
                <img className='' src={course.image.url} alt="" />

                <div className='w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-[-13px] grid place-content-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='text-white mt-2'>
                    {course.description.length > 100 ? (course.description.substr(0, 100) + "...") : (course.description) + "..."
                    }
                </p>
            </div>
        </div>
    )
}

export default Card