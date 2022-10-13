interface ITask {
    id: number; 
    name: string; 
    age: number;
};
// типы можно расширять через конструкцию &
type TTask = ITask & {
    field?: string;
    otherfield?: string;
};

const obj: {
    name: string;
    age: number; 
    task: TTask[];
    } = {
    name: "Yan",
    age: 21,
    task: [
        { id: 1, name: "Yan", age: 21, field: "123"},
        { id:2, name: "Yan", age: 21 }
    ],
};

console.log(obj.task.map(item => item?.field));
export {};