import ProjectIcon from '../assets/images/document.gif'

export default function CreatePost() {
  return (
    <>
      <div className="  w-full my-10">
        <div className=" text-center my-4 text-3xl font-semibold flex justify-center items-center">
          <h1> 
           UPLOAD PAPER</h1>
           <img src={ProjectIcon} className=' w-[60px] h-[60px] object-cover pl-2' alt="image" />

        </div>

        <div className=" py-6">
          <form>
            <div className=" mx-auto text-center w-[60%] sm:w-[90%] ">
              <div className=" my-6 text-left">
                <label htmlFor="" className="mb-2 text-primeBlue">
                Paper Title..
                </label>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  placeholder="Enter Project Title.."
                />
              </div>

              <div className=" my-6 text-left">
                <label htmlFor="" className="mb-2 text-primeBlue">
                  Abstract
                </label>
                <textarea
                  class="uk-textarea"
                  rows="5"
                  placeholder="Abstract"
                ></textarea>
              </div>

              <div className=" my-6 text-left">
                <label htmlFor="" className="mb-2 text-primeBlue">
                  keywords
                </label>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  placeholder="keywords.."
                />
              </div>

              <div className=" my-6 text-left">
                <label htmlFor="" className="mb-2 text-primeBlue">
                  Language
                </label>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  placeholder="Programming Language Used.."
                />
              </div>

              <div className=" my-6 text-left">
                <label htmlFor="" className="mb-2 text-primeBlue">
                  Refrences links
                </label>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  placeholder="Refrences.."
                />
              </div>

              <div className=" my-6 text-left">
                <label htmlFor="" className="mb-2 text-primeBlue">
                  Project link
                </label>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  placeholder="Projectlink.."
                />
              </div>
            </div>

            <div className=" flex justify-center items-center">
              <button type="submit" className="  bg-blue-300 text-white py-3 hover:bg-primeBlue px-3 my-5 rounded-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
