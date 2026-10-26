import React from "react";
import { Plus } from "lucide-react";
import { useQuestion } from "../hooks/useQuestion";

const QuestionForm = ({ questions , setQuestions,}) => {


const { register,errors,questionFormSubmit,handleSubmit} =  useQuestion(setQuestions,questions)

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Add Question
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Add a question to your preparation tracker.
        </p>
      </div>

      <form onSubmit={handleSubmit(questionFormSubmit)} className="space-y-5">
        <div>
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Question Title
          </label>

          <input
            id="title"
            placeholder="e.g. Two Sum"
            className={inputClass}
            {...register("title", {
              required: "Question title is required.",
              validate: (value) =>
                value.trim().length > 0 ||
                "Question title cannot contain only spaces.",
            })}
          />

          {errors.title && (
            <p className="mt-2 text-sm text-red-600">
              {errors.title.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label htmlFor="category" className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              className={inputClass}
              {...register("category", { required: true })}
            >
              <option value="DSA">DSA</option>
              <option value="Git">Git</option>
              <option value="Technical">Technical</option>
            </select>
          </div>

          <div>
            <label htmlFor="difficulty" className="text-sm font-medium text-gray-700">
              Difficulty
            </label>
            <select
              id="difficulty"
              className={inputClass}
              {...register("difficulty", { required: true })}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              className={inputClass}
              {...register("status", { required: true })}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end border-t border-gray-100 pt-5">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={18} />
            Add Question
          </button>
        </div>
      </form>
    </section>
  );
};

export default QuestionForm;