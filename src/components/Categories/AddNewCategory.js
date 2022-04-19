// import { PlusCircleIcon, BookOpenIcon } from "@heroicons/react/solid";

const AddNewCategory = () => {
  return (
    <div className=" h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* <BookOpenIcon className="mx-auto h-12 w-auto" /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add New Category
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">
              These are the categories user will select when creating a post
            </p>
          </p>
        </div>
        {/* Form */}
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              {/* Title */}
              <input
                type="text"
                autoComplete="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-center focus:z-10 sm:text-sm"
                placeholder="New Category"
              />
              <div className="text-red-400 mb-2">
                {/* {formik.touched.title && formik.errors.title} */} Err here
              </div>
            </div>
          </div>

          <div>
            <div className=" mx-auto text-center">
              {/* Submit */}
              <button class="uk-button bg-primeBlue rounded-full text-white font-semibold py-1">Add new Category</button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCategory;
