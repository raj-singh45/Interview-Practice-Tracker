import { useState } from "react";
import { useForm } from "react-hook-form";

export const useQuestion = (
  questions,
  setQuestions,
  selectedQuestion,
  setSelectedQuestion,
) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "DSA",
      difficulty: "Easy",
      status: "Pending",
    },
  });

  let editingIndex = selectedQuestion?.id;

  const questionFormSubmit = (data) => {
    const newQuestion = {
      id: crypto.randomUUID(),
      title: data.title.trim(),
      category: data.category,
      difficulty: data.difficulty,
      status: data.status,
    };
    //updation mode
    if (editingIndex) {
      console.log("up strt ");
      let afterEdit = questions.map((question) => {
        return question.id === editingIndex
          ? { ...data, id: question.id }
          : question;
      });
      setQuestions(afterEdit);
      reset({
        title: "",
        category: "DSA",
        difficulty: "Easy",
        status: "Pending",
      });

      setSelectedQuestion(null);

      localStorage.setItem("questionList", JSON.stringify(afterEdit));
      console.log(" up end");
    }
    //creation mode
    else {
      console.log("creation hii");
      let arr = [...questions, newQuestion];
      localStorage.setItem("questionList", JSON.stringify(arr));
      setQuestions(arr);
      reset({
        title: "",
        category: "DSA",
        difficulty: "Easy",
        status: "Pending",
      });
      console.log("creation end");
    }
  };

  const deleteQuestionCard = (id) => {
    if (!id) {
      return;
    }
    const newList = questions.filter((question) => question.id !== id);
    localStorage.setItem("questionList", JSON.stringify(newList));
    setQuestions(newList);
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    questionFormSubmit,
    deleteQuestionCard,
    editingIndex,
  };
};
