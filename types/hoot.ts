type option = {
    type: "triangle" | "circle" | "square" | "diamond";
    answer: string;
    isCorrect: boolean;
}

export type question = {
    id: string;
    title: string;
    options: option[];
}