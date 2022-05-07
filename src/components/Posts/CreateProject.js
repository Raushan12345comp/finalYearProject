import ProjectIcon from "../assets/images/hacker.gif";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { createPostAction } from "../../redux/slices/posts/ProjectPosts";
import ProjectCategoryDropdown from "../Categories/ProjectDropdown";
import Dropzone from "react-dropzone";

const formSchema = Yup.object({
  title: Yup.string().required("Project Title is required"),
  abstract: Yup.string().required("Project Abstract is required"),
  keyword: Yup.string(),
  Language: Yup.string(),
  Refrences_links: Yup.string(),
  Project_link: Yup.string(),
  category: Yup.object().required("Category is required"),
  image: Yup.string(),
});

export default function CreatePost() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      abstract: "",
      keyword: "",
      Language: "",
      Refrences_links: "",
      Project_link: "",
      category: "",
      image: "",
    },
    onSubmit: value => {
      const data = {
        category: value?.category?.label,
        title: value?.title,
        abstract: value?.abstract,
        Language: value?.Language,
        Project_link: value?.Project_link,
        keyword: value?.keyword,
        Refrences_links: value?.Refrences_links,
        image: value?.image,
      };
      console.log(value);
      //dispatch users
      dispatch(createPostAction(data));
    },
    validationSchema: formSchema,
  });

  //select state with useSelector hook
  const storeData = useSelector((store) => store?.ProjectPost);
  const { loading, appErr, serverErr } = storeData;

  return (
    <>
      <div className="  w-full my-10">
        <div className=" text-center my-4 text-3xl font-semibold flex justify-center items-center">
          <h1>UPLOAD PROJECT</h1>
          <img
            src={ProjectIcon}
            className=" w-[60px] h-[60px] object-cover pl-2"
            alt="image"
          />
        </div>

        <div className=" py-6">
          <form onSubmit={formik.handleSubmit}>
            <div className=" mx-auto text-center w-[60%] sm:w-[90%] ">
              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Project Title..</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.title}
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                  placeholder="Enter Project Title.."
                />
              </div>
              <div>
                <p className=" text-red-600 text-xs text-left">
                  {formik.touched.title && formik.errors.title}
                </p>
              </div>

              <div>
                <ProjectCategoryDropdown
                  value={formik.values.category?.label}
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.category}
                  touched={formik.touched.category}
                />
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Abstract</p>
                <textarea
                  class="uk-textarea rounded-lg"
                  rows="5"
                  value={formik.values.abstract}
                  onChange={formik.handleChange("abstract")}
                  onBlur={formik.handleBlur("abstract")}
                  placeholder="Abstract"
                ></textarea>
              </div>
              <div>
                <p className=" text-red-600 text-xs text-left">
                  {formik.touched.abstract && formik.errors.abstract}
                </p>
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">keywords</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.keyword}
                  onChange={formik.handleChange("keyword")}
                  onBlur={formik.handleBlur("keyword")}
                  placeholder="keywords.."
                />
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Language</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.Language}
                  onChange={formik.handleChange("Language")}
                  onBlur={formik.handleBlur("Language")}
                  placeholder="Programming Language Used.."
                />
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Refrences links</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.Refrences_links}
                  onChange={formik.handleChange("Refrences_links")}
                  onBlur={formik.handleBlur("Refrences_links")}
                  placeholder="Refrences.."
                />
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Project link</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.Project_link}
                  onChange={formik.handleChange("Project_link")}
                  onBlur={formik.handleBlur("Project_link")}
                  placeholder="Projectlink.."
                />
              </div>
              
              <div className=" border-dashed border-2 border-indigo-600 rounded-full">
              <h1>Image Upload...</h1>
              <Dropzone
              onBlur={formik.handleBlur("image")}
              accept="image/jpeg, image/png"
              onDrop={acceptedFiles => {
                      formik.setFieldValue("image", acceptedFiles[0]);
                    }}
              >
              {({ getRootProps, getInputProps }) => (
                      <div className="container">
                        <div
                          {...getRootProps({
                            className: "dropzone",
                            onDrop: event => event.stopPropagation(),
                          })}
                        >
                          <input {...getInputProps()} />
                          <p className="text-gray-300 text-lg cursor-pointer hover:text-gray-500">
                        <div className=" text-center mx-auto">
                        <span uk-icon="icon: cloud-upload; ratio: 1" className=" text-orange-700 font-semibold"></span>
                        </div>
                          </p>
                        </div>
                      </div>
                    )}
              
              </Dropzone>
              </div>
            </div>

            <div className=" flex justify-center items-center">
              {loading ? (
                <button
                  disabled
                  className=" text-center bg-orange-500 text-white py-3 px-4 mt-5 mx-auto rounded-full"
                >
                  Loading
                </button>
              ) : (
                <button
                  type="submit"
                 
                  className="  bg-blue-300 text-white py-3 hover:bg-primeBlue px-3 my-5 rounded-full"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
          <div className=" mx-auto text-center pt-6">
            {appErr || serverErr ? (
              <p className=" text-red-600 font-semibold">
                {" "}
                {appErr} {serverErr}{" "}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
