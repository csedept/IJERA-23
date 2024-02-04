/*var documents = [
    {
      DOI: "NACORE P303",
      Title: "Polarity Classification of Malayalam Document-A Rule Based Approach",
      Authors: ["Lis Jose"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink:"Journal DOI/Simy/Polarity Classification of Malayalam Document-A Rule Based Approach -1.pdf"
    },
    {
      DOI: "NACORE P211",
      Title: "Automatic Fall Detection And Alert System For Home Safety",
      Authors: ["Ann Mariya Jaimon,","Adith Ajay,","Alan Biju George,","Andrew Fredrick Jones,","Simy Mary Kurian"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Simy/Automatic Fall Detection And Alert System For Home Safety-2-2-1.pdf"
    },
    {
      DOI: "NACORE P242",
      Title: "A Qualitative Study on Segmentationof MR Images of Brain for Neuro Disorder Analysis",
      Authors: ["Subin K S,","Nivedh Mohanan,","Subhash P C,","Subin V Ninan,","Elisabeth Thomas,","Dr.S N Kumar"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Simy/A Qualitative Study on Segmentation of MR.pdf"
    },
    {
      DOI: "NACORE P180",
      Title: "Comparative System of Privacy Preserving Image Based Encryption",
      Authors: ["Navya Sajeev,","Meenu Harikumar,","Sayoojya Saji,","Sona Sunny,","Thushara Sukumar"],
      InstituteName: ["St.Joseph’s College of Engineering and Technology, Palai, Kerala"],
      DownloadLink: "Journal DOI/Simy/COMPARATIVE SYSTEM OF PRIVACY.pdf"
    },
    {
      DOI: "NACORE P203",
      Title: "Multiple Disease Detection using Machine Learning",
      Authors: ["Tinu Rose Thottungal,","Jefrin Siby Mathew,","Joyal Joseph,","Roshik George,","Honey Joseph"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Simy/Multiple Disease Detection using Machine Learning.pdf"
    },{
      DOI: "NACORE P156",
      Title: "Leveraging social media for Environmental Awareness and Solutions: Strategies, Challenges,and Opportunities",
      Authors: ["Julie John,",
      "Dr. Anupdev Michael Puthenthara"],
      InstituteName: ["Lincoln University College (LUC) Kota Bharu Malaysia","Marian College Kuttikanam"],
      DownloadLink: "Journal DOI/Simy/Leveraging social media for Environmental.pdf"
    },{
      DOI: "NACORE P108",
      Title: "Fault Detection of Transmission Lines Using Unmanned Aerial Vehicle (UAV)",
      Authors: ["Kesia Sunny,","Albin Thomas Lalu,","Alen A Thankachen,","Lirin Blesson,", "Dany Jennez,","Sneha Priya Sebastian,","Resmara S"],
      InstituteName: ["Mar Baselios Christian College of Engineering and Technology Kuttikanam, India"],
      DownloadLink: "Journal DOI/Simy/Fault Detection of Transmission Lines Using.pdf"
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
      DownloadLink: "Journal DOI/Simy/CARDAMOM PLANT DISEASE DETECTION USING ROBOT.pdf"
    },
    {
      DOI: "NACORE P122",
      Title: "Auxilia: Assistive Learning Tool For Children With Down Syndrome",
      Authors: ["Anna Thomas,",
      "Esther Thankam Mathew,",
      "Anitta Emmanuel,",
      "Noel Thomas"],
      InstituteName: ["St.Joseph’s College of Engineering and Technology Palai"],
      DownloadLink: "Journal DOI/Simy/Auxilia Assistive Learning Tool.pdf"
    },
    {
      DOI: "NACORE P124",
      Title: "DG Cure: Model For Detection Of Dysgraphia",
      Authors: ["Sana T H,",
      "Muneebah Mohyiddee,",
      "Anoodh Hussain,",
      "Nandana P Narayanan,",
      "Sneha Soman"],
      InstituteName: ["Universal Engineering College Kerala, India"],
      DownloadLink: "Journal DOI/Simy/DGCURE.pdf"
    },
    {
      DOI: "NACORE P131",
      Title: "Revolutionizing Nutritional Management Through Food Scanning And Object Detection: A New Android Application For Adults",
      Authors: ["Don Peter Joseph,",
      "Amith Bino,","Sreehari P,","Anchal J Vattakunnel"],
      InstituteName: ["College of Engineering Poonjar Kottayam, India"],
      DownloadLink: "Journal DOI/Lis/NACORE P 131.pdf"
    },
    {
      DOI: "NACORE P134",
      Title: "Unmasking Fraudulent Job Ads: A Critical Review On Fake Job Detection Using Machine Learning",
      Authors: ["Rituparna Seal,",
      "Mr. Dipjyoti Deka,",
      "Shubham Banik"],
      InstituteName: ["Assam down town University, Guwahati, India"],
      DownloadLink: "Journal DOI/Lis/NACORE P 134.pdf"
    },
    {
      DOI: "NACORE P135",
      Title: "Review on SJCET ARENA",
      Authors: ["Joel James,",
      "Akash K,",
      "Amal S Kumar,",
      "Georgin Jose,",
      "Prof.Thushara Sukumar"],
      InstituteName: ["St. Joseph’s College of Engineering and Technology, Palai, India"],
      DownloadLink: "Journal DOI/Lis/NACORE P 135.pdf"
    },
    {
      DOI: "NACORE P136",
      Title:"Amigo Application",
      Authors: ["Anit Devwsiya Kuttikade,",
      "Anna Jose,", 
      "Albin Scaria Sabu,", 
      "Anand Baby John,",
      "Prof.Maria Yesudas"],
      InstituteName: ["St. Joseph’s College of Engineering and Technology, Palai, India"],
      DownloadLink: "Journal DOI/Lis/NACORE P 136.pdf"
    },
    {
      DOI: "NACORE P215",
      Title:"Real-time Air Quality Index Monitoring and Alert System using IoT Technology",
      Authors: ["Gopika S,",
      "Akhil Mathew Mohan,", 
      "Alan Maria George,",
      "Arathy Baby,",
      "Syam Gopi,", 
      "Abubeker K.M"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Lis/NACORE P 215.pdf"
    },
    {
      DOI: "NACORE P140",
      Title:"A Literature Review On Image Forgery Detection",
      Authors: ["Adithya Sanil,",
      "Adams Mathew,",
      "Akhil J Medackal,",
      "Nikhil J Medacka,",
      "Dyni Thomas"],
      InstituteName: ["St. Joseph’s College of Engineering, Palai, India"],
      DownloadLink: "Journal DOI/Lis/NACORE P 140.pdf"
    },
    {
      DOI: "NACORE P143",
      Title:"SARA: A College Receptionist System",
      Authors: ["Maxen Varghese,",
      "Ms. Muneebah Mohyiddeen,","Amal E A,","Mohammed Rasnal K A,","Rohith Sekhar N"],
      InstituteName: ["Universal Engineering College Thrissur, India"],
      DownloadLink: "Journal DOI/Lis/NACORE P 143.pdf"
    },
    {
      DOI: "NACORE P145",
      Title:"A Review on Comparison of VGG-16 and DenseNet algorithms for analysing brain tumor in MRI image",
      Authors: ["Diya Paramesh,",
      "Aleena Joseph,", 
      "Elza Mary Thomas,", 
      "Gayathri V,",
      "Anu V Kottath"],
      InstituteName: ["St. Joseph’s College of Engineering and Technology, Pala,India"],
      DownloadLink: "Journal DOI/Lis/NACORE P 145.pdf"
    },
    {
      DOI: "NACORE P301",
      Title:"Overview of Lip Reading Methods: Issues, Current Developments, and Future Prospects",
      Authors: ["Lida K Kuriakose"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Lis/NACORE F 301.pdf"
    },
    {
      DOI: "NACORE P159",
      Title:"Automated Hydroponics for Agricultural Applications",
      Authors: ["Bhavana Rajesh Pillai,",
      "Arun T S, Devapriya L,",
      "Javaid Iqbal,Sreekala K S"],
      InstituteName: ["Saintgits College of Engineering , Kottayam, India"],
      DownloadLink: "Journal DOI/Lis/NACORE P 159.pdf"
    },
    {
      DOI: "NACORE P161",
      Title:"An Insight into DevOps: Techniques and Optimal Practices",
      Authors: ["Dileepkumar S R,",
      "Dr Juby Mathew"],
      InstituteName: ["Lincoln University College (LUC) Kota Bharu Malaysia"],
      DownloadLink: "Journal DOI/Linsa/NACORE P161.pdf"
    },
    {
      DOI: "NACORE P217",
      Title:"Adsorptive Removal Of Congo Red Dye From Aqueous Solution Using Aloe Vera As A Biosorbent",
      Authors: ["Sidharth Santhoshkumar Vishnu,","Aleena Manoj,", 
      "Gokul Krishnan,",
      "Dr. Jerin Jose"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE P 217.pdf"
    },
    {
      DOI: "NACORE P218",
      Title:"Innovative Biochar Applications for Sustainable Water Purification",
      Authors: ["An Mariya Deve M D,", 
      "Aswani Unni,", 
      "Bhagya S,",
      "Abin Joseph,",
      "Dr. Aju Mathew George"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE P 218.pdf"
    },
    {
      DOI: "NACORE P155",
      Title:"Interactive Toy",
      Authors: ["Muhammed Bazir,",
      "Deepak TG,",
      "Muhamed Ajmal KR,", 
      "Roshini M,",
      "Rema Mk"],
      InstituteName: ["Universal Engineering College. Kerala, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE P 155.pdf"
    },
    {
      DOI: "NACORE P119",
      Title:"Lip Reading And Prediction System Based On Deep Learning",
      Authors: ["Annmaria K B,",
      "Gishma K.M,",
      "Ramna Parvan V.N,", 
      "Anagha Suresh,",
      "Athira Shaji"],
      InstituteName: ["Universal Engineering College Kerala, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE P 119.pdf"
    },
    {
      DOI: "NACORE P153",
      Title:"Number Plate Detection in Fog and Haze",
      Authors: ["Neenu,",
      "Ms Minnuja Shelly,", 
      "Khalid Hareef,",
      "Sulthana M N,", 
      "Nesmi Siddique"],
      InstituteName: ["Universal Engineering College Kerala, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE P 153.pdf"
    },
    {
      DOI: "NACORE F302",
      Title:"Brain Tumor Detection",
      Authors: ["Linsa Mathew"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE F 302.pdf"
    },
    {
      DOI: "NACORE F308",
      Title:"A Survey and Analysis on Predicting Heart Disease Using Machine Learning Techniques",
      Authors: ["Honey Joseph"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE F 308.pdf"
    },
    {
      DOI: "NACORE P221",
      Title:"Survey on Video Summarization using Extracted Audio",
      Authors: ["Neethu Liz Shaji,",
      "Tintu Alphonsa Thomas,",
      "Nandana Rajagopal,",
      "Silby Elza Simon,",
      "Sree Parvathy P"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE P 221.pdf"
    },
    {
      DOI: "NACORE P224",
      Title:"Early Detection of Attention Deficiency Using ML",
      Authors: ["Elena Maria Varghese,",
      "Fabeela Ali Rawther,",
      "Akhil P Dominic,",
      "Alan James,",
      "Christy Chacko"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE P 224.pdf"
    },
    {
      DOI: "NACORE P225",
      Title:"A Machine Learning Approach to Fake News Detection",
      Authors: ["Ansamol Varghese,",
      "Ignatius Ealias Roy,",
      "Anoushka Tresa,",
      "Athira John,",
      "Gautham Sankar M S"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Linsa/NACORE P 225.pdf"
    },
    {
      DOI: "NACORE P144",
      Title:"A Reliable Method for Detecting Brain Tumors in Magnetic Resonance Images Utilizing EfficientNet",
      Authors: ["Sandra Raju,",
      "Dr. Sruthy S"],
      InstituteName: ["St.Joseph’s College Of Engineering and Technology, Kottayam,India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P 144 New.pdf"
    },
    {
      DOI: "NACORE F306",
      Title:"Study on Separable Reversible Data Hiding in Encrypted Images",
      Authors: ["Rintu Jose"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P306_U.pdf"
    },
    {
      DOI: "NACORE F309",
      Title:"State-of-the-Art Techniques for Image Forgery Detection: A Review",
      Authors: ["Anishamol Abraham,",
      "Niya Joseph"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P309_U.pdf"
    },
    {
      DOI: "NACORE P173",
      Title:"Survey on Fake Profile Detection in Social Media",
      Authors: ["Minu K S,",
      "Jyothis Joseph,",
      "Angeetha Raju,",
      "Aparna Santhosh,", 
      "Ashitha Jenish"],
      InstituteName: ["College of Engineering Kidangoor Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P 173 (1).pdf"
    },
    {
      DOI: "NACORE P174",
      Title:"Image Processing based Crop Protection and Road Accident Prevention System using Intelligence Surveillance",
      Authors: ["Kiran Thomas P Robin,",
      "Er. Sheeba Babu,",
      "Nandhana Nair,",
      "Nihal Shabeer K V,", 
      "Sandra Sara Mathew"],
      InstituteName: ["Saintgits College of Engineering, Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P174_U.pdf"
    },
    {
      DOI: "NACORE P231",
      Title:"A Comprehensive Review on Diagnosis and Classification of Various Respiratory Diseases",
      Authors: ["S Adithyakrishnan,",
      "U Anjukrishna,",
      "Rohith Manuel Philip,", 
      "Careena P"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P231_U.pdf"
    },
    {
      DOI: "NACORE P232",
      Title:"Image Encryption Using Different Cryptographic Algorithms : A Survey Paper",
      Authors: ["Manu Tom Sebastian,",
      "Fr. Jins Sebastian Arackaparampil,", 
      "Miinu Elsa Baby,",
      "Niya Mary Viby,",
      "Dr. Kumar S.N"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P232_U.pdf"
    },
    {
      DOI: "NACORE P238",
      Title:"A Review Paper On Microstrip Patch Antenna",
      Authors: ["Devika V Shaji,",
      "Brijesh Emmanuel,",
      "Jack Jim,",
      "Rosamma Sebastian"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P238_U.pdf"
    },
    {
      DOI: "NACORE F313",
      Title:"A study on Multiple-Instance GPU, Evolution, Architecture and Applications",
      Authors: ["Jane George"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE F 313_U.pdf"
    },
    {
      DOI: "NACORE F310",
      Title:"Review Paper on Biometrics Authentication based on Liveness Detection Methods",
      Authors: ["Bibin Varghese"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P310_U.pdf"
    },
    {
      DOI: "NACORE F311",
      Title:"A Systematic Review of Content-Based Image Retrieval Techniques",
      Authors: ["Niya Joseph,","Tintu Alphonsa Thomas"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Sinciya/NACORE P311_U.pdf"
    },
    {
      DOI: "NACORE P243",
      Title:"Accident Detection Using Video Surveillance",
      Authors: ["Sangeetha Tony,","Midhun M,","Tibin Abraham,","Vyshnav B"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Resmipriya/44.NACORE P 243.pdf"
    },
    {
      DOI: "NACORE F312",
      Title:"An overview of Fake News Detection using Bidirectional Long Short-Term Memory (BiLSTM)",
      Authors: ["Anu Rose Joy"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Resmipriya/45.NACORE F312.pdf"
    },
    {
      DOI: "NACORE P120",
      Title:"Developing an Empathetic Interaction Model for Elderly in Pandemics",
      Authors: ["Safad Ismail,",
      "P Sathya Narayan"],
      InstituteName: ["College of Engineering Chengannur,IHRD Kerala, India"],
      DownloadLink: "Journal DOI/Resmipriya/46.NACORE_P120.pdf"
    },
    {
      DOI: "NACORE F305",
      Title:"CNN model to classify visually similar Images",
      Authors: ["Ms. Tintu Alphonsa Thomas,",
      "Ms. Anishamol Abraham"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Resmipriya/47.NACORE F305.pdf"
    },
    {
      DOI: "NACORE P103",
      Title:"The Carbon Footprint Of Machine Learning Models",
      Authors: ["Aniruddha Das,",
      "Avisikta Modak"],
      InstituteName: ["Haldia Institute of Technology. Haldia,India"],
      DownloadLink: "Journal DOI/Resmipriya/48.NACORE P103.pdf"
    },
    {
      DOI: "NACORE P125",
      Title:"Sand Battery Technology: A Promising Solution for Renewable Energy Storage",
      Authors: ["Eldhose K V,",
      "Aiman Shahul,", 
      "Pavithra.L,","Thasni S,",
      "Danni Jennez,","Resmara S"],
      InstituteName: ["Mar Baselios Christian College of Engineering & Technology Kuttikanam, India"],
      DownloadLink: "Journal DOI/Resmipriya/49.NACORE P125.pdf"
    },
    {
      DOI: "NACORE P176",
      Title:"Global Issues Of Plastics On Enviornment And Public Health",
      Authors: ["Shana Shaji,",
      "Jerin Jose,",
      "Jeny Jose"],
      InstituteName: ["Government Ayurveda College Tripunithura, Ernakulam,","Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Resmipriya/50.NACORE P176.pdf"
    },
    {
      DOI: "NACORE P209",
      Title:"Partial Replacement of bitumen by Plant Polymer Lignin in Bituminous Pavement",
      Authors: ["Manjima M A,",
      "Nihal Nazar,",
      "Maria Jose,",
      "Soumya Anand"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Resmipriya/51.Nacore P209.pdf"
    },
    {
      DOI: "NACORE P230",
      Title:"Driver Drowsiness Detection Using Smartphone Application",
      Authors: ["Jyothika Anil,",
      "Milan Joseph Mathew,",
      "Namitha S Mukkadan,",
      "Reshmi Raveendran,",
      "Rintu Jose"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Resmipriya/52.NACORE P230.pdf"
    },
    {
      DOI: "NACORE P147",
      Title:"College Bus Security and Management System",
      Authors: ["Akhil Shaji,",
      "Albin Joshy,",
      "Athulkrishna M J,",
      "Joel Biju,",
      "Bino Thomas"],
      InstituteName: ["St.Joseph’s College of Engineering and Technology, Palai, Kerala"],
      DownloadLink: "Journal DOI/Resmipriya/53.NACORE P 147.pdf"
    },
    {
      DOI: "NACORE P116",
      Title:"Hand Gesture Based Home Automation",
      Authors: ["Athira C.P,",
      "Fathima Sithara P.A"],
      InstituteName: ["Universal Engineering College Kerala, India"],
      DownloadLink: "Journal DOI/Resmipriya/54.NACORE P 116.pdf"
    },
    {
      DOI: "NACORE P118",
      Title:"A High Speed Low Power 10T SRam With High Robustness",
      Authors: ["Sooraj K,",
      "Yasim Khan M"],
      InstituteName: ["College of Engineering Chengannur. Chengannur, India"],
      DownloadLink: "Journal DOI/Bibin/NACORE P118.pdf"
    },
    {
      DOI: "NACORE P130",
      Title:"Crop Yield And Price Prediction",
      Authors: ["Akshay K.P,",
      "Ms.Dr.nitha C Vellayudan,","Muhamed Adhil P.M,","Sivasankar C.A,","Farhan C.C"],
      InstituteName: ["Universal Engineering College Kerala, India"],
      DownloadLink: "Journal DOI/Bibin/NACORE P130.pdf"
    },
    {
      DOI: "NACORE P132",
      Title:"A Concise Review On E-Commerce Website For Visually Impaired",
      Authors: ["Naveen V,",
      "Aleena Jomon,",
      "Maria Joy,",
      "Mrs. Rekha K S,", 
      "Sarath P O"],
      InstituteName: ["College Of Engineering Kidangoor Kottayam, Kerala, India"],
      DownloadLink: "Journal DOI/Bibin/NACORE P132.pdf"
    },
    {
      DOI: "NACORE P149",
      Title:"Smart Meter using Blockchain",
      Authors: ["Romal Raju,","Aparna Unni,","Athulya T S,",
      "Sandra Madhu,","Mrs. Rekha K S"],
      InstituteName: ["College of Engineering Kidangoor Kottayam,Kerala,India"],
      DownloadLink: "Journal DOI/Bibin/NACORE P149.pdf"
    },
    {
      DOI: "NACORE P160",
      Title:"Ethical Hacking using the Switch Port Analyser in a Enterprise Network",
      Authors: ["Charukesh"],
      InstituteName: ["Indian Institute of Information Technology Design and Manufacturing Kurnool, Andhra Pradesh"],
      DownloadLink: "Journal DOI/Bibin/NACORE P160.pdf"
    },
    {
      DOI: "NACORE P201",
      Title:"Green Cloud Computing: A Literature Survey",
      Authors: ["Aaron Samuel Mathew"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Bibin/NACORE P201.pdf"
    },
    {
      DOI: "NACORE P216",
      Title:"Intelligent Buddy",
      Authors: ["Kevin Roy,Lino Shaji,",
      "Riya G Johnson,","Tince Tomy,","Jane George"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Bibin/NACORE P216.pdf"
    },
    {
      DOI: "NACORE P228",
      Title:"Assistive Technology for Deaf and Dumb",
      Authors: ["Ann Mary Babu,",
      "Dr. Jacob John,","Anto K Thomas,","Ashwin Sebastian,","Befin K Lalu,",
      "Diya Shaji"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Bibin/NACORE P228.pdf"
    },
    {
      DOI: "NACORE P234",
      Title:"Image Descriptor For Visually Impaired",
      Authors: ["Athulya Anilkumar,",
      "Abhinav V V,","Aneeta Shajan,","Anjana S Nair,", 
      "Bini M Issac,","Neenu R"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Bibin/NACORE P234.pdf"
    },
    {
      DOI: "NACORE P223",
      Title:"Lip Reading and Reconstruction using ML",
      Authors: ["Tanver Ahmad Lone,",
      "Lida K Kuriakose,",
      "Misha Rose Joseph,",
      "Namita R,",
      "Sheezan Nabi"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Bibin/NACORE_ P223.pdf"
    },
    {
      DOI: "NACORE P227",
      Title:"PPT  Generation from Report",
      Authors: ["Sebin Thomas,",
      "John V G,",
      "Josin Chacko,",
      "Mariyam Shajahan,",
      "Sharon Sunny"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Arun/NACORE_ P227.pdf"
    },
    {
      DOI: "NACORE P133",
      Title:"Reading Device For Deaf And Blind In Real-Time Speech: A Literature Survey",
      Authors: ["Sreejith S,",
      "Akshara Santhosh,",
      "Ardra Haridas,",
      "S Jayakrishnan,",
      "Ojus Thomas Lee,",
      "Chitra Merin Varghese"],
      InstituteName: ["College Of Engineering Kidangoor Kottayam, Kerala, India"],
      DownloadLink: "Journal DOI/Arun/NACORE_P133.pdf"
    },
    {
      DOI: "NACORE P154",
      Title:"Detection Of Alzheimer’s Disease And Assistance",
      Authors: ["Dona S Plavelil,",
      "Devananda A,",
      "Haritha H Kurup,",
      "Prof.Kishore Sebastian,",
      "Jissin K Jose"],
      InstituteName: ["St.Joseph’s College of Engineering and Technology, Palai, Kerala"],
      DownloadLink: "Journal DOI/Arun/NACORE_P154.pdf"
    },
    {
      DOI: "NACORE P178",
      Title:"Study on robot simulation and code generation softwares",
      Authors: ["Sandhra Shaji,",
      "Milja Sebastian,",
      "Riya Roy,",
      "Therese Siby,",
      "Divya Sunny"],
      InstituteName: ["St.Joseph’s College of Engineering and Technology, Palai, Kerala"],
      DownloadLink: "Journal DOI/Arun/68 NACORE_P178.pdf"
    },
    {
      DOI: "NACORE P180",
      Title:"Comparative System of Privacy Preserving Image Based Encryption",
      Authors: ["Navya Sajeev,",
      "Meenu Harikumar,",
      "Sayoojya Saji,",
      "Sona Sunny,",
      "Thushara Sukumar"],
      InstituteName: ["St.Joseph’s College of Engineering and Technology, Palai, Kerala"],
      DownloadLink: "Journal DOI/Arun/69 NACORE_P180.pdf"
    },
    {
      DOI: "NACORE P207",
      Title:"Machine Learning For Detection And Prediction Of Tomato Leaf Diseases:Review Paper",
      Authors: ["Sandra Saji,",
      "Melbin Mathew,",
      "Angel Maria S,",
      "Amrutha Mugesh,",
      "Jincy Lukose"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Arun/70 NACORE_P207.pdf"
    },
    {
      DOI: "NACORE P214",
      Title:"The Future of Encryption in the Face of Advancing Quantum Computing Technology",
      Authors: ["Adhil Salim,",
      "Advaith Manoj,",
      "Alan Thomas Shaji"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Arun/71 NACORE_P214.pdf"
    },
    //NO DOI FILE FOR P240
    {
      DOI: "NACORE P240",
      Title:"From Exorbitant to Affordable:The Evolution of AI Training Costs",
      Authors: ["Adhil Salim,",
      "Aaron Samuel Mathew"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: ""
    },
    {
      DOI: "NACORE P222",
      Title:"Enhancing Image Security with Introduction to Blockchain",
      Authors: ["Akil Saji,",
      "Aabel Jacob,",
      "Rosmartina Shaju,",
      "Sreeyuktha Ramesh,",
      "Samya Sadanandan,",
      "Dr. S N Kumar"],
      InstituteName: ["Amal Jyothi College of Engineering Kottayam, India"],
      DownloadLink: "Journal DOI/Arun/73 NACORE23-P222.pdf"
    },
  ];*/

  var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
function searchTable() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var cards = document.getElementsByClassName("card");
  var breaks = document.getElementsByTagName("br");
  var documents = document.getElementsByClassName("documents");

  for (var i = 0; i < cards.length; i++) {
      var cardText = cards[i].textContent.toLowerCase();

      if (cardText.includes(input)) {
          cards[i].style.display = "";
          cards[i].style.margin = "25px auto"; // adjust as needed
          cards[i].style.padding = "10px 10px"; // adjust as needed
      } else {
          cards[i].style.display = "none";
          cards[i].style.margin = "0";
          cards[i].style.padding = "0";
      }
  }
}


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

