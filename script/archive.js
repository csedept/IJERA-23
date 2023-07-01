var documents = [
    {
      DOI: "",
      Title: "",
      Authors: [""],
      InstituteName: [""],
      DownloadLink: ""
    },
    {
      DOI: "",
      Title: "",
      Authors: [""],
      InstituteName: [""],
      DownloadLink: ""
    },
    {
      DOI: "",
      Title: "",
      Authors: [""],
      InstituteName: [""],
      DownloadLink: ""
    },
    {
      DOI: "",
      Title: "",
      Authors: [""],
      InstituteName: [""],
      DownloadLink: ""
    },
    {
      DOI: "",
      Title: "",
      Authors: [""],
      InstituteName: [""],
      DownloadLink: ""
    },
  ];
  
  function populateTable() {
    var table = document.getElementById("documentTable");
    var tbody = document.createElement("tbody");
  
    for (var i = 0; i < documents.length; i++) {
      var row = document.createElement("tr");
      var doiCell = document.createElement("td");
      doiCell.textContent = documents[i].DOI;
      doiCell.classList.add("doi-column");
      var titleCell = document.createElement("td");
      titleCell.textContent = documents[i].Title;
      var authorCell = document.createElement("td");
      authorCell.classList.add("author-column");
      var authors = documents[i].Authors;
      for (var j = 0; j < authors.length; j++) {
        var authorName = authors[j];
        var authorLine = document.createElement("div");
        authorLine.textContent = authorName;
        authorCell.appendChild(authorLine);
      }
      var instituteCell = document.createElement("td");
      instituteCell.textContent = documents[i].InstituteName;
      var downloadCell = document.createElement("td");
      var downloadLink = document.createElement("a");
      downloadLink.href = documents[i].DownloadLink;
      downloadLink.textContent = "Download";
      downloadLink.classList.add("download-link");
      downloadLink.target = "_blank";
      downloadCell.appendChild(downloadLink);
  
      row.appendChild(doiCell);
      row.appendChild(titleCell);
      row.appendChild(authorCell);
      row.appendChild(instituteCell);
      row.appendChild(downloadCell);
      tbody.appendChild(row);
    }
  
    table.appendChild(tbody);
  }
  
  function searchTable() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var table = document.getElementById("documentTable");
    var rows = table.getElementsByTagName("tr");
  
    for (var i = 1; i < rows.length; i++) {
      var doi = rows[i].getElementsByTagName("td")[0].textContent.toLowerCase();
      var title = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();
      var auth = rows[i].getElementsByTagName("td")[2].textContent.toLowerCase();
      var ins = rows[i].getElementsByTagName("td")[3].textContent.toLowerCase();
  
      if (doi.includes(input) || title.includes(input) || auth.includes(input) || ins.includes(input))
      {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
  
  populateTable();
  