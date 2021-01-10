const bountyData = '[{"issue":"https://github.com/AstutED/website/issues/4","bounty_amount":2000,"github":"https://github.com/henrymarks1%22"}]'


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

function compare(bounty){
    bounty = JSON.parse(bounty)
    console.log(bounty)
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

        const issueData =
          issue.getElementsByClassName("link-gray-dark v-align-middle no-underline h4 js-navigation-open")[0]
            .href
        
        compare(bountyData)

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

if (window.location.pathname === "/issues"){
  markGithub(document, "issues");
} 
else if(window.location.pathname.split("/")[3] === "issues"){
  console.log(window.location.pathname)
} 


