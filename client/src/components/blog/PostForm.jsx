import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../services/api";
import Button from "../ui/Button";
import Loader from "../ui/Loader";

const PostForm = ({ onSubmit, initialData, loading }) => {
  const [categories, setCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      title: "",
      content: "",
      category: "",
      image: null,
    },
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (initialData) {
      setValue("title", initialData.title);
      setValue("content", initialData.content);
      setValue("category", initialData.category?._id);
      if (initialData.image) {
        setImagePreview(initialData.image);
      }
    }
  }, [initialData, setValue]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          rows={6}
          {...register("content", { required: "Content is required" })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          {...register("category")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Featured Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
        />
        {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-40 object-cover rounded-md"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate(-1)}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? <Loader size="small" /> : "Save Post"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;