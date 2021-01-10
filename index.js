function gitbid() {
  return {
    async getIssue(client, repo, issue) {
      return await fetch(
        `https://git.bid/issue/${client}/${repo}/issues/${issue}`
      );
    },
    async getIssueFromLink(link) {
      return await fetch(
        `https://git.bid/issue/${link.replace("https://github.com/", "")}`
      );
    },
    async getIssueFromPath(path) {
      return await fetch(`https://git.bid/issue/${path}`);
    },
    async test() {
      return await fetch("http://localhost:3001/", {
        mode: "no-cors",
      });
    },
  };
}

function createIndicator(type, value) {
  switch (type) {
    case "money":
      const moneyIndicator = document.createElement("div");
      moneyIndicator.classList.add("moneyIndicator");
      return moneyIndicator;
    case "fail":
      return document.createElement("div");
  }
}

function markGithub(document, route) {
  switch (route) {
    case "issues":
      const issues = document
        .getElementsByClassName(
          "js-navigation-container js-active-navigation-container"
        )[0]
        .getElementsByClassName("d-flex Box-row--drag-hide position-relative");

      for (const issue of issues) {
        const issueData = gitbid().getIssueFromLink(
          issue.getElementsByClassName("v-align-middle muted-link h4 pr-1")[0]
            .href
        );

        issue.appendChild(createIndicator("money", issueData.value));
      }
  }
}

function markIssue(target) {
  gitbid
    .test()
    .then((data) => target.appendChild(createIndicator("money", data.value)))
    .catch(function (error) {
      target.appendChild(createIndicator("fail"));
    });
}

// function parseURL(path){
//   path = path.split("/")
//   if(path[3] != null){
  
// }
// parseURL(window.location.pathname)




if (window.location.pathname === "/issues"){
  markGithub(document, "issues");
} 
else if(window.location.pathname.split("/")[3] === "issues"){
  console.log(window.location.pathname)
}


