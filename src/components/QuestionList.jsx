import React from "react";
import { Search, Code2, Pencil, Trash2 } from "lucide-react";
import { useQuestion } from "../hooks/useQuestion";

const QuestionList = ({ questions = [], setQuestions }) => {
  const { deleteQuestionCard } = useQuestion(setQuestions, questions);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <section
      id="questions"
      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Your Questions</h2>
          <p className="mt-1 text-sm text-gray-500">
            Track your learning and interview preparation.
          </p>
        </div>

        <span className="w-fit rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
          {questions.length} Questions
        </span>
      </div>

      {/* Search and Filters - UI only */}
      <div className="mt-6 flex flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search questions..."
            className={`${inputClass} pl-11`}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:w-[540px]">
          <select className={inputClass} defaultValue="">
            <option value="" disabled>
              Category
            </option>
            <option value="DSA">DSA</option>
            <option value="Git">Git</option>
            <option value="Technical">Technical</option>
          </select>

          <select className={inputClass} defaultValue="">
            <option value="" disabled>
              Status
            </option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <select className={inputClass} defaultValue="">
            <option value="" disabled>
              Difficulty
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div className="mt-6 space-y-3">
        {questions.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 px-4 py-10 text-center">
            <Code2 size={32} className="mx-auto text-gray-400" />

            <h3 className="mt-3 font-semibold text-gray-800">
              No questions yet
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Add your first question to start tracking your progress.
            </p>
          </div>
        ) : (
          questions.map((question) => (
            <div
              key={question.id}
              className="rounded-xl border border-gray-200 p-4 transition hover:border-blue-200 hover:shadow-sm sm:p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Code2 size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {question.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                        {question.category}
                      </span>

                      <span className="rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                        {question.difficulty}
                      </span>

                      <span className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                        {question.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-gray-200 p-2.5 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    onClick={() => deleteQuestionCard(question.id)}
                    type="button"
                    className="rounded-lg border border-gray-200 p-2.5 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default QuestionList;
