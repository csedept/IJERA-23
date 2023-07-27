var documents = [
    {
      DOI: "NACORE P303",
      Title: "Polarity Classification of Malayalam Document-A Rule Based Approach",
      Authors: ["Lis Jose"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink:"E:\Journal DOI\Simy\Polarity Classification of Malayalam Document-A Rule Based Approach -1.pdf"
    },
    {
      DOI: "NACORE P211",
      Title: "Automatic Fall Detection And Alert System For Home Safety",
      Authors: ["Ann Mariya Jaimon,","Adith Ajay,","Alan Biju George,","Andrew Fredrick Jones,","Simy Mary Kurian"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: ""
    },
    {
      DOI: "NACORE P242",
      Title: "A Qualitative Study on Segmentationof MR Images of Brain for Neuro Disorder Analysis",
      Authors: ["Subin K S,","Nivedh Mohanan,","Subhash P C,","Subin V Ninan,","Elisabeth Thomas,","Dr.S N Kumar"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "E:\Journal DOI\Simy\A Qualitative Study on Segmentation of MR.pdf"
    },
    {
      DOI: "NACORE P180",
      Title: "Comparative System of Privacy Preserving Image Based Encryption",
      Authors: ["Navya Sajeev,","Meenu Harikumar,","Sayoojya Saji,","Sona Sunny,","Thushara Sukumar"],
      InstituteName: ["St.Joseph’s College of Engineering and Technology, Palai, Kerala"],
      DownloadLink: ""
    },
    {
      DOI: "NACORE P203",
      Title: "Multiple Disease Detection using Machine Learning",
      Authors: ["Tinu Rose Thottungal,","Jefrin Siby Mathew,","Joyal Joseph,","Roshik George,","Honey Joseph"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: ""
    },{
      DOI: "NACORE P156",
      Title: "Leveraging social media for Environmental Awareness and Solutions: Strategies, Challenges,and Opportunities",
      Authors: ["Julie John,",
      "Dr. Anupdev Michael Puthenthara"],
      InstituteName: ["Lincoln University College (LUC) Kota Bharu Malaysia","Marian College Kuttikanam"],
      DownloadLink: ""
    },{
      DOI: "NACORE P108",
      Title: "Fault Detection of Transmission Lines Using Unmanned Aerial Vehicle (UAV)",
      Authors: ["Kesia Sunny,","Albin Thomas Lalu,","Alen A Thankachen,","Lirin Blesson,", "Dany Jennez,","Sneha Priya Sebastian,","Resmara S"],
      InstituteName: ["Mar Baselios Christian College of Engineering and Technology Kuttikanam, India"],
      DownloadLink: ""
    },{
      DOI: "NACORE P114",
      Title: "Cardamom Plant Disease Detection Using Robot",
      Authors: ["Devika R Nilackal,",
      "Resmara S,",
      "Greeshma R,", 
      "Griesh R,",
      "Najma Najeeb,",
      "Shehanas K Salim,",
      "Joice P Abraham"],
      InstituteName: ["Mar Baselios Christian College of Engineering and Technology Kuttikanam, India"],
      DownloadLink: ""
    },
    {
      DOI: "NACORE P122",
      Title: "Auxilia: Assistive Learning Tool For Children With Down Syndrome",
      Authors: ["Anna Thomas,",
      "Esther Thankam Mathew,",
      "Anitta Emmanuel,",
      "Noel Thomas"],
      InstituteName: ["St.Joseph’s College of Engineering and Technology Palai"],
      DownloadLink: ""
    },
    // {
    //   DOI: "NACORE P",
    //   Title: "",
    //   Authors: [""],
    //   InstituteName: [""],
    //   DownloadLink: ""
    // },
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

window.onscroll = function() {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  var button = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 600|| document.documentElement.scrollTop > 600) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
}

function scrollToTop() {
  var position = document.documentElement.scrollTop || document.body.scrollTop;
  if (position > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, position - position / 8);
  }
}
