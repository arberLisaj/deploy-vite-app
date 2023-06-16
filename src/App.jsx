import "./styles.css";
import Illustration from "./illustration.svg";

const App = () => {
  return (
    <>
      <div className="header-wrapper">
        <header>
          <div className="logo-container">
            <img src={Illustration} alt="website logo" />
            <h1>Vite & Github</h1>
          </div>
          <p>
            <a href="#documentation">Documentation</a>
          </p>
        </header>
      </div>
      <main>
        <section id="introduction">
          <h1>How to deploy your Vite App on GitHup Pages using Actions ?</h1>
          <p>
            You can use GitHub Pages to showcase some open source projects, host
            a blog, or even share your resume.
          </p>
          <button>
            <a href="#documentation">Get Started</a>
          </button>
        </section>
        <hr />
        <section id="documentation">
          <h1>Documentation</h1>
          <h3>
            To deploy your vite app on github pages use the following steps:{" "}
          </h3>
          <ol>
            <li>
              In the base directory / your repo create a folder and name it
              .github , inside this folder create another folder and name it
              workflows . And inside workflows create a file with the exact name
              deploy.yml . The result should look like this
              .github/workflows/deploy.yml
            </li>
            <li>
              {" "}
              Inside deploy.yml use this code:{" "}
              <a
                target="_blank"
                href="https://github.com/arberLisaj/deploy-vite-app/blob/main/.github/workflows/deploy.yml"
              >
                Click here for the github code
              </a>
            </li>
            <li>
              The last step is adding the repo name to vite.config.js like the{" "}
              <a
                target="blank"
                href="https://github.com/arberLisaj/deploy-vite-app/blob/main/vite.config.js"
              >
                example here
              </a>
            </li>
            <li>Push the changes to github</li>
          </ol>

          <h3>
            And we are set configuring the files next we need to give permission
            to github actions doing the following steps:
          </h3>
          <ol>
            <li>
              Go to the repository that you want to deploy for example :{" "}
              <b>arberlisaj/deploy-vite-app</b>
            </li>
            <li>
              Then <b> settings/Actions/General/Workflow </b> permissions Read
              and write permission should be <b>checked</b> . Save and then go
              back to your repository
            </li>
            <li>
              There should be some failed jobs so you want to{" "}
              <b>Re-Run all jobs </b> and the build and deployment will be
              completed succesfully
            </li>
            <li>
              To Deploy your repo / app with github pages go to{" "}
              <b>settings/Pages/Branch </b> select hg-pages and the folder
              should be /(root)
            </li>
            <li>
              Click Save and your project is now hosted with github pages
              refresh the page and your page link will appear
            </li>
          </ol>
        </section>

        <footer>
          <ul>
            <li>facebook</li>
            <li>twitter</li>
            <li>github</li>
            <li>instagram</li>
          </ul>
          <p> &copy; Arberlisaj | All rights reserved</p>
        </footer>
      </main>
    </>
  );
};

export default App;
