/** @format */

import type { Metadata } from "next";

import { constructMetadata } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title:
    "Duality AIʼs Offroad Semantic Scene Segmentation - Smart ABES Hackathon",
  description:
    "Problem Statement 5: Train a robust semantic segmentation model using synthetic datasets to accurately segment off-road environments for autonomous vehicles.",
});

const AIPS5 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 select-text">
      <h1 className="text-4xl font-bold mb-2">
        Duality AIʼs Offroad Semantic Scene Segmentation
      </h1>
      <p className="text-sm font-semibold text-[#165a94] mb-3">
        PS ID: AI-PS-5
      </p>
      <p className="text-gray-600 mb-8">
        AI Training Techniques for Off-road Autonomy
      </p>
      <p className="text-lg text-[#165a94] font-medium mb-4">
        <span className="text-gray-600">from</span> Duality AI
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">1 Overview</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Duality AI is excited to present the Offroad Autonomy Segmentation
          challenge, a challenge designed to explore cutting-edge AI training
          techniques. Participants will train a model using annotated images of a
          desert environment, then test that model on a novel, but still desert,
          environment.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          All the data is generated from Duality AI's digital twin simulation
          platform, Falcon, using FalconCloud's geospatial-based digital twin
          environments. Each team will work to achieve the most accurate and
          precise model by adjusting training parameters and processes.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Along the way, participants will learn how Duality AI uses
          industry-proven techniques and tools and high-quality synthetic data to
          train AI models for context shifts, unseen environments, or
          difficult-to-access data, such as remote areas.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Through this competition, participants will develop novel AI training
          skills, enhance their portfolio, build connections with Duality AI and
          other participants, and have the opportunity to win prizes and
          recognition!
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Importance of Digital Twins for Segmentation and Off-road Autonomy
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Unmanned Ground Vehicles (UGVs) rely on robust computer vision models
          for effective path planning and decision-making in complex, dynamic
          environments. Among critical CV tasks, semantic segmentation plays a
          pivotal role in obstacle avoidance by providing fine-grained scene
          understanding.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          However, training high-performing segmentation models traditionally
          relies on supervised learning, which requires large, labeled datasets
          for effective training. Attaining this data in the real world, with
          necessary volume and variety for successful training, is generally
          costly and time-consuming, and often still proves insufficient.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Synthetic data presents a promising solution, and has already been
          explored as a means to address data scarcity and improve model
          robustness in computer vision tasks. Creating the data costs much less
          and takes very little time compared to traditional data collection and
          annotation methods. Additionally, users can control variations and edge
          cases such as weather events, time of day, and specific environment
          characteristics, providing diverse data for robust training.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Data Overview</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Participants will work with a dataset generated from FalconEditor of various 
          desert environment twins.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-[#165a94] border border-gray-300 px-4 py-2 text-left font-semibold">
                  ID
                </th>
                <th className="text-[#165a94] border border-gray-300 px-4 py-2 text-left font-semibold">
                  Class Name
                </th>
                <th className="text-[#165a94] border border-gray-300 px-4 py-2 text-left font-semibold">
                  Picture
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">100</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Trees
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src="/trees.png" alt="Trees" className="w-full h-auto max-w-[200px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">200</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Lush Bushes
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src="/lush-bushes.png" alt="Lush Bushes" className="w-full h-auto max-w-[200px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">300</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Dry Grass
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src="/dry-grass.png" alt="Dry Grass" className="w-full h-auto max-w-[200px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">500</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Dry Bushes
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src="/dry-bush.png" alt="Dry Bushes" className="w-full h-auto max-w-[200px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">550</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Ground Clutter
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src="/ground-clutter.png" alt="Ground Clutter" className="w-full h-auto max-w-[200px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">600</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Flowers
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src="/flowers.png" alt="Flowers" className="w-full h-auto max-w-[200px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">700</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Logs
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src="/logs.png" alt="Logs" className="w-full h-auto max-w-[200px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">800</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Rocks
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src="/rocks.png" alt="Rocks" className="w-full h-auto max-w-[200px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">7100</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Landscape
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  all general ground that 
isnʼt another category
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">10000</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Sky
                </td>
                <td className="border border-gray-300 px-4 py-2">
                
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Participants will process synthetic data, train an AI model to segment the data 
          images, validate performance on unseen images from a separate desert 
          environment, and optimize accuracy under realistic constraints. 
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Objectives</h2>
        <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-2">
              1. Train a robust semantic segmentation model using the provided synthetic 
              dataset to accurately segment an environment, which is crucial to off-road 
              autonomy
            </h3>
            <h3 className="text-xl font-semibold mb-2">
              2. Evaluate model performance in novel (but similar) scenarios.
            </h3>
            <h3 className="text-xl font-semibold mb-2">
              3. Benchmark and optimize your model to improve accuracy, generalizability, 
                    and efficiency for real-world deployment scenarios. 
            </h3>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Hackathon Tasks</h2>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">i. AI Engineering:</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To maximize efficiency, we recommend dividing responsibilities based on these 
            roles. Proper delegation will help streamline the workflow and ensure high-quality 
            results across the technical and presentation components.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                1. AI Engineering
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Train and fine-tune the model using the generated dataset. 
                </li>
                <li>
                  Evaluate model performance.
                </li>
                <li>
                    Use optimization techniques to improve accuracy and reduce 
                    inference time. 
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                2. Documentation & Presenting Final Team Results
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Document the workflow, including: Data augmentation/filtering strategies, 
                  model training, evaluation metrics such as loss graphs
                </li>
                <li>
                  Prepare a structured report and final presentation showcasing findings, 
                    results, and insights.
                </li>
                <li>
                    Create visualizations such as performance and loss graphs to highlight 
                    model behavior. 
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">
            ii. Key Deliverables
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At the end of the hackathon, teams must submit: 
          </p>
          <ul className="list-none ml-4 space-y-1">
            <li> A Trained Semantic Segmentation Model 
                a. Fully trained model that segments the testing images into categories. <br></br>
                b. The package must include model weights, scripts, and config files.
            </li>
            <li>Performance Evaluation & Analysis Report, including but is not limited to:
                a. IoU Score to evaluate model accuracy. <br></br>
                b. Loss graphs to visualize performance. <br></br>
                c. Failure Case Analysis, highlighting misclassifications and possible improvements.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-4">
            iii. Judging Criteria
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Teams will be evaluated on a 100-point scale, based on the following criteria:
          </p>
          <ul className="list-none ml-4 space-y-1">
            <li> 
                a. Model Performance  <br></br>
                IoU Score …………………………………………………………………….…...……80 Points <br></br>
                Measures the accuracy of  pixel classification. 
            </li>
            <li>
                b. Performance Report Clarity <br></br>
                Structured Findings & Detailed Reporting……………………………….…20 Points <br></br>
                Well-organized documentation of the methodology, challenges, and solutions. <br></br>
                Clearly outlined steps, including any dataset modifications, model training, and evaluation.
            </li>
            Teams must balance technical performance with clear and professional 
            documentation to maximize their score. 
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">2 Task Instructions</h2>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">i. AI Engineering:</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This section will walk you through:
          </p>
          <ul className="list-none ml-4 space-y-1 mb-4">
            <li>➔ Setting up your Falcon account</li>
            <li>➔ Downloading and using the dataset</li>
            <li>➔ Preparing your training environment</li>
            <li>➔ Understanding the training workflow</li>
          </ul>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                1. Create a Falcon Account
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Visit Falcon and sign up for an account if you don't have one
                </li>
                <li>
                  Once registered, log in to access datasets, exercises, and tools
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                2. Download the Dataset
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Download the dataset to your local machine (see the "Important
                  Links" section). You will need to create a FREE Falcon account,
                  if you haven't already.
                  <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                    <li>
                      This page has all the resources for all the Duality
                      Hackathon tracks. Make sure you navigate to the
                      "Segmentation Track" section.
                    </li>
                  </ul>
                </li>
                <li>
                  The dataset includes:
                  <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                    <li>
                      Pre-collected rgb color and segmented images (Separated
                      into Train and Val folders)
                    </li>
                    <li>
                      RGB color images in the testImages folder, to evaluate how
                      well your model performs on unseen images
                    </li>
                    <li>Sample train and test scripts</li>
                    <li>Environment setup scripts</li>
                    <li>
                      A script to visualize the segmentation using high-contrast
                      colors
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                3. Set Up the Training Environment
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Make sure you have Miniconda or Anaconda installed, and open an
                  Anaconda Prompt window
                </li>
                <li>Navigate to the ENV_SETUP sub folder</li>
                <li>
                  Run the setup_env.bat file in the Anaconda Prompt window
                  <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                    <li>
                      This will set up an environment called "EDU", containing
                      all the dependencies required to run the training and test
                      scripts.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-700 mt-2 ml-4 italic">
                <strong>NOTE:</strong> Mac/Linux users, Create a setup_env.sh
                script with equivalent commands
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                4. Understand the Training Workflow
              </h4>
              <p className="text-gray-700 mb-2 leading-relaxed">
                For these synthetic data competitions, the workflow varies from
                the traditional workflows:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  train.py will train your model using the train and val images.
                  The results of this step are important, but you will not know
                  how robust your model is until you test it using unseen images.
                </li>
                <li>
                  test.py will test the model against images it HASN'T seen in
                  training. The test images will be the same biome, but the
                  actual location will be different.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                5. Train the Model (of your choice) on the Sample Dataset
              </h4>
              <p className="text-gray-700 mb-2 leading-relaxed">
                Once the EDU environment is ready and the dataset is in place:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Open an anaconda command prompt or a terminal</li>
                <li>Navigate to the training and test scripts directory</li>
                <li>
                  Activate the environment by typing 'conda activate EDU' in the
                  terminal
                </li>
                <li>Run the training command: 'python train.py'</li>
              </ul>
              <p className="text-gray-700 mt-2 ml-4 leading-relaxed">
                This will begin training your model and save logs + checkpoints
                to the runs/ directory.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                6. Establish Benchmark Results on the sample dataset
              </h4>
              <p className="text-gray-700 mb-2 leading-relaxed">
                After training is completed, evaluate your model's performance by
                running the train script (train.py) in the same command prompt
                window. This tests its performance on real-world test images and
                gives you the following:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Predictions</li>
                <li>Loss metrics</li>
                <li>IoU score</li>
              </ul>
              <p className="text-gray-700 mt-2 ml-4 leading-relaxed">
                Use the results as your benchmark, so that later, when you train
                with newer model settings, you can:
              </p>
              <ul className="list-disc list-inside ml-8 space-y-2">
                <li>Compare performance</li>
                <li>Track improvements</li>
                <li>
                  Identify where the model struggled (e.g., specific classes,
                  specific locations)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">
            ii. Documentation & Presentation:
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ensure that your team's work is:
          </p>
          <ul className="list-none ml-4 space-y-1">
            <li>✔ Clear and understandable</li>
            <li>✔ Reproducible by others</li>
            <li>✔ Professional and impactful for judges</li>
          </ul>

          <div className="space-y-6 mt-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                1. Keep it Structured & Organized using this General Structure
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Title & Summary:</strong> Clearly state the purpose of
                  the document
                </li>
                <li>
                  <strong>Step-by-Step Instructions:</strong> Use numbered lists
                  or bullet points
                </li>
                <li>
                  <strong>Diagrams & Visuals:</strong> Use flowcharts, tables,
                  and screenshots
                </li>
                <li>
                  <strong>Graphs & Charts:</strong> Show training loss, accuracy
                  trends, and comparisons
                  <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                    <li>Screenshots: Use images from the runs/ folder after training</li>
                    <li>
                      Before & After Images: Show examples of correct vs.
                      misclassified objects
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                2. Document Everything, But Keep it Concise
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Record major steps like dataset manipulation, training process,
                  and evaluation
                </li>
                <li>
                  Avoid overly technical language — aim for clarity
                </li>
                <li>
                  Use clear, plain language—assume the reader is new to the
                  project
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">3. Example Entry:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Task: Model Training on Dataset</li>
                <li>Initial IoU Score: 0.31</li>
                <li>
                  Issue Faced: Low recall for "Logs" class due to occlusion
                </li>
                <li>
                  Solution: Augmented dataset with occlusion examples → New,
                  better score
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                4. Documenting Failure Cases and Solutions
              </h4>
              <p className="text-gray-700 ml-4 leading-relaxed">
                Include failure case images to illustrate what went wrong and how
                it was fixed.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                5. Report Format (8 Pages Max)
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Your Report should be concise, structured, and visually engaging.
                Use the following storytelling approach:
              </p>
              <p className="text-center text-gray-700 font-semibold mb-4">
                Problem → Fix → Results → Challenges → Future Work
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-[#165a94] border border-gray-300 px-4 py-2 text-left font-semibold">
                        Page No.
                      </th>
                      <th className="text-[#165a94] border border-gray-300 px-4 py-2 text-left font-semibold">
                        Section
                      </th>
                      <th className="text-[#165a94] border border-gray-300 px-4 py-2 text-left font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Title
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Team name, project name, brief tagline
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Methodology
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Steps taken while training the model, and fine-tuned
                        results
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">3-4</td>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Results & Performance Metrics
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        IoU score, confusion matrix, accuracy comparisons
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">5-6</td>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Challenges & Solutions
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Key obstacles and how they were resolved
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">7</td>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Conclusion & Future Work
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Final thoughts, and potential improvements
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          3 Submission and Final Steps Instructions
        </h2>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">
            i. Necessary Submission Files:
          </h3>
          <ul className="list-disc list-inside ml-4 space-y-4">
            <li>
              <strong>A single, Final Packaged Folder</strong> that includes all
              necessary files:
              <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                <li>Model training and inference scripts (train.py, test.py)</li>
                <li>Configuration files</li>
                <li>
                  Any additional assets or scripts required to test your model
                </li>
              </ul>
            </li>
            <li>
              <strong>A well-structured Hackathon Report</strong> (PDF or DOCX)
              that covers the following:
              <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                <li>Methodology: Your training approach and setup</li>
                <li>
                  Challenges & Solutions: Issues faced and how you overcame them
                </li>
                <li>
                  Optimizations: Techniques used to improve model performance
                </li>
                <li>
                  Performance Evaluation: IoU score and Failure case analysis and
                  observations
                </li>
              </ul>
            </li>
            <li>
              <strong>A README.md or README.txt</strong> that provides:
              <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                <li>Step-by-step instructions to run and test your model</li>
                <li>How to reproduce your final results</li>
                <li>Any environment or dependency requirements</li>
                <li>
                  Notes on expected outputs and how to interpret them
                </li>
              </ul>
            </li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <p className="text-gray-700 font-semibold mb-2">Note:</p>
            <p className="text-gray-700 mb-2">
              You are welcome to use your own models and custom training scripts
              or notebooks. However, you must train your model exclusively on the
              dataset provided for this challenge.
            </p>
            <p className="text-gray-700 font-semibold">
              Important: Using any of the designated testing images for training
              purposes is strictly prohibited and will result in disqualification.
              Please ensure a clear separation between training, validation, and
              test sets throughout your workflow.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">ii. Upload Instructions:</h3>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>
              Ensure your submission folder contains all of the above
            </li>
            <li>Compress everything into a .zip file</li>
            <li>
              Upload the zipped folder to a private GitHub repository of your own
            </li>
            <li>
              Complete the submission form (see the "Important Links" section):
              <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                <li>Reporting your team's final score</li>
                <li>Providing the GitHub repository link</li>
              </ul>
            </li>
            <li>
              Finally, add the following reviewers as collaborators:
              <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                <li>
                  Syed Muhammad Maaz - GitHub Username:{" "}
                  <span className="font-mono">Maazsyedm</span>
                </li>
                <li>
                  Rebekah Bogdanoff - GitHub Username:{" "}
                  <span className="font-mono">rebekah-bogdanoff</span>
                </li>
                <li>
                  Evan Goldman - GitHub Username:{" "}
                  <span className="font-mono">egold010</span>
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">iii. After Submission:</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                1. Sharing Results & Feedback
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  After submission, teams can showcase their models and insights
                </li>
                <li>
                  Feedback from judges will be provided after evaluation
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                2. Future Opportunities & Improvements
              </h4>
              <p className="text-gray-700 mb-2 ml-4 leading-relaxed">
                Continue exploring advanced topics such as:
              </p>
              <ul className="list-disc list-inside ml-8 space-y-2">
                <li>Self-supervised learning</li>
                <li>Domain adaptation</li>
                <li>Multi-view detection</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                3. Stay connected with us via Discord for:
              </h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Future challenges</li>
                <li>Internship and apprenticeship opportunities</li>
                <li>Community events and AI workshops</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
            <p className="text-gray-700 font-semibold">
              NOTE: If you face any issues along the process join our discord
              channel linked above where we will be providing support to you for
              the hackathon.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Important Links</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-[#165a94]">
              Create a Free Falcon Account
            </h3>
            <a
              href="https://falcon.duality.ai/auth/sign-up?utm_source=hackathon&utm_medium=instructions&utm_campaign=SAH2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#165a94] hover:underline break-all"
            >
              https://falcon.duality.ai/auth/sign-up
            </a>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-[#165a94]">Download the Dataset</h3>
            <a
              href="https://falcon.duality.ai/secure/documentation/hackathon-segmentation-desert?utm_source=hackathon&utm_medium=instructions&utm_campaign=SAH2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#165a94] hover:underline break-all"
            >
              https://falcon.duality.ai/secure/documentation/hackathon-segmentation-desert
            </a>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-[#165a94]">Discord Forum</h3>
            <a
              href="https://discord.com/invite/dualityfalconcommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#165a94] hover:underline break-all"
            >
              https://discord.com/invite/dualityfalconcommunity
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          4 Common Issues and Troubleshooting
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">FAQs</h3>

            <div className="space-y-4 mt-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  1. Will setup_env.bat Work on Both Windows & Mac?
                </h4>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    No, The setup_env.bat script is designed primarily for
                    Windows environments
                  </li>
                  <li>
                    Alternatively, for Mac/Linux use create a setup_env.sh shell
                    script equivalent that installs all required packages
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  2. My training process is too slow. What can I do?
                </h4>
                <p className="text-gray-700 mb-2 ml-4 leading-relaxed">
                  Here are a few tips to improve training speed:
                </p>
                <ul className="list-disc list-inside ml-8 space-y-2">
                  <li>Reduce the batch size in your training configuration</li>
                  <li>
                    Close any unused applications or background processes to free
                    up system resources
                  </li>
                  <li>
                    If using GPU, monitor GPU usage with tools like nvidia-smi
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  3. How should I manage data transfer between team members or for
                  submission?
                </h4>
                <p className="text-gray-700 mb-2 ml-4 leading-relaxed">
                  Why backup your data:
                </p>
                <ul className="list-disc list-inside ml-8 space-y-2">
                  <li>Share results between teammates</li>
                  <li>Backup project files and checkpoints</li>
                </ul>
                <p className="text-gray-700 mt-2 ml-4 leading-relaxed">
                  We recommend using cloud storage platforms such as Google Drive,
                  Dropbox, OneDrive, git
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">
              Support and Communication
            </h3>
            <p className="text-gray-700 mb-2 leading-relaxed">
              Join the official Duality Community Discord Server for:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Real-time help</li>
              <li>Announcements</li>
              <li>Live Q&A with organizers</li>
              <li>Invite Link Here</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          5 Glossary and Metric Benchmarks
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-[#165a94] border border-gray-300 px-4 py-2 text-left font-semibold">
                  Term
                </th>
                <th className="text-[#165a94] border border-gray-300 px-4 py-2 text-left font-semibold">
                  Definition
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Digital Twin
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  A virtual replica of a real-world object or system.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Semantic Scene Segmentation
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Every pixel in an image is labeled with a specific class.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  IoU (Intersection over Union)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Measures how well a prediction from a model overlaps with the
                  ground truth.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  NMS (Non-Maximum Suppression)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  A technique to remove duplicate detections of the same object.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Class Imbalance
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  When some object categories have significantly fewer samples
                  than others.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Ground Truth
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Manually labeled data specifying correct object locations and
                  classes.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Training Loss
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Lower loss = better training. If loss plateaus too high, the
                  model may be underfitting. If the loss starts increasing, the
                  model may be overfitting.
                  <br />
                  <span className="font-semibold">
                    Expected Benchmark: Should steadily decrease
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Inference Speed
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Time taken to predict per image
                  <br />
                  <span className="font-semibold">
                    Expected Benchmark: &lt; 50ms per image
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
          <p className="text-gray-700 mb-4 leading-relaxed">
            We appreciate your hard work and look forward to reviewing your
            project!
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Feel free to share your work on LinkedIn and show the world your
            real-world problem solving skills in action!
          </p>
          <p className="text-gray-700 font-semibold">
            Tag DualityAI to:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Celebrate your team's efforts and creativity</li>
            <li>Get noticed by industry experts and recruiters</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AIPS5;
