import { useState, useEffect } from "react";
import api from "../api";
import Feedback from "../components/Feedback"
import "../styles/Home.css"

const FeedbackPage = () => {
    const [feedback, setFeedback] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        getFeedback();
    }, []);

    const getFeedback = () => {
        api
            .get("/api/feedback/")
            .then((res) => res.data)
            .then((data) => {
                setFeedback(data);
            })
            .catch((err) => alert(err));
    };

    const deleteFeedback = (id) => {
        api
            .delete(`/api/feedback/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Feedback deleted!");
                else alert("Failed to delete Feedback.");
                getFeedback();
            })
            .catch((error) => alert(error));
    };

    const createFeedback = (e) => {
        e.preventDefault();
        api
            .post("/api/feedback/", { content, title, email })
            .then((res) => {
                if (res.status === 201) alert("Feedback created!");
                else alert("Failed to make Feedback.");
                getFeedback();
            })
            .catch((err) => alert(err));
    };

    return (
        <section>
            <div>
                <h2>Feedbacks</h2>
                {feedback.map((feedback) => (
                    <Feedback feedback={feedback} onDelete={deleteFeedback} key={feedback.id} />
                ))}
            </div>
            <h2>Create a Feedback</h2>
            <form onSubmit={createFeedback}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="title">Email:</label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit feedback"></input>
            </form>
        </section>
    );
}

export default FeedbackPage;