import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThumbUpIcon, ThumbDownIcon, EyeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { fetchProjectPostsAction, toggleAddLikesToPost } from "../../redux/slices/posts/ProjectPosts";
import {fetchCategoriesAction} from '../../redux/slices/catrgory/categorySlice'
import moment from "moment";
import htmlimg from "../assets/images/html.png";
import Loading from "../loading/loadingSpinner";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  ChakraProvider,
  Button
} from "@chakra-ui/react";

export default function PostsList() {

    //select posts from store
    const posts = useSelector((store) => store?.ProjectPost);
    const { loading, appErr, serverErr, postList , likes } = posts;
  
    //select categories from store
    const category = useSelector((state) => state?.category);
    const {
      categoryList,
      loading: catLoading,
      appErr: catAppErr,
      serverErr: catServerErr,
    } = category;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectPostsAction(''));
  }, [dispatch , likes]);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);



  return (
    <>
      <div>
        <div className=" my-10 w-[90%] mx-auto text-center tracking-normal flex justify-between sm:w-full sm:flex-col">
          <h1 className=" text-3xl font-semibold">Latest Project Posts...</h1>
          <p  onClick={() =>
            dispatch(fetchProjectPostsAction(''))
          } className=" text-blue-900 font-semibold cursor-pointer sm:mt-3">
            View all Posts
          </p>
        </div>

        <div className=" flex justify-between sm:flex-col">
          <div className="">
          <div className=" sm:hidden">
            
              
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

          <div className=" lg:hidden">
          <Menu closeOnSelect={true}>
          <MenuButton as={Button} colorScheme="blue">
          Categories
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup title="Project Categories" type="radio">
              {
                categoryList?.map(category => (
                  
                    <p
                      onClick={() =>
                        dispatch(fetchProjectPostsAction(category?.title))
                      }
                      className=" cursor-pointer py-2 mb-4 text-black font-semibold  "
                    >
                    <MenuItemOption value="asc">{category?.title}</MenuItemOption>

                     
                    </p>
                  
                ))
              }
             
            </MenuOptionGroup>
          </MenuList>
        </Menu>
          </div>
          </div>

          <div className="w-[80%] h-auto sm:mx-auto">
            {/* Post goes here */}

            {loading ? (
              <Loading />
            ) : appErr || serverErr ? (
              <h1>Err</h1>
            ) : postList?.lenght <= 0 ? (
              <h1>No Post Found</h1>
            ) : (
              postList?.map((post) => (
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
                    className="h-7 w-7 text-blue-600 cursor-pointer"
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
