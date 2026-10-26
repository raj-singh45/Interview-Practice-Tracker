import { useForm } from "react-hook-form";

export const useQuestion = (setQuestions, questions)=>{

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

  const questionFormSubmit = (data) => {
    const newQuestion = {
      id: crypto.randomUUID(),
      title: data.title.trim(),
      category: data.category,
      difficulty: data.difficulty,
      status: data.status,
    };
    
    let arr = [...questions, newQuestion] ; 
    localStorage.setItem("questionList", JSON.stringify(arr)) ; 
    setQuestions(arr)
    reset();
  };

  const deleteQuestionCard = (id)=>{
    if(!id){
        return ; 
    }
   const newList = questions.filter((question)=> question.id !== id ) ; 
    localStorage.setItem("questionList", JSON.stringify(newList));
    setQuestions(newList) ; 
  }

  
    return {
        register,
        handleSubmit,
        errors, 
        questionFormSubmit,
        deleteQuestionCard, 

    }
}