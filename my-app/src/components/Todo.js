import { useState, useEffect } from "react";

function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  //자동submit 새로고침 막기
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      //비어있으면 안해
      return;
    }
    //제출하고 칸 비우
    setToDo("");
    //toDos 배열에 값 추가하기
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your todo list"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((ToDosItem, index) => (
          <li key={index}>{ToDosItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
