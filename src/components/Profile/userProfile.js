import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  HeartIcon,
  EmojiSadIcon,
  UploadIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { MailIcon, EyeIcon } from "@heroicons/react/solid";
import { userProfileAction , followUserAction , unfollowUserAction } from "../../redux/slices/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export default function Profile({
  computedMatch: {
    params: { id },
  },
}) {
  const dispatch = useDispatch();
  const history = useHistory();

    //User data from store
    const users = useSelector(state => state.user);
    const { profile, loading, appErr, serverErr ,followed, unFollowed } = users;
  //fetch user profile
  useEffect(() => {
    dispatch(userProfileAction(id));
  }, [id, dispatch , followed, unFollowed]);

   //send mail handle click
   const sendMailNavigate = () => {
    history.push({
      pathname: "/send_mail",
      state: {
        email: profile?.email,
      },
    });
  };


  return (
    <>
      <div className="h-auto py-7 flex  bg-white">
        {/* Static sidebar for desktop */}

        <div className="flex flex-col min-w-0 flex-1 ">
          <div className="flex-1 relative z-0 flex ">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              <article>
                {/* Profile header */}
                <div>
                  <div>
                    <img
                      className="h-32 w-full object-cover lg:h-48"
                      src={profile?.profilePhoto}
                      alt={profile?.firstName}
                    />
                  </div>
                  <div className="max-w-5xl mx-auto  ">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <div className="flex ">
                        <img
                          className="h-24 w-24 rounded-full sm:hidden  ring-4 ring-white sm:h-32 sm:w-32"
                          src={profile?.profilePhoto}
                          alt={profile?.firstName}
                        />
                      </div>
                      <div className="mt-6">
                        <div className="  2xl:block mt-10 min-w-0 flex-1">
                          <h1 className="text-2xl font-bold text-gray-900 ">
                            {profile?.firstName} {profile?.lastName}
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                              {/* {profile?.accountType} */}
                            </span>
                            {/* Display if verified or not */}
                            {profile?.isAccountVerified ? (
                              <span className="inline-flex ml-2 items-center px-3 py-0.5  rounded-lg text-sm font-medium bg-green-600 text-gray-300">
                                Account Verified
                              </span>
                            ) : (
                              <span className="inline-flex ml-2 items-center px-3 py-0.5  rounded-lg text-sm font-medium bg-red-600 text-gray-300">
                                Unverified Account
                              </span>
                            )}
                          </h1>
                          <p className="text-green-600 mt-2 mb-2">
                          
                           followers: {profile?.followers.length}
                           <br />
                           following: {profile?.following.length} 
                          
                        </p>
                          <div className=' my-2'>
                          <p className='text-lg'>Bio: {profile?.bio}</p>
                          </div>
                          <p className=" my-2 text-lg flex ">
                            <p className=' pr-3'>Date Joined:</p>
                             {moment(profile?.createdAt).format("MMM Do YY")}
                          </p>
                         
                          {/* Who view my profile */}
                          <div className="flex items-center  mb-2">
                            <EyeIcon className="h-5 w-5 " />
                            <div className="pl-2">
                              {/* {profile?.viewedBy?.length}{" "} */}
                              <span className="text-indigo-400 cursor-pointer hover:underline">
                                users viewed your profile
                              </span>
                            </div>
                          </div>

                          {/* is login user */}
                          {/* Upload profile photo */}
                          <Link
                            to={`/upload-photo/${profile?._id}`}
                            className="inline-flex justify-center w-48 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                          >
                            <UploadIcon
                              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Upload Photo</span>
                          </Link>
                        </div>

                        <div className="mt-6 flex flex-col justify-center space-y-3 sm:flex-col sm:justify-center">
                          {/* // Hide follow button from the same */}
                          <div>
                            <button
                            onClick={() =>
                              dispatch(unfollowUserAction(id))
                            }
                              className="inline-flex mr-4 justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                            >
                              <EmojiSadIcon
                                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>Unfollow</span>
                            </button>

                            <>
                            <button
                            onClick={() =>
                              dispatch(followUserAction(id))
                            }
                            type="button"
                            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
                          >
                            <HeartIcon
                              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Follow </span>
                            <span className="pl-2">
                              {profile?.followers?.length}
                            </span>
                          </button>
                            </>
                          </div>

                          {/* Update Profile */}

                          
                        </div>
                      </div>

                      
                    </div>
                    <div className=' my-7 w-[50%] mx-auto'>
                  
                    <div className=' my-3'>
                    <Link
                    to="/profile-update"
                    className="  hover:no-underline hover:bg-purple-300 flex justify-center items-center border-2 border-gray-500 py-1 rounded-full "
                  >
                    <UserIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Update Profile</span>
                  </Link>
                    </div>
                          
                      <div className=' my-3'>

                      
                      <button
                      onClick={sendMailNavigate}
                        className=" hover:no-underline bg-blue-500 hover:bg-purple-300 flex justify-center items-center py-1 rounded-full"
                      >
                        <MailIcon
                          className="-ml-1 mr-2 h-5 w-5 text-gray-200"
                          aria-hidden="true"
                        />
                        <span className="text-base mr-2  text-bold text-white ">
                          Send Message
                        </span>
                      </button>
                      
                      </div>
                    </div>
                    <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                      <h1 className="text-2xl font-bold text-gray-900 truncate">
                        {profile?.firstName} {profile?.lastName}
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Tabs */}
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                  <div className="border-b border-red-900">
                    <div className="max-w-5xl mx-auto "></div>
                  </div>
                </div>
                <div className="flex justify-center place-items-start flex-wrap  md:mb-0">
                  <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                    <h1 className="text-center text-xl border-gray-500 mb-2 border-b-2">
                      Who viewed my profile : 9
                    </h1>

                    {/* Who view my post */}
                    <ul className="">
                      <Link>
                        <div className="flex mb-2 items-center space-x-4 lg:space-x-6">
                          
                          <div className="font-medium text-lg leading-6 space-y-1">
                            <h3>
                              {/* {user?.firstName} {user?.lastName} */}Name
                            </h3>
                            <p className="text-indigo-600">
                              {/* {user.accountType} */} Account Type
                            </p>
                          </div>
                        </div>
                      </Link>
                    </ul>
                  </div>
                  {/* All my Post */}
                  <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                        <h1 className="text-center text-xl border-gray-500 mb-2 border-b-2">
                          My Post: {profile?.projects?.length}
                        </h1>
                        {/* Loop here */}
                        {profile?.projects?.length <= 0 ? (
                          <h2 className="text-center text-xl">No Post Found</h2>
                        ) : (
                          profile?.projects.map(post => (
                            <div className="flex flex-wrap  -mx-3 mt-3  lg:mb-6">
                              
                              <div className="w-full lg:w-3/4 px-3">
                                <Link
                                  // to={`/post/${post?._id}`}
                                  className="hover:underline"
                                >
                                  <h3 className="mb-1 text-2xl text-green-600 font-bold font-heading">
                                    {post?.title}
                                  </h3>
                                </Link>
                                <p className="text-gray-600 truncate">
                                  {post?.description}
                                </p>

                                <Link
                                  className="text-indigo-500 hover:underline"
                                  to={`/posts/${post?._id}`}
                                >
                                  Read more
                                </Link>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
      
    </>
  );
}
