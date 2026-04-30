export const module23 = {
    slug: "module-23",
    title: "Module 23: Communicating findings and limitations",
    description:
      "Learn how to communicate the leading candidate, the key reasoning, and the main limitation clearly, proportionately, and within role boundaries for downstream clinical bioinformatics workflow.",
    lessons: [
      {
        slug: "lesson-1",
        title: "Lesson 1: Why communication matters in clinical bioinformatics",
        goal:
          "By the end of this lesson, the learner should be able to answer: “Why is communication a core part of safe and useful clinical bioinformatics practice rather than just something added after the analysis is finished?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “Why is communication a core part of safe and useful clinical bioinformatics practice rather than just something added after the analysis is finished?”
  
  This lesson starts Module 23 because the learner can now already reason through a realistic rare-disease case.
  
  They have learned how to:
  • understand case context
  • use phenotype and inheritance to guide the search
  • include QC and technical caveats
  • compare shortlisted candidates
  • explain a leading candidate with remaining uncertainty
  • hand the case forward without overclaiming.
  
  The next step is learning that good reasoning is not enough on its own if it is not communicated clearly. In practice, downstream colleagues do not benefit from reasoning they cannot follow, caveats they cannot see, or uncertainty that has been hidden.
  
  So the key shift in this module is:
  in clinical bioinformatics, communication is not the decorative end of the work; it is part of the work.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Communication matters because even a well-analysed case can become less safe, less useful, or more easily misunderstood if the reasoning, caveats, and limitations are not communicated clearly.
  
  So the key beginner message is:
  the value of an analysis depends not only on whether the reasoning was good, but also on whether the reasoning can be understood and used appropriately by others.
  
  That is the core lesson.`
          },
          {
            title: "Why good analysis alone is not enough",
            body: `A learner may think:
  • “If I chose the right candidate, that is the important part.”
  • “The communication part is mostly just writing it down.”
  • “As long as the answer is correct, wording matters less.”
  
  That is too weak for real practice.
  
  In realistic workflow, a good analysis still has to be:
  • understandable
  • traceable
  • proportionate
  • and usable by the next person in the pathway.
  
  A candidate that is internally well reasoned but poorly explained can create problems such as:
  • the main support not being visible
  • uncertainty being hidden
  • alternatives not being understood
  • technical caveats being missed
  • the case sounding more final than it really is.
  
  So the learner should understand:
  an analysis that is hard to interpret downstream is not as strong in practice as it looked in the analyst’s head.
  
  That is one of the most important shifts in this module.`
          },
          {
            title: "Why communication is part of patient safety even in a data-facing role",
            body: `Clinical bioinformatics is often less directly patient-facing than some other roles, but the work still feeds into patient pathways.
  
  That means poor communication can still matter in safety terms.
  
  For example, unsafe communication may:
  • make a weak candidate sound stronger than it is
  • hide an important limitation
  • make a technically uncertain finding sound settled
  • fail to explain why one candidate was prioritised over another
  • or blur the difference between prioritisation and final interpretation.
  
  So the learner should understand:
  communication affects safety because unclear or disproportionate wording can distort how the case is understood downstream.
  
  The learner does not need to be speaking directly to a patient for communication quality to matter clinically.`
          },
          {
            title: "Why downstream users need reasoning, not just conclusions",
            body: `A weak handoff often gives only the end point:
  • “Candidate A is top.”
  • “Candidate B is less likely.”
  • “This variant is the main one.”
  
  That may sound efficient, but it is often not enough.
  
  Downstream users usually need to know:
  • why the candidate leads
  • what evidence supports it
  • what caveat matters most
  • what alternatives still remain relevant
  • and what uncertainty is still unresolved.
  
  So the learner should understand:
  useful communication does not only name the conclusion; it makes the reasoning behind the conclusion visible.
  
  That is especially important in case-based work, where several candidates may have been plausible.`
          },
          {
            title: "Why communication is not only about clarity, but about proportion",
            body: `A beginner may hear “communicate clearly” and think that this simply means “make it short” or “make it simple.”
  
  Not quite.
  
  Good communication is not just about making the case easier to read. It is also about making the case sound proportionate to the evidence.
  
  That means:
  • strong cases should not be made to sound weak for no reason
  • uncertain cases should not be made to sound definitive
  • technical discomfort should not disappear in polished wording
  • and plausible alternatives should not be erased just to make the summary cleaner.
  
  So the learner should understand:
  strong communication is not only clear; it is proportionate to the actual evidence in the case.
  
  That is a major practical rule for this whole module.`
          },
          {
            title: "Why hidden caveats make communication weaker, not stronger",
            body: `A learner may be tempted to think:
  • “If I mention too many caveats, the summary will sound less helpful.”
  • “It is better to sound decisive.”
  • “The caveat can be left out if the candidate still leads.”
  
  That is unsafe thinking.
  
  In real case work, hiding caveats can make the communication look cleaner while actually making it less trustworthy.
  
  For example:
  • a low-confidence call may sound stronger than it is
  • incomplete family information may disappear from view
  • phenotype mismatch may be understated
  • or technical limitations may be lost behind confident wording.
  
  So the learner should understand:
  communication becomes stronger, not weaker, when important caveats remain visible in a controlled and proportionate way.
  
  That does not mean every sentence should be overloaded with warnings.
  It means the important limitations should not be hidden.`
          },
          {
            title: "Why communication also includes what not to imply",
            body: `Communication is not only about what words are used.
  
  It is also about what the wording implies.
  
  For example, wording can accidentally imply that:
  • the candidate is already fully established
  • uncertainty has disappeared
  • downstream review is no longer needed
  • or the learner is making a final formal clinical decision.
  
  That means communication quality includes avoiding language that quietly overstates the situation.
  
  So the learner should understand:
  safe communication does not only present the right content; it also avoids implying more certainty or authority than the case supports.
  
  This point will matter even more later in the module when we deal with role boundaries directly.`
          },
          {
            title: "Why communication is part of workflow, not an optional extra",
            body: `A weak workflow mindset is:
  • do the analysis
  • find the likely answer
  • write something brief at the end.
  
  A stronger workflow mindset is:
  • analyse the case
  • compare the candidates
  • identify the leading candidate and its main caveat
  • communicate that reasoning clearly enough for another professional to use safely.
  
  That second version is much closer to realistic practice.
  
  So the learner should understand:
  communication is part of the workflow because the case is not truly ready for handoff until the reasoning, limitations, and current position are communicated clearly.
  
  That means communication is not separate from the analytical task.
  It is one of the final parts of doing the task properly.`
          },
          {
            title: "Why communication becomes more important as cases become more realistic",
            body: `Earlier in the curriculum, isolated examples could often be explained with short answers because the teaching aim was narrow.
  
  But realistic case work is different.
  
  A real case may include:
  • a strong but imperfect leading candidate
  • one meaningful alternative
  • technical discomfort
  • incomplete family information
  • limited phenotype specificity
  • or unresolved uncertainty.
  
  As soon as cases become more realistic, communication matters more because the learner is no longer just naming a rule. They are explaining a judgement.
  
  So the learner should understand:
  communication becomes more important as the analysis becomes more integrative and less textbook-clean.`
          },
          {
            title: "A useful beginner contrast",
            body: `A weak communication mindset is:
  • “My main job is to find the best candidate.”
  
  A stronger communication mindset is:
  • “My job is to identify the strongest current candidate and explain clearly why it leads, what limits confidence, and what downstream review needs to know.”
  
  That second version is safer and more realistic.
  
  So the learner should understand:
  good clinical bioinformatics communication is not separate from good case reasoning; it is the usable expression of good case reasoning.
  
  That is the practical heart of this lesson.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In clinical bioinformatics, communication matters because case reasoning only becomes safe and useful in practice when the leading candidate, supporting logic, and important limitations are expressed clearly and proportionately for downstream use.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “I do not think communication is a major part of the job, because the important part is just doing the analysis correctly.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because good analysis is only part of safe practice. In realistic clinical bioinformatics workflow, the reasoning also has to be communicated in a way that makes the main support, the main caveat, and the current level of uncertainty visible to downstream users. If the wording is too vague, too final, or too incomplete, the case may be misunderstood even if the underlying analysis was thoughtful. So communication is not an optional soft skill added after the technical work. It is part of how the technical work becomes usable and safe in practice.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “In clinical bioinformatics, it is not enough to reason through a case well in my own head. I also need to communicate why the candidate leads, what the main caveat is, and what uncertainty remains, because that is what makes the analysis usable and safe for downstream review.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Communication matters because even a well-analysed case can become less safe, less useful, or more easily misunderstood if the reasoning, caveats, and limitations are not communicated clearly."
          }
        ],
        quiz: [
          {
            question: `A learner says:
  “The important part of the job is choosing the strongest candidate. Communication matters, but it is mainly what happens after the real analysis.”
  Which response is best?`,
            options: [
              "Broadly reasonable, because communication mainly affects how polished the final handoff sounds",
              "Incomplete, because communication is part of making the reasoning usable and safe in downstream case review",
              "Correct, because analysis and communication are best treated as separate stages of work",
              "Acceptable, provided the final summary avoids overly confident wording"
            ],
            answerIndex: 1,
            explanation:
              "The problem is not simply the order of events. The weakness is that communication is being treated as separate from the analytical task, when in practice it is part of making the case reasoning understandable and usable downstream."
          },
          {
            question: `A case handoff says:
  “Candidate A is the top candidate in this case.”
  What is the main weakness of that wording?`,
            options: [
              "It states the current ranking, but it does not show why the candidate leads or what limitation still matters",
              "It is too direct, because ranking language should usually be avoided in clinical bioinformatics",
              "It is too short, because useful case summaries should normally contain technical detail in the same sentence",
              "It is unsafe, because no candidate should be described as leading before final interpretation"
            ],
            answerIndex: 0,
            explanation:
              "The issue is not that ranking is mentioned. The issue is that the reasoning and the key caveat are not yet visible, which makes the summary less useful for downstream review."
          },
          {
            question: `A learner removes a technical caveat from the summary because the candidate still remains ranked first overall.
  Which criticism is strongest?`,
            options: [
              "That is usually reasonable, because caveats matter most when they change the rank order directly",
              "That is risky, because an important caveat may still affect how much confidence downstream users place in the leading candidate",
              "That is fine, because technical caveats can be discussed later if someone asks for more detail",
              "That is incorrect, because every possible limitation should always be included in the main summary"
            ],
            answerIndex: 1,
            explanation:
              "A caveat can still matter even if it does not remove the candidate from first place. Leaving it out may make the case sound more settled than the evidence supports."
          },
          {
            question: "Which summary wording is strongest for a realistic case handoff?",
            options: [
              "“Candidate B is currently the strongest candidate, although technical uncertainty still needs to remain visible.”",
              "“Candidate B is probably the answer, despite a few minor caveats.”",
              "“Candidate B is the most convincing finding and should be treated as the diagnosis.”",
              "“Candidate B appears important, but the case is too uncertain to describe it as leading.”"
            ],
            answerIndex: 0,
            explanation:
              "This is the most proportionate option. It identifies a current leader clearly, keeps the uncertainty visible, and does not drift into final sign-out language."
          },
          {
            question: `A learner says:
  “Because clinical bioinformatics is not usually patient-facing in the same way as some other roles, communication problems are less important than technical mistakes.”
  Which response is best?`,
            options: [
              "Mostly true, because technical errors usually have more direct consequences than wording errors",
              "Incomplete, because unclear communication can still distort how findings, caveats, and limitations are understood downstream",
              "Reasonable, because communication problems are usually corrected during later MDT or clinical review",
              "Incorrect, because communication failures are generally more serious than technical failures in genomics practice"
            ],
            answerIndex: 1,
            explanation:
              "The statement is partly understandable, but too dismissive. Even in a data-facing role, poor communication can still affect downstream understanding and therefore still matters for safe workflow."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Communication mainly improves the presentation of work that has already been completed correctly",
              "Communication matters most when a case is especially uncertain or technically difficult",
              "Communication is part of workflow quality because it makes case reasoning understandable, proportionate, and usable downstream",
              "Communication is valuable, but usually less central than the technical reasoning itself"
            ],
            answerIndex: 2,
            explanation:
              "That is the best-balanced summary of the lesson. It treats communication as part of the workflow itself rather than as a later presentation step."
          }
        ]
      },
      {
        slug: "lesson-2",
        title: "Lesson 2: How do you explain the leading candidate clearly?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I explain why one candidate currently leads in a case without sounding vague, overconfident, or incomplete?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I explain why one candidate currently leads in a case without sounding vague, overconfident, or incomplete?”
  
  This lesson follows the first communication lesson because once the learner understands that communication is part of safe workflow, the next step is learning how to communicate the leading candidate well.
  
  By this point in the curriculum, the learner already knows that a realistic case may contain:
  • a leading candidate
  • one or more plausible alternatives
  • technical or biological caveats
  • remaining uncertainty
  • and a downstream review boundary.
  
  So this lesson is not about choosing the leading candidate.
  It is about explaining the leading candidate clearly enough that another professional can understand why it currently sits highest in the case.
  
  That matters because weak wording can fail in different ways:
  • it can be too vague to be useful
  • it can be too final for the stage of work
  • it can hide why the candidate leads
  • or it can mention the candidate without making the comparison visible.
  
  So the key shift in this lesson is:
  a good leading-candidate summary does not just name the candidate; it explains why it currently leads in this case.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Explaining the leading candidate clearly means stating which candidate currently leads, why it leads, and what important limitation still matters.
  
  So the key beginner message is:
  the summary should make the ranking understandable, not just visible.
  
  That is the core lesson.`
          },
          {
            title: "Why naming the candidate is not enough",
            body: `A learner may think:
  • “I’ve already done the hard part by deciding which candidate is top.”
  • “If I say which candidate leads, people will understand the rest.”
  • “The detailed reasoning can always be added later if someone asks.”
  
  That is weak case communication.
  
  A statement like:
  • “Candidate A is top”
  • “Candidate B is the main finding”
  • “Candidate C leads the case”
  
  may identify the ranking, but it does not yet explain the ranking.
  
  The downstream user may still not know:
  • why the candidate leads
  • what evidence most strongly supports it
  • whether there is an important caveat
  • or how strongly it leads relative to the alternatives.
  
  So the learner should understand:
  naming the leader is only the start; useful communication also makes the reason for the lead visible.
  
  That is one of the main practical goals of this lesson.`
          },
          {
            title: "What a strong leading-candidate summary usually includes",
            body: `A safe beginner structure is:
  
  1. Current position
  Say clearly what the candidate is in the case now.
  Examples:
  • strongest current candidate
  • leading candidate in this case
  • strongest current fit for downstream review
  
  2. Main supportive reasons
  State the main reasons it leads.
  Examples:
  • strongest phenotype fit
  • most coherent inheritance fit
  • better technical support than alternatives
  • stronger mechanism fit in this case
  
  3. Main caveat
  State the most important limitation that still matters.
  Examples:
  • technical uncertainty remains
  • family information is incomplete
  • phenotype fit is strong but not highly specific
  • another candidate remains plausible
  
  So the learner should understand:
  a strong summary usually includes position, support, and caveat.
  
  That is the simplest useful structure.`
          },
          {
            title: "Why the explanation should stay comparative",
            body: `A common beginner mistake is to describe the leading candidate as though it existed alone.
  
  For example:
  • “This candidate fits the phenotype well.”
  • “This candidate has a plausible mechanism.”
  • “This candidate is technically convincing.”
  
  Those may all be true, but they do not fully explain why that candidate leads this case.
  
  In realistic case work, a candidate usually leads because it is stronger than the alternatives in one or more important ways.
  
  So the learner should understand:
  a clear leading-candidate explanation is usually comparative, even if the alternatives are only mentioned briefly.
  
  This could sound like:
  • “It remains the strongest candidate because its phenotype fit is more specific than the alternatives.”
  • “It currently leads despite a technical caveat because the alternatives are weaker overall.”
  • “It remains above the other shortlisted candidates because the inheritance and mechanism fit are more coherent in this case.”
  
  That is more useful than isolated praise.`
          },
          {
            title: "Why vague wording weakens the summary",
            body: `Weak communication often sounds like:
  • “This candidate seems good.”
  • “This variant looks important.”
  • “This is probably the one.”
  • “This appears convincing.”
  
  These phrases may sound safe because they avoid overclaiming, but they are often too vague to be useful.
  
  They do not show:
  • what kind of support exists
  • why the candidate leads
  • what makes it stronger than the alternatives
  • or what limitation still matters.
  
  So the learner should understand:
  a summary becomes weaker when it is so vague that the reasoning is hidden.
  
  Safe communication is not the same as vague communication.`
          },
          {
            title: "Why overconfident wording is also a problem",
            body: `The opposite mistake is to sound too final.
  
  For example:
  • “This is the diagnosis.”
  • “This is clearly causal.”
  • “This is the answer.”
  • “This proves the cause of disease.”
  
  These phrases may sound decisive, but they often go beyond the learner’s role and beyond the current stage of case work.
  
  Even when one candidate clearly leads, the safest communication at this stage usually keeps the wording at the level of:
  • strongest current candidate
  • leading candidate for downstream review
  • best overall fit in this case at present
  
  So the learner should understand:
  strong communication should be clear and useful without sounding like final formal sign-out.
  
  This lesson is about finding that balance.`
          },
          {
            title: "Why the best summary usually identifies the main reason, not every reason",
            body: `A learner may think good communication means listing every positive feature of the candidate.
  
  That can also weaken the summary.
  
  For example, a long list of:
  • phenotype fit
  • inheritance fit
  • mechanism fit
  • population context
  • assay compatibility
  • technical confidence
  • comparative ranking
  • general plausibility
  
  may become harder to follow if it is not structured well.
  
  A stronger summary usually identifies the main reasons the candidate leads, not every possible reason in the case.
  
  So the learner should understand:
  clarity often improves when the summary focuses on the most important supportive points rather than trying to say everything at once.
  
  This is especially useful in realistic workflow, where the reader needs the key logic first.`
          },
          {
            title: "Why the main caveat should usually be visible in the same summary",
            body: `A weak summary often does one of two things:
  • leaves the caveat out completely
  • or separates the caveat so far from the main summary that it loses force.
  
  A stronger summary usually keeps the leading position and the main caveat close together.
  
  For example:
  • “Candidate A is currently the strongest candidate because of its phenotype and inheritance fit, although technical confidence is reduced by uneven read support.”
  • “Candidate B remains the leading candidate because it has the strongest overall evidence balance, but the phenotype match is not highly specific.”
  • “Candidate C currently leads over the alternatives, although incomplete family information still limits confidence.”
  
  So the learner should understand:
  the main caveat should usually travel with the main claim, so the case does not sound more settled than it is.
  
  That is a major communication habit for safe practice.`
          },
          {
            title: "A practical beginner template",
            body: `A safe beginner template is:
  
  Candidate X is currently the strongest candidate because [main reason 1] and [main reason 2]. However, [main caveat]. Overall, it remains ahead of the alternatives because [comparative reason].
  
  For example:
  
  “Candidate A is currently the strongest candidate because it has the most specific phenotype fit and the most coherent inheritance pattern in this case. However, technical confidence is reduced by uneven read support. Overall, it remains ahead of the alternatives because their biological fit is weaker.”
  
  That wording works because it:
  • identifies the leader
  • explains the main support
  • keeps the caveat visible
  • and makes the comparison visible.
  
  So the learner should understand:
  templates are useful when they help the learner communicate the structure of the reasoning clearly, not when they turn the case into empty stock wording.`
          },
          {
            title: "A useful beginner contrast",
            body: `A weak leading-candidate summary is:
  • “Candidate A is top and looks convincing.”
  
  A stronger leading-candidate summary is:
  • “Candidate A is currently the strongest candidate because it has the best phenotype and inheritance fit in this case, although a technical caveat still limits confidence.”
  
  The second version is stronger because it tells the reader:
  • what the current position is
  • why that position was reached
  • and what still limits certainty.
  
  So the learner should understand:
  the aim is not just to sound careful; the aim is to make the case logic visible in a compact, useful way.
  
  That is the practical heart of this lesson.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  A good leading-candidate summary states which candidate currently leads, explains the main reasons it leads, and keeps the most important caveat visible in the same piece of communication.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  
  “Candidate B is the top finding and is probably the answer.”
  
  Beginner question
  
  Why is that weaker than it sounds?
  
  Good beginner answer
  
  Because it gives a rank order, but it does not clearly show why Candidate B leads. It also drifts toward final-sounding language by saying it is “probably the answer,” which risks sounding more settled than the case may really be at this stage. A stronger version would explain the main reasons Candidate B leads, keep the main limitation visible, and present it as the strongest current candidate rather than as a finished diagnostic conclusion.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “When I explain the leading candidate, I should not just name it. I should make clear why it currently leads, what the main support is, and what caveat still matters, so the ranking is understandable and proportionate.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Explaining the leading candidate clearly means stating which candidate currently leads, why it leads, and what important limitation still matters."
          }
        ],
        quiz: [
          {
            question: `A case summary says:
  “Candidate A is the leading candidate.”
  What is the main weakness of that wording?`,
            options: [
              "It sounds too formal for internal case communication",
              "It identifies the rank, but not the reasoning behind the rank",
              "It should avoid stating rank until formal interpretation is complete",
              "It focuses too much on the candidate rather than the phenotype"
            ],
            answerIndex: 1,
            explanation:
              "The wording is not wrong, but it is incomplete. It tells the reader which candidate leads without showing why it leads."
          },
          {
            question: "Which summary is strongest?",
            options: [
              "“Candidate B is currently the strongest candidate because its phenotype fit is more specific than the alternatives, although technical uncertainty still matters.”",
              "“Candidate B is highly convincing and probably causal in this case.”",
              "“Candidate B seems good and may be worth discussing.”",
              "“Candidate B has several positive features, so it should stay first for now.”"
            ],
            answerIndex: 0,
            explanation:
              "This is the most proportionate wording. It identifies the leader, gives a comparative reason, and keeps the main caveat visible without sounding final."
          },
          {
            question: `A learner writes a long paragraph listing every positive feature of the leading candidate, but does not mention the main caveat.
  What is the strongest criticism?`,
            options: [
              "It is too detailed, because leading candidates should usually be described in one sentence only",
              "It is incomplete, because the summary may sound stronger than the evidence if the main limitation is not visible",
              "It is unsafe, because positive features should not be listed before MDT review",
              "It is weak, because only comparative language should be used in case summaries"
            ],
            answerIndex: 1,
            explanation:
              "The problem is not detail by itself. The main issue is that leaving out the key caveat can make the summary sound more settled than the case supports."
          },
          {
            question:
              "Why is comparative wording often useful when explaining the leading candidate?",
            options: [
              "It makes the summary sound more confident",
              "It reminds the reader that the candidate leads within a shortlist, not in isolation",
              "It avoids the need to mention uncertainty directly",
              "It replaces the need to explain phenotype and inheritance fit"
            ],
            answerIndex: 1,
            explanation:
              "Comparative wording helps show why the candidate leads this case, especially when more than one plausible candidate was considered."
          },
          {
            question:
              "Which wording best keeps the main caveat close to the main claim?",
            options: [
              "“Candidate C currently leads because of its phenotype and mechanism fit. Technical confidence is reduced by uneven support.”",
              "“Candidate C currently leads because of its phenotype and mechanism fit, although technical confidence is reduced by uneven support.”",
              "“Candidate C currently leads. The technical review can be considered separately.”",
              "“Candidate C currently leads, and the technical issues are unlikely to matter.”"
            ],
            answerIndex: 1,
            explanation:
              "This wording keeps the leading position and the caveat in the same summary, which helps prevent the candidate from sounding more secure than it really is."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "A leading-candidate summary should mainly identify rank and avoid too much explanation",
              "A leading-candidate summary is strongest when it explains the current position, the main supporting logic, and the key caveat together",
              "A leading-candidate summary should sound decisive enough that the reader is not distracted by uncertainty",
              "A leading-candidate summary matters less if the analyst has already compared the shortlist carefully"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: a useful summary shows the current leader, the main reason it leads, and the main limitation that still matters."
          }
        ]
      },
      {
        slug: "lesson-3",
        title: "Lesson 3: How do you communicate uncertainty and limitations well?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I communicate uncertainty and limitations clearly without sounding either overconfident or unhelpfully vague?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I communicate uncertainty and limitations clearly without sounding either overconfident or unhelpfully vague?”
  
  This lesson follows the leading-candidate lesson because once the learner can explain why one candidate currently leads, the next step is learning how to communicate what still limits confidence.
  
  That matters because realistic case work rarely ends with perfect certainty. A case may still contain:
  • technical discomfort
  • incomplete family information
  • limited phenotype specificity
  • more than one plausible candidate
  • assay limitations
  • or uncertainty about how strongly the current evidence should be weighted.
  
  So this lesson is not about weakening the case unnecessarily.
  It is about learning how to make uncertainty visible, proportionate, and useful.
  
  The key shift in this lesson is:
  good communication does not hide uncertainty, but it also does not let uncertainty overwhelm the whole message.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Communicating uncertainty well means stating what still limits confidence, while still making clear what the current position in the case is.
  
  So the key beginner message is:
  uncertainty should be visible, but it should be described in a way that still leaves the case understandable and usable.
  
  That is the core lesson.`
          },
          {
            title: "Why uncertainty is normal in realistic case work",
            body: `A learner may worry that uncertainty means the case has gone wrong.
  
  Not necessarily.
  
  In realistic clinical bioinformatics case work, uncertainty is often expected.
  
  For example, uncertainty may arise because:
  • the phenotype fit is strong but not highly specific
  • the family structure does not fully resolve inheritance
  • technical support is present but not fully reassuring
  • the leading candidate is better than the alternatives, but not decisively better
  • some variant types or regions may be less confidently assessed by the assay
  • or the biological story is plausible without being fully clean.
  
  So the learner should understand:
  uncertainty is often part of realistic case reasoning, not automatically a sign of poor analysis.
  
  That matters because the goal is not to eliminate all uncertainty in the wording.
  The goal is to represent it honestly and proportionately.`
          },
          {
            title: "Why hidden uncertainty makes communication less safe",
            body: `A learner may think:
  • “If I mention uncertainty, the summary will sound weak.”
  • “It is better to sound decisive if one candidate still leads.”
  • “Downstream users can ask later if they want caveats.”
  
  That is risky.
  
  If important uncertainty is hidden, the case may sound more settled than it really is.
  
  That can happen when wording:
  • presents a technically uncomfortable call as though it were clean
  • ignores incomplete family evidence
  • hides phenotype mismatch or limited specificity
  • removes the visibility of a meaningful alternative
  • or makes current prioritisation sound like final proof.
  
  So the learner should understand:
  uncertainty that matters should not be hidden, because hidden uncertainty can distort how the case is understood downstream.
  
  That is a safety point, not just a style point.`
          },
          {
            title: "Why uncertainty should not take over the whole summary either",
            body: `The opposite mistake is to communicate uncertainty so heavily that the summary stops being useful.
  
  For example, weak wording may sound like:
  • “Everything is uncertain.”
  • “Nothing can really be said.”
  • “This might be relevant, but there are many caveats.”
  • “There are too many limitations to comment.”
  
  That can also be a problem.
  
  Even when uncertainty is real, the downstream user may still need to know:
  • which candidate currently leads
  • why it leads
  • what the biggest limitation is
  • and whether any alternative remains important.
  
  So the learner should understand:
  good uncertainty language does not erase the current position in the case.
  
  The case can still have a strongest current candidate even when confidence is not complete.`
          },
          {
            title: "What kinds of uncertainty may need to be communicated",
            body: `At this stage, the learner does not need a perfect taxonomy, but they do need to recognise some common categories.
  
  A case summary may need to communicate uncertainty related to:
  
  Technical limitations
  • uneven read support
  • lower-confidence call features
  • difficult mapping context
  • assay or coverage limitations
  
  Phenotypic limitations
  • broad rather than specific phenotype overlap
  • incomplete clinical detail
  • phenotype not fully matching the strongest known pattern
  
  Inheritance limitations
  • incomplete family data
  • uncertain segregation support
  • family structure that limits how strongly inheritance can be used
  
  Comparative uncertainty
  • another candidate remains plausible
  • the lead candidate is strongest, but not overwhelmingly so
  
  So the learner should understand:
  uncertainty is not one vague thing. It often has a specific source, and that source should usually be made visible.
  
  That makes the communication more informative and more trustworthy.`
          },
          {
            title: "Why specific limitations are stronger than vague caution",
            body: `A weak summary often uses vague caution words such as:
  • “with some uncertainty”
  • “with a few caveats”
  • “not fully clear”
  • “some limitations apply”
  
  Those phrases are not always wrong, but on their own they often do not tell the reader much.
  
  A stronger summary usually makes the uncertainty more specific.
  
  For example:
  • “although read support is uneven”
  • “although phenotype specificity is limited”
  • “although family data do not fully resolve inheritance”
  • “although another candidate remains plausible”
  
  So the learner should understand:
  specific uncertainty is usually more useful than generic caution language.
  
  That helps the reader understand what kind of confidence problem is present, not just that some problem exists.`
          },
          {
            title: "Why uncertainty should usually be proportionate to its importance",
            body: `Not every limitation deserves the same emphasis.
  
  A learner can weaken a summary by treating every caveat as if it had the same weight.
  
  For example, a minor issue should not be worded as though it completely destabilises the case.
  But a major limitation should not be buried in soft wording either.
  
  So the learner should understand:
  the wording should reflect how much the limitation actually matters to the current case position.
  
  That means:
  • small caveat = visible, but not dominant
  • meaningful caveat = clearly stated
  • major limitation = explicitly important to confidence or handoff.
  
  This is one of the hardest judgement skills in the module.`
          },
          {
            title: "Why uncertainty should usually stay close to the main claim",
            body: `A good communication habit is to keep the main uncertainty close to the main summary claim.
  
  For example:
  • “Candidate A currently leads because of its phenotype and inheritance fit, although technical confidence is reduced by uneven alternate support.”
  • “Candidate B remains the strongest candidate, although the phenotype match is broader than ideal.”
  • “Candidate C is currently ranked first, but incomplete parental data still limits inheritance-based confidence.”
  
  This works better than:
  • presenting the leading candidate strongly in one section
  • then mentioning the caveat much later in a different section.
  
  So the learner should understand:
  when the uncertainty matters to confidence, it should usually appear near the main claim rather than being separated from it.
  
  That helps stop the summary sounding more secure than it really is.`
          },
          {
            title: "Why meaningful alternatives are also part of communicating uncertainty",
            body: `Sometimes the main uncertainty is not only about one candidate’s weakness.
  
  Sometimes it is also about the presence of a serious alternative.
  
  For example:
  • Candidate A currently leads, but Candidate B remains plausible because of stronger technical support
  • Candidate B leads overall, but Candidate C still fits an alternative interpretation of the phenotype
  • the ranking exists, but the gap between first and second is not large.
  
  So the learner should understand:
  uncertainty may also need to be communicated comparatively, especially when another candidate still matters.
  
  That is often more informative than saying only that “uncertainty remains.”`
          },
          {
            title: "A practical beginner contrast",
            body: `A weaker summary sounds like:
  • “Candidate A is the strongest candidate, with some caveats.”
  
  A stronger summary sounds like:
  • “Candidate A is currently the strongest candidate because of its phenotype and inheritance fit, although technical confidence is limited by uneven read support and Candidate B remains a meaningful alternative.”
  
  The second version is stronger because it tells the reader:
  • the current position
  • the main source of support
  • the main source of uncertainty
  • and the fact that the shortlist still contains meaningful competition.
  
  So the learner should understand:
  good uncertainty language keeps the case usable by making the limitation specific and proportionate.
  
  That is the practical heart of this lesson.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Communicating uncertainty well means making the important limitation or unresolved issue visible in specific, proportionate language while still making clear what the current position in the case is.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  
  “Candidate A is currently the strongest candidate and should be prioritised for downstream review.”
  
  A colleague says:
  
  “That may be true, but the wording is still incomplete.”
  
  Beginner question
  
  Why might the colleague be right?
  
  Good beginner answer
  
  Because the summary gives the current ranking, but it does not show what still limits confidence. If Candidate A has a technical caveat, incomplete family evidence, or a meaningful alternative still on the shortlist, that uncertainty should usually remain visible in the same summary. A stronger version would still state that Candidate A currently leads, but it would make the main limitation more specific, so the case does not sound more settled than it really is.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “When I communicate uncertainty, I should not hide the limitation, but I also should not let the whole summary collapse into vagueness. I should make the main uncertainty specific, show how much it matters, and still make clear what the current position in the case is.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Communicating uncertainty well means stating what still limits confidence, while still making clear what the current position in the case is."
          }
        ],
        quiz: [
          {
            question: `A learner says:
  “If one candidate still leads overall, I do not think the remaining uncertainty needs to be stated clearly.”
  Which response is best?`,
            options: [
              "Reasonable, because the rank order matters more than the caveat once a leader is identified",
              "Incomplete, because a leading candidate can still have limitations that affect how strongly the case should be understood downstream",
              "Fair enough, because uncertainty is usually obvious from the wider case context anyway",
              "Acceptable, provided the limitation is relatively technical rather than biological"
            ],
            answerIndex: 1,
            explanation:
              "A candidate can still lead while meaningful uncertainty remains. If that uncertainty affects confidence, it should usually stay visible in the communication."
          },
          {
            question: "Which summary communicates uncertainty most effectively?",
            options: [
              "“Candidate B currently leads, although some uncertainty remains.”",
              "“Candidate B currently leads, although technical confidence is reduced by uneven read support.”",
              "“Candidate B currently leads, but there are many caveats.”",
              "“Candidate B currently leads, though the case is not fully clear.”"
            ],
            answerIndex: 1,
            explanation:
              "All four options signal caution, but B is the most useful because it makes the uncertainty specific rather than generic."
          },
          {
            question: `A learner writes:
  “Candidate C remains of interest, but nothing strong can really be said because the case contains uncertainty.”
  What is the main weakness of that wording?`,
            options: [
              "It overstates confidence in Candidate C",
              "It treats uncertainty as though it removes the need to state the current case position",
              "It focuses too much on phenotype rather than inheritance",
              "It should avoid using the phrase “of interest”"
            ],
            answerIndex: 1,
            explanation:
              "The problem is not that uncertainty is mentioned. The problem is that the wording becomes so uncertainty-heavy that it stops telling the reader what can still be said usefully."
          },
          {
            question:
              "Which statement best reflects proportionate communication of limitations?",
            options: [
              "Every caveat should be given equal emphasis so nothing is missed",
              "The main limitation should be stated in a way that reflects how much it actually affects confidence in the current case",
              "Limitations should only be mentioned when they completely change the rank order",
              "Minor caveats should usually be left out so the summary stays clear"
            ],
            answerIndex: 1,
            explanation:
              "This lesson is not about listing every issue with equal force. It is about representing the important limitation in proportion to its actual impact on the case."
          },
          {
            question:
              "Why can another plausible shortlisted candidate be part of the uncertainty that needs to be communicated?",
            options: [
              "Because a case is more realistic when every candidate is mentioned equally",
              "Because the strength of the leading candidate may depend partly on how clearly it separates from the alternatives",
              "Because comparative language should replace technical caveats whenever possible",
              "Because an alternative candidate always makes the first-ranked candidate unreliable"
            ],
            answerIndex: 1,
            explanation:
              "Sometimes the uncertainty is not only within the leading candidate itself. It may also lie in the fact that another candidate remains meaningfully competitive."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Uncertainty should usually be softened so the leading candidate remains clear",
              "Uncertainty is important, but it should usually be kept separate from the main candidate summary",
              "Uncertainty should be made visible in specific, proportionate language without erasing the current case position",
              "Uncertainty matters most when there is no leading candidate at all"
            ],
            answerIndex: 2,
            explanation:
              "That is the integrated lesson: good communication keeps the case usable by making the current position and its main limitation visible together."
          }
        ]
      },
      {
        slug: "lesson-4",
        title: "Lesson 4: How should communication change for different audiences?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How should I communicate the same bioinformatic case differently depending on who needs to use the information?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How should I communicate the same bioinformatic case differently depending on who needs to use the information?”
  
  This lesson follows the uncertainty lesson because once the learner can explain a leading candidate and communicate limitations proportionately, the next step is learning that the same case may need to be communicated differently to different audiences.
  
  That does not mean changing the science or changing the underlying judgement.
  
  It means changing:
  • the level of detail
  • the type of emphasis
  • the amount of technical language
  • and the structure of the explanation
  
  depending on what the audience needs in order to use the information safely.
  
  So the key shift in this lesson is:
  good communication is not only accurate; it is also audience-aware.
  
  That matters because the same wording will not be equally useful for every downstream reader. A communication style that works well for a bioinformatics colleague may be too technical for a broader MDT context, while a very broad summary may be too thin for a colleague who needs to understand the technical reasoning.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Audience-aware communication means keeping the case reasoning accurate while adjusting the wording, structure, and level of detail to suit the needs of the person receiving it.
  
  So the key beginner message is:
  the underlying case judgement should stay consistent, but the way it is explained may need to change.
  
  That is the core lesson.`
          },
          {
            title: "Why one fixed communication style is not enough",
            body: `A beginner may think:
  • “As long as the wording is correct, it should work for everyone.”
  • “Good summaries should always look the same.”
  • “If I explain the full technical detail once, that should be enough.”
  
  That is too rigid.
  
  Different audiences often need different things from the same case summary.
  
  For example:
  • a bioinformatics colleague may need to understand the technical caveat in more specific terms
  • a broader clinical review audience may need the main implication and main limitation more than the read-level detail
  • a scientist reviewing the case may want the comparative ranking logic made explicit
  • a mixed audience may need clearer wording and less assumption of specialist bioinformatics shorthand.
  
  So the learner should understand:
  a summary can be accurate and still be poorly matched to its audience.
  
  That is why audience-awareness matters.`
          },
          {
            title: "What should stay the same across audiences",
            body: `It is important that audience-aware communication does not become audience-dependent truth.
  
  The learner should not change the core case judgement depending on who is listening.
  
  The following should usually remain stable:
  • which candidate currently leads
  • the main reasons it leads
  • the main limitation that affects confidence
  • the fact that uncertainty remains if uncertainty remains
  • the role boundary of the communication.
  
  So the learner should understand:
  audience-aware communication changes the way the case is expressed, not the core reasoning itself.
  
  That is a very important safety point.`
          },
          {
            title: "What may change across audiences",
            body: `What can change is the shape of the explanation.
  
  This may include:
  • how much technical terminology is used
  • whether the summary leads with technical evidence or case significance
  • how much comparative detail is included
  • how much background explanation is needed
  • whether specialist shorthand is appropriate.
  
  For example, a more technical audience may find this useful:
  • uneven alternate support toward read ends reduces confidence in the leading candidate
  
  A broader audience may find this more useful:
  • the leading candidate remains plausible, but a technical limitation still reduces confidence.
  
  Both can describe the same issue truthfully.
  The difference is the amount of detail and the likely needs of the audience.
  
  So the learner should understand:
  audience-aware communication often changes the level and framing of detail, not the underlying conclusion.`
          },
          {
            title: "Communicating to a bioinformatics or genomics scientist audience",
            body: `A more specialist audience can usually use:
  • more technical wording
  • more direct discussion of QC or evidence type
  • more compact shorthand
  • more explicit comparative reasoning.
  
  For this kind of audience, it may be useful to say things like:
  • technical confidence is reduced by uneven alternate support
  • inheritance support is suggestive rather than complete
  • phenotype fit is stronger than the remaining alternative candidate
  • mechanism coherence is better for Candidate A than Candidate B.
  
  This style can be efficient because the audience is likely to understand the concepts without needing broader unpacking.
  
  So the learner should understand:
  when the audience is technically closer to the analysis, more specific evidence language may be appropriate and more useful.`
          },
          {
            title: "Communicating to a broader MDT or mixed clinical audience",
            body: `A broader MDT or mixed audience may still need the same reasoning, but not always in the same technical form.
  
  What may matter more here is:
  • which candidate currently leads
  • why it matters in the case
  • what limitation still affects confidence
  • whether an alternative remains relevant
  • what needs to be kept in mind during downstream review.
  
  That means the communication may need:
  • less specialist shorthand
  • fewer dense technical phrases
  • more explicit signposting of the main point
  • clearer prioritisation of the most relevant limitation.
  
  For example, instead of focusing first on a detailed QC phrase, the learner may begin with:
  • Candidate A remains the strongest current candidate, although a technical limitation still reduces confidence.
  
  That keeps the case understandable without hiding the technical issue.
  
  So the learner should understand:
  broader audiences often need the reasoning to stay accurate but be framed in a way that is easier to interpret outside specialist bioinformatics language.`
          },
          {
            title: "Why over-technical wording can fail even when it is accurate",
            body: `A learner may think:
  • “More detail is always better.”
  • “Using technical terminology proves the reasoning is rigorous.”
  • “If the summary is accurate, it does not matter if some people find it dense.”
  
  That is not always safe.
  
  A summary can be technically accurate but still fail if the audience cannot easily identify:
  • the leading candidate
  • the main reason it leads
  • the key limitation
  • and the current case position.
  
  If the technical detail obscures the case message, the communication becomes less useful.
  
  So the learner should understand:
  accuracy is necessary, but usefulness also depends on whether the audience can recognise the main point of the case.
  
  This is one of the most important practical lessons in audience-aware communication.`
          },
          {
            title: "Why over-simplified wording can also fail",
            body: `The opposite problem is to simplify so much that the communication loses the reasoning.
  
  For example:
  • “Candidate B looks best.”
  • “There is some uncertainty.”
  • “A technical issue exists.”
  
  These may be easier to read, but they may no longer tell the audience enough to use the case safely.
  
  So the learner should understand:
  audience-aware communication should simplify only as far as the reasoning remains clear and the limitations remain meaningful.
  
  The goal is not to make the science disappear.
  It is to make the science usable for the audience receiving it.`
          },
          {
            title: "A practical beginner comparison",
            body: `A specialist-facing version might sound like:
  
  “Candidate A remains the strongest current candidate because of the more specific phenotype fit and stronger mechanism coherence, although uneven alternate support still reduces technical confidence relative to the ideal.”
  
  A broader mixed-audience version might sound like:
  
  “Candidate A remains the strongest current candidate because it fits the case better than the alternatives, although a technical limitation still reduces confidence.”
  
  Both may be acceptable depending on context.
  
  The first gives more technical specificity.
  The second protects the main case message for a broader audience.
  
  So the learner should understand:
  audience-aware communication means deciding how much detail the audience needs to use the case well, while keeping the reasoning honest.`
          },
          {
            title: "Why audience-awareness is still not the same as role expansion",
            body: `A learner may accidentally think:
  • “If I know the audience well, I can be more definitive.”
  • “If I’m speaking to a clinical audience, I should make the statement sound more final.”
  • “If the audience wants clarity, I should remove the uncertainty.”
  
  That is unsafe.
  
  Audience-awareness does not mean:
  • overstating the evidence
  • removing meaningful limitations
  • or drifting into final sign-out language.
  
  So the learner should understand:
  the audience may change the style of communication, but it should not erase uncertainty or alter the role boundary.
  
  That will matter even more in the next lesson.`
          },
          {
            title: "A useful beginner contrast",
            body: `A weak audience-aware mindset is:
  • “I should say exactly the same thing in exactly the same way to everyone.”
  
  Another weak audience-aware mindset is:
  • “I should simplify until all the technical reasoning disappears.”
  
  A stronger approach is:
  • “I should keep the same case judgement, but change the wording and level of detail so this audience can understand and use it safely.”
  
  That is the practical heart of this lesson.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Good audience-aware communication keeps the core case reasoning consistent while adjusting the level of detail and wording so the intended audience can understand the leading candidate, the main limitation, and the current case position clearly.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes the same case summary for every context:
  
  “Candidate A remains the strongest candidate because of the phenotype fit, inheritance coherence, and read-level support profile, although technical confidence is reduced by end-of-read alternate clustering and incomplete segregation evidence.”
  
  Beginner question
  
  Why might that be reasonable in one setting but weaker in another?
  
  Good beginner answer
  
  Because the summary may work well for a more specialist audience that can use the technical and comparative detail directly. However, in a broader or mixed audience, the same wording may make the main case message harder to identify quickly. The issue is not that the statement is wrong. The issue is that the level and framing of detail may not match what that audience most needs in order to use the case safely. A broader audience may still need the same core reasoning, but in more clearly signposted language with less specialist phrasing.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “When I communicate a case, I should keep the core reasoning the same, but I may need to change the wording and level of technical detail depending on who needs to use the information. The goal is to make the case understandable and usable without hiding the main limitation or changing the actual judgement.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Audience-aware communication means keeping the case reasoning accurate while adjusting the wording, structure, and level of detail to suit the needs of the person receiving it."
          }
        ],
        quiz: [
          {
            question: `A learner says:
  “If the case summary is accurate, it should be suitable for any audience without adjustment.”
  Which response is best?`,
            options: [
              "Reasonable, because scientific accuracy should make audience differences largely irrelevant",
              "Incomplete, because a summary can be accurate but still poorly matched to what a particular audience needs to use it well",
              "Correct, because changing wording between audiences risks changing the case itself",
              "Sensible, because standardisation matters more than audience-awareness in genomics work"
            ],
            answerIndex: 1,
            explanation:
              "The case reasoning should stay consistent, but the communication may still need adjustment so the audience can identify and use the main message appropriately."
          },
          {
            question:
              "Which statement best reflects what should remain stable across different audiences?",
            options: [
              "The level of technical language and amount of evidence detail",
              "The order in which every part of the reasoning is presented",
              "The leading candidate, the main support for it, and the meaningful limitation that still affects confidence",
              "The exact wording of the case summary"
            ],
            answerIndex: 2,
            explanation:
              "Audience-aware communication should not change the core case judgement. What changes is usually the framing and detail, not the underlying reasoning."
          },
          {
            question: `A technically detailed summary is being read in a broader MDT setting.
  What is the main risk?`,
            options: [
              "The case will automatically sound less rigorous",
              "The summary may remain accurate but make the main case message harder to identify quickly",
              "The technical details will usually change the candidate ranking",
              "The audience will assume the case has no uncertainty"
            ],
            answerIndex: 1,
            explanation:
              "The issue is often not inaccuracy. It is that the main case position, limitation, or comparative reasoning may become harder for that audience to extract."
          },
          {
            question:
              "Which summary is most suitable for a broader mixed audience?",
            options: [
              "“Candidate B remains the strongest current candidate, although a technical limitation still reduces confidence.”",
              "“Candidate B remains the strongest current candidate because the alternate-support distribution is asymmetric and mapping-quality-related caution persists at the site level.”",
              "“Candidate B is probably the answer, despite some technical noise.”",
              "“Candidate B leads, and the detailed evidence can be ignored for now.”"
            ],
            answerIndex: 0,
            explanation:
              "This option keeps the main case message and the key limitation visible without relying on dense specialist phrasing or drifting into overconfident wording."
          },
          {
            question: `A learner says:
  “To make the case easier for a non-specialist audience, I removed the uncertainty and kept only the top candidate.”
  Which response is best?`,
            options: [
              "Reasonable, because simpler wording is usually safer for broader audiences",
              "Acceptable, if the technical details are documented elsewhere",
              "Incomplete, because audience-aware communication should simplify wording without removing meaningful uncertainty",
              "Correct, because broader audiences mainly need the conclusion rather than the limitations"
            ],
            answerIndex: 2,
            explanation:
              "Simplification is useful only if it preserves the important case logic, including meaningful limitations that still affect confidence."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Different audiences should receive different levels of certainty so the message stays useful",
              "Audience-aware communication means changing the wording and detail level while keeping the core case reasoning consistent",
              "Broader audiences should generally receive only the ranking, not the supporting logic",
              "Specialist audiences should usually receive every technical detail available from the workflow"
            ],
            answerIndex: 1,
            explanation:
              "That is the integrated lesson: audience-awareness changes the expression of the reasoning, not the underlying judgement or the visibility of meaningful limitations."
          }
        ]
      },
      {
        slug: "lesson-5",
        title: "Lesson 5: How do you communicate within role boundaries?",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How do I communicate useful case reasoning clearly and confidently without drifting beyond the limits of my role?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How do I communicate useful case reasoning clearly and confidently without drifting beyond the limits of my role?”
  
  This lesson follows audience-aware communication because once the learner understands how to adjust communication for different audiences, the next step is learning that useful communication still has to stay within scope.
  
  That matters because a learner can make two opposite mistakes:
  • being so cautious that the communication stops being useful
  • sounding so definitive that the communication starts to imply a final interpretive authority that is not appropriate at this stage.
  
  By this point in the curriculum, the learner already knows how to:
  • identify a leading candidate
  • explain why it currently leads
  • communicate uncertainty and limitations
  • adjust wording for different audiences.
  
  Now they need the next practical skill:
  how to say something strong enough to help downstream review, while still staying clearly inside the boundary of bioinformatic prioritisation and handoff.
  
  So the key shift in this lesson is:
  good role-aware communication is not weak communication; it is useful communication that does not claim more certainty, authority, or finality than the stage of work supports.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  Communicating within role boundaries means describing the strongest current candidate, the supporting reasoning, and the key limitations in a way that is useful for downstream review without presenting the case as though final interpretation is already complete.
  
  So the key beginner message is:
  the aim is to be clear and helpful without sounding like the whole diagnostic process has already been concluded.
  
  That is the core lesson.`
          },
          {
            title: "Why role boundaries matter in communication",
            body: `A learner may think:
  • “If I know which candidate is strongest, I should just say so directly.”
  • “Clear wording should sound decisive.”
  • “If I am too careful, the summary will sound weak.”
  
  That is understandable, but incomplete.
  
  In realistic clinical bioinformatics workflow, role boundaries matter because communication can otherwise blur the difference between:
  • prioritisation and final interpretation
  • case reasoning and formal sign-out
  • current strongest candidate and established diagnostic conclusion.
  
  If that distinction becomes blurred, the wording may make the case sound more settled than it really is.
  
  So the learner should understand:
  role boundaries matter because wording can imply a level of finality or authority that goes beyond the actual stage of work.
  
  That is a safety issue, not just a wording preference.`
          },
          {
            title: "Why staying within scope does not mean being vague",
            body: `A weak response to this lesson would be to think:
  • “I should never say anything definite.”
  • “I should avoid stating which candidate leads.”
  • “I should keep everything so open that I cannot overstep.”
  
  That is too weak.
  
  Staying within role boundaries does not mean avoiding judgement altogether.
  
  The learner can still say things like:
  • strongest current candidate
  • leading candidate in this case
  • best overall fit at present
  • remains ahead of the alternatives
  • should be carried forward for downstream review.
  
  Those phrases are useful because they communicate the current position clearly without pretending the entire process is finished.
  
  So the learner should understand:
  role-aware wording should still communicate a real judgement; it should just communicate the right kind of judgement for this stage.
  
  That is a major practical point.`
          },
          {
            title: "Why overconfident wording can overstep the role boundary",
            body: `Some phrases sound efficient but often go too far at this stage.
  
  For example:
  • “This is the diagnosis.”
  • “This variant is clearly causal.”
  • “This proves the cause of disease.”
  • “This is the answer.”
  • “This confirms the disorder.”
  
  These kinds of phrases may collapse the distinction between:
  • strong current candidate reasoning
  • and final formal interpretation.
  
  Even when the leading candidate is strong, wording like this can still overstate what the learner is doing within the workflow.
  
  So the learner should understand:
  overconfident wording is risky not only because it sounds strong, but because it can imply that downstream review, interpretation, or formal conclusion is no longer needed.
  
  That is exactly the kind of boundary drift this lesson is designed to prevent.`
          },
          {
            title: "Why under-confident wording can also fail",
            body: `The opposite problem is wording that becomes too weak to help anyone.
  
  For example:
  • “This candidate may possibly be worth thinking about.”
  • “There might perhaps be some relevance here.”
  • “This could maybe be discussed.”
  • “No real position can be taken at present.”
  
  Sometimes that caution may be appropriate.
  But often it is weaker than the actual case reasoning.
  
  If the learner has enough evidence to say that one candidate currently leads, then avoiding that statement entirely can make the handoff less useful than it should be.
  
  So the learner should understand:
  under-confident wording can also fail, because staying in scope does not require hiding the current best judgement.
  
  That is why this lesson is about balance, not just restraint.`
          },
          {
            title: "What role-appropriate wording usually sounds like",
            body: `At this stage of case work, safer and more useful wording often sounds like:
  • currently the strongest candidate
  • leading candidate for downstream review
  • strongest overall fit in this case at present
  • remains the most plausible current candidate
  • should remain prioritised for further review
  • confidence is limited by [main caveat]
  • another candidate remains relevant.
  
  These phrases work because they:
  • identify the current position
  • make the reasoning usable
  • leave room for downstream review
  • avoid implying final sign-out.
  
  So the learner should understand:
  role-appropriate wording is usually specific about the current position while still making it clear that the case is being handed forward rather than closed.
  
  That is the communication balance the learner needs to develop.`
          },
          {
            title: "Why role boundaries should remain visible even in strong cases",
            body: `A learner may think:
  • “If the case is especially strong, I can drop the cautious language.”
  • “If there are no meaningful alternatives, stronger wording is fine.”
  • “If I am sure, the role boundary matters less.”
  
  That is unsafe reasoning.
  
  A strong case may justify stronger prioritisation language, but it still does not automatically erase the distinction between:
  • identifying the strongest current candidate
  • and issuing a final formal clinical conclusion.
  
  So the learner should understand:
  stronger evidence may strengthen the handoff, but it does not remove the need for role-aware wording.
  
  This is important because boundary drift often happens most easily in strong-looking cases.`
          },
          {
            title: "When explicit escalation language becomes important",
            body: `Sometimes the case is not just uncertain, but uncertain enough that the wording should actively signal the need for review or escalation.
  
  Examples might include:
  • the leading candidate has a meaningful technical concern
  • there is no clearly dominant candidate
  • family information is too incomplete to support the apparent model strongly
  • phenotype fit is plausible but weakly specific
  • the shortlist remains genuinely competitive.
  
  In those cases, good role-aware communication may need to say something like:
  • should be reviewed with caution
  • remains the strongest current candidate, but confidence is limited
  • another candidate remains relevant in downstream review
  • the current prioritisation should be interpreted in light of the limitation above.
  
  So the learner should understand:
  role boundaries are not only about avoiding overstatement; they are also about recognising when the case needs clearer signalling of uncertainty and downstream review.
  
  That is part of safe communication.`
          },
          {
            title: "Why audience-awareness does not cancel role-awareness",
            body: `The previous lesson taught that communication should be adapted for different audiences.
  
  A learner might wrongly take that to mean:
  • “If the audience wants clarity, I should sound more final.”
  • “If the audience is clinical, I should simplify by removing uncertainty.”
  • “If the audience is senior, I can use stronger diagnostic-sounding wording.”
  
  That is not safe.
  
  Audience-aware communication can change:
  • structure
  • phrasing
  • technical detail
  • emphasis.
  
  But it should not change:
  • the actual level of certainty
  • the visibility of meaningful limitation
  • the fact that the communication remains a handoff rather than a final sign-out.
  
  So the learner should understand:
  audience-awareness changes how the case is expressed, but role-awareness still limits how far the wording should go.
  
  That distinction matters a great deal in practice.`
          },
          {
            title: "A practical beginner contrast",
            body: `A weak overstepping summary is:
  • “Candidate A is clearly the diagnosis.”
  
  A weak underpowered summary is:
  • “Candidate A might possibly be worth mentioning.”
  
  A stronger role-aware summary is:
  • “Candidate A is currently the strongest candidate because it has the best overall phenotype and inheritance fit in this case, although technical confidence is reduced by uneven support. It should remain prioritised for downstream review.”
  
  That version works better because it:
  • communicates a real judgement
  • explains why the candidate leads
  • keeps the main caveat visible
  • and stays inside the role boundary.
  
  So the learner should understand:
  good role-aware communication should sound useful, proportionate, and clearly incomplete in the right way — incomplete because it is a handoff to downstream review, not because it is indecisive.
  
  That is the practical heart of this lesson.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  Communicating within role boundaries means stating the strongest current candidate and its key reasoning clearly enough to guide downstream review, while avoiding wording that makes the case sound like final interpretation is already complete.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner writes:
  
  “Candidate B is clearly causal and confirms the diagnosis, although some technical caution remains.”
  
  Beginner question
  
  Why is that unsafe even though a caveat is included?
  
  Good beginner answer
  
  Because the caveat does not fully correct the strength of the main claim. The wording still presents the case as though formal interpretation is already complete by saying the candidate is clearly causal and confirms the diagnosis. A stronger role-aware summary would still describe Candidate B as the strongest current candidate, explain why it leads, and keep the technical caution visible, but it would stop short of sounding like final clinical sign-out. The issue is therefore not only whether uncertainty was mentioned. It is whether the wording stayed within the appropriate scope of the handoff.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “When I communicate a case, I should be clear enough to say which candidate currently leads and why, but I should not make it sound as though final interpretation is already complete. Staying within role boundaries means being useful without overclaiming.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "Communicating within role boundaries means describing the strongest current candidate, the supporting reasoning, and the key limitations in a way that is useful for downstream review without presenting the case as though final interpretation is already complete."
          }
        ],
        quiz: [
          {
            question: `A learner says:
  “If I want the handoff to be useful, I should write it as decisively as possible.”
  Which response is best?`,
            options: [
              "Reasonable, because decisive wording usually prevents confusion in downstream review",
              "Incomplete, because useful wording should be clear and proportionate without implying final interpretation is already complete",
              "Correct, because over-cautious wording is the main communication risk in genomics",
              "Sensible, because the strongest current candidate should usually be described as the answer"
            ],
            answerIndex: 1,
            explanation:
              "The problem is not that decisiveness is always wrong. The problem is that usefulness does not require final-sounding language, and overly decisive wording can overstep the role boundary."
          },
          {
            question: "Which summary is most role-appropriate?",
            options: [
              "“Candidate A is clearly causal and should be treated as the confirmed explanation of the case.”",
              "“Candidate A remains the strongest current candidate and should stay prioritised for downstream review, although incomplete family data still limits confidence.”",
              "“Candidate A may have some relevance, but no meaningful position should be taken at this stage.”",
              "“Candidate A is probably the diagnosis, despite a few residual caveats.”"
            ],
            answerIndex: 1,
            explanation:
              "This is the strongest balanced option. It communicates a real current judgement, keeps the limitation visible, and avoids sounding like final sign-out."
          },
          {
            question:
              "Why can under-confident wording also be a problem?",
            options: [
              "Because it makes the analyst sound less experienced than the rest of the team",
              "Because staying within scope usually requires avoiding any clear ranking language",
              "Because it may hide the current best judgement even when the case evidence supports a leading candidate",
              "Because downstream users generally prefer stronger wording regardless of uncertainty"
            ],
            answerIndex: 2,
            explanation:
              "This lesson is about balance. Avoiding overstatement does not mean avoiding useful judgement when the evidence does support a current leader."
          },
          {
            question: `A learner says:
  “If the case is very strong, I do not need boundary-aware wording because the result is obvious.”
  Which response is best?`,
            options: [
              "Mostly true, because very strong cases justify more direct diagnostic language",
              "Incomplete, because stronger evidence may strengthen the handoff but does not remove the distinction between prioritisation and final interpretation",
              "Correct, because role boundaries mainly matter in uncertain cases",
              "Reasonable, because strong cases need less explanation overall"
            ],
            answerIndex: 1,
            explanation:
              "Strong cases still need role-aware wording. The evidence may justify a stronger prioritisation statement, but not the disappearance of the boundary itself."
          },
          {
            question:
              "Which statement best reflects how audience-awareness and role-awareness relate to each other?",
            options: [
              "Audience-awareness can justify more final wording if the audience prefers direct conclusions",
              "Audience-awareness mainly matters for technical cases, while role-awareness matters only for clinical ones",
              "Audience-awareness changes the wording and detail level, but role-awareness still limits how final the communication should sound",
              "Role-awareness is less important once a broader MDT audience is involved"
            ],
            answerIndex: 2,
            explanation:
              "The audience may change how the case is expressed, but it should not change the level of certainty or the visibility of the boundary between current prioritisation and final interpretation."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Role-aware communication mainly means sounding cautious enough that no one can accuse the analyst of overreach",
              "Role-aware communication means avoiding all conclusion-like language until formal interpretation is complete",
              "Role-aware communication means stating the strongest current case position clearly while avoiding wording that sounds like the whole interpretive process is finished",
              "Role-aware communication matters mainly when the leading candidate has major technical weakness"
            ],
            answerIndex: 2,
            explanation:
              "That is the integrated lesson: the communication should remain useful and judgment-bearing, but should not sound like final clinical sign-out."
          }
        ]
      },
      {
        slug: "lesson-6",
        title: "Lesson 6: How communication fits into real clinical bioinformatics workflow",
        goal:
          "By the end of this lesson, the learner should be able to answer: “How does communication fit into real clinical bioinformatics workflow, and why is it part of safe case handling rather than something added at the end?”",
        screens: [
          {
            title: "Lesson goal",
            body: `By the end of this lesson, the learner should be able to answer:
  
  “How does communication fit into real clinical bioinformatics workflow, and why is it part of safe case handling rather than something added at the end?”
  
  This lesson finishes Module 23 by bringing the previous communication lessons back into one workflow view.
  
  The learner has now worked through:
  • why communication matters
  • how to explain the leading candidate clearly
  • how to communicate uncertainty and limitations
  • how communication changes for different audiences
  • how to communicate within role boundaries.
  
  These are not separate presentation skills. In practice, they form part of how a case moves safely from internal reasoning to downstream use.
  
  So the key shift in this lesson is:
  communication is not the final polish on completed analysis; it is one of the steps that makes the analysis usable in real workflow.
  
  That matters because a case is not really ready for handoff just because the analyst has reached an internal view. It becomes ready when that view has been expressed clearly enough for others to understand:
  • which candidate currently leads
  • why it leads
  • what limitation matters most
  • what uncertainty remains
  • and how the case should be understood at this stage.`
          },
          {
            title: "The central idea",
            body: `A good beginner summary is:
  
  In real clinical bioinformatics workflow, communication is the step that turns internal case reasoning into a structured, usable, and limitation-aware handoff for downstream review.
  
  So the key beginner message is:
  communication is part of workflow quality because it helps the next person understand what the current case position is and what still limits confidence.
  
  That is the core lesson.`
          },
          {
            title: "Why case reasoning is not complete until it can be handed forward",
            body: `A learner may think:
  • “Once I know which candidate is strongest, the main work is done.”
  • “The communication part is mostly just recording the result.”
  • “The important reasoning has already happened before the handoff.”
  
  That is incomplete.
  
  In realistic workflow, a case is not fully usable just because the analyst has reached a private conclusion. It still needs to be handed forward in a form that another professional can follow and use appropriately.
  
  If that does not happen, the workflow can weaken in practice because:
  • the leading-candidate logic may not be visible
  • the main caveat may be missed
  • an important alternative may disappear from view
  • the wording may sound more final than intended
  • or the next reviewer may have to reconstruct the analyst’s reasoning from fragments.
  
  So the learner should understand:
  a case is not fully finished at the workflow level until the reasoning has been communicated clearly enough to support downstream use.
  
  That is one of the biggest practical messages of this module.`
          },
          {
            title: "Why communication sits after reasoning, but is still part of reasoning workflow",
            body: `Communication does not replace analysis.
  
  The analyst still has to:
  • understand the case context
  • compare candidates
  • identify the strongest current candidate
  • judge the main limitation
  • and decide what remains uncertain.
  
  But once that has been done, communication becomes the step that carries that reasoning safely into the next part of the workflow.
  
  So the learner should understand:
  communication is downstream of the analysis, but still part of the same workflow because it determines how the analysis is actually used.
  
  This helps avoid two different mistakes:
  • treating communication as unrelated to technical work
  • treating communication as though it were the same thing as technical reasoning.
  
  It is not separate, and it is not identical.
  It is a linked workflow step.`
          },
          {
            title: "Why poor communication can damage otherwise good workflow",
            body: `A case may be reasoned through carefully and still become less safe in practice if the communication is poor.
  
  For example, workflow quality may weaken if the handoff:
  • names the leading candidate but not the reason it leads
  • hides the most important limitation
  • fails to show that another candidate remains relevant
  • uses technical language that obscures the main case position
  • or sounds like final interpretation when it is really a prioritisation handoff.
  
  So the learner should understand:
  good analysis and good workflow are not fully aligned if the communication step is weak.
  
  That is why communication belongs in a workflow module mindset, not only in a writing-skills mindset.`
          },
          {
            title: "Why communication supports review, not just record-keeping",
            body: `A weak view of communication is:
  • “I am just recording what I found.”
  
  A stronger workflow view is:
  • “I am making my current reasoning visible so that someone else can review, interpret, and use it properly.”
  
  That difference matters.
  
  Good workflow communication does more than preserve a result.
  It supports review by making visible:
  • the current candidate ranking
  • the main supporting logic
  • the most important caveat
  • the remaining uncertainty
  • and the current limits of the conclusion.
  
  So the learner should understand:
  communication is not only a record of the case position; it is also a tool that helps downstream review happen well.
  
  That is especially important in rare-disease work, where realistic cases often contain unresolved complexity.`
          },
          {
            title: "Why communication should make the current case position easy to find",
            body: `A handoff can fail even when all the right ideas are present if the main point is too hard to extract.
  
  For example, a summary may contain:
  • phenotype reasoning
  • technical detail
  • inheritance context
  • alternative candidate discussion
  • and role-aware caution
  
  but still not make it easy to tell:
  • which candidate currently leads
  • why it leads
  • and what limitation matters most.
  
  So the learner should understand:
  workflow-aware communication should make the current position of the case easy to locate, not just technically possible to reconstruct.
  
  That does not mean oversimplifying the case.
  It means structuring the handoff so that the key message is visible.`
          },
          {
            title: "Why communication is often iterative inside workflow",
            body: `A learner may imagine workflow as:
  • do the analysis
  • write the summary
  • move on.
  
  But realistic case work is often more iterative than that.
  
  For example:
  • while trying to explain the leading candidate, the learner may realise the comparative reasoning is still unclear
  • while trying to state the main caveat, they may realise two limitations are competing for attention
  • while adapting the wording for audience, they may realise the main claim is too vague or too strong
  • while writing the handoff, they may see that the case position needs to be refined.
  
  So the learner should understand:
  communication is often part of the process that sharpens the case reasoning, not only the process that reports it.
  
  That is a very realistic workflow lesson.`
          },
          {
            title: "Why communication links directly to the next stage of training",
            body: `This module sits late in the curriculum for a reason.
  
  Earlier modules taught the learner how to:
  • understand the evidence
  • assess technical confidence
  • compare candidates
  • and explain the strongest current candidate.
  
  This module then teaches how to communicate that safely in practice.
  
  That prepares the learner for the next steps in the curriculum, where they will need to think more about:
  • autonomy
  • escalation
  • safe independent working
  • and service-style readiness.
  
  So the learner should understand:
  communication is one of the main bridges between case reasoning and practical clinical bioinformatics working.
  
  That is why it is not a side topic.`
          },
          {
            title: "A practical workflow view",
            body: `A safe beginner workflow summary is:
  1. understand the case context
  2. use phenotype, inheritance, and technical evidence to compare candidates
  3. identify the strongest current candidate
  4. identify the most important limitation or remaining uncertainty
  5. communicate the case position clearly enough for downstream use
  6. hand the case forward in role-appropriate language.
  
  That final communication step includes:
  • making the leading candidate visible
  • making the reason for the lead visible
  • keeping the main caveat visible
  • and avoiding overclaiming.
  
  So the learner should understand:
  workflow communication is the step that turns internal analysis into usable case handling.
  
  That is the cleanest way to integrate the module.`
          },
          {
            title: "A useful beginner contrast",
            body: `A weak workflow mindset is:
  • “I analysed the case, chose the best candidate, and then wrote a short summary.”
  
  A stronger workflow mindset is:
  • “I analysed the case, identified the strongest current candidate, clarified the main limitation, and communicated the case position in a way that could be reviewed and used safely downstream.”
  
  The second version is stronger because it treats communication as part of safe case completion, not an afterthought.
  
  So the learner should understand:
  the workflow is not fully complete when the analyst reaches a conclusion in private; it is complete when that conclusion has been turned into a usable, proportionate handoff.
  
  That is the practical heart of this lesson.`
          },
          {
            title: "The one-sentence takeaway",
            body: `If the learner remembers one sentence from this lesson, it should be:
  
  In real clinical bioinformatics workflow, communication is the step that turns case reasoning into a clear, limitation-aware handoff so the current strongest candidate and its remaining uncertainty can be reviewed and used safely downstream.
  
  That is the core lesson.`
          },
          {
            title: "Worked example",
            body: `Scenario
  
  A learner says:
  
  “Communication happens after the analysis, so I do not see it as part of the workflow itself.”
  
  Beginner question
  
  Why is that incomplete?
  
  Good beginner answer
  
  Because although communication follows the analytical reasoning, it is still part of the same workflow. The case is not truly ready for downstream use until the leading candidate, the main support for it, and the most important limitation have been expressed clearly enough for another professional to understand the current position of the case. If that step is weak, the workflow is weaker in practice even if the internal reasoning was good. So communication is not outside the workflow. It is the stage that makes the reasoning usable within the workflow.`
          },
          {
            title: "Lesson summary",
            body: `The learner has understood this lesson if they can say something like:
  
  “In real workflow, communication is not just the final write-up. It is the step that makes my current case reasoning usable for someone else by showing which candidate leads, why it leads, and what limitation still affects confidence.”`
          }
        ],
        sections: [
          {
            heading: "The central idea",
            body:
              "In real clinical bioinformatics workflow, communication is the step that turns internal case reasoning into a structured, usable, and limitation-aware handoff for downstream review."
          }
        ],
        quiz: [
          {
            question: `A learner says:
  “Once I have identified the strongest current candidate, communication is mainly just documenting the result.”
  Which response is best?`,
            options: [
              "Fair enough, because the main workflow value comes from the ranking rather than the wording",
              "Incomplete, because communication helps make the current case position understandable and usable in downstream review",
              "Correct, because review depends more on evidence than on how the evidence is summarised",
              "Reasonable, because communication quality mainly matters when the case is especially uncertain"
            ],
            answerIndex: 1,
            explanation:
              "The ranking matters, but the workflow is still weakened if the reasoning cannot be understood and used clearly downstream. Communication is therefore more than simple record-keeping."
          },
          {
            question:
              "What is the main reason communication belongs inside workflow thinking?",
            options: [
              "Because it replaces the need for detailed candidate comparison",
              "Because it turns internal reasoning into a usable handoff for downstream review",
              "Because it makes technical evidence less important in mixed-audience settings",
              "Because it allows the analyst to be more definitive about the result"
            ],
            answerIndex: 1,
            explanation:
              "This is the core workflow lesson of Module 23. Communication is the step that makes the case usable beyond the analyst’s own internal reasoning."
          },
          {
            question: `A handoff includes the main evidence and the main caveat, but it is still hard to tell which candidate currently leads.
  What is the strongest criticism?`,
            options: [
              "It is too detailed, because only the rank order should normally be communicated",
              "It is incomplete, because the current case position is not easy to identify from the handoff",
              "It is unsafe, because caveats should not be discussed before the candidate ranking is accepted",
              "It is weak, because communication should avoid comparative language in case workflow"
            ],
            answerIndex: 1,
            explanation:
              "A workflow-aware handoff should make the current position of the case easy to find, not simply bury the logic somewhere in the summary."
          },
          {
            question: `A learner notices while drafting the summary that the main limitation is still unclear.
  Which statement is best?`,
            options: [
              "That usually means the summary should be delayed until someone else interprets the case",
              "That suggests communication is helping expose a weakness or ambiguity in the current reasoning",
              "That is mostly a writing issue rather than a workflow issue",
              "That means the candidate ranking should usually be left unstated"
            ],
            answerIndex: 1,
            explanation:
              "Communication can reveal where the reasoning still needs sharpening. In that sense, it can be part of refining the workflow output, not just reporting it."
          },
          {
            question:
              "Which summary best reflects workflow-aware communication?",
            options: [
              "“Candidate B is top, and the rest of the reasoning can be reviewed if needed.”",
              "“Candidate B is currently the strongest candidate because it has the best overall fit in this case, although technical confidence remains limited by uneven support.”",
              "“Candidate B is probably the answer, but formal interpretation will follow.”",
              "“Candidate B appears relevant, although no clear position should be taken yet.”"
            ],
            answerIndex: 1,
            explanation:
              "This option gives the current position, the main support, and the key limitation in a form that is usable for downstream review without overclaiming."
          },
          {
            question: "What is the safest overall message of this lesson?",
            options: [
              "Communication is mainly the final presentation layer added after the real case work is complete",
              "Communication matters in workflow mainly when the case contains unusually high uncertainty",
              "Communication is part of workflow because it makes the current case reasoning visible, usable, and reviewable downstream",
              "Communication and case reasoning should usually be treated as fully separate tasks"
            ],
            answerIndex: 2,
            explanation:
              "That is the integrated message of the lesson: communication is a workflow step because it converts internal analysis into safe downstream handoff."
          }
        ]
      }
    ]
  };