const app = document.getElementById("root");
app.innerHTML = new Date().toString();

const handleUpdate = () => {
    app.innerHTML = new Date().toString();
}

// const [state, setState] = useState(초기값);
