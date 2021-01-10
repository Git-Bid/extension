function gitbid() {
  return {
    async getIssue(client, repo, issue) {
      return await fetch(
        `https://git.bid/issue/${client}/${repo}/issues/${issue}`
      );
    },
    async getIssueFromLink(link) {
      // parse link first
      return await fetch(`https://git.bid/issue/${link}`);
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
      document.createElement("div");
    case "fail":
      document.createElement("div");
  }
}

function github(document) {
  return {
    markIssueInList(issueNum) {
      // replace with real location of github issue location
      return markIssue(document.getElementById());
    },
    markActiveIssue() {
      return markIssue(document.getElementById());
    },
  };
}

function markIssue(target) {
  gitbid
    .test()
    .then((data) => target.appendChild(createIndicator("money", data.value)))
    .catch(function (error) {
      target.appendChild(createIndicator("fail"));
    });
}
