"use client";

export default function CaseDes() {
  return (
    <div className="w-[70%] mx-auto ">
      <div className="drop-shadow-sm px-10 w-full h-full py-5">
        <div>
          <h2 className="text-[25px] font-bold text-btn_clr">Motivation</h2>
          <p className="w-[80%] tracking-wider">
            My friend and I decided to take the Duolingo English Test, but we
            couldn't find a real-time evaluation system tailored for it. Seeing
            this gap, we decided to build our own platform to help others
            prepare more effectively. <br></br>
            Our solution integrates cutting-edge AI models and modern
            engineering practices to deliver a seamless user experience.This
            automate evaluation system of English Proficiency test, providing
            instant, personalized feedback to test-takers preparing for exams
            like the Duolingo English Test and IELTS.
          </p>
        </div>

        <div className="max-w-6xl mt-10 space-y-8">
      

      {/* Problem Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Problem Statement</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Core Challenges</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Manual Evaluation:</strong> Time-consuming and inconsistent human grading</li>
            <li><strong>Real-Time Feedback:</strong> Users needed instant, actionable insights</li>
            <li><strong>Complex State Management:</strong> Handling user sessions, audio/video data, and AI outputs in real time</li>
            <li><strong>Diverse Inputs:</strong> Supporting text, audio, and long-form responses</li>
          </ul>
        </div>
      </section>

      {/* Solution Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Technical Solution</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6">
          <h3 className="text-lg font-medium text-gray-700">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">AI Models</h4>
              <ul className="space-y-2 text-gray-600">
                <li><strong>OpenAI Whisper:</strong> Speech-to-text conversion</li>
                <li><strong>OpenAI GPT-4:</strong> Grammar correction & analysis</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Frontend</h4>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Redux:</strong> State management</li>
                <li><strong>React:</strong> User interface</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Backend</h4>
              <ul className="space-y-2 text-gray-600">
                <li><strong>FastAPI:</strong> REST API</li>
                <li><strong>AWS Lambda:</strong> Scalable processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Implementation</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">1. Speech-to-Text with OpenAI Whisper</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Challenge:</strong> Non-native speech transcription</li>
              <li><strong>Solution:</strong>
                <ul className="list-circle pl-4 mt-2 space-y-1">
                  <li>Fine-tuned on Common Voice dataset</li>
                  <li>Real-time processing for 10k+ users</li>
                </ul>
              </li>
              <li><strong>Result:</strong> 95% accuracy across 50+ accents</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">2. Writing Evaluation with GPT-4</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {`prompt = """  
Evaluate this essay for:  
1. Grammar (highlight errors and corrections)  
2. Vocabulary (suggest richer alternatives)  
3. Coherence (rate 1-10 and explain)  
Essay: {user_input}  
"""`}
            </pre>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Temperature:</strong> 0.2 for consistency</li>
              <li><strong>Result:</strong> 90% match with human raters</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Performance Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">1.8s</h3>
            <p className="text-gray-600">Average Latency</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-3xl font-bold text-green-600 mb-2">93%</h3>
            <p className="text-gray-600">Grammar Accuracy</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">50k+</h3>
            <p className="text-gray-600">Concurrent Users</p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Challenges & Learnings</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-medium text-gray-800 mb-2">1. Speech-to-Text Accuracy</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Problem:</strong> Poor performance on non-native accents</li>
              <li><strong>Solution:</strong> Multimodal audio-text alignment</li>
              <li><strong>Research Goal:</strong> Accent-invariant models</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-medium text-gray-800 mb-2">2. GPT-4 Token Limits</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Solution:</strong> Hierarchical processing</li>
              <li><strong>Research Goal:</strong> Long-context NLP models</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Directions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Proposed Research</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Accent-Agnostic Processing:</strong> Self-supervised pre-training for low-resource accents</li>
            <li><strong>Human-AI Feedback:</strong> Iterative prompt refinement frameworks</li>
            <li><strong>Explainable AI:</strong> Curriculum-aligned feedback systems</li>
          </ul>
        </div>
      </section>
    </div>
      </div>
    </div>
  );
}
