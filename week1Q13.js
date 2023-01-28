let s=[];
let s1=[];

function enqueue(element) {
    s.push(element);
    console.log("Element Enqueued: ", s);
}

function dequeue() {
    if (s1.length === 0) {
        if (s.length === 0) {
            console.log(
        "Dequeue not possible because queue is empty..");
        }
        while (s.length > 0) {
            let x = s.pop();
            s1.push(x);
        }
    }
    console.log("Element Dequeued: " + s1.pop());
}
dequeue();
enqueue("a");
enqueue("b");
enqueue("c");
dequeue();
dequeue();
dequeue();
dequeue();