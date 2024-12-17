import React, { useState } from "react";
import { useParams } from "react-router-dom";

const JobApplyForm = () => {
  const { id } = useParams();

  const [cover_letter, setCoverLetter] = useState("");
  const [cv, setCv] = useState(null);

  const handleCoverLetterChange = (e) => setCoverLetter(e.target.value);
  const handleCvChange = (e) => setCv(e.target.files[0]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    const formData = new FormData();
    formData.append("job_id", id);
    formData.append("user_id", user.id);
    formData.append("cover_letter", cover_letter);
    formData.append("cv", cv);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/jobs/${id}/apply`,
        {
          method: "POST",
          body: formData,
        }
      );
    } catch (error) {
      console.error("Error while submitting application:", error);
      alert(
        "Something went wrong while submitting your application. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-8 w-full">
      <div className="bg-lightBg flex flex-col gap-5 p-5 rounded-lg w-full max-w-xl">
        <h3 className="text-center text-2xl font-semibold">
          Job Application Form
        </h3>
        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-5"
        >
          <div className="flex items-start flex-col w-full">
            <label htmlFor="cover_letter">Cover Letter</label>
            <textarea
              name="cover_letter"
              id="cover_letter"
              className="w-full min-h-64"
              value={cover_letter}
              onChange={handleCoverLetterChange}
            ></textarea>
          </div>
          <div className="flex items-start flex-col w-full">
            <label htmlFor="cv">Resume</label>
            <input type="file" name="cv" id="cv" onChange={handleCvChange} />
          </div>
          <button
            type="submit"
            className="bg-mainColor hover:bg-hoverColor w-fit px-3 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplyForm;
