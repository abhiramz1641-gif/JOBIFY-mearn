import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { scanResumeApi } from "../services/allApis";

const ResumeScanner = () => {
    const [loading, setLoading] = useState(false);
    const [resumeData, setResumeData] = useState(null);
    const [error, setError] = useState("");

    const scanResume = async (file) => {
        const formData = new FormData();
        formData.append("resume", file);

        try {
            setLoading(true);
            setError("");
            setResumeData(null);

            const res = await scanResumeApi(formData);
            console.log(res.data.data);

            setResumeData(res.data.data);
        } catch (err) {
            setError("Failed to scan resume");
        } finally {
            setLoading(false);
        }
    };

    // Drag & Drop handler
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            scanResume(acceptedFiles[0]);
        }
    }, []);

    // Normal file input handler
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            scanResume(file);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        multiple: false
    });

    return (
        <div className="max-w-xl mx-auto p-6">
            {/* Drag & Drop */}
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition
        ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-400"}`}
            >
                <input {...getInputProps()} />
                <p className="text-gray-700 text-lg">
                    {isDragActive
                        ? "Drop the resume here..."
                        : "Drag & drop resume here"}
                </p>
                <p className="text-sm text-gray-400 mt-2">PDF only</p>
            </div>

            {/* OR Divider */}
            <div className="text-center my-4 text-gray-500">
                — OR —
            </div>

            {/* File Input */}
            <div className="text-center">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e)=>handleFileChange(e)}
                    className="block mx-auto text-sm text-gray-600
          file:mr-4 file:py-2 file:px-4
          file:rounded file:border-0
          file:bg-blue-600 file:text-white
          hover:file:bg-blue-700"
                />
            </div>

            {/* Loading */}
            {loading && (
                <p className="mt-4 text-blue-500 text-center">
                    Scanning resume...
                </p>
            )}

            {/* Error */}
            {error && (
                <p className="mt-4 text-red-500 text-center">
                    {error}
                </p>
            )}

            {/* Result */}
            {resumeData && (
                <div className="mt-6 bg-white shadow rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-3">
                        Extracted Resume Data
                    </h3>

                    <p><strong>Email:</strong> {resumeData.email || "Not found"}</p>
                    <p><strong>Experience:</strong> {resumeData.experience} </p>
                    <p><strong>Role:</strong> {resumeData.role}</p>

                    <div className="mt-3">
                        <strong>Skills:</strong>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {resumeData.skills.length > 0 ? (
                                resumeData.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))
                            ) : (
                                <span className="text-gray-500">No skills detected</span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeScanner;
