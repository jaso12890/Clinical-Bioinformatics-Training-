export const module2 = {
  slug: "module-2",
  title: "Module 2: Professional practice, patient safety, and governance",
  description:
    "Patient safety, confidentiality, documentation, governance, scope of practice, and escalation in NHS Clinical Bioinformatics.",
  lessons: [
    {
      slug: "lesson-1",
      title:
        "Lesson 1: What does patient safety mean in Clinical Bioinformatics?",
      goal:
        "By the end of this lesson, the learner should be able to answer: “What does patient safety mean in a role that mainly works with genomic data, pipelines, and analysis rather than direct bedside care?”",
      screens: [
        {
          title: "Lesson goal",
          body:
            "By the end of this lesson, the learner should be able to answer:\n\n“What does patient safety mean in a role that mainly works with genomic data, pipelines, and analysis rather than direct bedside care?”"
        },
        {
          title: "The central idea",
          body:
            "Patient safety still matters in Clinical Bioinformatics, even if the learner is mostly working with data rather than seeing patients face to face.\n\nWhy? Because the work feeds into a clinical service. The NHS Genomic Medicine Service exists to use genomics to improve health and care, and genomic testing sits inside real NHS patient pathways rather than outside them.\n\nSo the key beginner idea is:\n\nIf your analysis can influence what enters a clinical pathway, then patient safety applies to your work too."
        },
        {
          title: "Patient safety does not only mean physical harm",
          body:
            "A beginner may hear “patient safety” and think only about things like giving the wrong medicine or performing the wrong procedure.\n\nBut in healthcare science and genomics, patient safety also includes avoiding harm caused by:\n\nwrong or misleading information\npoor-quality processes\nmishandled data\ndelayed or unclear outputs\nfailures to recognise uncertainty\nfailures to escalate concerns"
        },
        {
          title: "How a Clinical Bioinformatician can affect safety",
          body:
            "A Clinical Bioinformatician may not be the final decision-maker, but their work can still matter for safety because it supports the part of the pathway where genomic data is handled and analysed.\n\nAt a simple level, patient safety can be affected if:\n\nthe wrong sample or data is used\nthe wrong workflow is applied\na limitation is missed or not communicated\na technically weak result is presented too confidently\na concerning issue is not escalated\n\nSo patient safety in this role is about helping make sure the technical side of genomic testing is trustworthy enough for its clinical purpose."
        },
        {
          title: "A simple example",
          body:
            "Imagine a rare disease case where the analysis output is unclear, but the uncertainty is not mentioned and the result is passed on as though it were technically strong.\n\nEven if no one intended harm, that is still a patient-safety problem, because unclear or overstated evidence can distort the downstream pathway.\n\nThe safer action would be to document the uncertainty clearly and escalate appropriately."
        },
        {
          title: "Why safety starts before advanced genomics",
          body:
            "This lesson comes early for a reason.\n\nThe learner does not need to know BAM files, VCF fields, or filtering thresholds yet to understand patient safety.\n\nThey only need to understand this chain:\n\npatient → test pathway → data → analysis → downstream review → care\n\nIf something goes wrong in the data or analysis part, that can still matter to the patient because the service is interconnected."
        },
        {
          title: "What patient-safe behaviour looks like",
          body:
            "For a beginner Clinical Bioinformatician, patient-safe behaviour means things like:\n\nbeing careful with data and identifiers\nfollowing defined processes\nchecking rather than assuming\nbeing honest about limitations\nnot overstating confidence\ndocumenting clearly\nescalating when risk or uncertainty matters"
        },
        {
          title: "What unsafe behaviour looks like",
          body:
            "Unsafe behaviour in this context might include:\n\ntreating service work like informal exploration\nskipping checks because the output “looks fine”\nhiding uncertainty to appear confident\nchanging processes casually\nfailing to communicate a limitation\nassuming patient safety only matters to staff who meet patients directly\n\nThe lesson the app should teach is that patient safety is not only about direct contact. It is also about the reliability of the systems and information that care depends on."
        },
        {
          title: "The one-sentence takeaway",
          body:
            "If the learner remembers one sentence from this lesson, it should be:\n\nPatient safety in Clinical Bioinformatics means making sure genomic data and analysis are handled in ways that are reliable, honest, and appropriate for use in patient care."
        },
        {
          title: "Worked example",
          body:
            "Scenario\n\nA trainee notices that a genomic analysis output looks unusual. They are not fully sure whether the issue is a genuine result, a technical limitation, or a workflow problem.\n\nBeginner question\n\nWhat does patient safety mean here?\n\nGood beginner answer\n\nPatient safety means the trainee should not ignore the issue or present the output as fully reliable if they are unsure. The safe response is to recognise the uncertainty, document it clearly, and escalate appropriately, because genomic testing is part of a clinical service and unclear technical evidence can matter downstream."
        },
        {
          title: "Lesson summary",
          body:
            "The learner has understood this lesson if they can say:\n\n“Even though Clinical Bioinformatics is data-facing, it still affects patient safety because genomic analysis is part of an NHS clinical pathway. Safe practice means being careful, clear, honest about limitations, and willing to escalate uncertainty.”"
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "If your analysis can influence what enters a clinical pathway, then patient safety applies to your work too."
        }
      ],
      quiz: [
        {
          question:
            "Why does patient safety still apply in Clinical Bioinformatics?",
          options: [
            "Because analysis can influence information used in patient pathways",
            "Because all bioinformaticians are responsible for prescribing treatment",
            "Because laboratory accidents are the main risk in genomics work",
            "Because patient safety only matters after diagnosis is confirmed"
          ],
          answerIndex: 0,
          explanation:
            "Patient safety still applies because genomic analysis can influence what enters a clinical pathway. The role is data-facing, but the output can still affect care."
        },
        {
          question:
            "Which description best fits patient safety in this role?",
          options: [
            "Supporting reliable handling of data, analysis, and uncertainty in care",
            "Avoiding only physical mistakes made during laboratory procedures",
            "Making sure every case is completed as quickly as possible",
            "Restricting safety concerns to staff who meet patients directly"
          ],
          answerIndex: 0,
          explanation:
            "Patient safety here includes the reliability of data handling, analysis, communication, and escalation, not only direct physical harm."
        },
        {
          question:
            "A trainee is unsure whether an unusual output is technically reliable. What is the safest response?",
          options: [
            "Record the uncertainty clearly and raise it through the right route",
            "Present it as strong evidence so the pathway is not delayed",
            "Leave the issue undocumented unless someone asks about it later",
            "Remove the output quietly so no one is confused by it"
          ],
          answerIndex: 0,
          explanation:
            "The safest response is to recognise uncertainty, document it clearly, and escalate appropriately rather than overstate confidence or hide the issue."
        },
        {
          question:
            "Which statement about patient safety is most accurate?",
          options: [
            "It includes the safety and reliability of information used in care",
            "It mainly refers to bedside procedures rather than technical work",
            "It is separate from data quality and communication issues",
            "It becomes relevant only once treatment decisions have been made"
          ],
          answerIndex: 0,
          explanation:
            "Patient safety includes the safety and reliability of the information, processes, and communication that care depends on, not just direct bedside action."
        }
      ]
    },
    {
      slug: "lesson-2",
      title: "Lesson 2: Confidentiality and sensitive genomic data",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why is genomic data especially sensitive, and what does good confidentiality practice look like in Clinical Bioinformatics?”",
      screens: [
        {
          title: "Lesson goal",
          body:
            "By the end of this lesson, the learner should be able to answer:\n\n“Why is genomic data especially sensitive, and what does good confidentiality practice look like in Clinical Bioinformatics?”"
        },
        {
          title: "The central idea",
          body:
            "Clinical Bioinformatics often involves working with patient information, even when the work feels mainly technical.\n\nIn genomics, that information can be especially sensitive because it can relate to:\n\ndiagnosis\ninherited risk\nfamily members\nfuture health implications\nhighly personal health information\n\nSo the key beginner message is:\n\nConfidentiality is not an optional extra. It is part of safe professional practice."
        },
        {
          title: "Why genomic data is especially sensitive",
          body:
            "A routine lab value can be sensitive. Genomic data can be sensitive in even broader ways.\n\nThat is because genomic information may:\n\nreveal information about a person’s health or condition\nsuggest inherited risks\nhave relevance to biological relatives\nremain relevant for many years\nbe highly identifying when linked with other information\n\nFor the learner, the important point is not to memorise policy wording. It is to understand that genomic data deserves careful handling because it is personal, health-related, and potentially family-relevant."
        },
        {
          title: "Confidentiality applies even if you are “just working with data”",
          body:
            "A beginner might think:\n\n“I’m not speaking to the patient, so confidentiality is less relevant to me.”\n\nThat is wrong.\n\nIf you work with patient identifiers, reports, genomic files, case details, phenotype notes, or linked datasets, confidentiality still applies.\n\nSo in this role, confidentiality means:\n\nonly accessing information you need for your work\nhandling it appropriately\nnot sharing it casually\nrespecting governance processes\nunderstanding that technical access does not remove ethical responsibility"
        },
        {
          title: "What good confidentiality practice looks like",
          body:
            "For a beginner Clinical Bioinformatician, good confidentiality practice means things like:\n\nusing patient information only for legitimate work purposes\nbeing careful with identifiers\nnot discussing cases inappropriately\nnot sharing sensitive information through unsafe channels\nfollowing local information governance processes\nrecognising that access should be limited to what is needed\nunderstanding that confidentiality and the duty to share for direct care both matter\n\nThat last point is important: confidentiality does not mean information is never shared. It means it is shared appropriately, lawfully, and for the right reasons."
        },
        {
          title: "What poor confidentiality practice looks like",
          body:
            "Poor confidentiality practice might include:\n\nopening records or files without a work-related need\ndiscussing identifiable cases casually\ncopying sensitive data into the wrong place\ntreating genomic data as if it were ordinary anonymous practice material\nforgetting that family-linked information can be sensitive too\nassuming that because you are technical staff, confidentiality matters less"
        },
        {
          title: "Why confidentiality matters for trust",
          body:
            "Healthcare depends on trust.\n\nIf patients and families are going to undergo genomic testing, they need confidence that sensitive information is being handled responsibly.\n\nSo confidentiality is not only about avoiding breaches. It is also about protecting trust in the healthcare system."
        },
        {
          title: "Confidentiality and role boundaries",
          body:
            "This lesson also links to scope of practice.\n\nA Clinical Bioinformatician does not need unrestricted access to everything simply because they work with data. Good practice means using the minimum information needed for the task and respecting local controls and governance.\n\nSo the learner should understand:\n\nhaving technical access is not the same as having unlimited professional permission."
        },
        {
          title: "The one-sentence takeaway",
          body:
            "If the learner remembers one sentence from this lesson, it should be:\n\nGenomic data is sensitive patient information, and good Clinical Bioinformatics practice means handling it carefully, appropriately, and only for legitimate clinical work."
        },
        {
          title: "Worked example",
          body:
            "Scenario\n\nA trainee is working on a genomic case and has access to identifiable patient information and linked case details. A friend asks what kind of interesting cases they have been seeing.\n\nBeginner question\n\nWhat is the safest response?\n\nGood beginner answer\n\nThe trainee should not discuss identifiable or confidential case information casually. Even if the conversation feels informal, patient and genomic information must be treated as confidential and only used or shared appropriately for legitimate work purposes."
        },
        {
          title: "Lesson summary",
          body:
            "The learner has understood this lesson if they can say:\n\n“Genomic data is sensitive patient information. Even in a mainly technical role, confidentiality matters because access to patient data creates a duty to handle it carefully, appropriately, and only for legitimate work purposes.”"
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Confidentiality is not an optional extra. It is part of safe professional practice."
        }
      ],
      quiz: [
        {
          question: "Why is genomic data treated as especially sensitive?",
          options: [
            "Because it may reveal health, inherited, and family-linked information",
            "Because it is automatically anonymous once stored in a dataset",
            "Because it is mainly relevant to research rather than clinical care",
            "Because it stops mattering once a result has been generated"
          ],
          answerIndex: 0,
          explanation:
            "Genomic data can reveal personal health information, inherited risk, and information relevant to relatives, so it requires careful handling."
        },
        {
          question:
            "Why does confidentiality still apply in a mainly data-facing role?",
          options: [
            "Because access to patient information still creates a professional duty",
            "Because confidentiality only matters if the patient is spoken to directly",
            "Because technical staff are exempt if they do not share results externally",
            "Because confidentiality becomes optional when a case is clinically interesting"
          ],
          answerIndex: 0,
          explanation:
            "Confidentiality still applies because handling patient data creates a professional duty, even when the work feels mainly technical."
        },
        {
          question:
            "Which action best reflects good confidentiality practice?",
          options: [
            "Using only the information needed for legitimate work and following controls",
            "Opening additional cases to compare them if they look useful for learning",
            "Discussing identifiable case details informally if no final report exists yet",
            "Saving sensitive case information in a personal location for convenience"
          ],
          answerIndex: 0,
          explanation:
            "Good confidentiality practice means using only the information needed for legitimate work and handling it through the right governance processes."
        },
        {
          question:
            "Which statement about confidentiality is most accurate?",
          options: [
            "It allows appropriate sharing for the right reasons, not unrestricted use",
            "It means patient information should never be shared in any circumstance",
            "It matters less in genomics because the role is mainly technical",
            "It applies mainly to spoken conversations rather than digital information"
          ],
          answerIndex: 0,
          explanation:
            "Confidentiality does not forbid all sharing. It means information must be used and shared appropriately, lawfully, and for legitimate purposes."
        }
      ]
    },
    {
      slug: "lesson-3",
      title:
        "Lesson 3: Documentation, traceability, and reproducibility",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why is it not enough to get an answer in clinical bioinformatics — why do you also need clear records, traceable steps, and repeatable processes?”",
      screens: [
        {
          title: "Lesson goal",
          body:
            "By the end of this lesson, the learner should be able to answer:\n\n“Why is it not enough to get an answer in clinical bioinformatics — why do you also need clear records, traceable steps, and repeatable processes?”"
        },
        {
          title: "The central idea",
          body:
            "In clinical work, getting the “right-looking” answer is not enough.\n\nYou also need to be able to show:\n\nwhat was done\nhow it was done\nwhich process was used\nwhat data and assumptions were involved\nwhether the result can be repeated or checked later\n\nSo the key lesson is:\n\nA result that cannot be clearly traced or repeated is not as trustworthy as a result that can."
        },
        {
          title: "What documentation means in this role",
          body:
            "Documentation means making a clear record of relevant work.\n\nIn Clinical Bioinformatics, that can include things like:\n\nwhat sample or case was being worked on\nwhich workflow or method was used\nwhich version of a pipeline or tool was used\nwhat checks were performed\nwhat issues or uncertainties were identified\nwhat was communicated onward\n\nThe principle is constant: other people should be able to understand what happened without guessing."
        },
        {
          title: "What traceability means",
          body:
            "Traceability means being able to follow the pathway of a result back through the process that produced it.\n\nA beginner-friendly way to think about it is:\n\nCould someone sensible retrace the steps and understand where this output came from?\n\nIn practice, traceability helps answer questions like:\n\nWhich data were used?\nWhich workflow was run?\nWhich version was used?\nWere there any warnings or limitations?\nWho reviewed or handled the output?\nWas anything unusual noticed?"
        },
        {
          title: "What reproducibility means",
          body:
            "Reproducibility means that when the same method is applied appropriately again, the outcome should be consistent enough to support trust in the process.\n\nFor a beginner, the main point is this:\n\nClinical work should not depend on one-off, unrepeatable actions that only make sense to the original person who did them.\n\nIf a result changes because:\n\nthe steps were unclear\nthe settings were undocumented\nthe workflow was altered casually\nthe process depended on memory rather than records\n\nthen that is a problem for clinical trust."
        },
        {
          title: "Why this matters in NHS clinical service",
          body:
            "The NHS Genomic Medicine Service is a structured national service, and the National Genomic Test Directory specifies which tests are commissioned and which patients are eligible. That means genomic analysis is happening inside a governed service framework, not as informal personal analysis.\n\nSo if work is not documented and traceable:\n\nit becomes harder to justify what was done\nit becomes harder to review concerns\nit becomes harder to check whether the correct process was followed\nit becomes harder to maintain confidence in service outputs"
        },
        {
          title: "What good practice looks like",
          body:
            "For a beginner Clinical Bioinformatician, good practice means things like:\n\nfollowing standard or agreed procedures\nrecording what was done accurately\nnoting important issues or limitations\nusing clear, understandable language\navoiding undocumented ad hoc changes\nmaking sure someone else could follow the logic of the work"
        },
        {
          title: "What poor practice looks like",
          body:
            "Poor practice might include:\n\nrunning a workflow without recording which version was used\nchanging a step “just this once” without documenting it\nrelying on memory rather than records\npassing on a result without noting relevant uncertainty\nleaving other team members unable to understand how an output was produced\n\nThese are not small paperwork issues. They can weaken confidence, make review harder, and undermine safe clinical practice."
        },
        {
          title: "A simple comparison",
          body:
            "Here is the easiest way to remember the lesson:\n\nWeak clinical practice\n\n“I got an answer.”\n\nStrong clinical practice\n\n“I got an answer, and I can show what I did, why I did it, what method I used, and what limitations mattered.”"
        },
        {
          title: "Worked example",
          body:
            "Scenario\n\nA trainee uses a workflow to analyse a case and identifies a candidate finding. Later, a colleague asks which version of the workflow was used and whether any unusual issues were noticed during the analysis.\n\nBeginner question\n\nWhy is it a problem if the trainee cannot answer clearly?\n\nGood beginner answer\n\nBecause clinical work needs documentation and traceability. If the trainee cannot say which workflow was used, what happened during analysis, or whether any issues occurred, it becomes harder to review, trust, or repeat the work safely."
        },
        {
          title: "Lesson summary",
          body:
            "The learner has understood this lesson if they can say:\n\n“Clinical bioinformatics work must be documented, traceable, and reproducible because the NHS needs clear, reviewable, trustworthy processes, not just final answers.”"
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "A result that cannot be clearly traced or repeated is not as trustworthy as a result that can."
        }
      ],
      quiz: [
        {
          question:
            "Why is documentation important in Clinical Bioinformatics?",
          options: [
            "Because it shows what was done, how it was done, and what mattered",
            "Because it removes the need for checking work after analysis",
            "Because it is mainly useful when preparing research publications",
            "Because memory is usually enough if the result looks correct"
          ],
          answerIndex: 0,
          explanation:
            "Documentation matters because clinical work needs clear records of what was done, how it was done, and what issues or limitations mattered."
        },
        {
          question: "What does traceability allow someone to do?",
          options: [
            "Follow a result back through the process that produced it",
            "Finish the work more quickly by skipping review steps",
            "Avoid discussing the workflow with colleagues later",
            "Change methods freely without recording what happened"
          ],
          answerIndex: 0,
          explanation:
            "Traceability means a result can be followed back through the data, steps, and workflow that produced it."
        },
        {
          question:
            "Which statement best describes reproducibility in this setting?",
          options: [
            "A method should give consistent results when applied appropriately again",
            "A result is stronger if only the original analyst can reproduce it",
            "Clinical workflows should change case by case to stay flexible",
            "Repeatability matters mainly in wet-lab work rather than analysis"
          ],
          answerIndex: 0,
          explanation:
            "Reproducibility means a process should be repeatable in a controlled way and yield consistent enough results to support trust."
        },
        {
          question:
            "Which example best shows poor documentation practice?",
          options: [
            "Changing a workflow step without recording the change or why it happened",
            "Recording the workflow version used and any unusual observations",
            "Noting a limitation clearly before passing the output onward",
            "Following an agreed process and making an accurate record of it"
          ],
          answerIndex: 0,
          explanation:
            "Undocumented changes weaken traceability, make review harder, and reduce confidence in the result."
        }
      ]
    },
    {
      slug: "lesson-4",
      title:
        "Lesson 4: Governance, quality, and controlled clinical practice",
      goal:
        "By the end of this lesson, the learner should be able to answer: “Why is NHS clinical bioinformatics governed and controlled, instead of being done however seems technically convenient?”",
      screens: [
        {
          title: "Lesson goal",
          body:
            "By the end of this lesson, the learner should be able to answer:\n\n“Why is NHS clinical bioinformatics governed and controlled, instead of being done however seems technically convenient?”"
        },
        {
          title: "The central idea",
          body:
            "Clinical bioinformatics in the NHS is not open-ended personal analysis. It sits inside a national clinical service that is expected to deliver equitable, high-quality care using common national standards, specifications, and protocols.\n\nSo the key beginner message is:\n\nClinical work is controlled because patient care depends on trustworthy systems, not just clever individuals."
        },
        {
          title: "What governance means",
          body:
            "In simple terms, governance means the rules, oversight, responsibilities, and checks that help make sure work is safe, appropriate, and accountable.\n\nFor this lesson, the learner only needs to understand that governance answers questions like:\n\nWho is allowed to do this work?\nWhich process should be used?\nHow do we know it was done properly?\nWhat happens if something goes wrong?\nHow are changes reviewed and controlled?"
        },
        {
          title: "What quality means here",
          body:
            "Quality in this setting means more than “the work looks good.” It means the service is designed and run so that outputs are reliable enough for their intended clinical use.\n\nSo a quality-minded Clinical Bioinformatician should think:\n\nIs the process appropriate?\nIs it being followed properly?\nAre limitations understood?\nIs the output good enough for the clinical purpose?"
        },
        {
          title: "Why clinical practice is controlled",
          body:
            "Clinical practice is controlled because genomic testing is part of a commissioned NHS service, not just a technical possibility.\n\nThat means a clinical service cannot simply say:\n“this method looks interesting, let’s use it today.”\n\nInstead, methods and workflows need to fit:\n\nthe service pathway\nthe commissioned test framework\nquality expectations\ngovernance arrangements"
        },
        {
          title: "Why “technically possible” is not enough",
          body:
            "A script, filter, or workflow might be technically impressive. But in NHS service work, that alone is not enough.\n\nSo the beginner should learn this rule early:\n\nIn clinical bioinformatics, “it works on my machine” is not the same as “it is suitable for service use.”"
        },
        {
          title: "How governance protects patients and staff",
          body:
            "Governance does not exist just to slow people down. It helps protect:\n\npatients, by reducing unsafe or inconsistent practice\nstaff, by making responsibilities and processes clearer\nservices, by making work reviewable and accountable\ntrust, by showing that care is delivered through controlled systems"
        },
        {
          title: "What good controlled practice looks like",
          body:
            "For a beginner Clinical Bioinformatician, good controlled practice means:\n\nusing agreed workflows and procedures\nrespecting service rules and local controls\ndocumenting clearly\nnot making casual unapproved changes\nraising concerns when something seems unsafe or unclear\nunderstanding that governance and quality are part of professional practice, not separate from it"
        },
        {
          title: "What poor controlled practice looks like",
          body:
            "Poor practice might include:\n\nchanging a workflow informally because it seems faster\nusing an unapproved method because it gave a neat result once\nignoring local process requirements\nassuming quality only matters at the end\ntreating service analysis like personal experimentation"
        },
        {
          title: "A simple mental model",
          body:
            "The easiest way to remember this lesson is:\n\nWeak mindset\n\n“Can I get a result?”\n\nStrong clinical mindset\n\n“Can I get a result through the right controlled process for this service?”"
        },
        {
          title: "Worked example",
          body:
            "Scenario\n\nA trainee finds a new analysis shortcut that seems to work well on a small number of cases and wants to start using it routinely straight away.\n\nBeginner question\n\nWhy is that not automatically acceptable in NHS clinical practice?\n\nGood beginner answer\n\nBecause NHS genomic work sits inside a governed, commissioned clinical service. A method is not ready for routine use just because it looks useful on a few cases. It needs to fit service standards, governance arrangements, and quality expectations before it can be treated as routine clinical practice."
        },
        {
          title: "Lesson summary",
          body:
            "The learner has understood this lesson if they can say:\n\n“Governance and quality exist because NHS clinical bioinformatics is part of a controlled service. It is not enough for a method to seem useful; it has to be appropriate, accountable, and used within the right processes.”"
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Clinical work is controlled because patient care depends on trustworthy systems, not just clever individuals."
        }
      ],
      quiz: [
        {
          question: "What does governance mean in this context?",
          options: [
            "A framework of rules, oversight, and accountability for safe practice",
            "A way for each analyst to choose whichever process they prefer",
            "A technical term for the final output of a genomic workflow",
            "A substitute for communication within the clinical team"
          ],
          answerIndex: 0,
          explanation:
            "Governance is the framework of rules, oversight, and accountability that keeps clinical work safe, appropriate, and controlled."
        },
        {
          question: "Why is clinical bioinformatics practice controlled?",
          options: [
            "Because patient care depends on reliable and accountable service processes",
            "Because innovation must be avoided in all NHS settings",
            "Because technical work can be separated from clinical responsibilities",
            "Because quality matters only after the result has been issued"
          ],
          answerIndex: 0,
          explanation:
            "Clinical bioinformatics is controlled because it contributes to patient care through a governed service, so processes must be reliable and accountable."
        },
        {
          question:
            "What does the National Genomic Test Directory help demonstrate?",
          options: [
            "That genomic testing sits inside a commissioned service framework",
            "That any test can be adopted locally if it seems useful enough",
            "That governance applies mainly to laboratories rather than analysis",
            "That service pathways can be redesigned informally by individual staff"
          ],
          answerIndex: 0,
          explanation:
            "The Test Directory helps show that NHS genomic testing is commissioned and sits inside a defined service framework rather than ad hoc practice."
        },
        {
          question:
            "Which action best illustrates poor controlled practice?",
          options: [
            "Making an informal workflow change because it seems more convenient",
            "Following an agreed method and documenting concerns clearly",
            "Using an approved process and recording what was done",
            "Working through local controls before making a change"
          ],
          answerIndex: 0,
          explanation:
            "Informal changes made for convenience bypass governance and can undermine service safety and accountability."
        }
      ]
    },
    {
      slug: "lesson-5",
      title:
        "Lesson 5: Scope of practice, accountability, and role boundaries",
      goal:
        "By the end of this lesson, the learner should be able to answer: “How do I know what is within my role, what is outside it, and what I am personally accountable for in Clinical Bioinformatics?”",
      screens: [
        {
          title: "Lesson goal",
          body:
            "By the end of this lesson, the learner should be able to answer:\n\n“How do I know what is within my role, what is outside it, and what I am personally accountable for in Clinical Bioinformatics?”"
        },
        {
          title: "The central idea",
          body:
            "In NHS clinical practice, being helpful is not the same as doing everything yourself.\n\nA safe professional works within their scope of practice. That means understanding:\n\nwhat they are trained and authorised to do\nwhat they are not yet competent to do\nwhen they need advice, review, or escalation\nwhat they remain responsible for in their own part of the work\n\nSo the key beginner message is:\n\nGood practice is not about doing more than your role. It is about doing your role safely, competently, and honestly."
        },
        {
          title: "What scope of practice means",
          body:
            "A beginner-friendly definition is:\n\nScope of practice = the boundary of what you are trained, competent, and allowed to do safely in your role.\n\nThis boundary is influenced by:\n\nyour training stage\nyour competence\nlocal policies and supervision\nthe needs of the service\nthe risks involved in the task"
        },
        {
          title: "What accountability means",
          body:
            "Accountability means being responsible for your actions, decisions, and professional behaviour.\n\nIn simple terms, it means:\n\nyou should be able to explain what you did\nyou should be honest about what you know and do not know\nyou should not hide mistakes or uncertainty\nyou should follow professional and service standards\nyou remain responsible for doing your part properly\n\nA trainee is not accountable for everything in the entire pathway. But they are accountable for how they perform their own role within it."
        },
        {
          title: "Why scope matters in Clinical Bioinformatics",
          body:
            "Clinical Bioinformatics can sit close to:\n\ntechnical analysis\nfiltering and prioritisation\nworkflow support\ncommunication of technical findings\nclinically relevant genomic reasoning\n\nBecause it sits close to these important areas, a learner can sometimes feel pressure to overstep.\n\nThe safer mindset is:\n\nunderstanding more does not always mean acting beyond your role."
        },
        {
          title: "What working within scope looks like",
          body:
            "For a beginner Clinical Bioinformatician or STP trainee, working within scope might mean:\n\ndoing assigned analysis tasks carefully\nfollowing agreed workflows\nidentifying and communicating technical concerns\nasking for review when something is unclear\nnot presenting uncertainty as certainty\nnot taking ownership of decisions beyond your role\nbeing honest about competence level"
        },
        {
          title: "What working outside scope can look like",
          body:
            "Working outside scope might include:\n\nmaking decisions you are not trained or authorised to make\nignoring supervision when a case is complex or uncertain\npresenting a conclusion with more confidence than is justified\nacting as if your technical understanding gives you total authority over the whole pathway\nhiding uncertainty to appear more capable\n\nThe learner should understand that working outside scope is not “showing initiative.” In clinical settings, it can be unsafe."
        },
        {
          title: "Why role boundaries protect good practice",
          body:
            "Scope of practice is closely linked to role boundaries, but the point is not to keep people in silos.\n\nThe point is to make sure:\n\nthe right expertise is used in the right place\ndecisions are made at the appropriate level\nuncertainty is handled safely\nresponsibility is clear\n\nKnowing your boundary does not shrink the role. It makes the role more accurate and more trustworthy."
        },
        {
          title: "Accountability and escalation",
          body:
            "Scope of practice and accountability are tightly linked to escalation.\n\nIf something is outside your scope, or if uncertainty makes the situation risky, then accountability often means escalating rather than deciding alone.\n\nThat is an important professional point:\n\nnot escalating can be unsafe\nescalating appropriately can be the accountable action"
        },
        {
          title: "A simple mental model",
          body:
            "The easiest way to remember this lesson is:\n\nUnsafe mindset\n\n“I should handle everything myself.”\n\nSafe professional mindset\n\n“I should do my part well, know my limits, and escalate when needed.”"
        },
        {
          title: "Worked example",
          body:
            "Scenario\n\nA trainee reviews a genomic case and understands enough of the biological context to feel they know which candidate looks most relevant. However, the technical evidence is not straightforward, and the case may need broader review.\n\nBeginner question\n\nWhat would good scope-of-practice behaviour look like here?\n\nGood beginner answer\n\nGood practice would mean contributing clearly within the trainee’s role — for example by describing the technical evidence, relevant filtering logic, and any concerns — while recognising that uncertainty and broader decision-making may require review or escalation. Understanding the context is useful, but it does not automatically mean the trainee should act beyond their role or level of competence."
        },
        {
          title: "Lesson summary",
          body:
            "The learner has understood this lesson if they can say:\n\n“Scope of practice means knowing what I can do safely and competently in my role. Accountability means being able to justify my actions honestly, and safe practice includes recognising limits and escalating when needed.”"
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Good practice is not about doing more than your role. It is about doing your role safely, competently, and honestly."
        }
      ],
      quiz: [
        {
          question: "What best describes scope of practice?",
          options: [
            "The boundary of what you are trained and authorised to do safely",
            "The full range of tasks that might seem helpful in a difficult case",
            "A record of every activity carried out by the wider service",
            "A title-based definition that never changes during training"
          ],
          answerIndex: 0,
          explanation:
            "Scope of practice is the boundary of what you are trained, competent, and authorised to do safely. It is shaped by competence, supervision, and context."
        },
        {
          question: "What does accountability mean in this setting?",
          options: [
            "Being able to explain and justify your actions within your role",
            "Being responsible for every decision made across the entire pathway",
            "Avoiding uncertainty by sounding more confident than you feel",
            "Taking ownership of tasks even when they sit outside your competence"
          ],
          answerIndex: 0,
          explanation:
            "Accountability means being able to explain and justify your own actions honestly within your role. It does not mean owning the whole pathway."
        },
        {
          question:
            "Which situation best shows someone working outside scope?",
          options: [
            "Making a decision they are not trained or authorised to make",
            "Asking for review when the technical evidence is unclear",
            "Following agreed processes and documenting limitations carefully",
            "Explaining what is known and unknown before escalating a concern"
          ],
          answerIndex: 0,
          explanation:
            "Working outside scope means acting beyond your training, competence, or authority. Safe practice includes asking for review and escalating appropriately."
        },
        {
          question:
            "Why are role boundaries important in Clinical Bioinformatics?",
          options: [
            "Because they help place expertise and responsibility in the right part of the pathway",
            "Because they stop people from learning about the wider clinical context",
            "Because they reduce the need for communication and escalation",
            "Because they make multidisciplinary working less important"
          ],
          answerIndex: 0,
          explanation:
            "Role boundaries help make sure the right expertise is used in the right place and that responsibility remains clear and safe."
        }
      ]
    },
    {
      slug: "lesson-6",
      title: "Lesson 6: Escalation and safe decision-making",
      goal:
        "By the end of this lesson, the learner should be able to answer: “When should I escalate a problem in Clinical Bioinformatics, and why is escalation part of safe professional practice rather than a sign of failure?”",
      screens: [
        {
          title: "Lesson goal",
          body:
            "By the end of this lesson, the learner should be able to answer:\n\n“When should I escalate a problem in Clinical Bioinformatics, and why is escalation part of safe professional practice rather than a sign of failure?”"
        },
        {
          title: "The central idea",
          body:
            "In Clinical Bioinformatics, good decision-making does not mean handling every problem alone.\n\nSometimes the safest action is to:\n\nstop\nrecognise uncertainty or risk\ndocument the issue clearly\nask for review or support\nescalate through the correct route\n\nSo the key beginner message is:\n\nEscalation is not weakness. Escalation is one of the ways safe care is protected."
        },
        {
          title: "What escalation means",
          body:
            "A simple definition is:\n\nEscalation = raising a concern, uncertainty, risk, or issue to the right person or system when it cannot be safely managed at your level.\n\nFor a trainee or beginner Clinical Bioinformatician, escalation might involve:\n\nasking a supervisor to review something unclear\nflagging a possible workflow problem\nraising a concern about data quality\nidentifying that a case may be outside your competence\nhighlighting a governance or confidentiality concern"
        },
        {
          title: "Why escalation matters in this role",
          body:
            "Clinical Bioinformatics sits close to:\n\ntechnical evidence\npipelines and workflows\ngenomic data quality\nfiltering and prioritisation support\ncommunication of limitations\n\nThat means the role can encounter problems that are not safe to ignore.\n\nFor example:\n\na result may look technically weak\nthe wrong process may have been used\nan output may be inconsistent with the case context\nthere may be a data handling or confidentiality concern\na new method may be being used inappropriately\nthe trainee may simply not know enough yet to decide safely"
        },
        {
          title: "What safe decision-making means",
          body:
            "A beginner may think safe decision-making means “always getting the answer right immediately.”\n\nA better definition is:\n\nSafe decision-making means using good judgement about what you know, what you do not know, what the risks are, and what should happen next.\n\nThat may include:\n\nproceeding when something is routine and within scope\nchecking when something seems unusual\ndocumenting uncertainty\nescalating when risk, complexity, or uncertainty matters"
        },
        {
          title: "When a Clinical Bioinformatician should escalate",
          body:
            "At beginner level, the learner should remember a few common reasons to escalate.\n\nA. When the evidence is unclear\nIf the technical evidence is not straightforward and you are not confident it is being interpreted safely, escalate.\n\nB. When something may be outside your scope\nIf the decision goes beyond what you are trained or authorised to do, escalate.\n\nC. When there may be a patient-safety risk\nIf an error, omission, or unclear process could affect the pathway, escalate.\n\nD. When there is a governance or confidentiality issue\nIf data may have been mishandled or a process may not have been followed properly, escalate.\n\nE. When a process or workflow seems wrong\nIf you suspect the wrong method, version, or pathway is being used, escalate."
        },
        {
          title: "What escalation is not",
          body:
            "Escalation is not:\n\npanic\navoiding responsibility\npassing on every tiny uncertainty without thinking\nrefusing to learn\ntrying to protect yourself by hiding behind hierarchy\n\nGood escalation is thoughtful and proportionate.\n\nA strong trainee still does their part first:\n\nnotices the issue\nthinks clearly about it\nrecords what matters\nexplains the concern\nasks the right person in the right way"
        },
        {
          title: "Why people sometimes fail to escalate",
          body:
            "Common reasons people may fail to escalate include:\n\nwanting to appear competent\nworrying about looking inexperienced\nassuming the issue is probably minor\nnot recognising a risk early enough\nnot being sure who to tell\nfeeling pressure to keep the work moving\n\nThe learner should understand:\n\nLooking confident is less important than acting safely."
        },
        {
          title: "What good escalation looks like",
          body:
            "Good escalation usually includes:\n\nrecognising the issue clearly\ndescribing it accurately\nexplaining why it matters\nstating what is known and unknown\ndocumenting the concern\nsending it to the appropriate person or route\n\nA good escalation message is not vague panic like:\n“Something seems wrong.”\n\nIt is more like:\n“The technical evidence for this finding is unclear because of X and Y. I am not confident this can be treated as technically strong without further review.”"
        },
        {
          title: "Escalation and autonomy",
          body:
            "This is where the whole module comes together.\n\nAutonomy does not mean:\n\nnever escalating\nnever asking for help\ndeciding alone when risk is present\n\nReal autonomy means:\n\nknowing when you can proceed safely\nknowing when you cannot\nknowing when escalation is the correct action"
        },
        {
          title: "A simple mental model",
          body:
            "The easiest way to remember this lesson is:\n\nUnsafe mindset\n\n“If I escalate, it means I’m not good enough.”\n\nSafe professional mindset\n\n“If I escalate appropriately, it means I’m protecting the patient pathway and working responsibly.”"
        },
        {
          title: "Worked example",
          body:
            "Scenario\n\nA trainee reviews a genomic case and notices that the analysis output may have been generated using the wrong workflow version. They are not completely sure, but they know the result could affect what is passed onward in the pathway.\n\nBeginner question\n\nWhat is the safest action?\n\nGood beginner answer\n\nThe safest action is to document the concern and escalate it appropriately rather than ignore it or assume it is fine. NHS genomic work sits inside a controlled clinical service, and risk or quality concerns that cannot be safely resolved at one level should be escalated through the right process."
        },
        {
          title: "Lesson summary",
          body:
            "The learner has understood this lesson if they can say:\n\n“Escalation is part of safe Clinical Bioinformatics practice. If a concern, risk, or uncertainty cannot be safely managed at my level, I should recognise it, document it clearly, and raise it through the correct route.”"
        }
      ],
      sections: [
        {
          heading: "The central idea",
          body:
            "Escalation is not weakness. Escalation is one of the ways safe care is protected."
        }
      ],
      quiz: [
        {
          question: "What best defines escalation in this setting?",
          options: [
            "Raising a concern through the right route when it cannot be managed safely at your level",
            "Passing responsibility away so the issue no longer belongs to you",
            "Waiting until a problem becomes serious before telling anyone about it",
            "Seeking approval for every routine step even when no real concern exists"
          ],
          answerIndex: 0,
          explanation:
            "Escalation means raising a concern, risk, or uncertainty through the right route when it cannot be managed safely at your level."
        },
        {
          question:
            "Why is escalation important in Clinical Bioinformatics?",
          options: [
            "Because technical and workflow concerns can affect clinical pathways",
            "Because safe decision-making removes the need for professional judgement",
            "Because documentation becomes unnecessary once escalation happens",
            "Because escalation matters mainly in bedside care rather than analysis"
          ],
          answerIndex: 0,
          explanation:
            "Escalation matters because technical, workflow, confidentiality, or data concerns can affect patient pathways and service safety."
        },
        {
          question:
            "Which action best shows safe decision-making?",
          options: [
            "Recognising uncertainty, documenting it, and escalating when needed",
            "Presenting unclear evidence confidently to keep the work moving",
            "Ignoring a concern because it will probably turn out to be minor",
            "Making every difficult decision alone to avoid looking inexperienced"
          ],
          answerIndex: 0,
          explanation:
            "Safe decision-making is about judgement: recognising uncertainty, recording it clearly, and escalating appropriately when needed."
        },
        {
          question:
            "What does recognising the limits of knowledge and skill support?",
          options: [
            "Knowing when review or escalation is the safer action",
            "Avoiding communication so uncertainty does not slow the pathway",
            "Handling concerns independently even when they sit outside competence",
            "Treating escalation as a last resort only after a final decision is made"
          ],
          answerIndex: 0,
          explanation:
            "Recognising limits supports safe professional practice, including knowing when review or escalation is needed."
        }
      ]
    }
  ]
};