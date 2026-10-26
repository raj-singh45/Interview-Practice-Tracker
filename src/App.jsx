import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

function App() {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questionList")) || [],
  );
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <Dashboard />

        <QuestionForm
          questions={questions}
          setQuestions={setQuestions}
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}

        />
        <QuestionList
          questions={questions}
          setQuestions={setQuestions}
          setSelectedQuestion={setSelectedQuestion}
        />
      </main>
    </>
  );
}

export default App;
