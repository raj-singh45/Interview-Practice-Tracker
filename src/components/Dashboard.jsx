import React from "react";
import {
  BookOpen,
  CheckCircle2,
  MessageSquare,
  Code2,
  TrendingUp,
  Target,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Questions",
      value: 120,
      description: "Questions in your tracker",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Completed DSA",
      value: 45,
      description: "Problems solved",
      icon: CheckCircle2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Interview Questions",
      value: 18,
      description: "Questions completed",
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Machine Coding",
      value: "3/5",
      description: "Tasks completed",
      icon: Code2,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const completed = 50;
  const total = 120;
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-600">
            YOUR PREPARATION OVERVIEW
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Track your progress and stay consistent with your preparation.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-gray-900">
                      {item.value}
                    </h2>
                  </div>

                  <div className={`rounded-xl p-3 ${item.color}`}>
                    <Icon size={23} />
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Overall Progress */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Overall Progress
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your question-solving journey
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-3 text-green-600">
                <TrendingUp size={24} />
              </div>
            </div>

            <div className="mt-7 flex items-end justify-between">
              <div>
                <span className="text-4xl font-bold text-gray-900">
                  {percentage}%
                </span>

                <p className="mt-2 text-sm text-gray-500">
                  {completed} out of {total} questions completed
                </p>
              </div>
            </div>

            <div
              className="mt-5 h-3 w-full overflow-hidden rounded-full bg-gray-100"
              role="progressbar"
              aria-label="Overall completion"
              aria-valuenow={percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-green-500 transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 size={17} className="text-green-500" />
              Keep going! Every question counts.
            </div>
          </div>

          {/* Daily Motivation */}
          <div className="flex flex-col justify-between rounded-2xl bg-gray-900 p-6 text-white shadow-sm">
            <div>
              <div className="mb-5 inline-flex rounded-xl bg-white/10 p-3">
                <Target size={25} />
              </div>

              <h2 className="text-xl font-semibold">
                Small steps, big results.
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                Consistency beats intensity. Solve one more problem today
                and move closer to your goal.
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4">
              <p className="text-sm text-gray-300">
                Your next goal
              </p>

              <p className="mt-1 text-lg font-semibold">
                Complete 5 more questions
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;