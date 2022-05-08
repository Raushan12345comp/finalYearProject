import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { fetchPostDetailsAction } from "../../redux/slices/posts/ProjectPosts";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import loadingSpinner from "../loading/loadingSpinner";

const PostDetails = ({match: {
    params: { id },
  },}) => {

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostDetailsAction(id));
  }, [id, dispatch]);

  const post = useSelector(state => state?.ProjectPost);

  const { postDetails, loading, appErr, serverErr } = post;
    
  return (
    <>
    {loading ? (
        <div className="h-screen">
          <loadingSpinner />
        </div>
      ) : appErr || serverErr ? (
        <h1 className="h-screen text-red-600 text-xl">
          {serverErr} {appErr}
        </h1>
      ) : (
        <section className="">
          <div className="">
            {/* Post Image */}
           
            <div className=" text-center">
              

              {/* User */}
              
                <div classname=' flex items-center justify-center mx-auto'>
                <img
                  className=" mx-auto w-20 lg:w-24 h-20 lg:h-24 rounded-full"
                  src={postDetails?.user?.profilePhoto}
                  alt=""
                />
               
                
              </div>
              <div className="text-center">
             
                  <h4 className="mb-1 text-2xl font-bold text-gray-700">
                    <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
                      {postDetails?.user?.firstName}{" "}
                      {postDetails?.user?.lastName}{" "}
                    </span>
                  </h4>

                  <h2 className=" my-3 text-3xl text-black font-bold font-heading">
                {postDetails?.title}
              </h2>
                  <p className="text-gray-500">
                  {moment(postDetails?.createdAt).format("MMM Do YY")}
                    
                  </p>

                  <h2 className=" my-3  text-black ">
                Abstract: {!postDetails?.abstract ? "Not Available" : postDetails?.abstract}
              </h2>

              <h2 className=" my-3 text-black ">
              languages: {!postDetails?.languages ? "Not Available" : postDetails?.languages}
              </h2>
              
              <h2 className=" my-3  text-black ">
              keywords: {!postDetails?.keywords ? "Not Available" : postDetails?.keywords}
              </h2>

              <h2 className=" my-3  text-black ">
              category: {!postDetails?.category ? "Not Available" : postDetails?.category}
              </h2>

              <h2 className=" my-3  text-black ">
              Refrences: {!postDetails?.refrences ? "Not Available" : postDetails?.refrences}
              </h2>

              <h2 className=" my-3  text-black ">
              Projectlink: {!postDetails?.projectlink ? "Not Available" : postDetails?.projectlink}
              </h2>

            
                </div>
              {/* Post description */}
              <div class=" flex justify-center text-center">
                <p class="my-3 text-center  text-xl text-gray-700">
                 Description: {!postDetails?.description ? "Not-Found" : postDetails?.description}

                  {/* Show delete and update btn if created user */}
                  <p class="flex justify-center my-3">
                    <Link class="p-3">
                      <PencilAltIcon class="h-8 mt-3 text-purple-600" />
                    </Link>
                    <button class="ml-3">
                      <TrashIcon class="h-8 mt-3 text-red-600" />
                    </button>
                  </p>
                </p>
              </div>
            </div>
          </div>
          {/* Add comment Form component here */}

          <div className="flex justify-center  items-center">
            {/* <CommentsList comments={post?.comments} postId={post?._id} /> */}
            CommentsList
          </div>
        </section>
      )}
    </>
  );
};

export default PostDetails;
