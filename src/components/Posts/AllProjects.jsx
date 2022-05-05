import {useState , useEffect} from 'react'
import {useDispatch , useSelector} from "react-redux"
import { ThumbUpIcon, ThumbDownIcon, EyeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import {fetchProjectPostsAction} from '../../redux/slices/posts/ProjectPosts'
import moment from 'moment';
import htmlimg from '../assets/images/html.png'

export default function PostsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectPostsAction())
  }, [])

  //select posts from store
  const posts = useSelector(store => store?.ProjectPost);
  const {loading , appErr, serverErr , postList} = posts;
  
  return (
    <>
      <div>
        <div className=" my-10 w-[90%] mx-auto text-center tracking-normal flex justify-between sm:w-full sm:flex-col">
          <h1 className=" text-3xl font-semibold">Latest Project Posts...</h1>
          <p className=" text-blue-900 font-semibold cursor-pointer sm:mt-3">View all Posts</p>
        </div>

       <div className="w-[80%] mx-auto">
                {/* Post goes here */}

                {loading ? (
                  <h1>Loading...</h1>
                ) : appErr || serverErr ? (
                  <h1>Err</h1>
                ) : postList?.lenght <= 0 ? (
                  <h1>No Post Found</h1>
                ) : (
                  postList?.map(post => (
                    <div className="flex flex-wrap border-2 border-bg-blue-600  my-5">
                     <div className=' flex sm:flex-col'>
                     <div className=" w-full ">
                     <Link>
                       {/* Post image */}
                       <img
                         className="w-full h-full object-cover"
                         src={htmlimg}
                         alt=""
                       />
                     </Link>
                    
                   </div>
                    
                      <div class="w-full lg:w-3/4 px-3">
                        <Link class="hover:cursor">
                          <h3 class="mb-1 text-2xl text-blue-600 font-bold font-heading">
                            {/* {capitalizeWord(post?.title)} */}
                            {post?.title}
                          </h3>
                        </Link>
                        <p class="text-gray-300">{post?.abstract}</p>
                        {/* Read more */}
                        <Link className="text-indigo-500 hover:cursor">
                          Read More..
                        </Link>
                        {/* User Avatar */}
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <Link>
                              <img
                                className="h-10 w-10 rounded-full"
                                src={post?.user?.profilePhoto}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              <Link className="text-black hover:cursor ">
                                {post?.user?.firstName} {post?.user?.lastName}
                              </Link>
                            </p>
                            <div className="flex space-x-1 text-sm text-green-500">
                              <time>
                               
                              </time>
                              <span aria-hidden="true">&middot;</span>
                            </div>
                          </div>
                        </div>
                       

                            {/* Likes, views dislikes */}
                      <div className="flex flex-row bg-gray-300 justify-center w-full  items-center ">
                      {/* Likes */}
                      <div className="flex flex-row justify-center items-center ml-4 mr-4 pb-2 pt-1">
                        {/* Togle like  */}
                        <div className="">
                          <ThumbUpIcon className="h-7 w-7 text-indigo-600 cursor-pointer" />
                        </div>
                        <div className="pl-2 text-gray-600">
                          {post?.likes?.lenght ? post?.likes?.lenght : 0}
                        </div>
                      </div>
                      {/* Dislike */}
                      <div className="flex flex-row  justify-center items-center ml-4 mr-4 pb-2 pt-1">
                        <div>
                          <ThumbDownIcon className="h-7 w-7 cursor-pointer text-gray-600" />
                        </div>
                        <div className="pl-2 text-gray-600">
                          {post?.disLikes?.lenght
                            ? post?.disLikes?.lenght
                            : 0}
                        </div>
                      </div>
                      {/* Views */}
                      <div className="flex flex-row justify-center items-center ml-4 mr-4 pb-2 pt-1">
                        <div>
                          <EyeIcon className="h-7 w-7  text-gray-400" />
                        </div>
                        <div className="pl-2 text-gray-600">
                          {post?.numViews}
                        </div>
                      </div>
                    </div>
                      </div>
                     
                    </div>
                    </div>
                  ))
                )}
              </div>
        </div> 
   
    </>
  );
}
