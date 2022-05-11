import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbUpIcon, ThumbDownIcon, EyeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { fetchCoursePostsAction, toggleAddLikesToPost } from "../../redux/slices/posts/CoursePost";
import {fetchCategoriesAction} from '../../redux/slices/catrgory/courseCategory'
import moment from "moment";
import htmlimg from "../assets/images/html.png";
import Loading from "../loading/loadingSpinner";

export default function PostsList() {

    //select posts from store
    const posts = useSelector((store) => store?.Courses);
    const { loading, appErr, serverErr, courseList , likes } = posts;
  
    //select categories from store
    const category = useSelector((state) => state?.CourseCategory);
    const {
      categoryList,
      loading: catLoading,
      appErr: catAppErr,
      serverErr: catServerErr,
    } = category;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursePostsAction(''));
  }, [dispatch , likes]);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);



  return (
    <>
      <div>
        <div className=" my-10 w-[90%] mx-auto text-center tracking-normal flex justify-between sm:w-full sm:flex-col">
          <h1 className=" text-3xl font-semibold">Latest Courses...</h1>
          <p  onClick={() =>
            dispatch(fetchCoursePostsAction(''))
          } className=" text-blue-900 font-semibold cursor-pointer sm:mt-3">
            View all Courses
          </p>
        </div>

        <div className=" flex justify-between">
          <div className="">
            
              
                <h1 className=" text-xl mb-2 font-semibold">Categories</h1>
             
          
            <div className="categ_box ">
            <ul
              
              className="  h-auto  text-white font-semibold"
            >
              {catLoading ? (
                <Loading />
              ) : catAppErr || catServerErr ? (
                <h1>
                  {catServerErr} {catAppErr}
                </h1>
              ) : categoryList?.lenght <= 0 ? (
                <h1>No Category Found</h1>
              ) : (
                categoryList?.map(category => (
                  <li>
                    <p
                      onClick={() =>
                        dispatch(fetchCoursePostsAction(category?.title))
                      }
                      className=" cursor-pointer py-2 px-3 mb-4 text-white font-semibold  "
                    >
                      {category?.title}
                    </p>
                  </li>
                ))
              )}
            </ul>
            </div>
          </div>

       
          <div className="w-[80%] h-auto ">
            {loading ? (
              <Loading />
            ) : appErr || serverErr ? (
              <h1>Err</h1>
            ) : courseList?.lenght <= 0 ? (
              <h1>No Post Found</h1>
            ) : (
              courseList?.map((post) => (
                <div key={post.id} className=" mb-5 h-auto shadow-md py-3 px-2 rounded-md shadow-blue-500/50">
                  <div className=" flex sm:flex-col">
                    <div className=" mr-4 sm:w-full sm:mr-0">
                      <img src={htmlimg} alt="image" />
                    </div>

                    <div>
                      <h1 className=" text-2xl text-gray-500 font-semibold">
                        {post?.title}
                      </h1>

                      <div className=" flex items-center">
                        <span
                          uk-icon="icon: calendar"
                          className=" pr-1 text-purple-700"
                        ></span>
                        <p className="">
                          {moment(post.createdAt).format("MMM Do YY")}
                        </p>
                      </div>

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
                            <Link  className="text-black hover:cursor ">
                              {post?.user?.firstName} {post?.user?.lastName}
                            </Link>
                          </p>
                          <div className="flex space-x-1 text-sm text-green-500">
                            <time></time>
                            <span aria-hidden="true">&middot;</span>
                          </div>
                        </div>
                      </div>

                      <div className=" my-3">
                      <Link
                      to={`/project/${post?._id}`}
                      className="hover:no-underline text-primeBlue font-semibold hover:text-primeVoilet"
                    >
                      Read More..
                    </Link>
                        
                      </div>
                    </div>
                  </div>

                  <div className=" flex">
                    <div className=" pr-4 flex">
                    <ThumbUpIcon
                    onClick={() =>
                      dispatch(toggleAddLikesToPost(post?._id))
                    }
                    className="h-7 w-7 text-indigo-600 cursor-pointer"
                  />
                  {post?.likes?.length}
                    </div>
                    

                    <div className=" px-4 flex">
                    <EyeIcon className="h-7 w-7  text-gray-400" />
                      {post?.viewCount}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        
        </div>
      </div>
    </>
  );
}