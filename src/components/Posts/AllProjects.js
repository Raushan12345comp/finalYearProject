import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbUpIcon, ThumbDownIcon, EyeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { fetchProjectPostsAction } from "../../redux/slices/posts/ProjectPosts";
import {fetchCategoriesAction} from '../../redux/slices/catrgory/categorySlice'
import moment from "moment";
import htmlimg from "../assets/images/html.png";
import Loading from "../loading/loadingSpinner";

export default function PostsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectPostsAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  //select posts from store
  const posts = useSelector((store) => store?.ProjectPost);
  const { loading, appErr, serverErr, postList } = posts;

  //select categories from store
  const category = useSelector((state) => state?.category);
  const {
    categoryList,
    loading: catLoading,
    appErr: catAppErr,
    serverErr: catServerErr,
  } = category;

  return (
    <>
      <div>
        <div className=" my-10 w-[90%] mx-auto text-center tracking-normal flex justify-between sm:w-full sm:flex-col">
          <h1 className=" text-3xl font-semibold">Latest Project Posts...</h1>
          <p className=" text-blue-900 font-semibold cursor-pointer sm:mt-3">
            View all Posts
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
                categoryList?.map((category) => (
                  <li>
                    <p
                      onClick={() =>
                        dispatch(fetchProjectPostsAction(category?.title))
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
            {/* Post goes here */}

            {loading ? (
              <Loading />
            ) : appErr || serverErr ? (
              <h1>Err</h1>
            ) : postList?.lenght <= 0 ? (
              <h1>No Post Found</h1>
            ) : (
              postList?.map((post) => (
                <div className=" mb-5 h-auto shadow-md py-3 px-2 rounded-md shadow-blue-500/50">
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

                      <div>
                        languages:
                        {post.languages == null ? "node" : post.languages}
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
                            <Link className="text-black hover:cursor ">
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
                        <Link className=" hover:no-underline text-primeBlue font-semibold hover:text-primeVoilet">
                          Read More...
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className=" flex">
                    <div className=" pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                    </div>
                    <div className=" px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                        />
                      </svg>
                    </div>

                    <div className=" px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
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
