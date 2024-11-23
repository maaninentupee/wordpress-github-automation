const { Octokit } = require("@octokit/rest");

// GitHub API Authentication
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function createIssue(repoOwner, repoName, title, body) {
  try {
    const response = await octokit.issues.create({
      owner: repoOwner,
      repo: repoName,
      title: title,
      body: body,
    });
    console.log("Issue created:", response.data.html_url);
  } catch (error) {
    console.error("Error creating issue:", error.message);
  }
}

// Example task: Create an issue
createIssue("your-username", "your-repo", "Automated Task", "This issue was created by github_tasks.js script!");
