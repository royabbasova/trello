document.getElementById("title_input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("title_input").classList.add("border_none");
    }
});

const main_container = document.getElementById("main_container");
const addNewList = document.getElementById("addNewList");

let counter = 1;

function addList() {
    let main_container_item = document.createElement("li");
    main_container_item.className = "main_container_item";
    main_container_item.id = `card_${counter.toString()}`;

    let card_header = document.createElement("div");
    card_header.className = "card_header";

    let card_name_input = document.createElement("input");
    card_name_input.type = "text";
    card_name_input.className = "card_name_input";
    card_name_input.id = "card_name_input";
    card_name_input.placeholder = "Untitled";

    let close_btn = document.createElement("button");
    close_btn.className = "close_btn";
    close_btn.id = "close_btn";
    close_btn.onclick = function () {
        main_container_item.remove();
    };

    let fa_solid = document.createElement("i");
    fa_solid.classList = "fa-solid fa-xmark";

    let task_container = document.createElement("ul");
    task_container.className = "task_container";
    task_container.id = `task_${counter.toString()}`;

    let add_task = document.createElement("button");
    add_task.className = "add_task";
    add_task.id = "add_task";
    add_task.innerText = "+ Add new Line";

    add_task.onclick = function () {
        addLine();
    };
    
    close_btn.append(fa_solid);
    card_header.append(card_name_input, close_btn);
    main_container_item.append(card_header, task_container, add_task);
    main_container.append(main_container_item);
    
    main_container.insertAdjacentElement("beforeend", addNewList);
    counter++;
    
    
    function addLine() {
    
        // main_container_item = document.getElementById(`card_${counter.toString()}`);
        // add_task = document.getElementById("add_task");
        // line = document.getElementById(`task_${counter.toString()}`);
    
        let text = document.createElement("li");
        text.className = "description";
        text.id = "text";
        // text.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

        let task_text = document.createElement("textarea");
        task_text.className = "task_text";
        task_text.id = "task_text";
        task_text.placeholder = "Type...";

    
        let img_container = document.createElement("div");
        img_container.className = "img_container";
        img_container.id = "img_container";
        img_container.insertAdjacentHTML("beforeend",
            `<img src="justify.png" alt="">
    
                        <img src="checkbox.png" alt="">
    
                        <p>4/8</p>
    
                        <img src="attach.png" alt="">
    
                        <p>2</p>
    
                        <img src="comments.png" alt="">
    
                        <p>4</p>
    
                        <img src="man_1.png" alt="" style="width: 40px; height: 40px">`
        );
    
        let close_task_btn = document.createElement("button");
        close_task_btn.className = "close_task_btn";
        close_task_btn.id = "close_task_btn";
        close_task_btn.innerText = "Remove";
        close_task_btn.onclick = function () {
            text.remove();
        };
    
        text.append(task_text, img_container, close_task_btn);
        task_container.append(text);
        main_container_item.append(task_container);
        main_container_item.insertAdjacentElement("beforeend", add_task)
    };
    
};

