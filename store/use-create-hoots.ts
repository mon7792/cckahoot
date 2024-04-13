import { create } from "zustand";
import { question } from "@/types/hoot";
import { randomString } from "@/utils/random";


let activeQuestionId: string = randomString();
const defQuestion: question = {
    id: activeQuestionId,
    title: "",
    options: [
        { type: "triangle", answer: "", isCorrect: true },
        { type: "circle", answer: "", isCorrect: false },
        { type: "square", answer: "", isCorrect: false },
        { type: "diamond", answer: "", isCorrect: false },
    ]
}


type CreateHootState = {
    activeQuestionId: string;
    title: string;
    setTitle: (title: string) => void;
    questions: question[];
    setQuestionTitle: (id: string, title: string) => void;
    addQuestion: () => void;
    deleteQuestion: (id: string) => void;
    setActiveQuestion: (id: string) => void;
    setOptions: (id: string, type: "triangle" | "circle" | "square" | "diamond", value: string, isCorrect: boolean) => void;
    setCheckedOption: (id: string, type: "triangle" | "circle" | "square" | "diamond", isChecked: boolean) => void;
}


export const useCreateHoots = create<CreateHootState>((set) => ({
    title: "Untitled",
    setTitle: (title) => set({ title }),
    activeQuestionId: activeQuestionId,
    questions: [defQuestion],
    setQuestionTitle: (id, title) => set((state) => ({
        questions: state.questions.map((question) => {
            if (question.id === id) {
                return { ...question, title };
            }
            return question;
        })
    })),
    addQuestion: () => set((state) => ({
        questions: [...state.questions, {
            id: randomString(),
            title: "",
            options: [
                { type: "triangle", answer: "", isCorrect: false },
                { type: "circle", answer: "", isCorrect: false },
                { type: "square", answer: "", isCorrect: false },
                { type: "diamond", answer: "", isCorrect: false },
            ]
        }]
    })),
    deleteQuestion: (id) => set((state) => ({ questions: state.questions.filter((question) => question.id !== id) })),
    setActiveQuestion: (id) => set({ activeQuestionId: id }),
    setOptions: (id, type, value, isCorrect) => set((state) => ({
        questions: state.questions.map((question) => {
            if (question.id === id) {
                return {
                    ...question,
                    options: question.options.map((option) => {
                        if (option.type === type) {
                            return { ...option, answer: value, isCorrect };
                        }
                        return option;
                    })
                }
            }
            return question;
        })
    })),
    setCheckedOption: (id, type, isChecked) => set((state) => ({
        questions: state.questions.map((question) => {
            if (question.id === id) {
                return {
                    ...question,
                    options: question.options.map((option) => {
                        if (option.type === type) {
                            return { ...option, isCorrect: isChecked };
                        }
                        return { ...option, isCorrect: !isChecked };;
                    })
                }
            }
            return question;
        })
    }))
}));